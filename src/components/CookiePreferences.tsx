import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";

interface CookiePreferencesProps {
  isOpen: boolean;
  onClose: () => void;
  onHideBanner: () => void;
}

export const CookiePreferences = ({ isOpen, onClose, onHideBanner }: CookiePreferencesProps) => {
  const [preferences, setPreferences] = useState({
    necessary: true, // Always on
    performance: true,
    advertising: true
  });

  const handleSave = () => {
    // Save preferences to localStorage or send to server
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    onClose();
    onHideBanner();
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
    onHideBanner();
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
    onHideBanner();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-gray-900 mb-3">
            Cookie Preferences
          </DialogTitle>
          <p className="text-gray-600 text-base leading-relaxed">
            We use cookies to enhance your browsing experience and analyze our traffic. 
            You can customize your preferences below.
          </p>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          {/* Necessary Cookies */}
          <div className="border border-gray-200 rounded-xl p-6 bg-gray-50/50">
            <div className="flex items-center justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Necessary Cookies</h3>
                <p className="text-sm text-gray-500 font-medium">Always Active</p>
              </div>
              <Switch checked={preferences.necessary} disabled className="ml-4" />
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              These cookies are essential for the website to function properly. They enable core 
              functionality such as security, network management, and accessibility. You may disable 
              these by changing your browser settings, but this may affect how the website functions.
            </p>
          </div>

          {/* Performance and Analytics */}
          <div className="border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Performance & Analytics</h3>
                <p className="text-sm text-gray-500 font-medium">
                  {preferences.performance ? 'Active' : 'Inactive'}
                </p>
              </div>
              <Switch 
                checked={preferences.performance} 
                onCheckedChange={(checked) => 
                  setPreferences(prev => ({ ...prev, performance: checked }))
                }
                className="ml-4"
              />
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              These cookies help us understand how visitors interact with our website by collecting 
              and reporting information anonymously. This helps us improve our website and provide 
              better user experiences.
            </p>
          </div>

          {/* Advertising */}
          <div className="border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Advertising Cookies</h3>
                <p className="text-sm text-gray-500 font-medium">
                  {preferences.advertising ? 'Active' : 'Inactive'}
                </p>
              </div>
              <Switch 
                checked={preferences.advertising} 
                onCheckedChange={(checked) => 
                  setPreferences(prev => ({ ...prev, advertising: checked }))
                }
                className="ml-4"
              />
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              These cookies are used to make advertising messages more relevant to you and your interests. 
              They also perform functions like preventing the same advertisement from continuously reappearing.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-200">
            <Button 
              onClick={handleSave}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3"
            >
              Save Preferences
            </Button>
            <Button 
              onClick={handleDecline}
              variant="outline"
              className="flex-1 font-medium py-3"
            >
              Decline All
            </Button>
            <Button 
              onClick={handleAcceptAll}
              variant="outline"
              className="flex-1 font-medium py-3"
            >
              Accept All
            </Button>
          </div>

          {/* Footer Text */}
          <div className="text-xs text-gray-500 pt-4 border-t border-gray-200">
            <p className="leading-relaxed">
              By using this website, you agree to our use of cookies in accordance with our 
              <a href="/privacy" className="text-blue-600 hover:text-blue-700 underline ml-1">
                Privacy Policy
              </a>. 
              You can change your cookie preferences at any time by clicking the "Cookie Preferences" 
              link in our footer.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}; 