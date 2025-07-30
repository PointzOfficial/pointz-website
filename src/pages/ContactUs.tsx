import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { usePageTitle } from "@/hooks/use-page-title";
import bluebackImage from "@/assets/blueback.png";
import generalInquiryImage from "@/assets/general-inquiry.png";
import featureRequestImage from "@/assets/feature-request.png";
import reportBugImage from "@/assets/report-bug.png";
import faqImage from "@/assets/faq.png";

const ContactUs = () => {
  usePageTitle("Contact Pointz - Get Support & Feedback | Building Better Bike Routes");

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
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
            <div className="w-16 h-1 bg-white mx-auto rounded-full mb-8"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Contact Options */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
              {/* General Inquiry */}
              <a 
                href="mailto:hi@bikepointz.com"
                className="block transition-transform hover:scale-105"
              >
                <img 
                  src={generalInquiryImage} 
                  alt="General Inquiry" 
                  className="w-full h-auto max-w-xs mx-auto rounded-lg shadow-lg"
                />
              </a>

              {/* Feature Request */}
              <a 
                href="https://airtable.com/app5383Vx5181qgBK/shraquSUq2UkXnS12"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-transform hover:scale-105"
              >
                <img 
                  src={featureRequestImage} 
                  alt="Feature Request" 
                  className="w-full h-auto max-w-xs mx-auto rounded-lg shadow-lg"
                />
              </a>

              {/* Report Bug */}
              <a 
                href="https://airtable.com/app5383Vx5181qgBK/shraquSUq2UkXnS12"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-transform hover:scale-105"
              >
                <img 
                  src={reportBugImage} 
                  alt="Report Bug" 
                  className="w-full h-auto max-w-xs mx-auto rounded-lg shadow-lg"
                />
              </a>

              {/* FAQ */}
              <a 
                href="/about#faq"
                className="block transition-transform hover:scale-105"
              >
                <img 
                  src={faqImage} 
                  alt="FAQ" 
                  className="w-full h-auto max-w-xs mx-auto rounded-lg shadow-lg"
                />
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactUs;