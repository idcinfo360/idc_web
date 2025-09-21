import React from 'react';

const highlights = [
  { 
    title: 'I.D.C. AI/ML Hackathon 2024', 
    desc: 'Over 800 participants from 150+ colleges competed in 48-hour hackathon. Winners received ₹2 Lakh prize pool.', 
    img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&q=80',
    date: 'Dec 2024',
    participants: '800+ Developers',
    keywords: 'AI ML Hackathon, Indian Developer Community AI, IDC Hackathon, Machine Learning India'
  },
  { 
    title: 'Web3 & Blockchain Summit', 
    desc: 'Industry experts from Polygon, WazirX, and CoinDCX shared insights on blockchain development in India.', 
    img: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&q=80',
    date: 'Nov 2024',
    participants: '1,200+ Attendees',
    keywords: 'Web3 Summit India, Blockchain Developers India, IDC Web3, Indian Developer Blockchain'
  },
  { 
    title: 'Open Source Contribution Drive', 
    desc: 'Community members contributed 500+ PRs to major open source projects including React, Node.js, and MongoDB.', 
    img: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&q=80',
    date: 'Oct 2024',
    participants: '300+ Contributors',
    keywords: 'Open Source India, Indian Developer Open Source, IDC GitHub, Developer Contribution India'
  },
  { 
    title: 'DevOps & Cloud Workshop Series', 
    desc: 'Hands-on workshops on AWS, Azure, Docker, and Kubernetes. 90% participants got cloud certifications.', 
    img: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&q=80',
    date: 'Sep 2024',
    participants: '500+ Learners',
    keywords: 'DevOps Training India, Cloud Workshop India, AWS Azure Training, IDC DevOps'
  },
  { 
    title: 'Women in Tech Conference', 
    desc: 'Celebrating female developers in India. Featured speakers from Google, Microsoft, and leading startups.', 
    img: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&q=80',
    date: 'Aug 2024',
    participants: '600+ Women Developers',
    keywords: 'Women in Tech India, Female Developers India, Women Developer Community, IDC Women Tech'
  }
];

const CommunityHighlights = () => {
  return (
    <section className="community-highlights">
      <div className="container">
        <h2>Recent Community Highlights - IDC Indian Developer Community</h2>
        <p>Discover how IDC (Indian Developer Community) with 10,000+ developers creates impactful tech events, hackathons, and learning opportunities across India. Join India's largest developer community for career growth.</p>
        <div className="highlights-grid">
          {highlights.map((highlight, index) => (
            <div className="highlight-card" key={index}>
              <div className="highlight-image">
                <img src={highlight.img} alt={`${highlight.title} - IDC Indian Developer Community Event with ${highlight.participants} featuring ${highlight.keywords}`} className="highlight-img" />
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
