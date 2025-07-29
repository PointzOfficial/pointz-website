import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CookiePreferences } from "./CookiePreferences";

export const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieChoice = localStorage.getItem('cookiePreferences');
    if (!cookieChoice) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiePreferences', JSON.stringify({
      necessary: true,
      performance: true,
      advertising: true
    }));
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookiePreferences', JSON.stringify({
      necessary: true,
      performance: false,
      advertising: false
    }));
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <p className="text-sm text-gray-700">
                By using this website, you agree to our use of cookies. We use cookies to provide you 
                with a great experience and to help our website run effectively.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Button 
                onClick={() => setShowPreferences(true)}
                variant="outline"
                size="sm"
                className="text-xs"
              >
                Cookie Preferences
              </Button>
              <Button 
                onClick={handleDecline}
                variant="outline"
                size="sm"
                className="text-xs"
              >
                Decline
              </Button>
              <Button 
                onClick={handleAccept}
                size="sm"
                className="text-xs bg-blue-600 hover:bg-blue-700 text-white"
              >
                Accept
              </Button>
            </div>
          </div>
        </div>
      </div>

      <CookiePreferences 
        isOpen={showPreferences} 
        onClose={() => setShowPreferences(false)} 
      />
    </>
  );
}; 