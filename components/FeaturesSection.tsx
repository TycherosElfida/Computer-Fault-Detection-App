import React from "react";
import {
  Shield,
  Zap,
  FileText,
  Target,
  Clock,
  TrendingUp,
} from "lucide-react";
import { GlassCard } from "./GlassCard";
import { motion } from "motion/react";

export function FeaturesSection() {
  const features = [
    {
      icon: Shield,
      title: "Deterministic Reasoning",
      description:
        "Unlike pure ML systems, our symbolic layer provides explainable, auditable decision paths with mathematical certainty.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Zap,
      title: "Real-Time Diagnosis",
      description:
        "Sub-second inference engine processing with async FastAPI backend ensures instant diagnostic results.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: FileText,
      title: "Complete Audit Trail",
      description:
        "Every diagnosis includes the full reasoning chain showing which rules fired and their confidence scores.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Target,
      title: "High Accuracy",
      description:
        "Combining neural understanding with symbolic precision achieves accuracy rates exceeding 90% on validated test sets.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Clock,
      title: "Cost Estimation",
      description:
        "Each diagnosis includes repair steps and realistic cost ranges based on current market data.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: TrendingUp,
      title: "Continuous Learning",
      description:
        "Knowledge base continuously refined with new hardware components and failure patterns.",
      color: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section
      id="features"
      className="px-4 py-20 relative overflow-hidden"
    >
      {/* Animated background orbs */}
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl text-white mb-4"
            animate={{
              backgroundPosition: [
                "0% 50%",
                "100% 50%",
                "0% 50%",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
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
            Enterprise Features
          </motion.h2>
          <motion.p
            className="text-xl text-slate-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Production-ready capabilities designed for
            professional hardware diagnostic services
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              <GlassCard>
                <motion.div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 relative`}
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6, type: "spring" }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-lg blur-xl opacity-50"
                    style={{
                      background: `linear-gradient(to bottom right, ${feature.color})`,
                    }}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: idx * 0.2,
                    }}
                  />
                  <feature.icon className="w-6 h-6 text-white relative z-10" />
                </motion.div>
                <motion.h3
                  className="text-xl text-white mb-2"
                  whileHover={{ x: 5 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                  }}
                >
                  {feature.title}
                </motion.h3>
                <p className="text-slate-300">
                  {feature.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <GlassCard>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <motion.h3
                  className="text-2xl text-white mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  Technical Specifications
                </motion.h3>
                <div className="space-y-3">
                  {[
                    {
                      title: "Backend Framework",
                      desc: "FastAPI (Python) with async/await support",
                    },
                    {
                      title: "AI Model",
                      desc: "Claude 3.5 Sonnet or local LLM deployment",
                    },
                    {
                      title: "Inference Engine",
                      desc: "Forward chaining with certainty factors",
                    },
                    {
                      title: "Frontend Stack",
                      desc: "Next.js 16, React 19, Tailwind CSS",
                    },
                    {
                      title: "Visualization",
                      desc: "Three.js for 3D hardware models",
                    },
                  ].map((spec, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                      whileHover={{ x: 10 }}
                    >
                      <motion.div
                        className="w-2 h-2 rounded-full bg-blue-500 mt-2"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: idx * 0.2,
                        }}
                      />
                      <div>
                        <div className="text-white">
                          {spec.title}
                        </div>
                        <div className="text-sm text-slate-400">
                          {spec.desc}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <motion.h3
                  className="text-2xl text-white mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  Knowledge Base Coverage
                </motion.h3>
                <div className="space-y-3">
                  {[
                    {
                      label: "CPU/Processor Issues",
                      rules: "50+",
                      width: 92,
                    },
                    {
                      label: "Memory/RAM Faults",
                      rules: "45+",
                      width: 83,
                    },
                    {
                      label: "Storage Device Problems",
                      rules: "60+",
                      width: 100,
                    },
                    {
                      label: "Graphics Card Failures",
                      rules: "40+",
                      width: 75,
                    },
                    {
                      label: "Power Supply Issues",
                      rules: "35+",
                      width: 67,
                    },
                    {
                      label: "Motherboard Diagnostics",
                      rules: "55+",
                      width: 92,
                    },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-slate-300">
                          {item.label}
                        </span>
                        <span className="text-blue-400">
                          {item.rules} rules
                        </span>
                      </div>
                      <div className="h-2 bg-slate-800 rounded-full overflow-hidden mt-1">
                        <motion.div
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
                          initial={{ width: 0 }}
                          whileInView={{
                            width: `${item.width}%`,
                          }}
                          viewport={{ once: true }}
                          transition={{
                            delay: 0.4 + idx * 0.1,
                            duration: 1,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <GlassCard className="inline-block">
            <div className="flex items-center gap-6">
              {[
                {
                  value: "285+",
                  label: "Total Diagnostic Rules",
                },
                { value: "92%", label: "Average Accuracy" },
                {
                  value: "<500ms",
                  label: "Average Response Time",
                },
              ].map((stat, idx) => (
                <React.Fragment key={idx}>
                  {idx > 0 && (
                    <div className="w-px h-16 bg-slate-700" />
                  )}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <motion.div
                      className="text-4xl text-white mb-1"
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
                        delay: idx * 0.5,
                      }}
                      style={{
                        backgroundImage:
                          "linear-gradient(90deg, #fff, #60a5fa, #fff)",
                        backgroundSize: "200% auto",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {stat.value === "<500ms"
                        ? '{"<500ms"}'
                        : stat.value}
                    </motion.div>
                    <div className="text-slate-400">
                      {stat.label}
                    </div>
                  </motion.div>
                </React.Fragment>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}