"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";

function Cubes() {
  const groupRef = useRef<THREE.Group>(null);
  const cubes = Array(50).fill(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {cubes.map((_, i) => {
        const position = [
          Math.random() * 20 - 10,
          Math.random() * 20 - 10,
          Math.random() * 20 - 10
        ];
        const rotation = [
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        ];
        const scale = Math.random() * 0.5 + 0.5;

        return (
          <mesh
            key={i}
            position={position as [number, number, number]}
            rotation={rotation as [number, number, number]}
            scale={[scale, scale, scale]}
          >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial
              color={new THREE.Color().setHSL(Math.random(), 0.7, 0.5)}
              roughness={0.5}
              metalness={0.8}
            />
          </mesh>
        );
      })}
    </group>
  );
}

export function Background3D() {
  return (
    <div className="fixed inset-0 -z-10 opacity-50">
      <Canvas camera={{ position: [0, 0, 20], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Cubes />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}