import { useEffect, useRef, useState } from "react";
import { Award, Trophy, Heart, Zap } from "lucide-react";

const achievements = [
  {
    icon: Award,
    title: "Celigo Builder Core Certified",
    description: "Worked on integrations using integrator.io",
  },
  {
    icon: Trophy,
    title: "HACKIT22 - Second Place",
    description: "CBIT, Hyderabad",
  },
  {
    icon: Trophy,
    title: "Web Hackathon 2022 - Second Place",
    description: "SNIST, Hyderabad",
  },
  {
    icon: Heart,
    title: "NSS Volunteer",
    description: "Social awareness and outreach programs",
  },
  {
    icon: Zap,
    title: "IoT Innovation",
    description: "Enhanced parking automation by 50%",
  },
  {
    icon: Zap,
    title: "Security Enhancement",
    description: "Improved web platform security by 60%",
  },
];

export const Achievements = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="achievements"
      ref={ref}
      className={`py-32 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20">Achievements & Experience</h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {achievements.map((achievement, index) => (
                <div key={index} className="relative flex items-start gap-8 group">
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow group-hover:scale-110 transition-smooth">
                      <achievement.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-smooth">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
