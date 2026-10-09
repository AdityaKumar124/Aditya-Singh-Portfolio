"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export const NeuralFingerprint3D: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);
  const pulseRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  // Mouse tracking vector
  const mouse = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  // Generate procedural 3D fingerprint nodes & interconnecting synaptic filaments
  const { nodePositions, nodeColors, linePositions, pulseData } = useMemo(() => {
    const nodes: number[] = [];
    const colors: number[] = [];
    const lines: number[] = [];
    const pulses: {
      ridge: number;
      speed: number;
      theta: number;
      radius: number;
      eccentricity: number;
      zBase: number;
    }[] = [];

    const ridges = 26; // concentric ridges
    const colorElectricBlue = new THREE.Color("#0066ff");
    const colorCyan = new THREE.Color("#00f0ff");
    const colorViolet = new THREE.Color("#8b5cf6");

    const ridgePoints: { x: number; y: number; z: number }[][] = [];

    for (let r = 0; r < ridges; r++) {
      const currentRidgePoints: { x: number; y: number; z: number }[] = [];
      const baseRadius = 0.35 + (r / ridges) * 2.5;
      const numPoints = Math.floor(40 + r * 14);
      const eccentricity = 1.35; // Fingerprints are elliptical (height > width)
      const zOffset = Math.sin((r / ridges) * Math.PI) * 0.45;

      for (let i = 0; i < numPoints; i++) {
        const theta = (i / numPoints) * Math.PI * 2;

        // Mathematical fingerprint ridge whorls and arch perturbations
        const whorl =
          Math.sin(theta * 2 + r * 0.35) * 0.12 +
          Math.cos(theta * 3 + r * 0.2) * 0.08 +
          Math.sin(theta * 5) * 0.03;

        const effectiveRadius = baseRadius + whorl;
        const x = Math.sin(theta) * (effectiveRadius / eccentricity);
        const y = Math.cos(theta) * effectiveRadius;
        const z = (Math.random() - 0.5) * 0.1 + zOffset;

        nodes.push(x, y, z);
        currentRidgePoints.push({ x, y, z });

        // Color gradient: blend electric blue, cyan, and neon violet
        const ratio = r / ridges;
        const c = new THREE.Color();
        if (ratio < 0.4) {
          c.lerpColors(colorCyan, colorElectricBlue, ratio / 0.4);
        } else {
          c.lerpColors(colorElectricBlue, colorViolet, (ratio - 0.4) / 0.6);
        }
        colors.push(c.r, c.g, c.b);
      }

      ridgePoints.push(currentRidgePoints);

      // Add synaptic filaments along each ridge
      for (let i = 0; i < currentRidgePoints.length; i++) {
        const nextIdx = (i + 1) % currentRidgePoints.length;
        const p1 = currentRidgePoints[i];
        const p2 = currentRidgePoints[nextIdx];
        lines.push(p1.x, p1.y, p1.z, p2.x, p2.y, p2.z);

        // Cross-ridge neural connections (minutiae bridges)
        if (r > 0 && i % 6 === 0) {
          const prevRidge = ridgePoints[r - 1];
          const closestPrev = prevRidge[Math.min(i, prevRidge.length - 1)];
          lines.push(p1.x, p1.y, p1.z, closestPrev.x, closestPrev.y, closestPrev.z);
        }
      }

      // Traveling pulse particles along selected ridges
      if (r % 2 === 0) {
        pulses.push({
          ridge: r,
          speed: 0.8 + Math.random() * 0.8,
          theta: Math.random() * Math.PI * 2,
          radius: baseRadius,
          eccentricity,
          zBase: zOffset,
        });
      }
    }

    return {
      nodePositions: new Float32Array(nodes),
      nodeColors: new Float32Array(colors),
      linePositions: new Float32Array(lines),
      pulseData: pulses,
    };
  }, []);

  // Buffer geometries
  const pointsGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(nodePositions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(nodeColors, 3));
    return geo;
  }, [nodePositions, nodeColors]);

  const linesGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    return geo;
  }, [linePositions]);

  // Traveling pulses geometry
  const pulsePositions = useMemo(() => {
    return new Float32Array(pulseData.length * 3);
  }, [pulseData.length]);

  const pulseGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pulsePositions, 3));
    return geo;
  }, [pulsePositions]);

  // Animate frame
  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    // Smooth mouse responsiveness
    if (groupRef.current) {
      // Slow majestic rotation
      groupRef.current.rotation.y = time * 0.15 + (state.pointer.x * 0.35);
      groupRef.current.rotation.x = -0.15 + (state.pointer.y * -0.25);
      groupRef.current.rotation.z = Math.sin(time * 0.2) * 0.05;
    }

    // Animate traveling pulse particles
    if (pulseRef.current) {
      const positions = pulseRef.current.geometry.attributes.position.array as Float32Array;

      pulseData.forEach((p, idx) => {
        p.theta += delta * p.speed;
        const whorl =
          Math.sin(p.theta * 2 + p.ridge * 0.35) * 0.12 +
          Math.cos(p.theta * 3 + p.ridge * 0.2) * 0.08;

        const effRadius = p.radius + whorl;
        const x = Math.sin(p.theta) * (effRadius / p.eccentricity);
        const y = Math.cos(p.theta) * effRadius;
        const z = p.zBase + Math.sin(time * 3 + idx) * 0.1;

        positions[idx * 3] = x;
        positions[idx * 3 + 1] = y;
        positions[idx * 3 + 2] = z;
      });

      pulseRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group ref={groupRef} scale={[1.3, 1.3, 1.3]}>
      {/* 3D Neural Nodes */}
      <points ref={particlesRef} geometry={pointsGeometry}>
        <pointsMaterial
          size={0.038}
          vertexColors
          transparent
          opacity={0.88}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* Interconnecting Synaptic Filaments */}
      <lineSegments ref={linesRef} geometry={linesGeometry}>
        <lineBasicMaterial
          color="#0066ff"
          transparent
          opacity={0.22}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>

      {/* Traveling Action-Potential Signals */}
      <points ref={pulseRef} geometry={pulseGeometry}>
        <pointsMaterial
          size={0.085}
          color="#00f0ff"
          transparent
          opacity={0.95}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* Ambient Central Core Hologram Node */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color="#00f0ff" transparent opacity={0.6} />
      </mesh>
    </group>
  );
};
