import { FeatureCard } from "./FeatureCard";
import roadRatingsImg from "@/assets/road-ratings.png";
import routeFindingImg from "@/assets/route-finding.png";
import navigationImg from "@/assets/navigation.png";
import shareInsightsImg from "@/assets/share-insights.png";

export const FeaturesSection = () => {
  const features = [
    {
      image: roadRatingsImg,
      title: "Road Ratings",
      description: "Pointz pre-rates roads on a 1-5 bike-friendliness scale based on the qualities of the road or path.",
      reverse: false
    },
    {
      image: routeFindingImg,
      title: "Find the Best Route",
      description: "Customize your route based on your comfort and experience level.",
      reverse: true
    },
    {
      image: navigationImg,
      title: "Navigation",
      description: "Know where to go every step of the way and turn up the volume to hear voice instructions",
      reverse: false
    },
    {
      image: shareInsightsImg,
      title: "Share Insights",
      description: "Contribute to our community by providing details about hazards like construction, bike lane obstructions, and dangerous intersections.",
      reverse: true
    }
  ];

  return (
    <section className="py-20 bg-background" id="features">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
            How the Pointz App Works
          </h2>
        </div>
        
        {/* Features */}
        <div className="space-y-24">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              image={feature.image}
              title={feature.title}
              description={feature.description}
              reverse={feature.reverse}
            />
          ))}
        </div>
      </div>
    </section>
  );
};