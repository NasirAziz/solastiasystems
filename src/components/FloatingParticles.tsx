import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export const FloatingParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background: `radial-gradient(circle, hsl(190 100% 50% / 0.4) 0%, transparent 70%)`,
          }}
          animate={{
            y: [0, -100, -200, -100, 0],
            x: [0, 30, -30, 50, 0],
            opacity: [0, 0.6, 0.3, 0.6, 0],
            scale: [1, 1.5, 1, 1.2, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating orbs */}
      <motion.div
        className="absolute w-64 h-64 rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, hsl(190 100% 50% / 0.1) 0%, transparent 70%)",
          left: "10%",
          top: "20%",
        }}
        animate={{
          x: [0, 100, 50, -50, 0],
          y: [0, 50, 100, 50, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-96 h-96 rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, hsl(45 100% 60% / 0.05) 0%, transparent 70%)",
          right: "5%",
          bottom: "30%",
        }}
        animate={{
          x: [0, -80, -40, 40, 0],
          y: [0, -60, 60, -30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-48 h-48 rounded-full blur-2xl"
        style={{
          background: "radial-gradient(circle, hsl(220 100% 60% / 0.08) 0%, transparent 70%)",
          left: "60%",
          top: "10%",
        }}
        animate={{
          x: [0, 60, -60, 30, 0],
          y: [0, 80, 40, -40, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};
