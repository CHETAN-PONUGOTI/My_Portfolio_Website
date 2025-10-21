import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen gradient-hero relative overflow-hidden pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full py-20">
          {/* Left Content */}
          <div className="text-left space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-accent/20 rounded-full">
              <span className="text-accent font-semibold">👋 WELCOME TO PORTFOLIO</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              WELCOME TO<br />MY PORTFOLIO<br />I AM <span className="text-accent">CHETAN</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-xl">
              Crafting Intelligent Full-Stack Solutions with Modern Web Technologies and AI-Driven Precision.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="hero" size="lg" onClick={() => scrollToSection("portfolio")} className="group">
                View My Work
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollToSection("contact")} className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20">
                Contact Me
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <a href="https://github.com/chetanponugoti" target="_blank" rel="noopener noreferrer" className="text-primary-foreground hover:text-accent transition-colors">
                <Github size={28} />
              </a>
              <a href="https://www.linkedin.com/in/chetan-ponugoti" target="_blank" rel="noopener noreferrer" className="text-primary-foreground hover:text-accent transition-colors">
                <Linkedin size={28} />
              </a>
              <a href="mailto:chetanponugoti5@gmail.com" className="text-primary-foreground hover:text-accent transition-colors">
                <Mail size={28} />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative flex justify-center items-center animate-scale-in">
            <div className="relative">
              {/* Large Orange Circle Background */}
              <div className="absolute inset-0 bg-accent rounded-full w-96 h-96 -z-10 shadow-accent"></div>
              {/* Profile Image */}
              <img 
                src={profilePhoto} 
                alt="Chetan Ponugoti - Full Stack Developer" 
                className="rounded-full w-96 h-96 object-cover border-8 border-primary-foreground/10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
