import React, { useEffect, useRef, useState } from 'react';

const AboutSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Trigger stats animation after main content
          setTimeout(() => setStatsVisible(true), 500);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`about about-idc-section animated-section ${isVisible ? 'section-visible' : ''}`}
    >
      <div className="about-idc-content">
        <h2 className="about-title animated-title">About IDC - Indian Developer Community</h2>
        <div className="about-content animated-content">
          <p className="about-description">
            <span className="vision-block">
              <strong>Vision:</strong> Democratize access to opportunities, knowledge, and networks for every developer in India. IDC aims to be India's largest and most supportive developer community.
            </span>
            <span className="mission-block">
              <strong>Mission:</strong> Build a unified platform that nurtures innovation through events, curated learning, peer support, and industry collaboration. Connecting 10,000+ Indian developers nationwide.
            </span>
            <span className="what-we-do-block">
              <strong>What We Do:</strong> IDC hosts hackathons & coding challenges, publishes tech trend digests, curates skill development tracks, unlocks career & internship pathways, and enables meaningful networking for Indian developers across all skill levels.
            </span>
          </p>
        </div>
        <div className={`stats-row animated-stats ${statsVisible ? 'stats-visible' : ''}`}>
          <div className="stat stat-delay-1">
            <span className="stat-number">10,000+</span>
            <span className="stat-label">Indian Developers</span>
          </div>
          <div className="stat stat-delay-2">
            <span className="stat-number">750+</span>
            <span className="stat-label">Tech Events</span>
          </div>
          <div className="stat stat-delay-3">
            <span className="stat-number">100+</span>
            <span className="stat-label">Cities Reached</span>
          </div>
          <div className="stat stat-delay-4">
            <span className="stat-number">50+</span>
            <span className="stat-label">Industry Partners</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
