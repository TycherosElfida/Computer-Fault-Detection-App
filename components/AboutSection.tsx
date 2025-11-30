import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  GraduationCap,
  Code2,
  Sparkles,
} from "lucide-react";
import { GlassCard } from "./GlassCard";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

export function AboutSection() {
  const developers = [
    {
      name: "Developer One",
      role: "AI & Backend Engineer",
      university: "Computer Science Student",
      image:
        "https://images.unsplash.com/photo-1600178572204-6ac8886aae63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHN0dWRlbnR8ZW58MXx8fHwxNzY0Mzk4MDk1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      skills: ["Python", "FastAPI", "Machine Learning"],
      github: "#",
      linkedin: "#",
      email: "dev1@example.com",
    },
    {
      name: "Developer Two",
      role: "Frontend & UI/UX Engineer",
      university: "Software Engineering Student",
      image:
        "https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBjb2Rpbmd8ZW58MXx8fHwxNzY0MzQ0NzEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      skills: ["React", "Next.js", "Tailwind CSS"],
      github: "#",
      linkedin: "#",
      email: "dev2@example.com",
    },
    {
      name: "Developer Three",
      role: "Knowledge Engineer",
      university: "AI & Data Science Student",
      image:
        "https://images.unsplash.com/photo-1663535067514-66386c117b6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY0NDUzNzYzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      skills: ["Expert Systems", "Logic Programming", "NLP"],
      github: "#",
      linkedin: "#",
      email: "dev3@example.com",
    },
  ];

  return (
    <section
      className="px-4 py-20 relative overflow-hidden"
      id="about"
    >
      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px]"
        animate={{
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
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
          <motion.div
            className="flex items-center justify-center gap-2 mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 200,
              delay: 0.2,
            }}
          >
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <GraduationCap className="w-8 h-8 text-blue-400" />
            </motion.div>
            <motion.div
              animate={{
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Sparkles className="w-6 h-6 text-purple-400" />
            </motion.div>
          </motion.div>
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
            About the Development Team
          </motion.h2>
          <motion.p
            className="text-xl text-slate-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            A portfolio project by passionate university
            students exploring the intersection of AI, expert
            systems, and modern web development
          </motion.p>
        </motion.div>

        <GlassCard className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl text-white mb-4">
                Our Mission
              </h3>
              <p className="text-slate-300 mb-4">
                This project represents our exploration of
                hybrid AI architectures—combining the
                explainability of traditional expert systems
                with the flexibility of modern large language
                models. Built as part of our academic journey,
                it demonstrates practical applications of
                neuro-symbolic AI in real-world problem-solving.
              </p>
              <p className="text-slate-300 mb-4">
                We chose hardware diagnostics as our domain
                because it requires both pattern recognition
                (handled by the neural layer) and logical
                reasoning (managed by the symbolic layer)—making
                it the perfect testbed for our hybrid
                architecture.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  {
                    icon: Code2,
                    label: "University Project",
                    color: "blue",
                  },
                  {
                    icon: GraduationCap,
                    label: "Portfolio Piece",
                    color: "purple",
                  },
                  {
                    icon: Sparkles,
                    label: "Open to Feedback",
                    color: "green",
                  },
                ].map((badge, idx) => (
                  <motion.div
                    key={idx}
                    className={`flex items-center gap-2 px-4 py-2 bg-${badge.color}-500/20 border border-${badge.color}-500/30 rounded-lg`}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.5 + idx * 0.1,
                      type: "spring",
                    }}
                    whileHover={{ scale: 1.1, y: -5 }}
                  >
                    <badge.icon
                      className={`w-4 h-4 text-${badge.color}-400`}
                    />
                    <span
                      className={`text-${badge.color}-300 text-sm`}
                    >
                      {badge.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/30 relative overflow-hidden"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{
                borderColor: "rgba(148, 163, 184, 0.5)",
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
              <h4 className="text-white mb-4 relative z-10">
                Technologies We Explored
              </h4>
              <div className="grid grid-cols-2 gap-3 relative z-10">
                {[
                  {
                    label: "Backend",
                    value: "FastAPI, Python",
                    color: "blue",
                  },
                  {
                    label: "Frontend",
                    value: "Next.js 16, React 19",
                    color: "purple",
                  },
                  {
                    label: "AI Layer",
                    value: "Claude 3.5, LLMs",
                    color: "green",
                  },
                  {
                    label: "Logic Engine",
                    value: "Forward Chaining",
                    color: "orange",
                  },
                ].map((tech, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-slate-800/50 rounded-lg p-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + idx * 0.1 }}
                    whileHover={{
                      y: -5,
                      backgroundColor: "rgba(30, 41, 59, 0.7)",
                    }}
                  >
                    <div
                      className={`text-${tech.color}-400 mb-1`}
                    >
                      {tech.label}
                    </div>
                    <div className="text-sm text-slate-300">
                      {tech.value}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </GlassCard>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {developers.map((dev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: idx * 0.2,
                duration: 0.8,
                type: "spring",
              }}
            >
              <GlassCard className="text-center">
                <motion.div
                  className="relative mb-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: idx * 0.5,
                    }}
                  />
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <ImageWithFallback
                      src={dev.image}
                      alt={dev.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white/10 relative z-10"
                    />
                  </motion.div>
                </motion.div>

                <motion.h3
                  className="text-xl text-white mb-1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.2 }}
                >
                  {dev.name}
                </motion.h3>
                <motion.p
                  className="text-blue-400 mb-1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + idx * 0.2 }}
                >
                  {dev.role}
                </motion.p>
                <motion.div
                  className="flex items-center justify-center gap-2 text-slate-400 text-sm mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + idx * 0.2 }}
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>{dev.university}</span>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {dev.skills.map((skill, skillIdx) => (
                    <motion.span
                      key={skillIdx}
                      className="px-3 py-1 bg-slate-800/50 border border-slate-700/30 rounded-full text-xs text-slate-300"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.6 + idx * 0.2 + skillIdx * 0.1,
                        type: "spring",
                      }}
                      whileHover={{
                        scale: 1.1,
                        backgroundColor:
                          "rgba(30, 41, 59, 0.8)",
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                <div className="flex items-center justify-center gap-3">
                  {[
                    {
                      href: dev.github,
                      icon: Github,
                      label: "GitHub",
                      hoverColor: "white",
                    },
                    {
                      href: dev.linkedin,
                      icon: Linkedin,
                      label: "LinkedIn",
                      hoverColor: "blue",
                    },
                    {
                      href: `mailto:${dev.email}`,
                      icon: Mail,
                      label: "Email",
                      hoverColor: "green",
                    },
                  ].map((social, socialIdx) => (
                    <motion.a
                      key={socialIdx}
                      href={social.href}
                      className="w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700/30 transition-all flex items-center justify-center group"
                      aria-label={social.label}
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay:
                          0.7 + idx * 0.2 + socialIdx * 0.1,
                      }}
                    >
                      <social.icon className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <GlassCard className="text-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20 relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5"
              animate={{
                backgroundPosition: [
                  "0% 50%",
                  "100% 50%",
                  "0% 50%",
                ],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
              }}
              style={{
                backgroundSize: "200% 100%",
              }}
            />
            <div className="relative z-10">
              <h4 className="text-white text-xl mb-3">
                Want to Connect?
              </h4>
              <p className="text-slate-300 mb-4 max-w-2xl mx-auto">
                We're actively seeking feedback, collaborations,
                and opportunities to learn. If you have
                suggestions for improving our neuro-symbolic
                architecture or want to discuss AI systems, we'd
                love to hear from you!
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <motion.a
                  href="#"
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-[0_0_20px_rgba(59,130,246,0.3)] relative overflow-hidden group"
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
                    View GitHub Repository
                  </span>
                </motion.a>
                <motion.a
                  href="mailto:team@example.com"
                  className="px-6 py-3 bg-white/5 border border-white/10 text-white rounded-lg"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    borderColor: "rgba(255, 255, 255, 0.2)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact the Team
                </motion.a>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}