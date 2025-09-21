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
        <h2 className="about-title animated-title">About I.D.C.</h2>
        <div className="about-content animated-content">
          <p className="about-description">
            <span className="vision-block">
              <strong>Vision:</strong> Democratize access to opportunities, knowledge, and networks for every developer in India.
            </span>
            <span className="mission-block">
              <strong>Mission:</strong> Build a unified platform that nurtures innovation through events, curated learning, peer support, and industry collaboration.
            </span>
            <span className="what-we-do-block">
              <strong>What We Do:</strong> We host hackathons & challenges, publish tech trend digests, curate skill tracks, unlock career & internship pathways, and enable meaningful networking.
            </span>
          </p>
        </div>
        <div className={`stats-row animated-stats ${statsVisible ? 'stats-visible' : ''}`}>
          <div className="stat stat-delay-1">
            <span className="stat-number">500+</span>
            <span className="stat-label">Members</span>
          </div>
          <div className="stat stat-delay-2">
            <span className="stat-number">20+</span>
            <span className="stat-label">Events</span>
          </div>
          <div className="stat stat-delay-3">
            <span className="stat-number">50+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat stat-delay-4">
            <span className="stat-number">10+</span>
            <span className="stat-label">Partners</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
