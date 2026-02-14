import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, User, Mail, Building2, MessageSquare, Phone, Globe, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const countries = [
  "United States", "Canada", "United Kingdom", "Germany", "France", "Netherlands",
  "Switzerland", "Australia", "India",  "Japan", "Singapore", "Brazil", "Mexico",
  "Spain", "Italy", "Sweden", "Norway", "Denmark", "Finland", "Ireland", "Belgium",
  "Austria", "Poland", "Czech Republic", "Pakistan","Portugal", "New Zealand", "South Korea",
  "United Arab Emirates", "Saudi Arabia", "South Africa", "Argentina",
];

export const ContactForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [countryOpen, setCountryOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <section id="contact-form" className="section-padding relative overflow-hidden">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <CheckCircle className="w-12 h-12 text-primary" />
          </motion.div>
          <h2 className="font-heading text-4xl font-bold text-foreground mb-4">Thank You!</h2>
          <p className="text-xl text-muted-foreground">
            We've received your message and will get back to you within 24 hours.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact-form" className="section-padding relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(190_100%_50%/0.08)_0%,transparent_60%)]" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Info */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium mb-4 block">Get In Touch</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Start Your
              <br />
              <span className="gradient-text">Next Project?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Fill out the form and our team will reach out within 24 hours to discuss 
              how we can help transform your business.
            </p>
            {/* with AI and expert talent */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Global Coverage</div>
                  <div className="text-sm text-muted-foreground">US • Canada • Europe • APAC • Middle East • Africa</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Email Us Directly</div>
                  <a href="mailto:contact@solastiasystems.com" className="text-sm text-primary hover:underline">
                    contact@solastiasystems.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 md:p-10 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="pl-12 bg-secondary/50 border-border h-14 text-foreground placeholder:text-muted-foreground focus:border-primary"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="pl-12 bg-secondary/50 border-border h-14 text-foreground placeholder:text-muted-foreground focus:border-primary"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {/* Phone */}
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="pl-12 bg-secondary/50 border-border h-14 text-foreground placeholder:text-muted-foreground focus:border-primary"
                  />
                </div>

                {/* Company */}
                <div className="relative">
                  <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    className="pl-12 bg-secondary/50 border-border h-14 text-foreground placeholder:text-muted-foreground focus:border-primary"
                  />
                </div>
              </div>

              {/* Country - Searchable Dropdown */}
              <Popover open={countryOpen} onOpenChange={setCountryOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={countryOpen}
                    className={cn(
                      "w-full h-14 justify-start text-left font-normal bg-secondary/50 border-border hover:bg-secondary/70 hover:text-foreground",
                      !formData.country && "text-muted-foreground"
                    )}
                  >
                    <Globe className="w-5 h-5 mr-3 text-muted-foreground" />
                    {formData.country || "Select Country"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0 bg-card border-border" align="start">
                  <Command className="bg-transparent">
                    <CommandInput placeholder="Search country..." className="text-foreground" />
                    <CommandList>
                      <CommandEmpty>No country found.</CommandEmpty>
                      <CommandGroup className="max-h-64 overflow-auto">
                        {countries.map((country) => (
                          <CommandItem
                            key={country}
                            value={country}
                            onSelect={() => {
                              setFormData({ ...formData, country });
                              setCountryOpen(false);
                            }}
                            className="text-foreground hover:bg-secondary cursor-pointer"
                          >
                            {country}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>

              {/* Message */}
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-muted-foreground" />
                <Textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="pl-12 pt-3 bg-secondary/50 border-border text-foreground placeholder:text-muted-foreground focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full h-14 btn-primary text-lg font-semibold group"
              >
                Send Message
                <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                We respect your privacy. Your information will never be shared.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
