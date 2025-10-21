import { Code2, Database, Layout, TestTube2, Brain, Server } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      skills: ["ReactJS", "HTML5", "CSS3", "JavaScript", "Responsive Design"],
      color: "text-blue-500"
    },
    {
      icon: Server,
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "REST APIs", "Java", "Python"],
      color: "text-green-500"
    },
    {
      icon: Database,
      title: "Database Management",
      skills: ["MongoDB", "SQL", "Database Design", "Query Optimization"],
      color: "text-purple-500"
    },
    {
      icon: TestTube2,
      title: "Testing & Quality",
      skills: ["Playwright", "Automation Testing", "Unit Testing", "Integration Testing"],
      color: "text-orange-500"
    },
    {
      icon: Brain,
      title: "Data & AI",
      skills: ["Numpy", "Pandas", "Data Analytics", "AI Tools Integration"],
      color: "text-pink-500"
    },
    {
      icon: Layout,
      title: "Development Tools",
      skills: ["Git", "VS Code", "Postman", "Chrome DevTools"],
      color: "text-cyan-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <span className="text-accent font-semibold text-sm uppercase tracking-wide">My Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable, and efficient web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-elegant border border-border hover:shadow-accent hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <category.icon className={`${category.color}`} size={28} />
                </div>
                <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-muted-foreground flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
