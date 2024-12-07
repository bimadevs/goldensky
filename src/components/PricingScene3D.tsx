import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Octahedron, Icosahedron, MeshDistortMaterial, OrbitControls, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedShapes() {
  const shape1Ref = useRef<THREE.Mesh>(null);
  const shape2Ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (shape1Ref.current && shape2Ref.current) {
      shape1Ref.current.rotation.x = clock.getElapsedTime() * 0.2;
      shape1Ref.current.rotation.y = clock.getElapsedTime() * 0.3;
      shape2Ref.current.rotation.x = clock.getElapsedTime() * -0.3;
      shape2Ref.current.rotation.y = clock.getElapsedTime() * -0.2;
    }
  });

  return (
    <>
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <Octahedron ref={shape1Ref} args={[1]} position={[-2, 0, 0]}>
          <MeshDistortMaterial
            color="#FFD700"
            attach="material"
            distort={0.3}
            speed={2}
            roughness={0}
            metalness={1}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </Octahedron>
      </Float>
      
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <Icosahedron ref={shape2Ref} args={[1]} position={[2, 0, 0]}>
          <MeshDistortMaterial
            color="#FFD700"
            attach="material"
            distort={0.3}
            speed={2}
            roughness={0}
            metalness={1}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </Icosahedron>
      </Float>
    </>
  );
}

export default function PricingScene3D() {
  return (
    <div className="absolute inset-0 h-full w-full opacity-70">
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
        <color attach="background" args={['#111']} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <pointLight position={[-10, -10, -10]} intensity={1} />
        <Stars
          radius={100}
          depth={50}
          count={3000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
        <AnimatedShapes />
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}