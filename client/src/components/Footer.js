import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-section">
        <h4>I.D.C.</h4>
        <p>Indian Developer Community - Empowering Developers, Connecting Innovators</p>
        <div className="social-links">
          <a href="https://chat.whatsapp.com/HBPyc6LMFPP1ZHyur0tF2j" target="_blank" rel="noopener noreferrer" className="social-link">
            <span>📱 WhatsApp</span>
          </a>
          <a href="https://instagram.com/i.d.c.community" target="_blank" rel="noopener noreferrer" className="social-link">
            <span>📷 Instagram</span>
          </a>
          <a href="https://youtube.com/@idccommunity" target="_blank" rel="noopener noreferrer" className="social-link">
            <span>📺 YouTube</span>
          </a>
          <a href="https://unstop.com/u/idccommunity" target="_blank" rel="noopener noreferrer" className="social-link">
            <span>🚀 Unstop</span>
          </a>
        </div>
      </div>
      <div className="footer-section">
        <h4>Quick Links</h4>
        <div className="footer-links">
          <a href="/about">About</a>
          <a href="/sponsors">Sponsors</a>
          <a href="/membership">Membership</a>
          <a href="/community">Community</a>
        </div>
      </div>
      <div className="footer-section">
        <h4>Join Us</h4>
        <p>Connect with I.D.C. and be part of India's largest developer community</p>
        <a href="https://chat.whatsapp.com/HBPyc6LMFPP1ZHyur0tF2j" target="_blank" rel="noopener noreferrer" className="footer-cta">
          Join WhatsApp Community 🚀
        </a>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© 2025 Indian Developer Community (I.D.C.) - All rights reserved</p>
    </div>
  </footer>
);

export default Footer;
