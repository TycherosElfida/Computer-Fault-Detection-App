import React from "react";
import {
  AlertTriangle,
  CheckCircle2,
  AlertCircle,
  XCircle,
  TrendingUp,
  Wrench,
  DollarSign,
} from "lucide-react";
import { GlassCard } from "./GlassCard";
import { motion } from "motion/react";

interface DiagnosticResult {
  diagnosis: string;
  confidence: number;
  symptoms: Array<{
    id: string;
    description: string;
    detected: boolean;
  }>;
  reasoning: Array<{
    step: number;
    rule: string;
    conclusion: string;
    certainty: number;
  }>;
  repairSteps: string[];
  estimatedCost: string;
  severity: "low" | "medium" | "high" | "critical";
}

interface ResultsPanelProps {
  result: DiagnosticResult;
}

export function ResultsPanel({ result }: ResultsPanelProps) {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "low":
        return "text-green-400 bg-green-500/20 border-green-500/30";
      case "medium":
        return "text-yellow-400 bg-yellow-500/20 border-yellow-500/30";
      case "high":
        return "text-orange-400 bg-orange-500/20 border-orange-500/30";
      case "critical":
        return "text-red-400 bg-red-500/20 border-red-500/30";
      default:
        return "text-slate-400 bg-slate-500/20 border-slate-500/30";
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "low":
        return <CheckCircle2 className="w-6 h-6" />;
      case "medium":
        return <AlertCircle className="w-6 h-6" />;
      case "high":
        return <AlertTriangle className="w-6 h-6" />;
      case "critical":
        return <XCircle className="w-6 h-6" />;
      default:
        return <AlertCircle className="w-6 h-6" />;
    }
  };

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: "spring" }}
    >
      <GlassCard>
        <div className="flex items-start justify-between mb-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.h3
              className="text-3xl text-white mb-2"
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
              {result.diagnosis}
            </motion.h3>
            <div className="flex items-center gap-4">
              <motion.div
                className="flex items-center gap-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <TrendingUp className="w-5 h-5 text-blue-400" />
                <span className="text-slate-300">
                  Confidence:{" "}
                  <span className="text-white">
                    {(result.confidence * 100).toFixed(1)}%
                  </span>
                </span>
              </motion.div>
              <motion.div
                className={`flex items-center gap-2 px-3 py-1 rounded-lg border ${getSeverityColor(result.severity)}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
              >
                {getSeverityIcon(result.severity)}
                <span className="uppercase text-sm">
                  {result.severity} Severity
                </span>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            className="w-24 h-24 relative"
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              delay: 0.5,
              type: "spring",
              stiffness: 200,
            }}
          >
            <svg className="transform -rotate-90 w-24 h-24">
              <circle
                cx="48"
                cy="48"
                r="40"
                stroke="currentColor"
                strokeWidth="8"
                fill="transparent"
                className="text-slate-700"
              />
              <motion.circle
                cx="48"
                cy="48"
                r="40"
                stroke="currentColor"
                strokeWidth="8"
                fill="transparent"
                strokeDasharray={`${2 * Math.PI * 40}`}
                className="text-blue-500"
                initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
                animate={{
                  strokeDashoffset:
                    2 * Math.PI * 40 * (1 - result.confidence),
                }}
                transition={{
                  duration: 1.5,
                  ease: "easeOut",
                  delay: 0.6,
                }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.span
                className="text-white text-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                {(result.confidence * 100).toFixed(0)}%
              </motion.span>
            </div>
          </motion.div>
        </div>

        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
            initial={{ width: 0 }}
            animate={{ width: `${result.confidence * 100}%` }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
              delay: 0.3,
            }}
          />
        </div>
      </GlassCard>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GlassCard>
          <motion.h4
            className="text-xl text-white mb-4 flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <CheckCircle2 className="w-5 h-5 text-green-400" />
            Detected Symptoms
          </motion.h4>
          <div className="space-y-3">
            {result.symptoms.map((symptom, idx) => (
              <motion.div
                key={idx}
                className={`flex items-start gap-3 p-3 rounded-lg border ${
                  symptom.detected
                    ? "bg-green-500/10 border-green-500/30"
                    : "bg-slate-800/50 border-slate-700/30"
                }`}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                whileHover={{ x: 5, scale: 1.02 }}
              >
                <motion.div
                  className="mt-0.5"
                  animate={
                    symptom.detected
                      ? {
                          scale: [1, 1.2, 1],
                        }
                      : {}
                  }
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                >
                  {symptom.detected ? (
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                  ) : (
                    <XCircle className="w-5 h-5 text-slate-600" />
                  )}
                </motion.div>
                <div>
                  <code className="text-xs text-slate-400">
                    {symptom.id}
                  </code>
                  <p
                    className={
                      symptom.detected
                        ? "text-white"
                        : "text-slate-500"
                    }
                  >
                    {symptom.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </GlassCard>

        <GlassCard>
          <motion.h4
            className="text-xl text-white mb-4 flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <TrendingUp className="w-5 h-5 text-purple-400" />
            Reasoning Chain (Audit Trail)
          </motion.h4>
          <div className="space-y-3">
            {result.reasoning.map((step, idx) => (
              <motion.div
                key={idx}
                className="relative pl-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + idx * 0.15 }}
              >
                {idx < result.reasoning.length - 1 && (
                  <motion.div
                    className="absolute left-2 top-8 bottom-0 w-px bg-gradient-to-b from-purple-500/50 to-transparent"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{
                      delay: 0.7 + idx * 0.15,
                      duration: 0.5,
                    }}
                    style={{ originY: 0 }}
                  />
                )}
                <motion.div
                  className="absolute left-0 top-1 w-4 h-4 rounded-full bg-purple-500 border-2 border-slate-900"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 0.7 + idx * 0.15,
                    type: "spring",
                  }}
                  whileHover={{ scale: 1.3 }}
                />
                <motion.div
                  className="bg-slate-800/50 border border-slate-700/30 rounded-lg p-3"
                  whileHover={{
                    backgroundColor: "rgba(30, 41, 59, 0.7)",
                    borderColor: "rgba(148, 163, 184, 0.5)",
                  }}
                >
                  <div className="flex items-center justify-between mb-1">
                    <code className="text-xs text-purple-400">
                      {step.rule}
                    </code>
                    <motion.span
                      className="text-xs text-slate-400"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 + idx * 0.15 }}
                    >
                      {(step.certainty * 100).toFixed(0)}%
                      certainty
                    </motion.span>
                  </div>
                  <p className="text-white text-sm">
                    {step.conclusion}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <GlassCard>
            <motion.h4
              className="text-xl text-white mb-4 flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Wrench className="w-5 h-5 text-blue-400" />
              Recommended Repair Steps
            </motion.h4>
            <ol className="space-y-3">
              {result.repairSteps.map((step, idx) => (
                <motion.li
                  key={idx}
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + idx * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <motion.div
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ type: "spring" }}
                  >
                    {idx + 1}
                  </motion.div>
                  <p className="text-slate-300 pt-1">{step}</p>
                </motion.li>
              ))}
            </ol>
          </GlassCard>
        </div>

        <GlassCard>
          <motion.h4
            className="text-xl text-white mb-4 flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            <DollarSign className="w-5 h-5 text-green-400" />
            Cost Estimate
          </motion.h4>
          <motion.div
            className="bg-green-500/10 border border-green-500/30 rounded-lg p-6 text-center relative overflow-hidden"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: "spring" }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
            <motion.div
              className="text-3xl text-white mb-2 relative z-10"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              {result.estimatedCost}
            </motion.div>
            <p className="text-slate-300 text-sm relative z-10">
              Parts + Labor
            </p>
          </motion.div>

          <motion.div
            className="mt-6 space-y-2 text-sm text-slate-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            {[
              "• Prices vary by region",
              "• Consider warranty status",
              "• Get multiple quotes",
            ].map((text, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4 + idx * 0.1 }}
              >
                {text}
              </motion.p>
            ))}
          </motion.div>
        </GlassCard>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <GlassCard className="bg-yellow-500/5 border-yellow-500/20">
          <div className="flex gap-3">
            <motion.div
              animate={{
                rotate: [0, -10, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            >
              <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
            </motion.div>
            <div>
              <h4 className="text-white mb-2">
                Important Disclaimer
              </h4>
              <p className="text-slate-300 text-sm">
                This AI diagnosis is provided as an expert
                recommendation based on symbolic reasoning and
                neural language processing. Always verify
                findings with professional hardware diagnostics.
                The system provides a mathematical confidence
                score, but hardware issues can be complex and
                may require hands-on testing.
              </p>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </motion.div>
  );
}