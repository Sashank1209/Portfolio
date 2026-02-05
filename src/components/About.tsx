import { useEffect, useRef, useState } from "react";

export const About = () => {
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
      id="about"
      ref={ref}
      className={`py-32 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-5xl font-bold">About Me</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm Sashank Vure, a passionate developer focused on AI, IoT, and full-stack web development. 
                I design intelligent systems that connect technology with real-world efficiency — from automated 
                parking systems to end-to-end travel platforms.
              </p>
              <p className="text-xl font-medium text-foreground italic">
                "Innovation meets automation."
              </p>
              <p>
                With hands-on experience working on integrations using{" "}
                <span className="text-primary font-semibold">Celigo integrator.io</span> and a{" "}
                <span className="text-primary font-semibold">Celigo Builder Core Certification</span>, 
                I bring expertise in seamless system integration and automation workflows.
              </p>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-25 group-hover:opacity-75 transition-smooth animate-gradient bg-[length:200%_200%]"></div>
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-background shadow-glow hover:scale-105 transition-smooth">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center backdrop-blur-sm">
                  <div className="text-8xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">SS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
