import React, { useRef, useEffect } from "react";
import { GlassCard } from "./GlassCard";

interface DiagnosticResult {
  diagnosis: string;
  confidence: number;
}

interface DiagnosticVisualizationProps {
  isProcessing: boolean;
  result: DiagnosticResult | null;
}

export function DiagnosticVisualization({
  isProcessing,
  result,
}: DiagnosticVisualizationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const updateSize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(
        window.devicePixelRatio,
        window.devicePixelRatio,
      );
    };
    updateSize();

    // Neural network visualization
    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      active: boolean;
    }

    const nodes: Node[] = [];
    const layers = [4, 6, 6, 3];
    const layerSpacing =
      canvas.width /
      (window.devicePixelRatio * (layers.length + 1));

    layers.forEach((count, layerIdx) => {
      const nodeSpacing =
        canvas.height / (window.devicePixelRatio * (count + 1));
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: layerSpacing * (layerIdx + 1),
          y: nodeSpacing * (i + 1),
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          active: false,
        });
      }
    });

    let animationId: number;
    let time = 0;

    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      time += 0.02;

      // Draw connections
      let nodeIdx = 0;
      for (let layer = 0; layer < layers.length - 1; layer++) {
        const currentLayerSize = layers[layer];
        const nextLayerSize = layers[layer + 1];

        for (let i = 0; i < currentLayerSize; i++) {
          for (let j = 0; j < nextLayerSize; j++) {
            const from = nodes[nodeIdx + i];
            const to = nodes[nodeIdx + currentLayerSize + j];

            const gradient = ctx.createLinearGradient(
              from.x,
              from.y,
              to.x,
              to.y,
            );

            if (isProcessing) {
              const activation =
                (Math.sin(
                  time * 2 + from.x * 0.1 + from.y * 0.1,
                ) +
                  1) /
                2;
              gradient.addColorStop(
                0,
                `rgba(59, 130, 246, ${activation * 0.3})`,
              );
              gradient.addColorStop(
                1,
                `rgba(147, 51, 234, ${activation * 0.3})`,
              );
            } else {
              gradient.addColorStop(
                0,
                "rgba(59, 130, 246, 0.05)",
              );
              gradient.addColorStop(
                1,
                "rgba(147, 51, 234, 0.05)",
              );
            }

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(from.x, from.y);
            ctx.lineTo(to.x, to.y);
            ctx.stroke();
          }
        }
        nodeIdx += currentLayerSize;
      }

      // Draw nodes
      nodes.forEach((node, idx) => {
        if (isProcessing) {
          node.active = Math.sin(time * 3 + idx * 0.5) > 0.3;
        } else {
          node.active = !!result && idx % 3 === 0;
        }

        const pulse = isProcessing
          ? (Math.sin(time * 4 + idx * 0.3) + 1) / 2
          : 0;
        const radius = node.active ? 6 + pulse * 2 : 4;

        // Glow effect for active nodes
        if (node.active) {
          const gradient = ctx.createRadialGradient(
            node.x,
            node.y,
            0,
            node.x,
            node.y,
            radius * 3,
          );
          gradient.addColorStop(0, "rgba(59, 130, 246, 0.3)");
          gradient.addColorStop(1, "rgba(59, 130, 246, 0)");
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(node.x, node.y, radius * 3, 0, Math.PI * 2);
          ctx.fill();
        }

        // Node circle
        ctx.fillStyle = node.active ? "#3b82f6" : "#475569";
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
        ctx.fill();

        // Node border
        ctx.strokeStyle = node.active ? "#60a5fa" : "#64748b";
        ctx.lineWidth = 2;
        ctx.stroke();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isProcessing, result]);

  return (
    <GlassCard>
      <h3 className="text-2xl text-white mb-4">
        System Visualization
      </h3>
      <div className="relative w-full h-80 bg-slate-900/50 rounded-lg overflow-hidden">
        <canvas
          ref={canvasRef}
          className="w-full h-full"
          style={{ display: "block" }}
        />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Input Layer</span>
            <span>Neural Processing</span>
            <span>Symbolic Layer</span>
            <span>Output</span>
          </div>
        </div>
        {isProcessing && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm animate-pulse">
            Processing...
          </div>
        )}
        {result && !isProcessing && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 text-sm">
            Analysis Complete
          </div>
        )}
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
        <div>
          <div className="text-slate-400 mb-1">
            Neural Layer
          </div>
          <div className="text-white">Gemini 2.0 Flash</div>
        </div>
        <div>
          <div className="text-slate-400 mb-1">
            Symbolic Layer
          </div>
          <div className="text-white">Forward Chaining</div>
        </div>
      </div>
    </GlassCard>
  );
}