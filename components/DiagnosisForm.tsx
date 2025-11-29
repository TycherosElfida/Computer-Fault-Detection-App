"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import GlassCard from "./GlassCard";

interface DiagnosisFormProps {
  onDiagnose: (text: string) => Promise<void>;
  loading: boolean;
}

export default function DiagnosisForm({ onDiagnose, loading }: DiagnosisFormProps) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onDiagnose(text);
    }
  };

  return (
    <GlassCard className="w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-white mb-4">Describe the Issue</h2>
      <form onSubmit={handleSubmit} className="relative">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="e.g., 'I hear one long beep and two short beeps...'"
          className="w-full h-32 bg-black/20 border border-white/10 rounded-lg p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          disabled={loading}
        />
        <div className="mt-4 flex justify-end">
          <button
            type="submit"
            disabled={loading || !text.trim()}
            className="flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="animate-pulse">Analyzing...</span>
            ) : (
              <>
                <Search size={18} />
                <span>Diagnose</span>
              </>
            )}
          </button>
        </div>
      </form>
    </GlassCard>
  );
}
