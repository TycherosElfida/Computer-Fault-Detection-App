import React from "react";
import {
  Network,
  Database,
  Layers,
  GitBranch,
} from "lucide-react";
import { GlassCard } from "./GlassCard";
import { motion } from "motion/react";

export function ArchitectureSection() {
  return (
    <section
      id="architecture"
      className="px-4 py-20 relative overflow-hidden"
    >
      {/* Floating background elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
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
            Hybrid Architecture
          </motion.h2>
          <motion.p
            className="text-xl text-slate-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            The fusion of neural flexibility and symbolic
            precision creates an unparalleled diagnostic system
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {[
            {
              icon: Network,
              title: "Neural Layer",
              subtitle:
                'The "Ears" - Natural Language Processing',
              gradient: "from-blue-500 to-cyan-500",
              items: [
                {
                  title: "LLM Integration",
                  desc: "Powered by Claude 3.5 Sonnet, the neural layer interprets free-form user descriptions and extracts structured symptom data with contextual understanding.",
                },
                {
                  title: "Symptom Extraction",
                  desc: "Advanced NLP algorithms identify key indicators from natural language, converting subjective descriptions into objective diagnostic markers.",
                },
                {
                  title: "Semantic Analysis",
                  desc: "Understanding intent and context beyond keywords, recognizing patterns in user descriptions that indicate specific hardware failure modes.",
                },
              ],
            },
            {
              icon: Database,
              title: "Symbolic Layer",
              subtitle:
                'The "Brain" - Logical Reasoning Engine',
              gradient: "from-purple-500 to-pink-500",
              items: [
                {
                  title: "Forward Chaining",
                  desc: "Deterministic inference engine applies expert rules sequentially, building a logical chain from symptoms to root cause diagnosis.",
                },
                {
                  title: "Certainty Factors",
                  desc: "Mathematical confidence scoring (0-1 scale) provides quantifiable certainty for each inference step and final diagnosis.",
                },
                {
                  title: "Knowledge Base",
                  desc: "Extensive rule library encoding decades of hardware diagnostic expertise, continuously refined and validated by domain experts.",
                },
              ],
            },
          ].map((layer, layerIdx) => (
            <motion.div
              key={layerIdx}
              initial={{
                opacity: 0,
                x: layerIdx === 0 ? -50 : 50,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: layerIdx * 0.2,
              }}
            >
              <GlassCard>
                <motion.div
                  className="flex items-center gap-3 mb-6"
                  whileHover={{ x: 10 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                  }}
                >
                  <motion.div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${layer.gradient} flex items-center justify-center`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <layer.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl text-white">
                      {layer.title}
                    </h3>
                    <p className="text-sm text-slate-400">
                      {layer.subtitle}
                    </p>
                  </div>
                </motion.div>

                <div className="space-y-4">
                  {layer.items.map((item, itemIdx) => (
                    <motion.div
                      key={itemIdx}
                      className="bg-slate-800/50 rounded-lg p-4 relative overflow-hidden group"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.3 + itemIdx * 0.1,
                      }}
                      whileHover={{
                        backgroundColor:
                          "rgba(30, 41, 59, 0.7)",
                      }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                      <h4 className="text-white mb-2 relative z-10">
                        {item.title}
                      </h4>
                      <p className="text-sm text-slate-300 relative z-10">
                        {item.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <GlassCard>
            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <GitBranch className="w-7 h-7 text-white" />
              </motion.div>
              <h3 className="text-2xl text-white">
                Processing Pipeline
              </h3>
            </motion.div>

            <div className="relative">
              <div className="flex items-center justify-between">
                {[
                  {
                    label: "Natural Language Input",
                    icon: "📝",
                  },
                  { label: "Neural Processing", icon: "🧠" },
                  { label: "Symptom Extraction", icon: "🔍" },
                  { label: "Rule Application", icon: "⚙️" },
                  {
                    label: "Certainty Calculation",
                    icon: "📊",
                  },
                  { label: "Diagnosis Output", icon: "✅" },
                ].map((step, idx, arr) => (
                  <React.Fragment key={idx}>
                    <motion.div
                      className="flex flex-col items-center gap-2 flex-1"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.3 + idx * 0.1,
                        type: "spring",
                        stiffness: 200,
                      }}
                    >
                      <motion.div
                        className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center text-2xl relative"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                        }}
                      >
                        <motion.div
                          className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 blur-xl"
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.5, 0.8, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: idx * 0.3,
                          }}
                        />
                        <span className="relative z-10">
                          {step.icon}
                        </span>
                      </motion.div>
                      <span className="text-xs text-slate-300 text-center">
                        {step.label}
                      </span>
                    </motion.div>
                    {idx < arr.length - 1 && (
                      <motion.div
                        className="flex-shrink-0 w-8 h-px bg-gradient-to-r from-blue-500 to-purple-500"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.4 + idx * 0.1,
                          duration: 0.5,
                        }}
                        style={{ originX: 0 }}
                      />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </GlassCard>
        </motion.div>

        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {[
            {
              icon: Layers,
              title: "FastAPI Backend",
              desc: "High-performance async Python framework ensures sub-second response times with efficient concurrent processing.",
              gradient: "from-blue-500/10",
              borderColor: "border-blue-500/20",
              iconColor: "text-blue-400",
            },
            {
              icon: Database,
              title: "Domain-Driven Design",
              desc: "Clean architecture separates business logic, ensuring maintainability, testability, and expert system extensibility.",
              gradient: "from-purple-500/10",
              borderColor: "border-purple-500/20",
              iconColor: "text-purple-400",
            },
            {
              icon: Network,
              title: "Next.js Frontend",
              desc: "React 19 with Next.js 16 delivers cutting-edge UI performance with server components and streaming.",
              gradient: "from-green-500/10",
              borderColor: "border-green-500/20",
              iconColor: "text-green-400",
            },
          ].map((tech, idx) => (
            <motion.div
              key={idx}
              className={`bg-gradient-to-br ${tech.gradient} to-transparent border ${tech.borderColor} rounded-xl p-6 relative overflow-hidden group`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              whileHover={{
                y: -5,
                borderColor: "rgba(255, 255, 255, 0.3)",
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.8 }}
              />
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <tech.icon
                  className={`w-10 h-10 ${tech.iconColor} mb-4`}
                />
              </motion.div>
              <h4 className="text-white text-xl mb-2">
                {tech.title}
              </h4>
              <p className="text-slate-300 text-sm">
                {tech.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}