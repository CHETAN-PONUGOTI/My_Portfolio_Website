import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-primary">CP</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("home")} className="text-foreground hover:text-accent transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-accent transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("skills")} className="text-foreground hover:text-accent transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection("services")} className="text-foreground hover:text-accent transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection("portfolio")} className="text-foreground hover:text-accent transition-colors">
              Portfolio
            </button>
            <Button variant="hero" onClick={() => scrollToSection("contact")}>
              Let's Talk
            </Button>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection("home")} className="text-foreground hover:text-accent transition-colors text-left">
                Home
              </button>
              <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-accent transition-colors text-left">
                About
              </button>
              <button onClick={() => scrollToSection("skills")} className="text-foreground hover:text-accent transition-colors text-left">
                Skills
              </button>
              <button onClick={() => scrollToSection("services")} className="text-foreground hover:text-accent transition-colors text-left">
                Services
              </button>
              <button onClick={() => scrollToSection("portfolio")} className="text-foreground hover:text-accent transition-colors text-left">
                Portfolio
              </button>
              <Button variant="hero" onClick={() => scrollToSection("contact")} className="w-full">
                Let's Talk
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
