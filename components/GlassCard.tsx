import React from "react";
import { motion } from "motion/react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export function GlassCard({
  children,
  className = "",
}: GlassCardProps) {
  return (
    <motion.div
      className={`
        relative overflow-hidden
        bg-white/5 backdrop-blur-lg
        border border-white/10
        rounded-2xl p-6
        shadow-[0_8px_32px_rgba(0,0,0,0.3)]
        transition-all duration-300
        ${className}
      `}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      whileHover={{
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderColor: "rgba(255, 255, 255, 0.2)",
        scale: 1.02,
      }}
    >
      {/* Glass reflection effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Shimmer effect on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ x: "-100%" }}
        whileHover={{
          x: "100%",
          transition: { duration: 0.6 },
        }}
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
        }}
      />

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}