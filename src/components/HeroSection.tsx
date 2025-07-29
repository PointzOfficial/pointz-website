import { Button } from "@/components/ui/button";
import appStoreBadge from "@/assets/app-store-badge.png";
import googlePlayBadge from "@/assets/google-play-badge.png";
import heroPhone from "@/assets/hero-phone.png";

export const HeroSection = () => {
  return (
    <section className="mt-20" id="home">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Get around{" "}
                <span className="text-primary">safely</span>{" "}
                on your{" "}
                <span className="text-primary">bike</span>
              </h1>
              
              {/* <p className="text-xl text-muted-foreground max-w-lg">
                Navigate bike-friendly routes with confidence using real-time safety data and community insights.
              </p> */}
            </div>
            
            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://apps.apple.com/us/app/pointz-mobility/id1580218237"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-transform hover:scale-105"
              >
                <img 
                  src={appStoreBadge} 
                  alt="Download on the App Store" 
                  className="h-20 w-auto"
                />
              </a>
              <a 
                href="https://play.google.com/store/apps/details?id=com.pointzofficialapp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-transform hover:scale-105"
              >
                <img 
                  src={googlePlayBadge} 
                  alt="Get it on Google Play" 
                  className="h-20 w-auto"
                />
              </a>
            </div>
          </div>
          
          {/* Right Content - Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute "></div>
              
              {/* Phone mockup */}
              <div className="relative z-10">
                <img 
                  src={heroPhone} 
                  alt="Pointz App Interface" 
                  className="w-full max-w-sm lg:max-w-md h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};