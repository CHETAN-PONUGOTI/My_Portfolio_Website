import { Globe, Code, Server, BarChart3, Smartphone, Database } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Full-stack web applications using modern frameworks and technologies. From concept to deployment, creating responsive and performant websites.",
      color: "bg-blue-500/10 text-blue-500"
    },
    {
      icon: Code,
      title: "Frontend Development",
      description: "Building beautiful, interactive user interfaces with React, ensuring seamless user experiences across all devices with modern design principles.",
      color: "bg-purple-500/10 text-purple-500"
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Robust server-side applications with Node.js and Express, implementing secure authentication, RESTful APIs, and efficient database management.",
      color: "bg-green-500/10 text-green-500"
    },
    {
      icon: Smartphone,
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs, leveraging best practices and modern development methodologies for scalable applications.",
      color: "bg-orange-500/10 text-orange-500"
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights using Python, Pandas, and Numpy. Data visualization and reporting for informed decision-making.",
      color: "bg-pink-500/10 text-pink-500"
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Efficient database architecture and optimization for both SQL and NoSQL databases, ensuring data integrity and optimal query performance.",
      color: "bg-cyan-500/10 text-cyan-500"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <span className="text-accent font-semibold text-sm uppercase tracking-wide">What I Offer</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
            My Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive development services to bring your digital vision to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-elegant border border-border hover:shadow-accent hover:scale-105 transition-all duration-300 animate-fade-in group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 rounded-xl ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <service.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in">
          <Button variant="hero" size="lg" onClick={scrollToContact}>
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
