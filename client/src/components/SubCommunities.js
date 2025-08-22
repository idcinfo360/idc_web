import React from 'react';

const subs = [
  { 
    name: 'Frontend Developers', 
    desc: 'React, Vue, Angular enthusiasts sharing UI/UX best practices and modern web development techniques.',
    icon: '⚛️',
    members: '4,500+',
    topics: ['React', 'Vue.js', 'TypeScript', 'CSS']
  },
  { 
    name: 'Backend Engineers', 
    desc: 'Node.js, Python, Java developers focusing on scalable APIs, microservices, and system design.',
    icon: '🔧',
    members: '3,800+',
    topics: ['Node.js', 'Python', 'Java', 'APIs']
  },
  { 
    name: 'Mobile App Developers', 
    desc: 'Flutter, React Native, Android & iOS developers building cross-platform mobile applications.',
    icon: '📱',
    members: '3,200+',
    topics: ['Flutter', 'React Native', 'iOS', 'Android']
  },
  { 
    name: 'DevOps & Cloud', 
    desc: 'AWS, Azure, Docker, Kubernetes experts sharing infrastructure automation and deployment strategies.',
    icon: '☁️',
    members: '2,500+',
    topics: ['AWS', 'Docker', 'Kubernetes', 'CI/CD']
  },
  { 
    name: 'AI/ML Engineers', 
    desc: 'Machine Learning, Deep Learning, and AI enthusiasts working on cutting-edge projects and research.',
    icon: '🤖',
    members: '2,800+',
    topics: ['TensorFlow', 'PyTorch', 'OpenAI', 'Data Science']
  },
  { 
    name: 'Blockchain Developers', 
    desc: 'Web3, Smart Contracts, DeFi developers building the future of decentralized applications.',
    icon: '⛓️',
    members: '1,900+',
    topics: ['Solidity', 'Web3', 'DeFi', 'NFTs']
  }
];

const SubCommunities = () => (
  <section className="sub-communities">
    <div className="container">
      <h2>Developer Communities</h2>
      <p>Join specialized groups based on your tech stack and interests</p>
      <div className="subs-grid">
        {subs.map((sub, index) => (
          <div className="sub-card" key={index}>
            <div className="sub-header">
              <span className="sub-icon">{sub.icon}</span>
              <div className="sub-info">
                <h3>{sub.name}</h3>
                <span className="sub-members">{sub.members} members</span>
              </div>
            </div>
            <p>{sub.desc}</p>
            <div className="sub-topics">
              {sub.topics.map((topic, i) => (
                <span key={i} className="topic-tag">{topic}</span>
              ))}
            </div>
            <button className="join-btn">Join Community</button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SubCommunities;
