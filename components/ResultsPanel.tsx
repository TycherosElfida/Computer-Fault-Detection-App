"use client";

import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle, Wrench } from "lucide-react";
import GlassCard from "./GlassCard";

interface DiagnosisResult {
  diagnosis_id: string;
  confidence: number;
  evidence: string[];
}

interface ResultsPanelProps {
  results: DiagnosisResult[];
}

export default function ResultsPanel({ results }: ResultsPanelProps) {
  if (results.length === 0) return null;

  return (
    <div className="space-y-4 w-full max-w-2xl mx-auto mt-8">
      {results.map((result, index) => (
        <GlassCard key={result.diagnosis_id} delay={index * 0.1}>
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                {result.confidence > 0.8 ? (
                  <AlertTriangle className="text-red-400" />
                ) : (
                  <CheckCircle className="text-yellow-400" />
                )}
                {result.diagnosis_id}
              </h3>
              <div className="mt-2 flex items-center gap-4">
                <div className="flex-1 w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${result.confidence * 100}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className={`h-full ${
                      result.confidence > 0.8 ? "bg-red-500" : "bg-yellow-500"
                    }`}
                  />
                </div>
                <span className="text-sm text-gray-300">
                  {(result.confidence * 100).toFixed(1)}% Confidence
                </span>
              </div>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-white/10">
            <h4 className="text-sm font-semibold text-gray-400 flex items-center gap-2 mb-2">
              <Wrench size={14} />
              Recommended Action
            </h4>
            <p className="text-gray-200 text-sm">
              Check component related to {result.diagnosis_id}. (Repair steps placeholder)
            </p>
          </div>
        </GlassCard>
      ))}
    </div>
  );
}
