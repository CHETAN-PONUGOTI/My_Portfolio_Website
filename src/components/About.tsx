import { GraduationCap, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <span className="text-accent font-semibold text-sm uppercase tracking-wide">About Me</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
              Know Me Better
            </h2>
          </div>

          <div className="space-y-8 animate-fade-in">
            <div className="bg-card rounded-2xl p-8 shadow-elegant border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-4">Who I Am</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                I am a Computer Science Graduate and Certified Full-Stack Developer with expertise in JavaScript, Node.js, ReactJS, Python, Java, ExpressJS, SQL, Numpy, Pandas, HTML, CSS, REST API, and MongoDB. Eager to secure a challenging role where I can independently design and develop robust web applications using my strong full-stack skills, leveraging AI-powered development tools solely for code enhancement, optimization, and refinement to deliver high-quality software solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card rounded-2xl p-8 shadow-elegant border border-border hover:shadow-accent transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <GraduationCap className="text-accent" size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">Education</h4>
                    <p className="text-muted-foreground font-semibold">Bachelor of Technology</p>
                    <p className="text-muted-foreground">Computer Science and Engineering</p>
                    <p className="text-accent font-medium">Vaagdevi College of Engineering, 2024</p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-elegant border border-border hover:shadow-accent transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Briefcase className="text-accent" size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">Experience</h4>
                    <p className="text-muted-foreground">Internships & Freelancing</p>
                    <p className="text-muted-foreground">Academic Projects</p>
                    <p className="text-accent font-medium">Full-Stack Development Focus</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
