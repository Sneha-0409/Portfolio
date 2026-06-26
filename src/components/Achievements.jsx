import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useAnimationFrame } from 'framer-motion';
import imgNsoc from '../assets/nsoc.png';
import imgMk from '../assets/mk.jpeg';
import imgHackathon from '../assets/hackathon.jpg';
import imgCloud from '../assets/cloud.jpg';
import imgNcat from '../assets/ncat.jpg';
import imgCo from '../assets/co.jpg';
import imgSneha from '../assets/Sneha.PNG';
import imgHack from '../assets/hack.JPG';
import imgHvard from '../assets/hvard.jpg';

const achievementsData = [
  {
    id: 1,
    title: 'Top 1% Contributor (Rank 21/980+)',
    issuer: 'Nexus Spring of Code \'26',
    date: '2026',
    description: 'Contributed to 13 projects with 110 PRs successfully merged.',
    image: imgNsoc
  },
  {
    id: 2,
    title: 'Forward Program\'26 Fellow',
    issuer: 'McKinsey & Company',
    date: 'Apr 2026 - Jun 2026',
    description: 'Participated in the remote professional development apprenticeship by McKinsey & Company.',
    credentialsLink: 'https://www.credly.com/badges/04b2fdc4-1561-437c-8fc9-96dd3d6e5fc0/whatsapp',
    image: imgMk
  },
  {
    id: 3,
    title: 'ORBIX 2026 Hackathon',
    issuer: 'IIIT Delhi',
    date: 'Mar 2026',
    description: 'Selected in Top 7 (Blockchain/Web3 category) out of 1600+ registrations at IIIT Delhi.',
    image: imgHackathon
  },
  {
    id: 4,
    title: 'Under Top 50 Certificate',
    issuer: 'Google Cloud Arcade',
    date: '2025',
    description: (
      <>
        Secured Position under top 50 by Completing 19 labs + arcade games. Organised by GDGoC MITS-DU Gwalior.
        <br />
        <strong>Credential ID: MITS-DU-202510-00139</strong>
      </>
    ),
    image: imgCloud
  },
  {
    id: 5,
    title: 'All India Rank 7361',
    issuer: 'Naukri Campus',
    date: '2026',
    description: 'All India NCAT 2026 by Naukri Campus. With more than 2 lakhs+ people enrolled.',
    credentialsLink: 'https://www.naukri.com/campus/certificates/nc_ai_ncat_participation_may_2026/v0/6a19aa4fe34d6b76d03a0bc0?utm_source=certificate&utm_medium=copy&utm_campaign=6a19aa4fe34d6b76d03a0bc0',
    image: imgNcat
  },
  {
    id: 6,
    title: 'Co-Mentor Certificate',
    issuer: 'Hackorbit',
    date: '2026',
    description: (
      <>
        Co-Mentored at Hackorbit - a national level Hackathon organised by Digital learning group, MITS-DU.
        <br />
        <strong>Credential ID: MITS-DU-202507-00064</strong>
      </>
    ),
    image: imgCo
  },
  {
    id: 7,
    title: 'Code Coalescence 2025 Offline Hackathon',
    issuer: 'MITS-DU Gwalior',
    date: '2025',
    description: 'Finalist at the Code Coalescence 2025 Offline Hackathon held at MITS-DU Gwalior.',
    image: imgSneha
  },
  {
    id: 8,
    title: 'Triwizardathon 1.0 Hackathon Finalist',
    issuer: 'MLSA GLA University & Microsoft',
    date: '2025',
    description: 'Finalist at the Hackathon Triwizardathon 1.0 in collab with MLSA GLA University & Microsoft.',
    image: imgHack
  },
  {
    id: 9,
    title: 'Selected for HPAIR Asia Conference 2026',
    issuer: 'HPAIR',
    date: '2026',
    description: 'Selected for HPAIR Asia Conference 2026 taking place at Hanoi, Vietnam.',
    image: imgHvard
  }
];

