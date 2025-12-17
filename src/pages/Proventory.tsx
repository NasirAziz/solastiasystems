import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FloatingParticles } from "@/components/FloatingParticles";
import { 
  Package, 
  Factory, 
  Ship, 
  Globe, 
  Wallet, 
  BarChart3, 
  ArrowRight, 
  CheckCircle2,
  Layers,
  Shield,
  Zap,
  Users
} from "lucide-react";
import proventoryDashboard from "@/assets/proventory-dashboard.png";

const modules = [
  {
    icon: Package,
    title: "Inventory Management",
    description: "Real-time stock tracking, SKU management, warehouse organization, and automated reorder points.",
    features: ["Multi-warehouse support", "Barcode scanning", "Stock alerts", "Batch tracking"]
  },
  {
    icon: Factory,
    title: "Production Module",
    description: "Complete production planning with BOM management, work orders, and quality control.",
    features: ["Bill of Materials", "Work order tracking", "Quality control", "Production scheduling"]
  },
  {
    icon: Ship,
    title: "Shipment Tracking",
    description: "End-to-end shipment visibility from supplier to customer with international logistics support.",
    features: ["Real-time tracking", "Carrier integration", "Customs documentation", "Delivery scheduling"]
  },
  {
    icon: Globe,
    title: "International Import",
    description: "Manage imports from multiple countries with customs tracking and multi-currency handling.",
    features: ["Country-wise tracking", "Customs clearance", "Duty calculation", "Supplier management"]
  },
  {
    icon: Wallet,
    title: "Multi-Currency",
    description: "Handle transactions in multiple currencies with automatic exchange rate updates.",
    features: ["Live exchange rates", "Currency conversion", "Multi-currency reports", "Payment reconciliation"]
  },
  {
    icon: BarChart3,
    title: "Financial Ledger",
    description: "Complete financial management with cash flow tracking, expenses, and detailed ledger.",
    features: ["Cash in/out tracking", "Expense categories", "Profit & loss", "Balance sheet"]
  }
];

const benefits = [
  { icon: Zap, title: "10x Faster Operations", description: "Automate manual tasks and reduce processing time" },
  { icon: Shield, title: "Enterprise Security", description: "Bank-grade security with role-based access control" },
  { icon: Layers, title: "Scalable Architecture", description: "Grows with your business from startup to enterprise" },
  { icon: Users, title: "Multi-User Support", description: "Collaborative workspace with audit trails" }
];

export default function Proventory() {
  const heroRef = useRef(null);
  const modulesRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const isModulesInView = useInView(modulesRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background relative">
      <FloatingParticles />
      <Navigation />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section ref={heroRef} className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(190_100%_50%/0.15)_0%,transparent_50%)]" />
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-6">
                  <Package className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Enterprise ERP Solution</span>
                </div>
                
                <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  <span className="gradient-text">Proventory</span>
                  <br />
                  Complete Business Management
                </h1>
                
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  An all-in-one ERP system for modern businesses. Manage inventory, production, 
                  international shipments, multi-currency transactions, and financial operations 
                  from a single powerful platform.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a href="#contact" className="btn-primary inline-flex items-center justify-center gap-2">
                    Request Demo
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a href="#modules" className="btn-secondary inline-flex items-center justify-center">
                    View Modules
                  </a>
                </div>

                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Cloud-based
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    On-premise option
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    24/7 Support
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/20">
                  <img 
                    src={proventoryDashboard} 
                    alt="Proventory Dashboard"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                </div>
                <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-3xl -z-10" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Bar */}
        <section className="py-12 bg-secondary/30 border-y border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center"
                >
                  <benefit.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Modules Section */}
        <section id="modules" ref={modulesRef} className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isModulesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">Comprehensive Modules</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4 mb-6">
                Everything You Need, <span className="gradient-text">Integrated</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Six powerful modules working together to give you complete control over your business operations.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {modules.map((module, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isModulesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="group relative p-8 bg-card/50 backdrop-blur-sm rounded-2xl border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative">
                    <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <module.icon className="w-7 h-7 text-primary" />
                    </div>
                    
                    <h3 className="font-heading text-xl font-bold mb-3">{module.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{module.description}</p>
                    
                    <ul className="space-y-2">
                      {module.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
          
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Schedule a personalized demo and see how Proventory can streamline your operations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/#contact" className="btn-primary inline-flex items-center justify-center gap-2">
                  Schedule Demo
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="mailto:sales@solastiasystems.com" className="btn-secondary inline-flex items-center justify-center">
                  Contact Sales
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
