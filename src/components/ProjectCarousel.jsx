import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import imgCyberpunk from '../assets/proj_cyberpunk_1782069653371.png';
import imgGalaxy from '../assets/proj_galaxy_1782069664458.png';
import imgAi from '../assets/proj_ai_1782069677055.png';

const projects = [
  { id: 1, title: 'Neo-Kyoto Analytics', img: imgCyberpunk, desc: 'Cyberpunk Data Viz Dashboard' },
  { id: 2, title: 'Cosmic Stride', img: imgGalaxy, desc: 'Galaxy Theme E-Commerce' },
  { id: 3, title: 'Aurora AI', img: imgAi, desc: 'AI Image Generation Interface' },
  { id: 4, title: 'Neural Nexus', img: imgCyberpunk, desc: 'Machine Learning Control Center' },
  { id: 5, title: 'Stellar Market', img: imgGalaxy, desc: 'Web3 Sneaker Marketplace' },
  { id: 6, title: 'Synth Weaver', img: imgAi, desc: 'Generative Audio Studio' },
];

export default function ProjectCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Safely wrap index for circular array
  const normalizeIndex = (index) => {
    const len = projects.length;
    return ((index % len) + len) % len;
  };

  // Auto-play interval to swap every 3.5 seconds, pauses on hover
  useEffect(() => {
    let timeoutId;
    if (!isHovered) {
      timeoutId = setTimeout(() => {
        setActiveIndex((prev) => normalizeIndex(prev + 1));
      }, 3500);
    }
    return () => clearTimeout(timeoutId);
  }, [activeIndex, isHovered]);

  const handleNext = () => setActiveIndex((prev) => normalizeIndex(prev + 1));
  const handlePrev = () => setActiveIndex((prev) => normalizeIndex(prev - 1));

  // Swipe logic
  const handlePanEnd = (e, info) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      handleNext();
    } else if (info.offset.x > swipeThreshold) {
      handlePrev();
    }
  };

  return (
    <div 
      className="carousel-container" 
      style={{ perspective: '1500px' }}
      onPanEnd={handlePanEnd}
    >
      {/* Navigation Arrow */}
      <button className="carousel-nav-btn next-btn" onClick={handleNext} aria-label="Next project">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      <div className="carousel-coverflow-wrapper">
        <AnimatePresence initial={false}>
          {projects.map((proj, i) => {
            // Calculate shortest circular distance
            let d = i - activeIndex;
            const n = projects.length;
            if (d > n / 2) d -= n;
            if (d < -n / 2) d += n;

            const isActive = d === 0;
            const isPrev = d === -1;
            const isNext = d === 1;
            
            // Coverflow math parameters
            let x = 0;
            let z = 0;
            let rotateY = 0;
            let scale = 1;
            let opacity = 0;
            let zIndex = 0;

            if (isActive) {
              x = 0;
              z = 150;
              rotateY = 0;
              scale = 1;
              opacity = 1;
              zIndex = 10;
            } else if (isPrev) {
              x = -320;
              z = 0;
              rotateY = 35;
              scale = 0.85;
              opacity = 0.6;
              zIndex = 5;
            } else if (isNext) {
              x = 320;
              z = 0;
              rotateY = -35;
              scale = 0.85;
              opacity = 0.6;
              zIndex = 5;
            } else if (d < -1) {
              // Far left tucked away
              x = -500;
              z = -200;
              rotateY = 45;
              scale = 0.5;
              opacity = 0;
              zIndex = 1;
            } else if (d > 1) {
              // Far right tucked away
              x = 500;
              z = -200;
              rotateY = -45;
              scale = 0.5;
              opacity = 0;
              zIndex = 1;
            }

            return (
              <motion.div
                key={proj.id}
                className="project-card"
                initial={false}
                animate={{ x, z, rotateY, scale, opacity, zIndex }}
                transition={{
                  type: 'tween',
                  ease: [0.25, 1, 0.5, 1], // Smooth cinematic easing
                  duration: 0.8,
                }}
                style={{
                  position: 'absolute',
                  pointerEvents: isActive ? 'auto' : 'none', // Only active card can be clicked/hovered
                }}
                onMouseEnter={() => isActive && setIsHovered(true)}
                onMouseLeave={() => isActive && setIsHovered(false)}
              >
                <motion.div 
                  className="project-card-inner"
                  whileHover={isActive ? { rotateX: 15, scale: 0.95 } : {}}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <div className="card-image-wrapper">
                    <img src={proj.img} alt={proj.title} />
                    {isActive && (
                      <div className="cyber-overlay">
                        <div className="cyber-lock">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                        </div>
                        <div className="cyber-center">
                          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                          <span>ACCESS</span>
                        </div>
                        <div className="cyber-corners top-left"></div>
                        <div className="cyber-corners top-right"></div>
                        <div className="cyber-corners bottom-left"></div>
                        <div className="cyber-corners bottom-right"></div>
                      </div>
                    )}
                  </div>
                  <div className="card-info">
                    <div className="default-info">
                      <h3>{proj.title}</h3>
                      <p>{proj.desc}</p>
                    </div>
                    {isActive && (
                      <div className="cyber-info">
                        <div className="cyber-id">
                          <span>&gt;_ {proj.title.toUpperCase()}</span>
                          <span className="cyber-id-sub">ID: Sneha-0409</span>
                        </div>
                        <div className="cyber-status">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                          ENCRYPTED
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
