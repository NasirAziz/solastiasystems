import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FloatingParticles } from "@/components/FloatingParticles";
import { FileText, Scale, AlertTriangle, CheckCircle, Mail, Calendar, Shield } from "lucide-react";

export default function TermsOfService() {
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
                <Scale className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Legal Document</span>
              </div>
              
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Terms of <span className="gradient-text">Service</span>
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
                  Welcome to Solastia Systems. These Terms of Service ("Terms") govern your access to and use of our website, services, products, and applications (collectively, the "Services") provided by Solastia Systems ("we," "us," or "our"). By accessing or using our Services, you agree to be bound by these Terms. If you disagree with any part of these Terms, then you may not access the Services.
                </p>
              </div>

              {/* Acceptance of Terms */}
              <div>
                <h2 className="font-heading text-2xl font-bold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  Acceptance of Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you are entering into these Terms on behalf of a company or other legal entity, you represent that you have the authority to bind such entity to these Terms.
                </p>
              </div>

              {/* Description of Services */}
              <div>
                <h2 className="font-heading text-2xl font-bold mb-4">Description of Services</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Solastia Systems provides:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>AI integration and consulting services</li>
                  <li>Talent outsourcing and dedicated development teams</li>
                  <li>Software development and digital transformation solutions</li>
                  <li>Enterprise software products including Proventory ERP system</li>
                  <li>Technical support and maintenance services</li>
                  <li>Related professional services</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  We reserve the right to modify, suspend, or discontinue any part of our Services at any time, with or without notice.
                </p>
              </div>

              {/* User Accounts */}
              <div>
                <h2 className="font-heading text-2xl font-bold mb-4">User Accounts</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  To access certain features of our Services, you may be required to create an account. When creating an account, you agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain and promptly update your account information</li>
                  <li>Maintain the security of your password and identification</li>
                  <li>Accept all responsibility for activities that occur under your account</li>
                  <li>Notify us immediately of any unauthorized use of your account</li>
                </ul>
              </div>

              {/* Acceptable Use */}
              <div>
                <h2 className="font-heading text-2xl font-bold mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-primary" />
                  Acceptable Use
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  You agree not to use our Services to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Violate any applicable laws, regulations, or third-party rights</li>
                  <li>Transmit any malicious code, viruses, or harmful data</li>
                  <li>Attempt to gain unauthorized access to our systems or networks</li>
                  <li>Interfere with or disrupt the integrity or performance of our Services</li>
                  <li>Use automated systems to access our Services without permission</li>
                  <li>Copy, modify, or create derivative works of our Services</li>
                  <li>Reverse engineer, decompile, or disassemble our software</li>
                  <li>Remove or alter any proprietary notices or labels</li>
                  <li>Use our Services for any illegal or unauthorized purpose</li>
                </ul>
              </div>

              {/* Intellectual Property */}
              <div>
                <h2 className="font-heading text-2xl font-bold mb-4">Intellectual Property Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  All content, features, and functionality of our Services, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, and software, are the exclusive property of Solastia Systems or its licensors and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Services without our prior written consent.
                </p>
              </div>

              {/* Payment Terms */}
              <div>
                <h2 className="font-heading text-2xl font-bold mb-4">Payment Terms</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  For paid Services:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Fees are specified in your service agreement or order form</li>
                  <li>Payment terms are as agreed upon in your contract</li>
                  <li>All fees are non-refundable unless otherwise specified</li>
                  <li>We reserve the right to change our pricing with prior notice</li>
                  <li>Late payments may incur interest charges and service suspension</li>
                  <li>You are responsible for any taxes applicable to your use of our Services</li>
                </ul>
              </div>

              {/* Service Level Agreements */}
              <div>
                <h2 className="font-heading text-2xl font-bold mb-4">Service Level Agreements</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Specific service level agreements, uptime guarantees, and support terms will be detailed in your individual service agreement or contract. We strive to provide reliable and high-quality services but do not guarantee that our Services will be uninterrupted, secure, or error-free.
                </p>
              </div>

              {/* Data and Privacy */}
              <div>
                <h2 className="font-heading text-2xl font-bold mb-4">Data and Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your use of our Services is also governed by our Privacy Policy. By using our Services, you consent to the collection and use of information in accordance with our Privacy Policy. We implement industry-standard security measures to protect your data, but you acknowledge that no method of transmission over the Internet is 100% secure.
                </p>
              </div>

              {/* Limitation of Liability */}
              <div>
                <h2 className="font-heading text-2xl font-bold mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-primary" />
                  Limitation of Liability
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND</li>
                  <li>WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT</li>
                  <li>WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES</li>
                  <li>OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE TWELVE MONTHS PRIOR TO THE CLAIM</li>
                  <li>WE ARE NOT RESPONSIBLE FOR ANY LOSS OR DAMAGE RESULTING FROM YOUR USE OF OUR SERVICES</li>
                </ul>
              </div>

              {/* Indemnification */}
              <div>
                <h2 className="font-heading text-2xl font-bold mb-4">Indemnification</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You agree to indemnify, defend, and hold harmless Solastia Systems, its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with your access to or use of our Services, your violation of these Terms, or your violation of any rights of another.
                </p>
              </div>

              {/* Termination */}
              <div>
                <h2 className="font-heading text-2xl font-bold mb-4">Termination</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  We may terminate or suspend your access to our Services immediately, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Your right to use the Services will immediately cease</li>
                  <li>We may delete your account and data, subject to our data retention policies</li>
                  <li>All provisions of these Terms that by their nature should survive termination shall survive</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  You may terminate your account at any time by contacting us or using account deletion features, if available.
                </p>
              </div>

              {/* Governing Law */}
              <div>
                <h2 className="font-heading text-2xl font-bold mb-4">Governing Law and Dispute Resolution</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Solastia Systems operates, without regard to its conflict of law provisions. Any disputes arising out of or relating to these Terms or our Services shall be resolved through binding arbitration or in the courts of competent jurisdiction, as specified in your service agreement.
                </p>
              </div>

              {/* Changes to Terms */}
              <div>
                <h2 className="font-heading text-2xl font-bold mb-4 flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-primary" />
                  Changes to Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify or replace these Terms at any time at our sole discretion. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Services after those revisions become effective, you agree to be bound by the revised terms.
                </p>
              </div>

              {/* Severability */}
              <div>
                <h2 className="font-heading text-2xl font-bold mb-4">Severability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Services and supersede and replace any prior agreements.
                </p>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="font-heading text-2xl font-bold mb-4 flex items-center gap-2">
                  <Mail className="w-6 h-6 text-primary" />
                  Contact Information
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-secondary/50 p-6 rounded-lg space-y-2">
                  <p className="text-foreground font-semibold">Solastia Systems</p>
                  <p className="text-muted-foreground">
                    Email: <a href="mailto:legal@solastiasystems.com" className="text-primary hover:underline">legal@solastiasystems.com</a>
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
