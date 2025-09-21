import React from 'react';

const areas = [
  { 
    title: 'Hackathons', 
    icon: '🚀', 
    desc: 'Solve real-world problems in high-energy competitions with 800+ developers from across India.',
    seoKeywords: 'Hackathons India, Developer Competitions India, Coding Contests, IDC Hackathons'
  },
  { 
    title: 'Tech News & Trends', 
    icon: '🛰️', 
    desc: 'Weekly curated briefs on AI, frameworks, tools, and tech ecosystem shifts for Indian developers.',
    seoKeywords: 'Tech News India, Developer Trends India, Technology Updates, Indian Developer News'
  },
  { 
    title: 'Learning & Skills', 
    icon: '📚', 
    desc: 'Structured learning tracks & peer groups for upskilling faster in trending technologies.',
    seoKeywords: 'Developer Learning India, Programming Skills India, Tech Education, Developer Training'
  },
  { 
    title: 'Collaboration & Networking', 
    icon: '🤝', 
    desc: 'Find teammates, mentors, and cross-domain creators in India\'s largest developer community.',
    seoKeywords: 'Developer Networking India, Tech Collaboration India, Developer Mentorship, Programming Community'
  },
  { 
    title: 'Career & Opportunities', 
    icon: '💼', 
    desc: 'Access internships, jobs, referrals, founder calls & grants exclusively for IDC community members.',
    seoKeywords: 'Developer Jobs India, Tech Careers India, Programming Jobs, Developer Opportunities India'
  }
];

const FocusAreas = () => (
  <section className="focus-areas">
    <h2 className="handwriting-title">Key Focus Areas - IDC Indian Developer Community</h2>
    <div className="areas-grid">
      {areas.map(area => (
        <div className="area-card" key={area.title} data-seo-keywords={area.seoKeywords}>
          <div className="area-icon" aria-label={`${area.title} - IDC focus area`}>{area.icon}</div>
          <h3>{area.title} - IDC India</h3>
          <p>{area.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FocusAreas;
