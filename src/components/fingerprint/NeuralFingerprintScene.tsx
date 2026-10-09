"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { NeuralFingerprint3D } from "./NeuralFingerprint3D";

export const NeuralFingerprintScene: React.FC = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.8], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#00f0ff" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#8b5cf6" />
      <NeuralFingerprint3D />
    </Canvas>
  );
};
