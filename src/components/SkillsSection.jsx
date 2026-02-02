import { Code2, Database, Layout, Server, Palette, Wrench, Lightbulb, Layers } from 'lucide-react';

const skills = [
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Crafting user-centered designs with focus on usability, accessibility, and visual hierarchy. From wireframes to high-fidelity prototypes.',
    technologies: ['Figma', 'Adobe XD', 'Prototyping', 'Design Systems'],
  },
  {
    icon: Layout,
    title: 'Frontend Development',
    description: 'Building pixel-perfect, responsive interfaces with smooth animations and optimal performance. Expert in component-based architecture.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Developing secure, scalable APIs and server-side logic. Proficient in RESTful design patterns and authentication systems.',
    technologies: ['Node.js', 'Express', 'Python', 'FastAPI'],
  },
  {
    icon: Database,
    title: 'Database & Storage',
    description: 'Designing efficient database schemas, writing optimized queries, and implementing caching strategies for high-performance apps.',
    technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase'],
  },
  {
    icon: Code2,
    title: 'Clean Code Practices',
    description: 'Writing maintainable, well-documented code following SOLID principles, design patterns, and industry best practices.',
    technologies: ['JavaScript', 'TypeScript', 'Python', 'Git'],
  },
  {
    icon: Lightbulb,
    title: 'AI & Machine Learning',
    description: 'Exploring intelligent systems, neural networks, and data-driven solutions. Building smart features into modern applications.',
    technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI'],
  },
  {
    icon: Layers,
    title: 'Full-Stack Integration',
    description: 'Seamlessly connecting frontend and backend systems. Expert in API design, state management, and real-time features.',
    technologies: ['REST APIs', 'GraphQL', 'WebSockets', 'OAuth'],
  },
  {
    icon: Wrench,
    title: 'DevOps & Deployment',
    description: 'Automating workflows, containerizing applications, and deploying to cloud platforms with CI/CD pipelines.',
    technologies: ['Docker', 'AWS', 'Vercel', 'GitHub Actions'],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <span className="mono-text text-primary">02.</span>
            <h2 className="section-heading">Skills & Expertise</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.title}
                className="glass-card p-6 hover-lift group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="text-primary" size={24} />
                </div>
                
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {skill.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4">
                  {skill.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary rounded-full text-xs mono-text text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
