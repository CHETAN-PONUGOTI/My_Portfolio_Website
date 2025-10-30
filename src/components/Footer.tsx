import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex gap-6">
            <a 
              href="https://github.com/CHETAN-PONUGOTI" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/chetan-ponugoti35" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:chetanponugoti5@gmail.com"
              className="hover:text-accent transition-colors"
              aria-label="Email Contact"
            >
              <Mail size={24} />
            </a>
          </div>
          <div className="text-center">
            <p className="flex items-center gap-2 text-sm opacity-90">
              Designed & Built with <Heart size={16} className="text-accent" fill="currentColor" /> by Chetan Ponugoti
            </p>
            <p className="text-xs opacity-75 mt-2">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
