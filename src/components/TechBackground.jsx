import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Instances, Instance, Stars } from '@react-three/drei';
import * as THREE from 'three';

const NeuralSynapse = ({ position, color }) => {
  const meshRef = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // Brighter pulse: 0.5 to 0.9 opacity
    meshRef.current.material.opacity = Math.sin(t * 2 + position[0]) * 0.2 + 0.7;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[0.03, 0.03, 5]} />
      <meshBasicMaterial 
        color={color} 
        transparent 
        blending={THREE.AdditiveBlending} 
        toneMapped={false} // Makes it ignore exposure for a brighter "glow"
      />
    </mesh>
  );
};

const IntelligenceLayer = () => {
  const groupRef = useRef();
  const { mouse } = useThree();

  const cubes = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 50; i++) {
      temp.push({
        position: [(Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 10],
        rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0],
        scale: Math.random() * 0.5 + 0.1,
      });
    }
    return temp;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.z = t * 0.05;
    groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, mouse.x * 0.5, 0.1);
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, mouse.y * 0.5, 0.1);
  });

  return (
    <group ref={groupRef}>
      <Instances range={50}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial 
          color="#001a2e" 
          emissive="#00f2ff" 
          emissiveIntensity={2} // Increased from 0.5
          wireframe 
        />
        {cubes.map((c, i) => (
          <Instance key={i} position={c.position} rotation={c.rotation} scale={c.scale} />
        ))}
      </Instances>
    </group>
  );
};

const GodBrain = () => {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const pulse = 1 + Math.sin(t * 0.5) * 0.05;
    ref.current.scale.set(pulse, pulse, pulse);
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.6}>
      <mesh ref={ref} position={[0, 0, -12]}>
        <sphereGeometry args={[4.5, 64, 64]} />
        <MeshDistortMaterial
          color="#000a1a"
          emissive="#00ccff"
          emissiveIntensity={4} // Doubled the glow
          distort={0.3}
          speed={2.5}
          transparent
          opacity={0.8}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </Float>
  );
};

const CinematicCamera = () => {
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    state.camera.position.z = 6 + Math.sin(t * 0.2) * 1.5;
    state.camera.lookAt(0, 0, -10);
  });
  return null;
};

export default function OmniscientMachine() {
  const synapseLines = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      position: [(Math.random() - 0.5) * 15, (Math.random() - 0.5) * 15, (Math.random() - 0.5) * 20],
      color: i % 2 === 0 ? "#00ffff" : "#8800ff" // Sharper colors
    }));
  }, []);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, background: '#000' }}>
      <Canvas
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
        camera={{ position: [0, 0, 5], fov: 60 }}
      >
        <color attach="background" args={['#00030d']} />
        {/* Adjusted Fog to start further back, keeping the center brighter */}
        <fog attach="fog" args={['#00030d', 5, 25]} />
        
        <ambientLight intensity={0.4} /> {/* Brightened from 0.2 */}
        <pointLight position={[5, 5, 5]} intensity={2} color="#00f2ff" />
        
        <CinematicCamera />
        
        <IntelligenceLayer />
        
        <group>
          {synapseLines.map((s, i) => (
            <NeuralSynapse key={i} position={s.position} color={s.color} />
          ))}
        </group>

        <GodBrain />

        {/* Added Stars for extra background luminance */}
        <Stars radius={50} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />

        {/* Brighter Dimensional Glow Overlay */}
        <mesh position={[0, 0, -5]}>
          <planeGeometry args={[50, 50]} />
          <meshBasicMaterial 
            color="#001533" 
            transparent 
            opacity={0.2} 
            blending={THREE.AdditiveBlending} 
            depthWrite={false}
          />
        </mesh>
      </Canvas>
    </div>
  );
}