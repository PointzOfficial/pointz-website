import bluebackImage from "@/assets/blueback.png";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { usePageTitle } from "@/hooks/use-page-title";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const formatPromoCode = (text = "") => {
  // Remove any non-alphanumeric characters
  const alphanumericText = text.replace(/\W/g, "");
  // Check for letters
  if (checkLetters(alphanumericText)) {
    return alphanumericText;
  }
  // Insert hyphens every 4 characters
  let formattedText = "";
  for (let i = 0; i < alphanumericText?.length; i++) {
    if (i > 0 && i % 4 === 0) {
      formattedText += "-";
    }
    formattedText += alphanumericText[i];
  }
  return formattedText;
};

function formatNumber(numberString: string) {
  const groups = numberString.match(/.{1,4}/g);
  const formattedNumber = groups?.join("-");
  return formattedNumber;
}

function checkLetters(str = "") {
  const regExp = /[a-zA-Z]/g;
  return regExp.test(str);
}

const PromoCode = () => {
  usePageTitle("Enter Promo Code - Pointz | Building Better Bike Routes");

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [idToken, setIdToken] = useState<string>("");
  const [tokenExpiration, setTokenExpiration] = useState<string>("");
  const [promoCode, setPromoCode] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  useEffect(() => {
    // Extract idTokenResult and idTokenResultExpirationTime from URL parameters
    const idTokenResult = searchParams.get("idTokenResult");
    const idTokenResultExpirationTime = searchParams.get(
      "idTokenResultExpirationTime"
    );

    if (idTokenResult) {
      setIdToken(idTokenResult);
    }

    if (idTokenResultExpirationTime) {
      setTokenExpiration(idTokenResultExpirationTime);
    }

    // Clear URL parameters after extracting the data
    if (idTokenResult || idTokenResultExpirationTime) {
      // Use navigate to replace the current URL without the parameters
      navigate("/promo-code", { replace: true });
    }
  }, [searchParams, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return; // Prevent multiple submissions

    redeemCode();
  };

  const openPointzApp = () => {
    const appUrl = "pointz://stripe/payment/success";

    // Method 1: Try window.location.href
    try {
      window.location.href = appUrl;
    } catch {
      console.log("Method 1 failed, trying method 2");
    }

    // Method 2: Try creating a hidden link and clicking it
    try {
      const link = document.createElement("a");
      link.href = appUrl;
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch {
      console.log("Method 2 failed, trying method 3");
    }
  };

  const redeemCode = async () => {
    setIsLoading(true);
    setSubmitStatus("idle");
    try {
      const alphanumericText = promoCode.replace(/\W/g, "");
      let code = promoCode;

      if (checkLetters(alphanumericText)) {
        code = promoCode?.toUpperCase();
      } else {
        if (!(promoCode?.length == 16 || promoCode?.length == 19)) {
          alert("Invalid Promo Code");
          setIsLoading(false);
          return;
        }

        if (promoCode?.length == 16) {
          code = formatNumber(promoCode || "") ?? "";
        }
      }

      const response = await fetch(
        "https://prod-pointz.ddns.net:8443/web/redeem_code?code=" + code,
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + idToken,
            "X-API-KEY": "d0b36abf-5548-4726-b2fb-b8c374722f2e",
          },
          redirect: "follow",
        }
      );
      const json = await response.json();
      if (json?.isPlusUser) {
        setSubmitStatus("success");
        setTimeout(() => {
          openPointzApp();
        }, 1500);
      } else {
        setSubmitStatus("error");
      }
      return;
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");

      // Reset error status after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePromoChange = (text: string) => {
    setPromoCode(formatPromoCode(text));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section with Blue Background */}
        <div
          className="relative min-h-[40vh] bg-cover bg-center bg-no-repeat flex items-center justify-center"
          style={{ backgroundImage: `url(${bluebackImage})` }}
        >
          <div className="absolute inset-0 bg-primary/10"></div>
          <div className="relative z-10 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Enter Promo Code
            </h1>
            <div className="w-16 h-1 bg-white mx-auto rounded-full mb-8"></div>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Unlock exclusive benefits with your promo code
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-lg shadow-bike-soft p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="promoCode"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Promo Code
                  </label>
                  <input
                    type="text"
                    id="promoCode"
                    value={promoCode}
                    onChange={(e) => handlePromoChange(e.target.value)}
                    placeholder="Enter your promo code"
                    className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  variant="bike"
                  size="lg"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Processing...
                    </div>
                  ) : (
                    "Apply Promo Code"
                  )}
                </Button>
              </form>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-md">
                  <div className="flex items-center gap-2 text-green-800">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="font-medium">
                      Promo code applied successfully!
                    </span>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
                  <div className="flex items-center gap-2 text-red-800">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="font-medium">
                      Failed to apply promo code. Please try again.
                    </span>
                  </div>
                </div>
              )}

              {/* Debug info - remove in production */}
              {process.env.NODE_ENV === "development" && (
                <div className="mt-8 p-4 bg-muted rounded-md text-sm">
                  <h3 className="font-medium mb-2">Debug Info:</h3>
                  <p>
                    <strong>ID Token:</strong>{" "}
                    {idToken ? "Present" : "Not found"}
                  </p>
                  <p>
                    <strong>Expiration:</strong>{" "}
                    {tokenExpiration || "Not found"}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PromoCode;
