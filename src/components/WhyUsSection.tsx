import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, ArrowUpRight } from "lucide-react";

const benefits = [
  {
    title: "Global Talent Pool",
    description: "Access to over 500+ pre-vetted engineers, developers, and AI specialists ready to join your projects.",
  },
  {
    title: "Enterprise-Grade Quality",
    description: "ISO-certified processes and rigorous quality assurance ensure deliverables meet the highest standards.",
  },
  {
    title: "Cost Efficiency",
    description: "Reduce development costs by up to 60% while maintaining exceptional quality and timelines.",
  },
  {
    title: "Rapid Scaling",
    description: "Scale your team from 1 to 100+ developers within weeks, not months.",
  },
  {
    title: "Time Zone Alignment",
    description: "Strategic teams positioned across time zones for seamless collaboration with US, Canada, and European clients.",
  },
  {
    title: "Proven AI Expertise",
    description: "Deep experience with OpenAI, Azure AI, AWS SageMaker, and custom ML model development.",
  },
];

export const WhyUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="section-padding relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(45_100%_60%/0.05)_0%,transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium mb-4 block">Why Choose Us</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              The Solastia
              <br />
              <span className="gradient-text-accent">Advantage</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We combine deep technical expertise with a commitment to excellence, 
              delivering solutions that drive real business outcomes for enterprises worldwide.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary inline-flex items-center gap-2">
                Talk to an Expert
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <div className="grid gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 flex gap-4 group hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
