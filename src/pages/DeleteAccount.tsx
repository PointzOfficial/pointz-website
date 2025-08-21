import bluebackImage from "@/assets/blueback.png";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { usePageTitle } from "@/hooks/use-page-title";
import { useState } from "react";

const DeleteAccount = () => {
  usePageTitle("Delete Account - Pointz | Account Deletion Request");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("reason", reason || "No reason provided");
      formData.append("subject", "Account Deletion Request - Pointz App");
      formData.append("_captcha", "false");
      formData.append(
        "message",
        `Account deletion request received from: ${email}\n\nReason: ${
          reason || "No reason provided"
        }\n\nTimestamp: ${new Date().toISOString()}`
      );

      const response = await fetch("https://formsubmit.co/hi@bikepointz.com", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error("Failed to submit request");
      }
    } catch (error) {
      console.error("Error submitting deletion request:", error);
      alert(
        "There was an error submitting your request. Please try again or contact support directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />

        <main>
          <div
            className="relative min-h-[40vh] bg-cover bg-center bg-no-repeat flex items-center justify-center"
            style={{ backgroundImage: `url(${bluebackImage})` }}
          >
            <div className="absolute inset-0 bg-primary/10"></div>
            <div className="relative z-10 text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Account Deletion Request
              </h1>
              <div className="w-16 h-1 bg-white mx-auto rounded-full mb-8"></div>
            </div>
          </div>

          <div className="container mx-auto px-4 py-16">
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 mb-8">
                <div className="text-green-600 text-6xl mb-4">✓</div>
                <h2 className="text-2xl font-bold text-green-800 mb-4">
                  Request Submitted Successfully
                </h2>
                <p className="text-green-700 mb-6">
                  Your account deletion request has been submitted. We'll
                  process your request within 30 days as required by data
                  protection regulations.
                </p>
                <div className="bg-white rounded-lg p-6 text-left">
                  <h3 className="font-semibold text-gray-800 mb-3">
                    What happens next:
                  </h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• We'll review your request within 24-48 hours</li>
                    <li>• You'll receive a confirmation email</li>
                    <li>
                      • Your account will be permanently deleted within 30 days
                    </li>
                    <li>• All your data will be removed from our systems</li>
                  </ul>
                </div>
              </div>

              <Button
                onClick={() => (window.location.href = "/")}
                variant="bike"
                size="lg"
              >
                Return to Home
              </Button>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

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
              Delete Account
            </h1>
            <div className="w-16 h-1 bg-white mx-auto rounded-full mb-8"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto">
            {/* Warning Section */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
              <div className="flex items-start">
                <div className="text-red-600 text-2xl mr-3">⚠️</div>
                <div>
                  <h2 className="text-xl font-bold text-red-800 mb-2">
                    Important: This action is irreversible
                  </h2>
                  <p className="text-red-700">
                    Deleting your account will permanently remove all your data,
                    including your profile, saved routes, ratings, and
                    preferences. This action cannot be undone.
                  </p>
                </div>
              </div>
            </div>

            {/* Deletion Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Account Deletion Request
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter the email associated with your account"
                  />
                </div>

                <div>
                  <label
                    htmlFor="reason"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Reason for Deletion (Optional)
                  </label>
                  <textarea
                    id="reason"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Please let us know why you're leaving. Your feedback helps us improve."
                  />
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-3">
                    What will be deleted:
                  </h3>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Your user profile and account information</li>
                    <li>• All saved routes and favorites</li>
                    <li>• Your ratings and reviews</li>
                    <li>• Usage history and preferences</li>
                    <li>• Any associated data and analytics</li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    type="submit"
                    variant="destructive"
                    size="lg"
                    disabled={isSubmitting || !email}
                    className="flex-1"
                  >
                    {isSubmitting
                      ? "Submitting..."
                      : "Request Account Deletion"}
                  </Button>

                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    onClick={() => (window.location.href = "/")}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </div>

            {/* Additional Information */}
            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-semibold text-blue-800 mb-3">Need help?</h3>
              <p className="text-blue-700 mb-4">
                If you're experiencing issues with the app or have concerns,
                we'd love to help before you go.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => (window.location.href = "/contactus")}
                >
                  Contact Support
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => (window.location.href = "/faqs-pointz-plus")}
                >
                  View FAQs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DeleteAccount;
