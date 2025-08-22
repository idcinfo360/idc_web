import React, { useState } from 'react';
import LoadingSpinner from './LoadingSpinner';

const SponsorContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');
    
    try {
      const res = await fetch((process.env.REACT_APP_API_URL || 'http://localhost:5002/api') + '/sponsor-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      
      if (res.ok) {
        setStatus('Thank you! We will get back to you soon ✅');
        setForm({ name: '', email: '', company: '', message: '' });
      } else {
        setStatus('Failed to send message. Please try again ❌');
      }
    } catch {
      setStatus('Network error. Please check your connection ❌');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="sponsor-contact-form" onSubmit={handleSubmit}>
      <h3>Become a Sponsor</h3>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
      <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
      <input name="company" placeholder="Company" value={form.company} onChange={handleChange} required />
      <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} required />
      
      <button 
        type="submit" 
        className={`btn primary ${isLoading ? 'loading' : ''}`}
        disabled={isLoading}
      >
        {isLoading ? 'Sending...' : 'Connect'}
      </button>
      
      {isLoading && (
        <div style={{ marginTop: '1rem' }}>
          <LoadingSpinner size="small" message="Sending your message..." />
        </div>
      )}
      
      {status && <p className="form-status">{status}</p>}
    </form>
  );
};

export default SponsorContactForm;
