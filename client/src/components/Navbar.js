import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/idc-logo-new.png';
import whatsappIcon from '../assets/whatsapp-icon.svg';
import linkedinIcon from '../assets/linkedin-icon.svg';
import instagramIcon from '../assets/instagram-icon.svg';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="nav-inner">
        <Link to="/" className="brand">
          <img src={logo} alt="IDC - Indian Developer Community Logo" className="brand-logo" />
          <span className="brand-text">I.D.C.</span>
        </Link>
        
        {/* Hamburger Menu Button */}
        <button className="hamburger-menu" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
        </button>

        <nav className={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`}>
          {/* Close button for mobile menu */}
          <button className="mobile-close-btn" onClick={() => setIsMenuOpen(false)}>
            ✕
          </button>
          <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/sponsors" className="nav-link" onClick={() => setIsMenuOpen(false)}>Sponsors</Link>
          <Link to="/marketing" className="nav-link" onClick={() => setIsMenuOpen(false)}>Marketing</Link>
          <Link to="/community" className="nav-link" onClick={() => setIsMenuOpen(false)}>Community</Link>
        </nav>
        
        <div className="social-icons">
          <a href="https://chat.whatsapp.com/HBPyc6LMFPP1ZHyur0tF2j" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src={whatsappIcon} alt="Join IDC Indian Developer Community WhatsApp Group" className="social-icon-img" />
          </a>
          <a href="https://www.instagram.com/idc_tech/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src={instagramIcon} alt="Follow IDC Indian Developer Community on Instagram" className="social-icon-img" />
          </a>
          <a href="https://www.linkedin.com/company/indian-developer-community/?lipi=urn%3Ali%3Apage%3Ad_flagship3_messaging_conversation_detail%3B5sXT1jdlTrKvfEDqw3Q5fg%3D%3D" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src={linkedinIcon} alt="Connect with IDC Indian Developer Community on LinkedIn" className="social-icon-img" />
          </a>
          
        </div>
      </div>
    </header>
  );
};

export default Navbar;
