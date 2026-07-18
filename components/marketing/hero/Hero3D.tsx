"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, MeshDistortMaterial } from "@react-three/drei";
import { ParticleField } from "./ParticleField";

function DiamondCore() {
  return (
    <Float speed={1.4} rotationIntensity={1} floatIntensity={1.6}>
      <mesh rotation={[0.4, 0.6, 0]}>
        <octahedronGeometry args={[1.4, 0]} />
        <MeshDistortMaterial
          color="#14B8A6"
          distort={0.25}
          speed={1.5}
          roughness={0.1}
          metalness={0.6}
        />
      </mesh>
    </Float>
  );
}

export function Hero3D() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <pointLight position={[5, 5, 5]} intensity={1.2} color="#D4AF37" />
          <DiamondCore />
          <ParticleField />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
}
