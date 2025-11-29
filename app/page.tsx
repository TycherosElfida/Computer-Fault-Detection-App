"use client";

import { useState } from "react";
import DiagnosisForm from "@/components/DiagnosisForm";
import ResultsPanel from "@/components/ResultsPanel";
import ModelViewer from "@/components/ModelViewer";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any[]>([]);
  const [highlight, setHighlight] = useState<string | null>(null);

  const handleDiagnose = async (text: string) => {
    setLoading(true);
    setResults([]);
    setHighlight(null);

    try {
      const response = await fetch("http://localhost:8000/api/v1/diagnose", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text_description: text }),
      });

      const data = await response.json();
      if (data.status === "success" && data.results.length > 0) {
        setResults(data.results);
        setHighlight(data.results[0].diagnosis_id);
      }
    } catch (error) {
      console.error("Diagnosis failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left Column: Input & Results */}
        <div className="space-y-8">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-2">
              Neuro-Symbolic Diagnosis
            </h1>
            <p className="text-gray-400">
              Describe your hardware issue to get an instant expert analysis.
            </p>
          </div>

          <DiagnosisForm onDiagnose={handleDiagnose} loading={loading} />
          <ResultsPanel results={results} />
        </div>

        {/* Right Column: 3D Visualization */}
        <div className="lg:sticky lg:top-8 h-fit">
          <ModelViewer highlight={highlight} />
          <div className="mt-4 text-center text-sm text-gray-500">
            Interactive 3D View • Drag to Rotate
          </div>
        </div>

      </div>
    </main>
  );
}
