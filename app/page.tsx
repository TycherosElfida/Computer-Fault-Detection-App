"use client";

import React, { useState, useMemo } from "react";
import { Hero } from "@/components/Hero";
import { DiagnosticInterface } from "@/components/DiagnosticInterface";
import { ArchitectureSection } from "@/components/ArchitectureSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { AboutSection } from "@/components/AboutSection";
import { Navigation } from "@/components/Navigation";
import { motion, AnimatePresence } from "motion/react";

export default function Home() {
  const [showDiagnostic, setShowDiagnostic] = useState(false);

  const particles = useMemo(
    () =>
      [...Array(20)].map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 3 + Math.random() * 2,
        delay: Math.random() * 2,
      })),
    []
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Animated background grid */}
      <motion.div
        className="fixed inset-0 bg-[linear-gradient(rgba(30,58,138,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(30,58,138,0.2)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"
        animate={{
          backgroundPosition: ["0px 0px", "50px 50px"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating particles */}
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="fixed w-1 h-1 bg-blue-400/30 rounded-full"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
          }}
        />
      ))}

      <div className="relative z-10">
        <AnimatePresence mode="wait">
          {!showDiagnostic ? (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Navigation />
              <Hero
                onStartDiagnosis={() => setShowDiagnostic(true)}
              />
              <ArchitectureSection />
              <FeaturesSection />
              <AboutSection />
            </motion.div>
          ) : (
            <motion.div
              key="diagnostic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <DiagnosticInterface
                onBack={() => setShowDiagnostic(false)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
