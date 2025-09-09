import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const FAQs = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Find answers to common questions about Pointz and our bike route
                planning app
              </p>
            </div>
          </div>
        </section>

        {/* FAQs Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {/* FAQ Item */}
                <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    What is Pointz?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Pointz is a safer bike and scooter mapping app that finds
                    low-stress routes, anywhere in the U.S.
                  </p>
                </div>

                {/* FAQ Item */}
                <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Why Pointz over Google Maps?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    The routes Pointz generates are specifically designed for
                    micromobility users and rider safety. Our mapping algorithm
                    utilizes networks of low-stress roads, taking into account
                    various safety variables like traffic speed, road surface,
                    and speed limit to plot the safest, fastest trip for our
                    riders. Then, we use rider feedback to identify problem
                    areas and continually improve our navigation.
                  </p>
                </div>

                {/* FAQ Item */}
                <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    What's Pointz Plus?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Pointz Plus is our annual premium subscription, unlocking
                    full access to safe routes, navigation, and even 24/7
                    roadside assistance. Join Plus today!
                  </p>
                </div>

                {/* FAQ Item */}
                <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Can I get Pointz Plus for free?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    In order to test out the premium app, we have a 3-day trial
                    period during which anyone can play around with Plus for no
                    charge. However, after the trial period ends, riders will be
                    charged for their annual subscription to Plus.
                  </p>
                </div>

                {/* FAQ Item */}
                <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    How do I cancel my Pointz Plus subscription?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    You can cancel your Pointz Plus subscription at any time
                    through the Pointz app. Go to Pointz app &gt; Me &gt;
                    Settings &gt; Manage Subscription &gt; Cancel Subscription.
                  </p>
                </div>

                {/* Refund FAQ Item */}
                <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Can I get a refund for my Pointz Plus subscription?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We do not offer refunds for Pointz Plus subscriptions.
                    However, if you cancel your subscription within the 3-day
                    trial period, you will not be charged. Note, this
                    subscription is not monthly, it is annual. Multiple
                    subscriptions on accident unfortunately will not be
                    refundable per our company policy.
                  </p>
                </div>

                {/* FAQ Item */}
                <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    What cities does Pointz cover?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Pointz currently covers all major cities across the United
                    States, providing safe bike routes and navigation for urban
                    bikers nationwide.
                  </p>
                </div>

                {/* FAQ Item */}
                <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    How does Pointz ensure route safety?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Pointz uses advanced algorithms that consider multiple
                    safety factors including traffic speed, road surface
                    quality, speed limits, and user feedback to generate the
                    safest possible routes for bikers and scooter riders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default FAQs;
