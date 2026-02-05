import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import heroProfile from '@/assets/hero-profile.jpg';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float animation-delay-400" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden ring-4 ring-primary/30 animate-fade-up opacity-0" style={{ animationDelay: '50ms', animationFillMode: 'forwards' }}>
            <img 
              src={heroProfile} 
              alt="Faiz Ahmed Shaikh"
              className="w-full h-full object-cover"
            />
          </div>
          
          <p className="mono-text text-primary mb-4 animate-fade-up opacity-0" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
            Hi, my name is
          </p>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 animate-fade-up opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            Faiz Ahmed <span className="text-gradient">Shaikh</span>
          </h1>
          
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-muted-foreground mb-8 animate-fade-up opacity-0" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
            I build things for the web.
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-up opacity-0" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
            I'm a passionate full-stack developer specializing in building exceptional 
            digital experiences. Currently focused on creating accessible, 
            human-centered products.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up opacity-0" style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}>
            <a
              href="#projects"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all hover-lift"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all"
            >
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 animate-fade-up opacity-0" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
            <a
              href="https://github.com/belikefaiz"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 duration-300"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/faiz-shaikh-b548a027a/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:faizsk297@gmail.com"
              className="p-3 text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 duration-300"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll to about section">
            <ArrowDown className="text-muted-foreground" size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;