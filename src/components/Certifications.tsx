import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const certifications = [
    {
    title: "Celigo Builder Core Certification",
    issuer: "Celigo",
    date: "September 2025",
    link: "https://verify.skilljar.com/c/zen8cpb325eh",
  },
  {
    title: "Introduction to IoT",
    issuer: "NPTEL",
    date: "November 2023",
    link: "https://archive.nptel.ac.in/content/noc/NOC23/SEM2/Ecertificates/106/noc23-cs83/Course/NPTEL23CS83S73740246020344475.pdf",
  },
  {
    title: "Complete Python Bootcamp",
    issuer: "Udemy",
    date: "June 2023",
    link: "https://www.udemy.com/certificate/UC-8aa3473b-5c67-4475-b0da-b9cff5750bdb/",
  },
  {
    title: "Machine Learning",
    issuer: "Infosys Springboard",
    date: "April 2023",
    link: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_0135015637106278408958/1-0d4b4cc0-f4c3-4580-a6cd-931a9bafb660.pdf",
  },
  {
    title: "Drone Technologies for Urban Mobility",
    issuer: "IIT Hyderabad",
    date: "March 2023",
    link: "https://drive.google.com/file/d/1_nCLPFkmXFVhU2E9xeWLxv7ocSUz6YlT/view?usp=sharing",
  },
  {
    title: "Python (Basic)",
    issuer: "Hackerrank",
    date: "March 2023",
    link: "https://www.hackerrank.com/certificates/9fd83fd71a53?test_finished=true",
  },
];

export const Certifications = () => {
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
      id="certifications"
      ref={ref}
      className={`py-32 bg-muted/30 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20">Certifications</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="group hover:shadow-glow hover:-translate-y-1 transition-smooth border-2 hover:border-primary/50"
              >
                <CardHeader>
                  <CardTitle className="text-xl">{cert.title}</CardTitle>
                  <CardDescription className="text-base">
                    {cert.issuer}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{cert.date}</p>
                  {cert.link && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(cert.link!, "_blank")}
                      className="w-full"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Verify
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
