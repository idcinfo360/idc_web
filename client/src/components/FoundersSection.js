import React, { useEffect, useRef, useState } from 'react';
import dharmikPhoto from '../assets/dharmik-gohil.jpg';
import bhavyaPhoto from '../assets/bhavya-butani.jpg';
import kenilPhoto from '../assets/kenil-gopani.jpg';

const FoundersSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const founders = [
    {
      id: 1,
      name: "Dharmik Gohil",
      role: "Co-Founder",
      description: "Visionary leader driving innovation and community growth in the tech ecosystem.",
      photo: dharmikPhoto
    },
    {
      id: 2,
      name: "Bhavya Butani",
      role: "Co-Founder", 
      description: "Strategic mind focused on building bridges between developers and industry.",
      photo: bhavyaPhoto
    },
    {
      id: 3,
      name: "Kenil Gopani",
      role: "Co-Founder",
      description: "Technical expert passionate about fostering collaborative developer communities.",
      photo: kenilPhoto
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className={`founders-section animated-section ${isVisible ? 'section-visible' : ''}`}
    >
      <div className="founders-content">
        <h2 className="founders-title animated-title">Meet Our Founders</h2>
        <p className="founders-subtitle animated-content">
          The visionary minds behind I.D.C., dedicated to empowering developers across India
        </p>
        
        <div className="founders-grid">
          {founders.map((founder, index) => (
            <div 
              key={founder.id} 
              className={`founder-card animated-card founder-delay-${index + 1} ${isVisible ? 'card-visible' : ''}`}
            >
              <div className="founder-avatar">
                {founder.photo ? (
                  <div className="founder-photo-container">
                    <img 
                      src={founder.photo} 
                      alt={`${founder.name} - ${founder.role} of IDC Indian Developer Community`}
                      className="founder-photo"
                    />
                  </div>
                ) : (
                  <div className="default-user-icon">
                    <svg 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      className="user-svg"
                    >
                      <path 
                        d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" 
                        fill="currentColor"
                      />
                      <path 
                        d="M12 14C7.03125 14 3 18.0312 3 23H21C21 18.0312 16.9688 14 12 14Z" 
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                )}
                <div className="avatar-glow"></div>
              </div>
              
              <div className="founder-info">
                <h3 className="founder-name">{founder.name}</h3>
                <p className="founder-role">{founder.role}</p>
                <p className="founder-description">{founder.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;