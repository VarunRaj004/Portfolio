import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function FloatingSphere() {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.z += 0.005;
      meshRef.current.position.y = Math.sin(Date.now() * 0.001) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <sphereGeometry args={[1.5, 64, 64]} />
      <meshStandardMaterial 
        color="#00ccff" 
        emissive="#00ccff"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}