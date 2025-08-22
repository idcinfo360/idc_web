import React from 'react';

const marketingBenefits = [
  {
    icon: '🎯',
    title: 'Targeted Audience',
    desc: 'Reach 500+ active developers, tech enthusiasts, and industry professionals across India'
  },
  {
    icon: '🚀',
    title: 'Brand Visibility',
    desc: 'Featured placement in hackathons, events, newsletters, and community platforms'
  },
  {
    icon: '💡',
    title: 'Product Promotion',
    desc: 'Showcase your tech products, tools, and services to engaged developer audiences'
  },
  {
    icon: '🤝',
    title: 'Community Engagement',
    desc: 'Direct interaction with developers through workshops, demos, and technical sessions'
  },
  {
    icon: '📈',
    title: 'Lead Generation',
    desc: 'Generate qualified leads and build your developer community around your products'
  },
  {
    icon: '🏆',
    title: 'Thought Leadership',
    desc: 'Position your brand as a tech leader through content collaboration and expert sessions'
  }
];

const MarketingBenefits = () => (
  <section className="marketing-benefits">
    <h3>Marketing Partnership Benefits</h3>
    <div className="benefits-grid">
      {marketingBenefits.map(benefit => (
        <div className="benefit-card" key={benefit.title}>
          <div className="benefit-icon">{benefit.icon}</div>
          <h4>{benefit.title}</h4>
          <p>{benefit.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default MarketingBenefits;
