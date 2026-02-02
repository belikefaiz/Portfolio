import profilePlaceholder from '@/assets/profile-placeholder.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <span className="mono-text text-primary">01.</span>
            <h2 className="section-heading">About Me</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid md:grid-cols-3 gap-12 items-start">
            <div className="md:col-span-2 space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Hello! I'm Faiz, a first-year <span className="text-primary font-medium">B.Voc AI/ML</span> student 
                at <span className="text-primary font-medium">Nexcore Alliance (NIT)</span>, India. I'm a passionate 
                <span className="text-primary font-medium"> Full-Stack Developer</span> and 
                <span className="text-primary font-medium"> UI/UX Designer</span> who loves crafting beautiful, 
                functional digital experiences that make a real difference.
              </p>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                My journey began with curiosity about how digital products work—from pixel-perfect 
                interfaces to complex backend systems. I specialize in creating 
                <span className="text-primary font-medium"> intuitive user experiences</span> backed by 
                <span className="text-primary font-medium"> clean, maintainable code</span>. Whether it's 
                designing wireframes in Figma or building scalable React applications, I bring ideas to life.
              </p>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                I believe great software is the intersection of <span className="text-primary font-medium">aesthetics and functionality</span>. 
                I focus on user-centered design principles, responsive layouts, and modern development 
                practices to deliver experiences that users love.
              </p>

              <div className="pt-4">
                <p className="text-foreground font-medium mb-4">
                  Technologies & tools I work with:
                </p>
                <ul className="grid grid-cols-2 gap-2">
                  {['JavaScript (ES6+)', 'TypeScript', 'React & Next.js', 'Node.js & Express', 'Python & AI/ML', 'PostgreSQL & MongoDB', 'Figma & UI Design', 'Tailwind CSS'].map((tech) => (
                    <li key={tech} className="flex items-center gap-2 text-muted-foreground">
                      <span className="text-primary">▹</span>
                      <span className="mono-text text-sm">{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative group">
              <div className="relative z-10">
                <div className="aspect-square rounded-xl overflow-hidden glass-card p-1">
                  <img 
                    src={profilePlaceholder} 
                    alt="Faiz Ahmed Shaikh - Profile Photo"
                    className="w-full h-full rounded-lg object-cover"
                  />
                </div>
              </div>
              <div className="absolute inset-0 rounded-xl border-2 border-primary translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
