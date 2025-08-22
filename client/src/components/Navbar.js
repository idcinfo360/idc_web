import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/idc-logo.jpg';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="nav-inner">
        <Link to="/" className="brand">
          <img src={logo} alt="I.D.C." className="brand-logo" />
          <span>I.D.C.</span>
        </Link>
        <nav className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/sponsors" className="nav-link">Sponsors</Link>
          <Link to="/marketing" className="nav-link">Marketing</Link>
          <Link to="/community" className="nav-link">Community</Link>
        </nav>
        <a className="whatsapp-top-cta" href="https://chat.whatsapp.com/HBPyc6LMFPP1ZHyur0tF2j" target="_blank" rel="noopener noreferrer">
          💬 Join Community
        </a>
      </div>
    </header>
  );
};

export default Navbar;
