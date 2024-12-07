import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Torus, MeshDistortMaterial, OrbitControls, Float, Stars } from '@react-three/drei';
import  THREE from 'three';

function AnimatedShapes() {
  const boxRef = useRef<THREE.Mesh>(null);
  const torusRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (boxRef.current) {
      boxRef.current.rotation.x = clock.getElapsedTime() * 0.3;
      boxRef.current.rotation.y = clock.getElapsedTime() * 0.2;
    }
    if (torusRef.current) {
      torusRef.current.rotation.x = clock.getElapsedTime() * 0.2;
      torusRef.current.rotation.y = clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <>
      <Float
        speed={1.5}
        rotationIntensity={1}
        floatIntensity={2}
      >
        <Box ref={boxRef} args={[1.5, 1.5, 1.5]} position={[-2, 0, 0]}>
          <MeshDistortMaterial
            color="#FFD700"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0}
            metalness={0.9}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </Box>
      </Float>
      
      <Float
        speed={1.5}
        rotationIntensity={1}
        floatIntensity={2}
      >
        <Torus ref={torusRef} args={[1, 0.4, 32, 100]} position={[2, 0, 0]}>
          <MeshDistortMaterial
            color="#FFD700"
            attach="material"
            distort={0.3}
            speed={1.5}
            roughness={0}
            metalness={0.9}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </Torus>
      </Float>
    </>
  );
}

export default function AboutScene3D() {
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