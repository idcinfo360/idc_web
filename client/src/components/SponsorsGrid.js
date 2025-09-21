import React, { useEffect, useState } from 'react';

const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:5002/api';

const fallbackSponsors = [
  { name: 'Uppr Developer', logo: '/placeholder-sponsor1.svg' },
  { name: 'Google Developer Club', logo: '/placeholder-sponsor2.svg' },
  { name: 'Unstop Ambassador', logo: '/placeholder-sponsor3.svg' },
  { name: 'Upskill', logo: '/placeholder-sponsor4.svg' },
  { name: 'H2Skill', logo: '/placeholder-sponsor1.svg' }
];

const SponsorsGrid = () => {
  const [sponsors, setSponsors] = useState(fallbackSponsors);

  useEffect(() => {
    fetch(`${API_BASE}/sponsors`)
      .then(r => r.json())
      .then(data => {
        if (Array.isArray(data) && data.length) setSponsors(data);
      })
      .catch(() => {/* keep fallback */});
  }, []);

  return (
    <section className="sponsors">
      <h2>Our Sponsors</h2>
      <div className="sponsor-grid">
        {sponsors.map(s => (
          <div className="sponsor-card" key={s.name}>
            <img src={s.logo} alt={s.name} className="sponsor-logo" />
            <span>{s.name}</span>
          </div>
        ))}
      </div>
      <p className="sponsor-note">Want to support I.D.C.? Scroll below and submit the sponsor form.</p>
    </section>
  );
};

export default SponsorsGrid;
