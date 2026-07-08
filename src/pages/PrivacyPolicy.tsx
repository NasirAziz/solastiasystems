import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { FloatingParticles } from '@/components/FloatingParticles';
import { Shield } from 'lucide-react';
import { PRIVACY_POLICY_HTML } from '@/constants/legal';

export default function PrivacyPolicy() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: '-100px' });

	return (
		<div className="min-h-screen bg-background relative">
			<FloatingParticles />
			<Navigation />

			<main className="relative z-10">
				{/* Hero Section */}
				<section
					ref={ref}
					className="pt-32 pb-20 relative overflow-hidden"
				>
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

							<p className="text-muted-foreground text-lg">Last updated: July 8, 2026</p>
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
							className="glass-card p-8 md:p-12 legal-content"
							dangerouslySetInnerHTML={{ __html: PRIVACY_POLICY_HTML }}
						/>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
}
