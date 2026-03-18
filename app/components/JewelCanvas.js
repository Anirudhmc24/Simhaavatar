'use client'
import { useRef, useEffect, useState, useMemo } from 'react'
import * as THREE from 'three'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { Environment, Float, PerspectiveCamera, MeshDistortMaterial } from '@react-three/drei'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { COLORS } from '../../lib/tokens'

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function KineticObject({ accent }) {
  const groupRef = useRef();
  const scrollRotation = useRef(0);

  // Scroll Trigger to capture scroll velocity/position
  useEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: "html",
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          // Map scroll progress to a large rotation value
          scrollRotation.current = self.progress * Math.PI * 10;
        }
      });
    });
    return () => ctx.revert();
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      // Base auto-rotation (The "Idle" speed)
      const idleSpeed = state.clock.elapsedTime * 0.2;
      
      // Smoothly interpolate between current rotation and scroll-driven rotation
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y, 
        idleSpeed + scrollRotation.current, 
        0.1 // This "0.1" creates the smooth lag/matching feel
      );
      
      groupRef.current.rotation.x = idleSpeed * 0.5;
    }
  });

  return (
    <group ref={groupRef} scale={0.6}>
      {/* Central Core */}
      <mesh>
        <sphereGeometry args={[0.7, 64, 64]} />
        <MeshDistortMaterial 
          color={accent || COLORS.mysoreGold} 
          speed={2} 
          distort={0.4} 
          metalness={1} 
          roughness={0.1} 
        />
      </mesh>
      
      {/* Outer Wireframe Cage (The "Interesting" part) */}
      <mesh>
        <icosahedronGeometry args={[1.5, 2]} />
        <meshStandardMaterial 
          color={accent || COLORS.mysoreGold} 
          wireframe 
          wireframeLinewidth={2}
          transparent
          opacity={0.4}
        />
      </mesh>
    </group>
  );
}

function Scene({ accent }) {
  const { camera } = useThree();

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={35} />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={5} />
      <pointLight position={[-10, -10, -10]} color={accent} intensity={2} />
      
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <KineticObject accent={accent} />
      </Float>
      
      <Environment preset="studio" />
    </>
  );
}

export default function JewelCanvas({ accent, style }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div style={{ width: '100%', height: '100%', ...style }}>
      <Canvas 
        shadows 
        gl={{ antialias: true, alpha: true }}
        style={{ pointerEvents: 'none' }}
        eventSource={typeof document !== 'undefined' ? document.body : null}
      >
        <Scene accent={accent} />
      </Canvas>
    </div>
  );
}