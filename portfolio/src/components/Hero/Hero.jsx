import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import FloatingCube from '../3D/FloatingCube';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to My Portfolio</h1>
        <p>I create amazing web experiences with 3D graphics</p>
        <button className="cta-button">Explore My Work</button>
      </div>
      
      <div className="hero-canvas">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <Suspense fallback={null}>
            <FloatingCube />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
}