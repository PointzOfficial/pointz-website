import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { usePageTitle } from "@/hooks/use-page-title";
import bluebackImage from "@/assets/blueback.png";
import trishaImage from "@/assets/trisha-ballakur-headshot.jpg";
import shahilImage from "@/assets/Shahil-mangroliya-headshot.png";

const About = () => {
  usePageTitle("Pointz: Plan Safer on Bikes - About Us");
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
            <h1 className="text-4xl md:text-6xl font-bold mb-4">About Pointz</h1>
            <div className="w-16 h-1 bg-white mx-auto rounded-full mb-8"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          {/* Meet Our Team Section */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Meet Our Team</h2>
            
            {/* Team Members Grid */}
            <div className="grid md:grid-cols-2 gap-16 mb-20">
              {/* Trisha Ballakur */}
              <div className="flex flex-col items-center">
                <div className="mb-8">
                  <img 
                    src={trishaImage} 
                    alt="Trisha Ballakur | CEO and Founder" 
                    className="w-80 h-80 object-cover rounded-lg mx-auto shadow-lg"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Trisha Ballakur</h3>
                <p className="text-lg text-muted-foreground mb-6 text-center">CEO and Founder</p>
                <div className="text-center">
                  <p className="text-muted-foreground leading-relaxed">
                    Trisha is a fearless tech leader dedicated to impactful advancements in mobile app development and AI. With experience as a startup CTO and in engineering roles at Adobe and Nasdaq, Trisha applies her expertise to drive positive change. With a B.S. in Computer Science from Brown, Trisha founded Pointz to make urban biking safer and more accessible.
                  </p>
                </div>
              </div>

              {/* Shahil Mangroliya */}
              <div className="flex flex-col items-center">
                <div className="mb-8">
                  <img 
                    src={shahilImage} 
                    alt="Shahil Mangroliya | Head of Engineering" 
                    className="w-80 h-80 object-cover rounded-lg mx-auto shadow-lg"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Shahil Mangroliya</h3>
                <p className="text-lg text-muted-foreground mb-6 text-center">Head of Engineering</p>
                <div className="text-center">
                  <p className="text-muted-foreground leading-relaxed">
                    Shahil is an accomplished engineer with a strong background in React Native, Java, C++, and full-stack development. With a passion for innovative and user-friendly solutions, Shahil brings extensive experience in creating efficient and cross-platform applications.
                  </p>
                </div>
              </div>
            </div>

            {/* Pointz FAQs Section */}
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Pointz FAQs</h2>
              
              <div className="space-y-10">
                <div className="border-b border-border pb-8">
                  <h4 className="text-xl font-bold mb-4 text-gray-900">What is Pointz?</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Pointz is a safer bike and scooter mapping app that finds low-stress routes, anywhere in the U.S.
                  </p>
                </div>

                <div className="border-b border-border pb-8">
                  <h4 className="text-xl font-bold mb-4 text-gray-900">Why Pointz over Google Maps?</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    The routes Pointz generates are specifically designed for micromobility users and rider safety. Our mapping algorithm utilizes networks of low-stress roads, taking into account various safety variables like traffic speed, road surface, and speed limit to plot the safest, fastest trip for our riders. Then, we use rider feedback to identify problem areas and continually improve our navigation.
                  </p>
                </div>

                <div className="border-b border-border pb-8">
                  <h4 className="text-xl font-bold mb-4 text-gray-900">What's Pointz Plus?</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Pointz Plus is our annual premium subscription, unlocking full access to safe routes, navigation, and even 24/7 roadside assistance. Join Plus today!
                  </p>
                </div>

                <div className="border-b border-border pb-8">
                  <h4 className="text-xl font-bold mb-4 text-gray-900">Can I get Pointz Plus for free?</h4>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    In order to test out the premium app, we have a 3-day trial period during which anyone can play around with Plus for no charge. However, after the trial period ends, riders will be charged for their annual subscription to Plus.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We make it clear that the subscription is an annual subscription, even if we break it down into the monthly price. When you sign up for the trial, you will be charged for the annual price after the trial period ends.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-4 text-gray-900">How do I request a refund for my Pointz Plus account?</h4>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Refunds are only available during the trial period of your Pointz Plus subscription. We cannot grant a refund after the trial period has ended. We make it clear that the subscription is an annual subscription, even if we break it down into the monthly price. When you sign up for the trial, you will be charged for the annual price after the trial period ends.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    To request a refund before the end of the 3-day trial period, please contact our customer support team through hi@bikepointz.com. No refunds will be issued after the trial period has ended.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;