"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Environment } from "@react-three/drei";
import { Suspense } from "react";

interface ModelViewerProps {
  highlight: string | null;
}

function Motherboard({ highlight }: { highlight: string | null }) {
  return (
    <group>
      {/* PCB Board */}
      <mesh position={[0, 0, 0]} receiveShadow castShadow>
        <boxGeometry args={[4, 0.1, 4]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.5} metalness={0.8} />
      </mesh>

      {/* GPU Slot / Component */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[3, 0.5, 0.5]} />
        <meshStandardMaterial 
          color={highlight === "DIAG_GPU_FAIL" ? "#ff0000" : "#444"} 
          emissive={highlight === "DIAG_GPU_FAIL" ? "#ff0000" : "#000"}
          emissiveIntensity={highlight === "DIAG_GPU_FAIL" ? 2 : 0}
        />
      </mesh>

      {/* RAM Slots */}
      <mesh position={[1.5, 0.3, -1]}>
        <boxGeometry args={[0.2, 0.4, 2]} />
        <meshStandardMaterial 
          color={highlight === "DIAG_RAM_FAIL" ? "#ff0000" : "#333"}
          emissive={highlight === "DIAG_RAM_FAIL" ? "#ff0000" : "#000"}
          emissiveIntensity={highlight === "DIAG_RAM_FAIL" ? 2 : 0}
        />
      </mesh>
    </group>
  );
}

export default function ModelViewer({ highlight }: ModelViewerProps) {
  return (
    <div className="w-full h-[400px] rounded-xl overflow-hidden border border-white/10 bg-black/40">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 5, 5]} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <Suspense fallback={null}>
          <Motherboard highlight={highlight} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
