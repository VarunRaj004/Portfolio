import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import './Projects.css';

export default function Projects() {
  const projectsRef = useRef();

  useEffect(() => {
    const cards = projectsRef.current?.querySelectorAll('.project-card');
    
    cards?.forEach((card, index) => {
      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top center',
          end: 'center center',
          scrub: 1,
        },
        opacity: 1,
        y: 0,
      });
    });
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Amazing 3D interactive experience',
      image: '#FF6B6B',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Real-time data visualization',
      image: '#4ECDC4',
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'Immersive WebGL application',
      image: '#95E1D3',
    },
  ];

  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid" ref={projectsRef}>
        {projects.map((project) => (
          <div key={project.id} className="project-card" style={{ opacity: 0, transform: 'translateY(30px)' }}>
            <div className="project-preview" style={{ background: project.image }}></div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href="#" className="project-link">View Project →</a>
          </div>
        ))}
      </div>
    </section>
  );
}