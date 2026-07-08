import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import imgCt from '../assets/ct.png';
import imgMicrosoft from '../assets/Microsoft certification.png';

const certsData = [
  {
    id: 1,
    title: 'Microsoft Certification',
    image: imgMicrosoft
  }
];

export default function Certifications() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="achievements-container" style={{ marginTop: '2rem' }}>
      <div className="achievements-header" style={{ textAlign: 'center' }}>
        <h2 className="journey-title" style={{ marginBottom: '0.5rem' }}>
          <span className="text-white">MY</span> <span className="text-gradient">CERTIFICATIONS</span>
        </h2>
        <p style={{ color: '#a09d9c', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
          Professional certifications and licenses I've earned.
        </p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', padding: '2rem 1rem' }}>
        {certsData.map(cert => (
          <div key={cert.id} className="achievement-card" style={{ maxWidth: '400px', width: '100%' }}>
            <div className="achievement-image-wrapper">
              <div style={{ cursor: 'pointer', height: '100%', position: 'relative' }} onClick={() => setSelectedImage(cert.image)} title="Click to view image">
                <img src={cert.image} alt={cert.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', bottom: '8px', right: '8px', background: 'rgba(0,0,0,0.65)', color: '#fff', padding: '4px 8px', borderRadius: '12px', fontSize: '0.7rem', display: 'flex', alignItems: 'center', gap: '4px', backdropFilter: 'blur(4px)', pointerEvents: 'none' }}>
                  <svg style={{ width: '12px', height: '12px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" /></svg>
                  Tap to view
                </div>
              </div>
            </div>
            <div className="achievement-content" style={{ textAlign: 'center' }}>
              <h3 className="achievement-title" style={{ margin: 0 }}>{cert.title}</h3>
            </div>
          </div>
        ))}
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
              alt="Certification Full"
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