const AchievementCard = ({ data, onImageClick }) => (
  <div className="achievement-card">
    <div className="achievement-image-wrapper">
      {data.image ? (
        <div style={{ cursor: 'pointer', height: '100%', position: 'relative' }} onClick={() => onImageClick(data.image)} title="Click to view image">
          <img src={data.image} alt={data.title} />
          <div style={{ position: 'absolute', bottom: '8px', right: '8px', background: 'rgba(0,0,0,0.65)', color: '#fff', padding: '4px 8px', borderRadius: '12px', fontSize: '0.7rem', display: 'flex', alignItems: 'center', gap: '4px', backdropFilter: 'blur(4px)', pointerEvents: 'none' }}>
            <svg style={{ width: '12px', height: '12px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" /></svg>
            Tap to view
          </div>
        </div>
      ) : data.icon}
    </div>
    <div className="achievement-content">
      <h3 className="achievement-title">{data.title}</h3>
      <p className="achievement-issuer">{data.issuer} • {data.date}</p>
      {data.description && <p className="achievement-description" style={{ fontSize: '0.85rem', color: '#aaa', marginTop: '0.5rem', lineHeight: '1.4' }}>{data.description}</p>}
      {data.credentialsLink && (
        <a href={data.credentialsLink} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.8rem', color: '#b388ff', textDecoration: 'none', fontSize: '0.85rem', fontWeight: '500' }}>
          View Credentials
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        </a>
      )}
    </div>
  </div>
);

export default function Achievements() {
  const [selectedImage, setSelectedImage] = useState(null);
  const trackRef = useRef(null);
  const isHovered = useRef(false);
  const x = useRef(0);

  useAnimationFrame((time, delta) => {
    if (!isHovered.current && trackRef.current) {
      const moveBy = (delta / 16) * 0.8;
      x.current -= moveBy;

      const halfWidth = trackRef.current.scrollWidth / 2;
      if (x.current <= -halfWidth) {
        x.current += halfWidth;
      }

      trackRef.current.style.transform = `translateX(${x.current}px)`;
    }
  });

  const scroll = (direction) => {
    if (trackRef.current) {
      isHovered.current = true;
      trackRef.current.style.transition = 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)';

      const jump = direction === 'left' ? 420 : -420;
      x.current += jump;

      const halfWidth = trackRef.current.scrollWidth / 2;
      if (x.current > 0) x.current -= halfWidth;
      if (x.current <= -halfWidth) x.current += halfWidth;

      trackRef.current.style.transform = `translateX(${x.current}px)`;

      setTimeout(() => {
        if (trackRef.current) {
          trackRef.current.style.transition = 'none';
        }
        isHovered.current = false;
      }, 400);
    }
  };

  return (
    <div className="achievements-container">
      <div className="achievements-header" style={{ textAlign: 'center' }}>
        <h2 className="journey-title" style={{ marginBottom: '0.5rem' }}>
          <span className="text-gradient">ACHIEVEMENTS & </span>
          <span className="text-white">CERTIFICATIONS</span>
        </h2>
        <p style={{ color: '#a09d9c', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
          Milestones, recognitions, and professional certifications I've earned along my journey.
        </p>
      </div>

      <div className="achievements-marquee-wrapper" style={{ position: 'relative' }}>
        <button
          onClick={() => scroll('left')}
          style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', zIndex: 10, background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%', width: '40px', height: '40px', color: 'white', cursor: 'pointer', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>

        <div
          style={{ overflow: 'hidden', width: '100%', maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)' }}
          onMouseEnter={() => isHovered.current = true}
          onMouseLeave={() => isHovered.current = false}
        >
          <div
            ref={trackRef}
            className="achievements-marquee-track"
            style={{ animation: 'none', width: 'max-content', paddingBottom: '1rem', display: 'flex', gap: '2rem' }}
          >
            {achievementsData.map((item) => (
              <AchievementCard key={`set1-${item.id}`} data={item} onImageClick={setSelectedImage} />
            ))}
            {achievementsData.map((item) => (
              <AchievementCard key={`set2-${item.id}`} data={item} onImageClick={setSelectedImage} />
            ))}
          </div>
        </div>

        <button
          onClick={() => scroll('right')}
          style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', zIndex: 10, background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%', width: '40px', height: '40px', color: 'white', cursor: 'pointer', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0,0,0,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', cursor: 'pointer' }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Achievement Full"
              style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', borderRadius: '8px', boxShadow: '0 0 40px rgba(179, 136, 255, 0.2)' }}
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
