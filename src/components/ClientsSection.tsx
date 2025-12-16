import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const clients = [
  { name: "NVIDIA", logo: "NVIDIA" },
  { name: "BMW", logo: "BMW" },
  { name: "Microsoft", logo: "Microsoft" },
  { name: "Google", logo: "Google" },
  { name: "Amazon", logo: "Amazon" },
  { name: "Meta", logo: "Meta" },
  { name: "Tesla", logo: "Tesla" },
  { name: "Apple", logo: "Apple" },
  { name: "IBM", logo: "IBM" },
  { name: "Oracle", logo: "Oracle" },
  { name: "SAP", logo: "SAP" },
  { name: "Salesforce", logo: "Salesforce" },
];

export const ClientsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-primary/5 to-background" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium mb-4 block">Trusted By Industry Leaders</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Powering Innovation at
            <span className="gradient-text"> Fortune 500</span> Companies
          </h2>
        </motion.div>
      </div>

      {/* Infinite Scrolling Logos */}
      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        {/* First row - scrolling left */}
        <div className="flex gap-12 animate-scroll-left mb-8">
          {[...clients, ...clients].map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 glass-card px-10 py-6 flex items-center justify-center min-w-[180px] group hover:border-primary/30 transition-all duration-300"
            >
              <span className="font-heading text-xl font-bold text-muted-foreground group-hover:text-primary transition-colors duration-300">
                {client.logo}
              </span>
            </div>
          ))}
        </div>

        {/* Second row - scrolling right */}
        <div className="flex gap-12 animate-scroll-right">
          {[...clients.slice(6), ...clients.slice(0, 6), ...clients.slice(6), ...clients.slice(0, 6)].map((client, index) => (
            <div
              key={`${client.name}-reverse-${index}`}
              className="flex-shrink-0 glass-card px-10 py-6 flex items-center justify-center min-w-[180px] group hover:border-primary/30 transition-all duration-300"
            >
              <span className="font-heading text-xl font-bold text-muted-foreground group-hover:text-primary transition-colors duration-300">
                {client.logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
