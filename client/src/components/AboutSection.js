import React from 'react';

const AboutSection = () => (
  <section className="about">
    <h2>About I.D.C.</h2>
    <p>
      <strong>Vision:</strong> Democratize access to opportunities, knowledge, and networks for every developer in India.<br />
      <strong>Mission:</strong> Build a unified platform that nurtures innovation through events, curated learning, peer support, and industry collaboration.<br />
      <strong>What We Do:</strong> We host hackathons & challenges, publish tech trend digests, curate skill tracks, unlock career & internship pathways, and enable meaningful networking.
    </p>
    <div className="stats-row">
      <div className="stat"><span className="stat-number">500+</span><span className="stat-label">Members</span></div>
      <div className="stat"><span className="stat-number">20+</span><span className="stat-label">Events</span></div>
      <div className="stat"><span className="stat-number">50+</span><span className="stat-label">Projects</span></div>
      <div className="stat"><span className="stat-number">10+</span><span className="stat-label">Partners</span></div>
    </div>
  </section>
);

export default AboutSection;
