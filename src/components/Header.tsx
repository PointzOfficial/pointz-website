import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import pointzLogo from "@/assets/pointz-logo.png";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Announcement Banner */}
      {/* <div className="bg-primary text-primary-foreground py-2 px-4 text-center text-sm">
        🎉 Pointz Plus Out Now ~ Read Our Announcement 📣
      </div>
       */}
      {/* Main Header */}
      <header className="bg-background border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={pointzLogo} 
              alt="Pointz" 
              className="h-8 w-auto"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-primary hover:text-primary-dark transition-colors font-medium"
              style={{
                fontFamily: 'Nunito Sans, sans-serif',
                fontWeight: 600,
                fontSize: '16px',
                letterSpacing: '0.02em'
              }}
            >
              HOME
            </Link>
            <Link 
              to="/about" 
              className="text-primary hover:text-primary-dark transition-colors font-medium"
              style={{
                fontFamily: 'Nunito Sans, sans-serif',
                fontWeight: 600,
                fontSize: '16px',
                letterSpacing: '0.02em'
              }}
            >
              ABOUT
            </Link>
            <Link 
              to="/contact" 
              className="text-primary hover:text-primary-dark transition-colors font-medium"
              style={{
                fontFamily: 'Nunito Sans, sans-serif',
                fontWeight: 600,
                fontSize: '16px',
                letterSpacing: '0.02em'
              }}
            >
              CONTACT US
            </Link>
            <a 
              href="/download" 
              className="text-primary hover:text-primary-dark transition-colors font-medium"
              style={{
                fontFamily: 'Nunito Sans, sans-serif',
                fontWeight: 600,
                fontSize: '16px',
                letterSpacing: '0.02em'
              }}
            >
              DOWNLOAD
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            className="md:hidden"
            onClick={toggleMobileMenu}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              <Link 
                to="/" 
                className="block text-primary hover:text-primary-dark transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  fontFamily: 'Nunito Sans, sans-serif',
                  fontWeight: 600,
                  fontSize: '16px',
                  letterSpacing: '0.02em'
                }}
              >
                HOME
              </Link>
              <Link 
                to="/about" 
                className="block text-primary hover:text-primary-dark transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  fontFamily: 'Nunito Sans, sans-serif',
                  fontWeight: 600,
                  fontSize: '16px',
                  letterSpacing: '0.02em'
                }}
              >
                ABOUT
              </Link>
              <Link 
                to="/contact" 
                className="block text-primary hover:text-primary-dark transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  fontFamily: 'Nunito Sans, sans-serif',
                  fontWeight: 600,
                  fontSize: '16px',
                  letterSpacing: '0.02em'
                }}
              >
                CONTACT US
              </Link>
              <a 
                href="/download" 
                className="block text-primary hover:text-primary-dark transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  fontFamily: 'Nunito Sans, sans-serif',
                  fontWeight: 600,
                  fontSize: '16px',
                  letterSpacing: '0.02em'
                }}
              >
                DOWNLOAD
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};