import { useEffect, useRef, useState } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "NexusEPM Consulting, HYD",
    role: "Software Engineer",
    period: "Feb 2025 - Present",
    achievements: [
      "Building and optimizing integrations on Celigo Integrator.io, automating workflows and streamlining data synchronization across enterprise systems, improving operational efficiency by 60%.",
      "Developing an AI-powered finance assistant, integrating PostgreSQL with Drizzle ORM and implementing the OpenAI API using Next.js, enhancing user interaction and delivering personalized financial insights with improved response accuracy by 45%.",
      "Customizing themes, plugins on a WordPress website, optimizing performance & enhancing user experience."
    ]
  },
  {
    company: "Sanshi Network Tech Pvt Ltd, HYD",
    role: "Software Developer",
    period: "Jun 2024 – Nov 2024",
    achievements: [
      "Worked on frontend components using TypeScript, React.js, Next.js, CSS, and HTML, enhancing application scalability and maintainability by 40%.",
      "Optimized core application pages, improving performance, responsiveness, cross-browser compatibility by 35%.",
      "Collaborated with backend teams to integrate APIs, ensuring seamless data flow between frontend and backend systems, increasing efficiency by 30%."
    ]
  },
  {
    company: "24HR7 Commerce Pvt Ltd, HYD",
    role: "Software Engineer Intern",
    period: "Nov 2023 – Apr 2024",
    achievements: [
      "Worked as a Software Developer Intern on a business-oriented commerce application, developing both frontend and backend, enhancing user experience and system functionality by 35%.",
      "Built interactive and responsive UI components using React.js, HTML, CSS, and JavaScript, improving user engagement by 40%.",
      "Developed backend services using Node.js and Express.js, handling API requests and implementing business logic, increasing efficiency by 35%.",
      "Managed databases using MySQL (via XAMPP), ensuring data integrity, reducing retrieval time by 25%."
    ]
  }
];

export const Experience = () => {
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
      id="experience"
      ref={ref}
      className={`py-32 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20">Professional Experience</h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30" />
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-8 md:pl-20 group"
                  style={{
                    animation: `fade-in-up 0.6s ease-out ${index * 0.2}s both`
                  }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-6 top-2 w-4 h-4 rounded-full bg-primary shadow-glow group-hover:scale-150 transition-smooth border-4 border-background" />
                  
                  {/* Content card */}
                  <div className="bg-card border-2 border-border rounded-lg p-6 hover:border-primary/50 hover:shadow-glow transition-smooth backdrop-blur-sm">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold group-hover:text-primary transition-smooth">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-muted-foreground mt-1">
                          <Briefcase className="h-4 w-4" />
                          <p className="text-lg font-medium">{exp.company}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground whitespace-nowrap">
                        <Calendar className="h-4 w-4" />
                        <p className="text-sm font-medium">{exp.period}</p>
                      </div>
                    </div>
                    
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-muted-foreground leading-relaxed"
                        >
                          <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
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
