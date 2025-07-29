import bostonGlobeLogo from "@/assets/boston-globe-logo.png";
import bloombergLogo from "@/assets/bloomberg-logo.png";
import streetsblogLogo from "@/assets/streetsblog-logo.png";

export const PressSection = () => {
  const pressItems = [
    {
      logo: bostonGlobeLogo,
      name: "The Boston Globe",
      url: "https://www.bostonglobe.com/2022/07/04/metro/5-innovators-watch-rhode-island/"
    },
    {
      logo: bloombergLogo,
      name: "Bloomberg",
      url: "https://www.bloomberg.com/features/2022-opinion-50-states-50-startups/?sref=8SU5LPWa&srnd=opinion"
    },
    {
      logo: streetsblogLogo,
      name: "Streetsblog",
      url: "https://mass.streetsblog.org/2022/01/20/brown-university-students-launch-waze-for-safe-bike-routes/"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            As seen in…
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
          {pressItems.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                height: '200px',
              }}
              className="group p-6 rounded-lg transition-all duration-300 hover:bg-background hover:shadow-bike-soft flex items-center justify-center w-full"
            >
              <img
                src={item.logo}
                alt={item.name}
                className="max-h-16 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:opacity-100"
                style={{
                  width: 'auto',
                  height: 'auto',
                  maxWidth: '100%',
                  maxHeight: '100%'
                }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};