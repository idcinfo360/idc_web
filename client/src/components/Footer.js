import React from 'react';
import logo from '../assets/idc-logo-new.png';
import whatsappIcon from '../assets/whatsapp-icon.svg';
import instagramIcon from '../assets/instagram-icon.svg';
import linkedinIcon from '../assets/linkedin-icon.svg';
import rocketIcon from '../assets/rocket-icon.svg';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-section">
        <div className="footer-brand">
          <img src={logo} alt="I.D.C." className="footer-logo" />
          <h4>I.D.C.</h4>
        </div>
        <p>Indian Developer Community - Empowering Developers, Connecting Innovators</p>
        <div className="footer-social-icons">
          <a href="https://chat.whatsapp.com/HBPyc6LMFPP1ZHyur0tF2j" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
            <img src={whatsappIcon} alt="WhatsApp" className="footer-social-icon-img" />
          </a>
          <a href="https://www.instagram.com/idc_tech/" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
            <img src={instagramIcon} alt="Instagram" className="footer-social-icon-img" />
          </a>
          <a href="https://www.linkedin.com/company/indian-developer-community/?lipi=urn%3Ali%3Apage%3Ad_flagship3_messaging_conversation_detail%3B5sXT1jdlTrKvfEDqw3Q5fg%3D%3D" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
            <img src={linkedinIcon} alt="LinkedIn" className="footer-social-icon-img" />
          </a>
        </div>
      </div>
      <div className="footer-section">
        <h4>Quick Links</h4>
        <div className="footer-links">
          <a href="/about">About</a>
          <a href="/sponsors">Sponsors</a>
          <a href="/marketing">Marketing</a>
          <a href="/community">Community</a>
        </div>
      </div>
      <div className="footer-section">
        <h4>Join Us</h4>
        <p>Connect with I.D.C. and be part of India's largest developer community</p>
        <a href="https://chat.whatsapp.com/HBPyc6LMFPP1ZHyur0tF2j" target="_blank" rel="noopener noreferrer" className="footer-cta">
          Join WhatsApp Community <img src={rocketIcon} alt="Rocket" className="footer-rocket-icon" />
        </a>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© 2025 Indian Developer Community (I.D.C.) - All rights reserved</p>
    </div>
  </footer>
);

export default Footer;
