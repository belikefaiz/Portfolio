import { ExternalLink, Github, Folder } from 'lucide-react';

const featuredProjects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management, secure payment processing, and an intuitive admin dashboard. Built with scalability in mind.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
    github: 'https://github.com',
    live: 'https://example.com',
    image: 'ecommerce',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative project management tool featuring real-time updates, drag-and-drop interfaces, and team collaboration features.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'Socket.io'],
    github: 'https://github.com',
    live: 'https://example.com',
    image: 'taskapp',
  },
  {
    title: 'AI Content Generator',
    description: 'An intelligent content creation platform leveraging AI to generate high-quality articles, social media posts, and marketing copy.',
    technologies: ['Python', 'FastAPI', 'React', 'OpenAI', 'MongoDB'],
    github: 'https://github.com',
    live: 'https://example.com',
    image: 'aigen',
  },
];

const otherProjects = [
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather application with location-based forecasts and interactive maps.',
    technologies: ['React', 'OpenWeather API', 'Mapbox'],
  },
  {
    title: 'Portfolio Generator',
    description: 'CLI tool to generate beautiful portfolio websites from a simple config file.',
    technologies: ['Node.js', 'Handlebars', 'SCSS'],
  },
  {
    title: 'Chat Application',
    description: 'Real-time messaging app with end-to-end encryption and group chat support.',
    technologies: ['Socket.io', 'Express', 'React'],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <span className="mono-text text-primary">03.</span>
            <h2 className="section-heading">Projects</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Featured Projects */}
          <div className="space-y-24 mb-24">
            {featuredProjects.map((project, index) => (
              <div
                key={project.title}
                className={`grid md:grid-cols-12 gap-4 items-center ${
                  index % 2 === 1 ? 'md:text-right' : ''
                }`}
              >
                <div
                  className={`md:col-span-7 ${
                    index % 2 === 1 ? 'md:order-2' : ''
                  }`}
                >
                  <div className="glass-card aspect-video rounded-xl overflow-hidden group hover-lift">
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent flex items-center justify-center">
                      <span className="text-6xl font-bold text-primary/30 group-hover:text-primary/50 transition-colors">
                        {project.image.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  className={`md:col-span-5 ${
                    index % 2 === 1 ? 'md:order-1' : ''
                  }`}
                >
                  <p className="mono-text text-primary text-sm mb-2">
                    Featured Project
                  </p>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    {project.title}
                  </h3>
                  <div className="glass-card p-6 rounded-xl mb-4 relative z-10">
                    <p className="text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                  <div
                    className={`flex flex-wrap gap-2 mb-4 ${
                      index % 2 === 1 ? 'md:justify-end' : ''
                    }`}
                  >
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="mono-text text-sm text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div
                    className={`flex gap-4 ${
                      index % 2 === 1 ? 'md:justify-end' : ''
                    }`}
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View source code"
                    >
                      <Github size={22} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View live site"
                    >
                      <ExternalLink size={22} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-12 text-foreground">
              Other Noteworthy Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <div
                  key={project.title}
                  className="glass-card p-6 hover-lift group cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-6">
                    <Folder className="text-primary" size={40} />
                    <div className="flex gap-3">
                      <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href="https://example.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="mono-text text-xs text-muted-foreground"
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
      </div>
    </section>
  );
};

export default ProjectsSection;
