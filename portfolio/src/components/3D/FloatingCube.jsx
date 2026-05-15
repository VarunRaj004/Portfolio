import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function FloatingCube() {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial 
        color="#00ff88" 
        emissive="#00ff88"
        emissiveIntensity={0.3}
      />
    </mesh>
  );
}