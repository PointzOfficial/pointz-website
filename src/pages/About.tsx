import bluebackImage from "@/assets/blueback.png";
import shahilImage from "@/assets/shahil-mangroliya-headshot.png";
import trishaImage from "@/assets/trisha-ballakur-headshot.jpg";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { usePageTitle } from "@/hooks/use-page-title";

const About = () => {
  usePageTitle("About Pointz - Meet Our Team | Building Better Bike Routes");

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
              About Pointz
            </h1>
            <div className="w-16 h-1 bg-white mx-auto rounded-full mb-8"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          {/* Meet Our Team Section */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Meet Our Team
            </h2>

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
                <h3 className="text-xl font-bold mb-4 text-center">
                  Trisha Ballakur
                </h3>
                <p className="text-lg text-muted-foreground mb-6 text-center">
                  CEO and Founder
                </p>
                <div className="text-center">
                  <p className="text-muted-foreground leading-relaxed">
                    Trisha is dedicated to impactful advancements in mobile app
                    development and AI. With experience as a startup CTO and in
                    engineering roles at Adobe and Nasdaq, Trisha applies her
                    expertise to drive positive change. With a B.S. in Computer
                    Science from Brown, Trisha founded Pointz to make urban
                    biking safer and more accessible.
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
                <h3 className="text-xl font-bold mb-4 text-center">
                  Shahil Mangroliya
                </h3>
                <p className="text-lg text-muted-foreground mb-6 text-center">
                  Head of Engineering
                </p>
                <div className="text-center">
                  <p className="text-muted-foreground leading-relaxed">
                    Shahil is an accomplished engineer with a strong background
                    in React Native, Java, C++, and full-stack development. With
                    a passion for innovative and user-friendly solutions, Shahil
                    brings extensive experience in creating efficient and
                    cross-platform applications.
                  </p>
                </div>
              </div>
            </div>

            {/* Pointz FAQs Section */}
            <div id="faq" className="max-w-4xl mx-auto pt-20">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                Pointz FAQs
              </h2>

              <div className="space-y-10">
                <div className="border-b border-border pb-8">
                  <h4 className="text-xl font-bold mb-4 text-gray-900">
                    What is Pointz?
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Pointz is a safer bike and scooter mapping app that finds
                    low-stress routes, anywhere in the U.S.
                  </p>
                </div>

                <div className="border-b border-border pb-8">
                  <h4 className="text-xl font-bold mb-4 text-gray-900">
                    Why Pointz over Google Maps?
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    The routes Pointz generates are specifically designed for
                    micromobility users and rider safety. Our mapping algorithm
                    utilizes networks of low-stress roads, taking into account
                    various safety variables like traffic speed, road surface,
                    and speed limit to plot the safest, fastest trip for our
                    riders. Then, we use rider feedback to identify problem
                    areas and continually improve our navigation.
                  </p>
                </div>

                <div className="border-b border-border pb-8">
                  <h4 className="text-xl font-bold mb-4 text-gray-900">
                    What's Pointz Plus?
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Pointz Plus is our annual premium subscription, unlocking
                    full access to safe routes, navigation, and even 24/7
                    roadside assistance. Join Plus today!
                  </p>
                </div>

                <div className="border-b border-border pb-8">
                  <h4 className="text-xl font-bold mb-4 text-gray-900">
                    Can I get Pointz Plus for free?
                  </h4>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    In order to test out the premium app, we have a 3-day trial
                    period during which anyone can play around with Plus for no
                    charge. However, after the trial period ends, riders will be
                    charged for their annual subscription to Plus. We will not
                    provide refunds after the trial period ends. Note, this
                    subscription is not monthly, it is annual.{" "}
                  </p>
                </div>

                <div className="border-b border-border pb-8">
                  <h4 className="text-xl font-bold mb-4 text-gray-900">
                    How do I cancel my Pointz Plus subscription?
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    You can cancel your Pointz Plus subscription at any time
                    through the Pointz app. Go to Pointz app &gt; Me &gt;
                    Settings &gt; Manage Subscription &gt; Cancel Subscription.
                  </p>
                </div>

                <div className="border-b border-border pb-8">
                  <h4 className="text-xl font-bold mb-4 text-gray-900">
                    Can I get a refund for my Pointz Plus subscription?
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    We do not offer refunds for Pointz Plus subscriptions.
                    However, if you cancel your subscription within the 3-day
                    trial period, you will not be charged. Note, this
                    subscription is not monthly, it is annual. Multiple
                    subscriptions on accident unfortunately will not be
                    refundable per our company policy.
                  </p>
                </div>

                <div className="border-b border-border pb-8">
                  <h4 className="text-xl font-bold mb-4 text-gray-900">
                    What cities does Pointz cover?
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Pointz currently covers all major cities across the United
                    States, providing safe bike routes and navigation for urban
                    bikers nationwide.
                  </p>
                </div>

                <div className="pb-8">
                  <h4 className="text-xl font-bold mb-4 text-gray-900">
                    How does Pointz ensure route safety?
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Pointz uses advanced algorithms that consider multiple
                    safety factors including traffic speed, road surface
                    quality, speed limits, and user feedback to generate the
                    safest possible routes for bikers and scooter riders.
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
