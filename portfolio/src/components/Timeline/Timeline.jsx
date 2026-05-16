import './Timeline.css';

export default function Timeline() {
  const experiences = [
    {
      year: '2024',
      title: 'Senior Developer',
      company: 'Tech Company',
      description: 'Led development of 3D web applications',
    },
    {
      year: '2023',
      title: 'Full Stack Developer',
      company: 'Creative Studio',
      description: 'Built interactive web experiences',
    },
    {
      year: '2022',
      title: 'Junior Developer',
      company: 'Startup',
      description: 'Started my journey in web development',
    },
  ];

  return (
    <section className="timeline">
      <h2>Experience</h2>
      <div className="timeline-container">
        {experiences.map((exp, idx) => (
          <div key={idx} className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <span className="timeline-year">{exp.year}</span>
              <h3>{exp.title}</h3>
              <p className="timeline-company">{exp.company}</p>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}