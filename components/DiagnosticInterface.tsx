import React, { useState } from "react";
import { ArrowLeft, Send, Loader2 } from "lucide-react";
import { GlassCard } from "./GlassCard";
import { ResultsPanel } from "./ResultsPanel";
import { DiagnosticVisualization } from "./DiagnosticVisualization";
import { motion, AnimatePresence } from "motion/react";

interface DiagnosticInterfaceProps {
  onBack: () => void;
}

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

export function DiagnosticInterface({
  onBack,
}: DiagnosticInterfaceProps) {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<DiagnosticResult | null>(
    null,
  );
  const [processingStage, setProcessingStage] = useState("");

  const runDiagnosis = async () => {
    if (!input.trim()) return;

    setLoading(true);
    setResult(null);
    setProcessingStage("Neural Layer: Analyzing input...");

    try {
      const response = await fetch("http://localhost:8000/api/v1/diagnose", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text_description: input }),
      });

      if (!response.ok) throw new Error("Diagnosis failed");

      const data = await response.json();
      
      if (data.status === "success" && data.results.length > 0) {
        const topResult = data.results[0];
        
        // Map backend response to frontend interface
        const mappedResult: DiagnosticResult = {
          diagnosis: topResult.diagnosis_name,
          confidence: topResult.confidence,
          symptoms: data.symptoms_detected.map((sym: string) => ({
            id: sym,
            description: `Detected symptom: ${sym}`,
            detected: true,
          })),
          reasoning: [
            {
              step: 1,
              rule: "INFERENCE_ENGINE",
              conclusion: topResult.explanation,
              certainty: topResult.confidence,
            }
          ],
          repairSteps: topResult.repair_steps,
          estimatedCost: "Variable", // Backend doesn't return this yet
          severity: topResult.severity.toLowerCase() as any,
        };
        
        setResult(mappedResult);
      } else {
        // Handle no diagnosis found
        setResult({
          diagnosis: "No Specific Diagnosis Found",
          confidence: 0.0,
          symptoms: [],
          reasoning: [],
          repairSteps: ["Please provide more details about the issue."],
          estimatedCost: "N/A",
          severity: "low",
        });
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
      setProcessingStage("");
    }
  };

  return (
    <motion.div
      className="min-h-screen px-4 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.button
          onClick={onBack}
          className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors mb-8"
          whileHover={{ x: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </motion.button>

        <motion.h2
          className="text-4xl text-white mb-8 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          AI-Powered Hardware Diagnosis
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <GlassCard>
            <motion.h3
              className="text-2xl text-white mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Describe the Issue
            </motion.h3>
            <motion.p
              className="text-slate-300 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Use natural language to describe your hardware
              problem. Our neural layer will understand and
              extract symptoms.
            </motion.p>

            <motion.textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="e.g., My computer beeps three times when I turn it on and nothing shows up on the screen..."
              className="w-full h-40 bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 resize-none transition-all duration-300"
              disabled={loading}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              whileFocus={{
                scale: 1.02,
                borderColor: "#3b82f6",
              }}
            />

            <motion.button
              onClick={runDiagnosis}
              disabled={loading || !input.trim()}
              className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 relative overflow-hidden group"
              whileHover={{ scale: loading ? 1 : 1.02 }}
              whileTap={{ scale: loading ? 1 : 0.98 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 flex items-center gap-2">
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Run Diagnosis
                  </>
                )}
              </span>
            </motion.button>

            <AnimatePresence>
              {loading && (
                <motion.div
                  className="mt-4 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg overflow-hidden"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-3">
                    <Loader2 className="w-5 h-5 text-blue-400 animate-spin" />
                    <motion.span
                      className="text-blue-300"
                      key={processingStage}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                    >
                      {processingStage}
                    </motion.span>
                  </div>
                  <motion.div
                    className="mt-2 h-1 bg-blue-500/20 rounded-full overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </GlassCard>

          <DiagnosticVisualization
            isProcessing={loading}
            result={result}
          />
        </div>

        <AnimatePresence>
          {result && <ResultsPanel result={result} />}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}