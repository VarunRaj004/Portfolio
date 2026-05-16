import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function RotatingTorus() {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.002;
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={meshRef}>
      <torusGeometry args={[1, 0.4, 64, 100]} />
      <meshStandardMaterial 
        color="#ff6b9d"
        emissive="#ff6b9d"
        emissiveIntensity={0.3}
      />
    </mesh>
  );
}