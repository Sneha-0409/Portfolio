import React from 'react';
import { motion } from 'framer-motion';

const achievementsData = [
  {
    id: 1,
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2025',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
    )
  },
  {
    id: 2,
    title: 'Hackathon First Place Winner',
    issuer: 'Global Tech Summit',
    date: '2024',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    )
  },
  {
    id: 3,
    title: 'Google Developer Expert',
    issuer: 'Google',
    date: '2023',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4285F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7"></circle>
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
      </svg>
    )
  },
  {
    id: 4,
    title: 'Open Source Contributor',
    issuer: 'Multiple Organizations',
    date: 'Ongoing',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
    )
  },
  {
    id: 5,
    title: 'Certified Kubernetes Administrator',
    issuer: 'CNCF',
    date: '2024',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#326CE5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    )
  }
];

const AchievementCard = ({ data }) => (
  <div className="achievement-card">
    <div className="achievement-image-wrapper">
      {data.image ? <img src={data.image} alt={data.title} /> : data.icon}
    </div>
    <div className="achievement-content">
      <h3 className="achievement-title">{data.title}</h3>
      <p className="achievement-issuer">{data.issuer} • {data.date}</p>
    </div>
  </div>
);

export default function Achievements() {
  return (
    <div className="achievements-container">
      <div className="achievements-header" style={{ textAlign: 'center' }}>
        <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>
          <span style={{ color: '#c2b5f5' }}>ACHIEVEMENTS & </span>
          <span style={{ color: '#ffffff' }}>CERTIFICATIONS</span>
        </h2>
        <p style={{ color: '#a09d9c', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
          Milestones, recognitions, and professional certifications I've earned along my journey.
        </p>
      </div>

      <div className="achievements-marquee-wrapper">
        <div className="achievements-marquee-track">
          {/* First set of cards */}
          {achievementsData.map((item) => (
            <AchievementCard key={`set1-${item.id}`} data={item} />
          ))}
          {/* Second identical set for seamless looping */}
          {achievementsData.map((item) => (
            <AchievementCard key={`set2-${item.id}`} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
