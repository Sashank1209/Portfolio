import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    category: "Languages",
    skills: ["Python", "JavaScript", "SQL", "C"],
    percentage: 90,
  },
  {
    category: "Web Technologies",
    skills: ["TypeScript", "HTML/CSS/JS", "React", "WordPress", "Restful APIs"],
    percentage: 85,
  },
    {
    category: "Frameworks",
    skills: ["Django", "Flask", "React", "Node.js", "Express.js"],
    percentage: 85,
  },
  {
    category: "IoT/Hardware",
    skills: ["Raspberry Pi", "RFID", "IR Sensors"],
    percentage: 80,
  },
  {
    category: "Tools",
    skills: ["Git", "VS Code", "Postman", "Firebase", "Celigo integrator.io"],
    percentage: 88,
  },
  {
    category: "Soft Skills",
    skills: ["Problem-solving", "Team collaboration", "Leadership", "Communication"],
    percentage: 92,
  },
];

export const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animate, setAnimate] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setAnimate(true), 200);
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
      id="skills"
      ref={ref}
      className={`py-32 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20">Skills & Expertise</h2>

          <div className="space-y-12">
            {skillCategories.map((category, index) => (
              <div key={index} className="space-y-4">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-2xl font-semibold">{category.category}</h3>
                  <span className="text-sm text-muted-foreground">
                    {category.skills.join(" • ")}
                  </span>
                </div>

                {/* Skill Bar */}
                <div className="relative h-4 bg-muted rounded-full overflow-hidden">
                  <div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
                    style={{
                      width: animate ? `${category.percentage}%` : "0%",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
