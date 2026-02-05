import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "PARK IT",
    description:
      "IoT-based parking management system using RFID, IR sensors, and Raspberry Pi. Improved real-time parking management by 50%, vehicle access security by 45%, and reduced congestion via mobile app by 35%.",
    tech: ["Raspberry Pi", "RFID", "IR Sensors", "Python", "Flask", "Firebase", "Android Studio"],
  },
  {
    title: "Travelers Bridge",
    description:
      "Django-based travel platform integrating flight booking, hotel reservations, car rentals. Enhanced engagement by 45%, backend security by 60%, and real-time search & pricing modules.",
    tech: ["Django", "Python", "HTML", "CSS", "Bootstrap", "SQLite", "REST API", "JavaScript"],
  },
];

export const Projects = () => {
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
      id="projects"
      ref={ref}
      className={`py-32 bg-muted/30 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-glow hover:-translate-y-2 hover:scale-[1.02] transition-smooth border-2 hover:border-primary/50 shadow-card backdrop-blur-sm bg-card/80"
              >
                <CardHeader>
                  <CardTitle className="text-3xl group-hover:text-primary transition-smooth">{project.title}</CardTitle>
                  <CardDescription className="text-base mt-4 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="px-3 py-1 hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-smooth"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
