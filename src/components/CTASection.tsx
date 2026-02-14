import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="glass-card p-12 md:p-16 text-center glow-effect"
        >
          <span className="text-primary font-medium mb-4 block">Ready to Transform?</span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Let's Build Something
            <br />
            <span className="gradient-text">Extraordinary</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Whether you need AI expertise, dedicated development teams, or end-to-end solutions, 
            we're ready to help you achieve your goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="mailto:contact@solastiasystems.com"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              Start a Conversation
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center justify-center"
            >
              Schedule a Call
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8 pt-10 border-t border-border">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div className="text-sm text-muted-foreground">Email Us</div>
              <a href="mailto:contact@solastiasystems.com" className="text-foreground font-medium hover:text-primary transition-colors">
                contact@solastiasystems.com
              </a>
            </div>
            
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div className="text-sm text-muted-foreground">Call Us</div>
              <a href="tel:+1234567890" className="text-foreground font-medium hover:text-primary transition-colors">
                +92 (312) 0828136
              </a>
              <a href="tel:+1234567890" className="text-foreground font-medium hover:text-primary transition-colors">
                +92 (302) 5988692
              </a>
            </div>
            
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div className="text-sm text-muted-foreground">Global Coverage</div>
              <span className="text-foreground font-medium">
                US • Canada • Europe • APAC • Middle East • Africa
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
