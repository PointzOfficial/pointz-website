import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface CookiePreferencesProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CookiePreferences = ({ isOpen, onClose }: CookiePreferencesProps) => {
  const [preferences, setPreferences] = useState({
    necessary: true, // Always on
    performance: true,
    advertising: true
  });

  const handleSave = () => {
    // Save preferences to localStorage or send to server
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    onClose();
  };

  const handleAcceptAll = () => {
    setPreferences({
      necessary: true,
      performance: true,
      advertising: true
    });
    localStorage.setItem('cookiePreferences', JSON.stringify({
      necessary: true,
      performance: true,
      advertising: true
    }));
    onClose();
  };

  const handleDecline = () => {
    setPreferences({
      necessary: true, // Always required
      performance: false,
      advertising: false
    });
    localStorage.setItem('cookiePreferences', JSON.stringify({
      necessary: true,
      performance: false,
      advertising: false
    }));
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900 mb-2">
            Cookie Preferences
          </DialogTitle>
          <p className="text-gray-600 text-sm">
            Manage your cookie settings and preferences
          </p>
        </DialogHeader>

        <div className="space-y-6">
          {/* Necessary Cookies */}
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="font-semibold text-gray-900">Necessary</h3>
                <p className="text-sm text-gray-500">Always on</p>
              </div>
              <Switch checked={preferences.necessary} disabled />
            </div>
            <p className="text-sm text-gray-600">
              Required to enable core site functionality and to remember user preferences and choices, 
              such as language preferences or customized settings.
            </p>
          </div>

          {/* Performance and Analytics */}
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="font-semibold text-gray-900">Performance and Analytics</h3>
                <p className="text-sm text-gray-500">On</p>
              </div>
              <Switch 
                checked={preferences.performance} 
                onCheckedChange={(checked) => 
                  setPreferences(prev => ({ ...prev, performance: checked }))
                }
              />
            </div>
            <p className="text-sm text-gray-600">
              These cookies provide quantitative measures of website visitors. With the usage of these 
              cookies we are able to count visits and traffic sources to improve the performance of our site.
            </p>
          </div>

          {/* Advertising */}
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="font-semibold text-gray-900">Advertising</h3>
                <p className="text-sm text-gray-500">On</p>
              </div>
              <Switch 
                checked={preferences.advertising} 
                onCheckedChange={(checked) => 
                  setPreferences(prev => ({ ...prev, advertising: checked }))
                }
              />
            </div>
            <p className="text-sm text-gray-600">
              These cookies are used by advertising companies to serve ads that are relevant to your interests.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button 
              onClick={handleSave}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
            >
              Save Preferences
            </Button>
            <Button 
              onClick={handleDecline}
              variant="outline"
              className="flex-1"
            >
              Decline
            </Button>
            <Button 
              onClick={handleAcceptAll}
              variant="outline"
              className="flex-1"
            >
              Accept
            </Button>
          </div>

          {/* Footer Text */}
          <div className="text-xs text-gray-500 pt-4 border-t border-gray-200">
            <p>
              By using this website, you agree to our use of cookies. We use cookies to provide you 
              with a great experience and to help our website run effectively.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}; 