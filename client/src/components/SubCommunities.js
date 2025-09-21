import React from 'react';

const subs = [
  { 
    name: 'Frontend Developers', 
    desc: 'React, Vue, Angular enthusiasts sharing UI/UX best practices and modern web development techniques.',
    icon: '⚛️',
    members: '4,500+',
    topics: ['React', 'Vue.js', 'TypeScript', 'CSS'],
    seoKeywords: 'Frontend Developers India, React Developers India, Vue Angular Developers, IDC Frontend Community'
  },
  { 
    name: 'Backend Engineers', 
    desc: 'Node.js, Python, Java developers focusing on scalable APIs, microservices, and system design.',
    icon: '🔧',
    members: '3,800+',
    topics: ['Node.js', 'Python', 'Java', 'APIs'],
    seoKeywords: 'Backend Developers India, Node.js Python Java Developers, API Development India, IDC Backend Community'
  },
  { 
    name: 'Mobile App Developers', 
    desc: 'Flutter, React Native, Android & iOS developers building cross-platform mobile applications.',
    icon: '📱',
    members: '3,200+',
    topics: ['Flutter', 'React Native', 'iOS', 'Android'],
    seoKeywords: 'Mobile App Developers India, Flutter React Native Developers, iOS Android Developers India, IDC Mobile Community'
  },
  { 
    name: 'DevOps & Cloud', 
    desc: 'AWS, Azure, Docker, Kubernetes experts sharing infrastructure automation and deployment strategies.',
    icon: '☁️',
    members: '2,500+',
    topics: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
    seoKeywords: 'DevOps Engineers India, Cloud Developers India, AWS Azure Developers, IDC DevOps Community'
  },
  { 
    name: 'AI/ML Engineers', 
    desc: 'Machine Learning, Deep Learning, and AI enthusiasts working on cutting-edge projects and research.',
    icon: '🤖',
    members: '2,800+',
    topics: ['TensorFlow', 'PyTorch', 'OpenAI', 'Data Science'],
    seoKeywords: 'AI ML Engineers India, Machine Learning Developers India, Data Science Community India, IDC AI Community'
  },
  { 
    name: 'Blockchain Developers', 
    desc: 'Web3, Smart Contracts, DeFi developers building the future of decentralized applications.',
    icon: '⛓️',
    members: '1,900+',
    topics: ['Solidity', 'Web3', 'DeFi', 'NFTs'],
    seoKeywords: 'Blockchain Developers India, Web3 Developers India, Smart Contract Developers, IDC Blockchain Community'
  }
];

const SubCommunities = () => (
  <section className="sub-communities">
    <div className="container">
      <h2>Specialized Developer Communities - IDC India</h2>
      <p>Join 18,700+ developers in specialized tech communities within IDC (Indian Developer Community). Connect with frontend, backend, mobile, AI/ML, DevOps, and blockchain developers across India.</p>
      <div className="subs-grid">
        {subs.map((sub, index) => (
          <div className="sub-card" key={index} data-seo-keywords={sub.seoKeywords}>
            <div className="sub-header">
              <span className="sub-icon" role="img" aria-label={`${sub.name} community icon`}>{sub.icon}</span>
              <div className="sub-info">
                <h3>{sub.name} - IDC India</h3>
                <span className="sub-members">{sub.members} Indian developers</span>
              </div>
            </div>
            <p>{sub.desc} Join India's largest {sub.name.toLowerCase()} community.</p>
            <div className="sub-topics">
              {sub.topics.map((topic, i) => (
                <span key={i} className="topic-tag">{topic}</span>
              ))}
            </div>
            <button className="join-btn" aria-label={`Join ${sub.name} community in IDC - Indian Developer Community`}>Join IDC Community</button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SubCommunities;
