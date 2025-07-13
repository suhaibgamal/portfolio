import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Html,
  OrbitControls,
  Environment,
  Sparkles,
} from "@react-three/drei";
import { useRef, useEffect } from "react";

function SShape(props) {
  // A creative 3D 'S' using torus and spheres
  return (
    <group {...props}>
      {/* Top curve */}
      <mesh position={[0, 0.5, 0]}>
        <torusGeometry args={[0.4, 0.12, 32, 100, Math.PI]} />
        <meshStandardMaterial
          color="#60a5fa"
          emissive="#3b82f6"
          emissiveIntensity={0.5}
        />
      </mesh>
      {/* Bottom curve */}
      <mesh position={[0, -0.5, 0]} rotation={[0, 0, Math.PI]}>
        <torusGeometry args={[0.4, 0.12, 32, 100, Math.PI]} />
        <meshStandardMaterial
          color="#a78bfa"
          emissive="#8b5cf6"
          emissiveIntensity={0.5}
        />
      </mesh>
      {/* Center sphere */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.13, 32, 32]} />
        <meshStandardMaterial
          color="#f472b6"
          emissive="#db2777"
          emissiveIntensity={0.7}
        />
      </mesh>
    </group>
  );
}

function AnimatedS() {
  const ref = useRef();
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.5;
      ref.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.1;
    }
  });
  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={0.3}>
      <group ref={ref}>
        <SShape />
      </group>
    </Float>
  );
}

export default function Hero3D() {
  // Respect reduced motion
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.body.classList.add("reduced-motion");
    }
  }, []);

  if (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    return (
      <div className="flex items-center justify-center h-full">
        <img
          src="/favicon.ico"
          alt="S Logo"
          style={{
            width: 80,
            height: 80,
            filter: "drop-shadow(0 0 8px #60a5fa)",
          }}
        />
      </div>
    );
  }

  return (
    <div style={{ width: "100%", height: "320px", position: "relative" }}>
      <Canvas camera={{ position: [0, 0, 2.5], fov: 50 }} dpr={[1, 2]}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[2, 2, 2]} intensity={0.7} />
        <AnimatedS />
        <Sparkles count={30} scale={[2, 2, 2]} size={2} color="#f472b6" />
        <Environment preset="sunset" />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
