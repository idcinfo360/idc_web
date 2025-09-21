import React, { useEffect, useRef, useState } from 'react';
import idcHeadquarters from '../assets/idc-headquarters-mumbai.png';

const HeadquartersShowcase = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`headquarters-showcase animated-section ${isVisible ? 'section-visible' : ''}`}
    >
      <div className="headquarters-content">
        <div className="headquarters-text animated-content">
          <h2 className="headquarters-title animated-title">Our Headquarters</h2>
          <p className="headquarters-description">
            Located in the heart of Mumbai, the I.D.C. headquarters stands as a beacon of innovation 
            and technological excellence. This state-of-the-art facility serves as the central hub 
            for our developer community, fostering collaboration and driving the future of technology 
            in India.
          </p>
          <div className="headquarters-location">
            <span className="location-icon">📍</span>
            <span className="location-text">Mumbai, India</span>
          </div>
        </div>
        <div className="headquarters-image-container animated-image">
          <div className="headquarters-image-wrapper">
            <img 
              src={idcHeadquarters} 
              alt="I.D.C. Headquarters Building in Mumbai" 
              className="headquarters-image"
            />
            <div className="image-glow-effect"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeadquartersShowcase;