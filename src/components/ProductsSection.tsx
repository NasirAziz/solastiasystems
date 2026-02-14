import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Package, Layers, Globe, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import proventoryImage from "@/assets/proventory-dashboard.png";

const products = [
  {
    id: "proventory",
    name: "Proventory",
    tagline: "Enterprise ERP & Inventory Management",
    description: "Complete business management solution with production, shipment tracking, multi-currency support, and financial modules.",
    image: proventoryImage,
    features: ["Inventory Management", "Production Module", "International Shipments", "Multi-Currency"],
    icon: Package,
    gradient: "from-primary to-accent",
    link: "/products/proventory"
  }
];

const upcomingProducts = [
  {
    icon: Layers,
    name: "Coming Soon",
    description: "AI-Powered Analytics Suite"
  },
  {
    icon: Globe,
    name: "Coming Soon", 
    description: "Global Compliance Manager"
  },
  {
    icon: TrendingUp,
    name: "Coming Soon",
    description: "Smart Forecasting Engine"
  }
];

export const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">Our Products</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4 mb-6">
            Enterprise-Grade <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Purpose-built software products designed to streamline your business operations and drive growth.
          </p>
        </motion.div>

        {/* Featured Product */}
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group mb-16"
          >
            <div className="relative bg-card/50 backdrop-blur-sm rounded-3xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-500">
              <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
                {/* Content */}
                <div className="flex flex-col justify-center order-2 lg:order-1">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <product.icon className="w-8 h-8 text-primary" />
                    <span className={`text-sm font-semibold bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}>
                      FLAGSHIP PRODUCT
                    </span>
                  </div>
                  <h3 className="font-heading text-3xl md:text-4xl font-bold mb-2">{product.name}</h3>
                  <p className="text-xl text-primary mb-4">{product.tagline}</p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{product.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {product.features.map((feature) => (
                      <span 
                        key={feature}
                        className="px-3 py-1 text-sm bg-secondary rounded-full text-foreground border border-border"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    to={product.link}
                    className="btn-primary inline-flex items-center justify-center gap-2 w-fit"
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>

                {/* Image */}
                <div className="relative order-1 lg:order-2">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 group-hover:shadow-primary/20 transition-shadow duration-500">
                    <img 
                      src={product.image} 
                      alt={`${product.name} Dashboard`}
                      className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                  </div>
                  {/* Glow Effect */}
                  <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Coming Soon Products
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-8"
        >
          <h3 className="font-heading text-2xl font-bold text-muted-foreground">More Products Coming Soon</h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {upcomingProducts.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              className="relative group p-6 bg-card/30 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-border transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <product.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{product.name}</p>
              <p className="text-foreground font-medium">{product.description}</p>
            </motion.div>
          ))}
        </div> */}
      </div>
    </section>
  );
};
