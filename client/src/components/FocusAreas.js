import React from 'react';

const areas = [
  { title: 'Hackathons', icon: '🚀', desc: 'Solve real-world problems in high-energy competitions.' },
  { title: 'Tech News & Trends', icon: '🛰️', desc: 'Weekly curated briefs on tools, AI, frameworks, and ecosystem shifts.' },
  { title: 'Learning & Skills', icon: '📚', desc: 'Structured tracks & peer groups for upskilling faster.' },
  { title: 'Collaboration & Networking', icon: '🤝', desc: 'Find teammates, mentors, and cross-domain creators.' },
  { title: 'Career & Opportunities', icon: '💼', desc: 'Internships, jobs, referrals, founder calls & grants.' }
];

const FocusAreas = () => (
  <section className="focus-areas">
    <h2>Key Focus Areas</h2>
    <div className="areas-grid">
      {areas.map(area => (
        <div className="area-card" key={area.title}>
          <div className="area-icon" aria-hidden>{area.icon}</div>
          <h3>{area.title}</h3>
          <p>{area.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FocusAreas;
