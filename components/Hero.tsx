import React from "react";
import { Brain, Cpu, Zap } from "lucide-react";
import { GlassCard } from "./GlassCard";
import { motion } from "motion/react";

interface HeroProps {
  onStartDiagnosis: () => void;
}

export function Hero({ onStartDiagnosis }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Floating orbs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-blue-500/30 rounded-full blur-[100px]"
        animate={{
          y: [0, 30, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/30 rounded-full blur-[100px]"
        animate={{
          y: [0, -40, 0],
          x: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-7xl w-full relative z-10">
        <div className="text-center mb-12">
          <motion.div
            className="flex items-center justify-center mb-6"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.1,
            }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-blue-500 blur-3xl opacity-50"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Brain
                  className="w-20 h-20 text-blue-400 relative z-10"
                  strokeWidth={1.5}
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.h1
            className="text-6xl mb-6 text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              className="inline-block"
              animate={{
                backgroundPosition: [
                  "0% 50%",
                  "100% 50%",
                  "0% 50%",
                ],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #fff, #60a5fa, #a78bfa, #fff)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Neuro-Symbolic AI
            </motion.span>
            <motion.span
              className="block text-blue-400 mt-2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Hardware Diagnostics
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl text-slate-300 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            The world&apos;s first hybrid AI system combining neural
            language understanding with symbolic reasoning for
            precision computer hardware fault diagnosis
          </motion.p>

          <motion.div
            className="flex items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {[
              { icon: Cpu, label: "FastAPI Backend" },
              { icon: Brain, label: "Claude 3.5 Sonnet" },
              { icon: Zap, label: "Next.js 16" },
            ].map((item, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && (
                  <div className="w-px h-6 bg-slate-600" />
                )}
                <motion.div
                  className="flex items-center gap-2 text-slate-400"
                  whileHover={{ scale: 1.05, color: "#fff" }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                  }}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </motion.div>
              </React.Fragment>
            ))}
          </motion.div>

          <motion.button
            onClick={onStartDiagnosis}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-lg relative overflow-hidden group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500"
              initial={{ x: "100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">
              Start Diagnosis
            </span>
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100"
              style={{
                boxShadow: "0 0 40px rgba(59,130,246,0.7)",
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {[
            {
              icon: Brain,
              title: "Neural Layer",
              desc: "Advanced LLM processes natural language descriptions, translating vague symptoms into structured data",
              gradient: "from-blue-500/20 to-cyan-500/20",
              iconColor: "text-blue-400",
            },
            {
              icon: Cpu,
              title: "Symbolic Layer",
              desc: "Deterministic inference engine uses forward chaining with certainty factors for logical deduction",
              gradient: "from-purple-500/20 to-pink-500/20",
              iconColor: "text-purple-400",
            },
            {
              icon: Zap,
              title: "Audit Trail",
              desc: "Complete diagnostic reasoning path with confidence scores and repair recommendations",
              gradient: "from-green-500/20 to-emerald-500/20",
              iconColor: "text-green-400",
            },
          ].map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 1.4 + idx * 0.1,
              }}
              whileHover={{ y: -8 }}
            >
              <GlassCard>
                <motion.div
                  className="flex items-center gap-3 mb-4"
                  whileHover={{ x: 5 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                  }}
                >
                  <motion.div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${card.gradient} flex items-center justify-center`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <card.icon
                      className={`w-6 h-6 ${card.iconColor}`}
                    />
                  </motion.div>
                  <h3 className="text-xl text-white">
                    {card.title}
                  </h3>
                </motion.div>
                <p className="text-slate-300">{card.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}