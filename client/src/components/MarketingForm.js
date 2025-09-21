import React, { useState } from 'react';

const MarketingForm = () => {
  const [form, setForm] = useState({ 
    companyName: '', 
    contactPerson: '',
    email: '', 
    phone: '', 
    budget: '',
    marketingGoals: '',
    targetAudience: '',
    message: '' 
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const [status, setStatus] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('');
    
    try {
      const res = await fetch((process.env.REACT_APP_API_URL || 'http://localhost:5002/api') + '/marketing', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      
      if (res.ok) {
        setStatus('Thank you! We will contact you soon to discuss partnership opportunities ✅');
        setForm({ companyName: '', contactPerson: '', email: '', phone: '', budget: '', marketingGoals: '', targetAudience: '', message: '' });
      } else {
        setStatus('Failed to submit inquiry. Please try again ❌');
      }
    } catch {
      setStatus('Network error. Please check your connection ❌');
    }
  };

  return (
    <form className="marketing-form" onSubmit={handleSubmit}>
      <h3>Marketing Partnership Inquiry</h3>
      <p>Tell us about your marketing goals and let's explore partnership opportunities</p>
      
      <div className="form-row">
        <input 
          name="companyName" 
          placeholder="Company Name *" 
          value={form.companyName} 
          onChange={handleChange} 
          required 
        />
        <input 
          name="contactPerson" 
          placeholder="Contact Person *" 
          value={form.contactPerson} 
          onChange={handleChange} 
          required 
        />
      </div>
      
      <div className="form-row">
        <input 
          name="email" 
          type="email" 
          placeholder="Email Address *" 
          value={form.email} 
          onChange={handleChange} 
          required 
        />
        <input 
          name="phone" 
          placeholder="Phone Number *" 
          value={form.phone} 
          onChange={handleChange} 
          required 
        />
      </div>
      
      <div className="form-row">
        <select 
          name="budget" 
          value={form.budget} 
          onChange={handleChange} 
          required
        >
          <option value="">Marketing Budget Range *</option>
          <option value="under-50k">Under ₹50,000</option>
          <option value="50k-1l">₹50,000 - ₹1,00,000</option>
          <option value="1l-5l">₹1,00,000 - ₹5,00,000</option>
          <option value="5l-10l">₹5,00,000 - ₹10,00,000</option>
          <option value="above-10l">Above ₹10,00,000</option>
        </select>
        <select 
          name="targetAudience" 
          value={form.targetAudience} 
          onChange={handleChange}
        >
          <option value="">Target Developer Audience</option>
          <option value="students">Students & Beginners</option>
          <option value="junior">Junior Developers (0-2 years)</option>
          <option value="mid">Mid-level Developers (2-5 years)</option>
          <option value="senior">Senior Developers (5+ years)</option>
          <option value="all">All Developer Levels</option>
        </select>
      </div>
      
      <input 
        name="marketingGoals" 
        placeholder="Marketing Goals (e.g., Brand Awareness, Lead Generation, Product Launch)" 
        value={form.marketingGoals} 
        onChange={handleChange} 
      />
      
      <textarea 
        name="message" 
        placeholder="Tell us about your company, products/services, and specific marketing requirements" 
        value={form.message} 
        onChange={handleChange} 
        rows="4"
      />
      
      <button type="submit" className="btn primary">
        Submit Partnership Inquiry 🚀
      </button>
      
      {status && <p className="form-status">{status}</p>}
    </form>
  );
};

export default MarketingForm;
