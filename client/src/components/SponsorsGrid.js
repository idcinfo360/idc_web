import React, { useEffect, useState } from 'react';
import LoadingSpinner from './LoadingSpinner';

const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:5002/api';

const fallbackSponsors = [
  { name: 'DevPulse', logo: '/placeholder-sponsor1.svg' },
  { name: 'CloudForge', logo: '/placeholder-sponsor2.svg' },
  { name: 'StackWave', logo: '/placeholder-sponsor3.svg' },
  { name: 'DataNest', logo: '/placeholder-sponsor4.svg' }
];

const SponsorsGrid = () => {
  const [sponsors, setSponsors] = useState(fallbackSponsors);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/sponsors`)
      .then(r => r.json())
      .then(data => {
        if (Array.isArray(data) && data.length) setSponsors(data);
      })
      .catch(() => {/* keep fallback */})
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="sponsors">
      <h2>Our Sponsors</h2>
      {loading ? (
        <LoadingSpinner size="medium" message="Loading sponsors..." />
      ) : (
        <>
          <div className="sponsor-grid">
            {sponsors.map(s => (
              <div className="sponsor-card" key={s.name}>
                <img src={s.logo} alt={s.name} className="sponsor-logo" />
                <span>{s.name}</span>
              </div>
            ))}
          </div>
          <p className="sponsor-note">Want to support I.D.C.? Scroll below and submit the sponsor form.</p>
        </>
      )}
    </section>
  );
};

export default SponsorsGrid;
