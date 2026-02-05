import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const ref = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim()) {
      toast.error("Please enter your name");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (formData.message.trim().length < 20) {
      toast.error("Message must be at least 20 characters long");
      return;
    }

    // Send email via EmailJS
    setLoading(true);

    emailjs
      .sendForm(
        "service_7w0bweg",     // ← Replace with your EmailJS Service ID
        "template_ogwxl5s",    // ← Replace with your EmailJS Template ID
        formRef.current!,
        "jKuA2_TOQR6slpaxe"      // ← Replace with your EmailJS Public Key
      )
      .then(
        () => {
          toast.success("Thank you! Your message has been sent successfully.");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("EmailJS error:", error);
          toast.error("Something went wrong. Please try again.");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-32 bg-muted/30 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20">Get In Touch</h2>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                name="name"
                placeholder="Your Name *"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="h-14 text-lg border-2 focus:border-primary focus:ring-2 focus:ring-primary/20 hover:border-primary/50 transition-smooth backdrop-blur-sm"
                required
              />
            </div>

            <div>
              <Input
                type="email"
                name="email"
                placeholder="Your Email *"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="h-14 text-lg border-2 focus:border-primary focus:ring-2 focus:ring-primary/20 hover:border-primary/50 transition-smooth backdrop-blur-sm"
                required
              />
            </div>

            <div>
              <Textarea
                name="message"
                placeholder="Your Message (min 20 characters) *"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="min-h-[200px] text-lg border-2 focus:border-primary focus:ring-2 focus:ring-primary/20 hover:border-primary/50 transition-smooth resize-none backdrop-blur-sm"
                required
              />
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={loading}
              className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-glow hover:scale-105 transition-smooth text-lg py-6 shadow-lg"
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>

          {/* Social Links */}
          <div className="mt-12 flex justify-center gap-6">
            <Button
              variant="outline"
              size="lg"
              onClick={() =>
                window.open("https://www.linkedin.com/in/vure-sai-sashank/", "_blank")
              }
              className="border-2 hover:bg-primary/10 hover:border-primary hover:scale-105 transition-smooth backdrop-blur-sm"
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() =>
                window.open("https://github.com/Sashank1209", "_blank")
              }
              className="border-2 hover:bg-primary/10 hover:border-primary hover:scale-105 transition-smooth backdrop-blur-sm"
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
