import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import lmsProject from "@/assets/project-lms.jpg";
import oralvisProject from "@/assets/project-oralvis.jpg";
import cryptoProject from "@/assets/project-crypto.jpg";
import nxtWatchProject from "@/assets/project-nxtwatch.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "LMS Platform with Micro Certification",
      description: "Full-stack MERN application featuring automated quiz generation and PDF certificate creation. Implements JWT-based authentication, protected routes, and dynamic quiz management.",
      image: lmsProject,
      tech: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "PDF Generation"],
      github: "https://github.com/chetanponugoti",
      demo: null
    },
    {
      title: "OralVis: AI-Powered Oral Health Monitoring",
      description: "Comprehensive full-stack system for dental workflow management with role-based access for technicians and dentists. Features secure file uploads and simulated AI analysis.",
      image: oralvisProject,
      tech: ["React", "Node.js", "Express", "MongoDB", "AI Integration", "File Upload"],
      github: "https://github.com/chetanponugoti",
      demo: null
    },
    {
      title: "Cryptocurrency Dashboard",
      description: "Real-time cryptocurrency tracking application with React Query for data fetching. Includes Chart.js visualizations, dynamic routing, and fully responsive UI.",
      image: cryptoProject,
      tech: ["React", "React Query", "Chart.js", "REST API", "Responsive Design"],
      github: "https://github.com/chetanponugoti",
      demo: null
    },
    {
      title: "Nxt Watch - Video Streaming Platform",
      description: "React SPA for video streaming with authentication, dynamic routing, and light/dark mode toggle. Features video saving functionality and personalized content feed.",
      image: nxtWatchProject,
      tech: ["React", "React Router", "Authentication", "Local Storage", "Responsive UI"],
      github: "https://github.com/chetanponugoti",
      demo: null
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <span className="text-accent font-semibold text-sm uppercase tracking-wide">My Projects</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
            Some of my projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of recent projects demonstrating full-stack development expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl overflow-hidden shadow-elegant border border-border hover:shadow-accent hover:scale-105 transition-all duration-300 animate-fade-in group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={20} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Github size={16} />
                      Code
                    </a>
                  </Button>
                  {project.demo && (
                    <Button variant="hero" size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
