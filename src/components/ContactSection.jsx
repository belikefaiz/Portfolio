import { Mail, MapPin, Phone } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="mono-text text-primary">04. What's Next?</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
            I'm currently open to new opportunities and collaborations. 
            Whether you have a question, a project idea, or just want to say hello, 
            I'd love to hear from you!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <div className="flex items-center gap-3 text-muted-foreground">
              <div className="p-3 glass-card rounded-lg">
                <Mail className="text-primary" size={20} />
              </div>
              <span>faiz@example.com</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <div className="p-3 glass-card rounded-lg">
                <MapPin className="text-primary" size={20} />
              </div>
              <span>Mumbai, India</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <div className="p-3 glass-card rounded-lg">
                <Phone className="text-primary" size={20} />
              </div>
              <span>+91 98765 43210</span>
            </div>
          </div>

          <a
            href="mailto:faiz@example.com"
            className="inline-flex px-10 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:opacity-90 transition-all hover-lift glow-effect"
          >
            Say Hello
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
