import React, { useState, useEffect } from 'react';
import LoadingSpinner from './LoadingSpinner';

const highlights = [
  { 
    title: 'I.D.C. AI/ML Hackathon 2024', 
    desc: 'Over 800 participants from 150+ colleges competed in 48-hour hackathon. Winners received ₹2 Lakh prize pool.', 
    img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&q=80',
    date: 'Dec 2024',
    participants: '800+ Developers'
  },
  { 
    title: 'Web3 & Blockchain Summit', 
    desc: 'Industry experts from Polygon, WazirX, and CoinDCX shared insights on blockchain development in India.', 
    img: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&q=80',
    date: 'Nov 2024',
    participants: '1,200+ Attendees'
  },
  { 
    title: 'Open Source Contribution Drive', 
    desc: 'Community members contributed 500+ PRs to major open source projects including React, Node.js, and MongoDB.', 
    img: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&q=80',
    date: 'Oct 2024',
    participants: '300+ Contributors'
  },
  { 
    title: 'DevOps & Cloud Workshop Series', 
    desc: 'Hands-on workshops on AWS, Azure, Docker, and Kubernetes. 90% participants got cloud certifications.', 
    img: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&q=80',
    date: 'Sep 2024',
    participants: '500+ Learners'
  },
  { 
    title: 'Women in Tech Conference', 
    desc: 'Celebrating female developers in India. Featured speakers from Google, Microsoft, and leading startups.', 
    img: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&q=80',
    date: 'Aug 2024',
    participants: '600+ Women Developers'
  }
];

const CommunityHighlights = () => {
  const [loading, setLoading] = useState(true);
  const [displayHighlights, setDisplayHighlights] = useState([]);

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setDisplayHighlights(highlights);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <section className="community-highlights">
        <div className="container">
          <h2>Recent Community Highlights</h2>
          <LoadingSpinner size="medium" message="Loading community events..." />
        </div>
      </section>
    );
  }

  return (
    <section className="community-highlights">
      <div className="container">
        <h2>Recent Community Highlights</h2>
        <p>Showcasing our latest events, achievements, and community milestones</p>
        <div className="highlights-grid">
          {displayHighlights.map((highlight, index) => (
            <div className="highlight-card" key={index}>
              <div className="highlight-image">
                <img src={highlight.img} alt={highlight.title} className="highlight-img" />
                <div className="highlight-overlay">
                  <span className="highlight-date">{highlight.date}</span>
                </div>
              </div>
              <div className="highlight-content">
                <h3>{highlight.title}</h3>
                <p>{highlight.desc}</p>
                <div className="highlight-meta">
                  <span className="participants">👥 {highlight.participants}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityHighlights;
