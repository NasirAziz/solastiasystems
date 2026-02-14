import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FloatingParticles } from "@/components/FloatingParticles";
import { Shield, Lock, Eye, FileText, Mail, Calendar } from "lucide-react";

export default function PrivacyPolicy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background relative">
      <FloatingParticles />
      <Navigation />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section ref={ref} className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl" />
          
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-6">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Legal Document</span>
              </div>
              
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Privacy <span className="gradient-text">Policy</span>
              </h1>
              
              <p className="text-muted-foreground text-lg">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="pb-24">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 md:p-12 space-y-8"
            >
              {/* Introduction */}
              <div>
                <h2 className="font-heading text-2xl font-bold mb-4 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-primary" />
                  Introduction
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Solastia Systems ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
                </p>
              </div>

              {/* Information We Collect */}
              <div>
                <h2 className="font-heading text-2xl font-bold mb-4 flex items-center gap-2">
                  <Eye className="w-6 h-6 text-primary" />
                  Information We Collect
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Personal Information</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We may collect personal information that you voluntarily provide to us when you:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground ml-4">
                      <li>Register for an account or use our services</li>
                      <li>Contact us through our website, email, or phone</li>
                      <li>Subscribe to our newsletter or marketing communications</li>
                      <li>Request a demo or consultation</li>
                      <li>Participate in surveys or feedback forms</li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-3">
                      This information may include your name, email address, phone number, company name, job title, and any other information you choose to provide.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Automatically Collected Information</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      When you visit our website, we automatically collect certain information about your device, including:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground ml-4">
                      <li>IP address and location data</li>
                      <li>Browser type and version</li>
                      <li>Operating system</li>
                      <li>Pages visited and time spent on pages</li>
                      <li>Referring website addresses</li>
                      <li>Device identifiers and usage data</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* How We Use Your Information */}
              <div>
                <h2 className="font-heading text-2xl font-bold mb-4 flex items-center gap-2">
                  <Lock className="w-6 h-6 text-primary" />
                  How We Use Your Information
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  We use the information we collect for various purposes, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>To provide, maintain, and improve our services</li>
                  <li>To process your requests and transactions</li>
                  <li>To communicate with you about our services, updates, and promotional offers</li>
                  <li>To respond to your inquiries and provide customer support</li>
                  <li>To analyze usage patterns and improve user experience</li>
                  <li>To detect, prevent, and address technical issues and security threats</li>
                  <li>To comply with legal obligations and enforce our terms of service</li>
                  <li>To conduct research and analytics to improve our business operations</li>
                </ul>
              </div>

              {/* Information Sharing and Disclosure */}
              <div>
                <h2 className="font-heading text-2xl font-bold mb-4">Information Sharing and Disclosure</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website, conducting business, or serving our users, provided they agree to keep this information confidential.</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
                  <li><strong>Legal Requirements:</strong> We may disclose your information if required by law or in response to valid requests by public authorities.</li>
                  <li><strong>Protection of Rights:</strong> We may disclose information to protect our rights, privacy, safety, or property, or that of our users or others.</li>
                </ul>
              </div>

              {/* Data Security */}
              <div>
                <h2 className="font-heading text-2xl font-bold mb-4">Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure servers, access controls, and regular security assessments. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              {/* Your Rights */}
              <div>
                <h2 className="font-heading text-2xl font-bold mb-4">Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Depending on your location, you may have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li><strong>Access:</strong> Request access to your personal information</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Objection:</strong> Object to processing of your personal information</li>
                  <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                  <li><strong>Withdrawal:</strong> Withdraw consent where processing is based on consent</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
                </p>
              </div>

              {/* Cookies and Tracking Technologies */}
              <div>
                <h2 className="font-heading text-2xl font-bold mb-4">Cookies and Tracking Technologies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
                </p>
              </div>

              {/* International Data Transfers */}
              <div>
                <h2 className="font-heading text-2xl font-bold mb-4">International Data Transfers</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ. By using our services, you consent to the transfer of your information to facilities located in the United States, Canada, Europe, APAC, Middle East, and Africa, where we operate.
                </p>
              </div>

              {/* Children's Privacy */}
              <div>
                <h2 className="font-heading text-2xl font-bold mb-4">Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
                </p>
              </div>

              {/* Changes to This Privacy Policy */}
              <div>
                <h2 className="font-heading text-2xl font-bold mb-4 flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-primary" />
                  Changes to This Privacy Policy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                </p>
              </div>

              {/* Contact Us */}
              <div>
                <h2 className="font-heading text-2xl font-bold mb-4 flex items-center gap-2">
                  <Mail className="w-6 h-6 text-primary" />
                  Contact Us
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-secondary/50 p-6 rounded-lg space-y-2">
                  <p className="text-foreground font-semibold">Solastia Systems</p>
                  <p className="text-muted-foreground">
                    Email: <a href="mailto:privacy@solastiasystems.com" className="text-primary hover:underline">privacy@solastiasystems.com</a>
                  </p>
                  <p className="text-muted-foreground">
                    Phone: <a href="tel:+923120828136" className="text-primary hover:underline">+92 (312) 0828136</a>
                  </p>
                  <p className="text-muted-foreground">
                    General Contact: <a href="mailto:contact@solastiasystems.com" className="text-primary hover:underline">contact@solastiasystems.com</a>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
