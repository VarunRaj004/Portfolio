import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import RotatingTorus from '../3D/RotatingTorus';
import './Skills.css';

export default function Skills() {
  const skills = [
    { category: 'Frontend', items: ['React', 'Vue', 'JavaScript', 'TypeScript'] },
    { category: '3D Graphics', items: ['Three.js', 'Babylon.js', 'WebGL', 'GSAP'] },
    { category: 'Tools', items: ['Vite', 'Git', 'Figma', 'VS Code'] },
  ];

  return (
    <section className="skills">
      <h2>Skills & Technologies</h2>
      
      <div className="skills-container">
        <div className="skills-content">
          {skills.map((skill, idx) => (
            <div key={idx} className="skill-group">
              <h3>{skill.category}</h3>
              <div className="skill-items">
                {skill.items.map((item, i) => (
                  <span key={i} className="skill-tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-canvas">
          <Canvas camera={{ position: [0, 0, 3] }}>
            <Suspense fallback={null}>
              <RotatingTorus />
              <ambientLight intensity={0.6} />
              <pointLight position={[10, 10, 10]} />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </section>
  );
}