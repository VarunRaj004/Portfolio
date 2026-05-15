import { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { Canvas } from '@react-three/fiber';
import Suspense from 'react';
import FloatingSphere from '../3D/FloatingSphere';
import './About.css';

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const textRef = useRef();

  useEffect(() => {
    if (inView && textRef.current) {
      gsap.to(textRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
      });
    }
  }, [inView]);

  return (
    <section ref={ref} className="about">
      <div className="about-canvas">
        <Canvas camera={{ position: [0, 0, 4] }}>
          <Suspense fallback={null}>
            <FloatingSphere />
            <ambientLight intensity={0.7} />
            <pointLight position={[5, 5, 5]} />
          </Suspense>
        </Canvas>
      </div>

      <div className="about-content" ref={textRef}>
        <h2>About Me</h2>
        <p>
          I'm a passionate developer creating immersive web experiences.
          With expertise in React, Three.js, and modern web technologies,
          I build interactive 3D applications that engage and inspire.
        </p>
        <div className="skills-list">
          <span>React</span>
          <span>Three.js</span>
          <span>WebGL</span>
          <span>JavaScript</span>
        </div>
      </div>
    </section>
  );
}