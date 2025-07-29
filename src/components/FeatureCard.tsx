interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
  reverse?: boolean;
}

export const FeatureCard = ({ image, title, description, reverse = false }: FeatureCardProps) => {
  return (
    <div className={`grid md:grid-cols-2 gap-1 items-center ${reverse ? 'md:grid-cols-2' : ''}`}>
      {/* Image */}
      <div className={`${reverse ? 'md:order-2' : ''}`}>
        <div className="relative">
          <div className="absolute"></div>
          <img 
            src={image} 
            alt={title}
            className="relative z-10 w-full h-auto max-w-xl mx-auto"
          />
        </div>
      </div>
      
      {/* Content */}
      <div className={`space-y-6 ${reverse ? 'md:order-1' : ''}`}>
        <h3 className="text-3xl md:text-6xl font-semibold text-foreground text-primary text-center">
          {title}
        </h3>
        <p className="text-center md:text-2xl font-medium">
          {description}
        </p>
      </div>
    </div>
  );
};