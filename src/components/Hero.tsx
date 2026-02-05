import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download, ArrowDown } from "lucide-react";
import styles from "./Hero.module.css";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-background animate-gradient bg-[length:200%_200%]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(0,229,255,0.15),transparent_40%)]" />
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.08)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.08)_1px,transparent_1px)] bg-[size:64px_64px]" />
        {/* Floating orbs */}
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float float-delay" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 py-20 text-center animate-fade-in-up">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Name */}
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
              Vure Sai Sashank
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-2xl md:text-3xl font-medium text-muted-foreground">
            Full-Stack Developer | Machine Learning Enthusiast
          </p>

          {/* Intro */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Building intelligent systems that bridge innovation, automation, and human experience.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-primary to-accent hover:shadow-glow hover:scale-105 transition-smooth text-lg px-8 shadow-lg"
            >
              Hire Me
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open("https://www.linkedin.com/in/vure-sai-sashank/", "_blank")}
              className="border-2 hover:bg-primary/10 hover:border-primary hover:scale-105 transition-smooth text-lg px-8 backdrop-blur-sm"
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open("https://github.com/Sashank1209", "_blank")}
              className="border-2 hover:bg-primary/10 hover:border-primary hover:scale-105 transition-smooth text-lg px-8 backdrop-blur-sm"
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open("https://drive.google.com/uc?export=download&id=1V5AaMdG8gNNBFR1MGNfJk3G4tG0IbvJD","_blank")}
              className="border-2 hover:bg-primary/10 hover:border-primary hover:scale-105 transition-smooth text-lg px-8 backdrop-blur-sm"
            >
              <Download className="mr-2 h-5 w-5" />
              Resume
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-16 animate-float">
            <ArrowDown className="mx-auto h-8 w-8 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};
