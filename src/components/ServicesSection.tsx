import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Users, Code, Zap, Shield, Globe } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI Integration",
    description: "Seamlessly integrate cutting-edge AI and machine learning solutions into your existing systems to automate processes and unlock new capabilities.",
    features: ["Custom AI Models", "LLM Integration", "Predictive Analytics"],
  },
  {
    icon: Users,
    title: "Talent Outsourcing",
    description: "Access our pool of vetted, world-class developers, designers, and engineers to scale your team quickly without the overhead.",
    features: ["Dedicated Teams", "Staff Augmentation", "Project-Based Hiring"],
  },
  {
    icon: Code,
    title: "Software Development",
    description: "End-to-end product development from ideation to deployment, building scalable and robust applications tailored to your needs.",
    features: ["Web & Mobile Apps", "Cloud Solutions", "API Development"],
  },
  {
    icon: Zap,
    title: "Process Automation",
    description: "Streamline your operations with intelligent automation solutions that reduce costs and increase efficiency across your organization.",
    features: ["Workflow Automation", "RPA Solutions", "System Integration"],
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Protect your digital assets with comprehensive security audits, implementation, and ongoing monitoring services.",
    features: ["Security Audits", "Compliance", "Data Protection"],
  },
  {
    icon: Globe,
    title: "Digital Transformation",
    description: "Guide your organization through comprehensive digital transformation with strategic consulting and implementation support.",
    features: ["Strategy Consulting", "Change Management", "Technology Roadmap"],
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-card p-8 group hover:border-primary/30 transition-all duration-500"
    >
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <service.icon className="w-7 h-7 text-primary" />
      </div>
      
      <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
        {service.title}
      </h3>
      
      <p className="text-muted-foreground mb-6 leading-relaxed">
        {service.description}
      </p>
      
      <div className="flex flex-wrap gap-2">
        {service.features.map((feature) => (
          <span
            key={feature}
            className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground"
          >
            {feature}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export const ServicesSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(190_100%_50%/0.05)_0%,transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">Our Services</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Comprehensive Solutions for
            <br />
            <span className="gradient-text">Modern Enterprises</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From AI integration to talent outsourcing, we provide everything you need to accelerate your digital growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
