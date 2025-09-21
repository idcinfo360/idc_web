import React, { useEffect, useState } from 'react';
import upprDeveloperLogo from '../assets/uppr-developer-logo.png';
import googleDeveloperLogo from '../assets/google-developer-logo.webp';
import unstopLogo from '../assets/unstop-logo.jpg';
import upskillLogo from '../assets/upskill-logo.jpg';
import h2skillLogo from '../assets/h2skill-logo.webp';

const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:5002/api';

const fallbackSponsors = [
  { name: 'Uppr Developer', logo: upprDeveloperLogo },
  { name: 'Google Developer Club', logo: googleDeveloperLogo },
  { name: 'Unstop Ambassador', logo: unstopLogo },
  { name: 'Upskill', logo: upskillLogo },
  { name: 'H2Skill', logo: h2skillLogo }
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
      <h2 className="handwriting-title">Our Sponsors</h2>
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
