import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SponsorsPage from './pages/SponsorsPage';
import MarketingPage from './pages/MarketingPage';
import CommunityPage from './pages/CommunityPage';
import AboutPage from './pages/AboutPage';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import WhatsAppCTA from './components/WhatsAppCTA';
import PageTransition from './components/PageTransition';

function App() {
  return (
    <Router>
      <Navbar />
      <main className="main-content">
        <PageTransition>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/sponsors" element={<SponsorsPage />} />
            <Route path="/marketing" element={<MarketingPage />} />
            <Route path="/community" element={<CommunityPage />} />
          </Routes>
        </PageTransition>
      </main>
      <WhatsAppCTA floating />
      <Footer />
    </Router>
  );
}

export default App;
