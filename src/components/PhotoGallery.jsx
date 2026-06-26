import React, { useState } from 'react';
import { motion } from 'framer-motion';
import sketchReal from '../assets/sneha.jpg';
import img1 from '../assets/1.jpg';
import imgPitch from '../assets/pitch.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import imgAnchor from '../assets/anchor.JPG';
import imgPes from '../assets/pes.JPG';
import imgHackorbit from '../assets/hackorbit.JPG';
import imgRobo from '../assets/robo.JPG';
import sketchPortrait from '../assets/sketch_portrait.png';
import sketchAnimal from '../assets/sketch_animal.png';
import sketchLandscape from '../assets/sketch_landscape.png';
import sketchScifi from '../assets/sketch_scifi.png';
import sketchArchitecture from '../assets/sketch_architecture.png';
import sketchBotanical from '../assets/sketch_botanical.png';
import sketchFantasy from '../assets/sketch_fantasy.png';
import meProgrammingImg from '../assets/me-programming.png';

const galleryItems = [
  {
    id: 1,
    img: img1,
    title: 'ORBIX IIIT Delhi Hackathon',
    rotate: -4,
    yOffset: 15
  },
  {
    id: 2,
    img: imgPitch,
    desc: 'Delivering a Hackathon Project presentation pitch.',
    rotate: 3,
    yOffset: -10
  },
  {
    id: 3,
    img: img2,
    title: '1st offline Hackathon',
    desc: 'Code Coalescence at MITS-DU Gwalior',
    rotate: -5,
    yOffset: 25
  },
  {
    id: 4,
    img: img3,
    title: 'Team WorkSync',
    rotate: 6,
    yOffset: 5
  },
  {
    id: 5,
    img: imgAnchor,
    desc: 'Anchored at International Webinar Gridtech',
    rotate: -3,
    yOffset: -20
  },
  {
    id: 6,
    img: imgPes,
    title: 'IEEE PES Day Ambassador',
    desc: '1st Ambassador meet',
    rotate: 4,
    yOffset: 15
  },
  {
    id: 7,
    img: imgHackorbit,
    desc: 'Anchored at National Level Hackathon - Hackorbit, Closing Ceremony',
    rotate: -6,
    yOffset: -5
  },
  {
    id: 8,
    img: imgRobo,
    desc: 'Anchored at Robocode event by IEEE RAS',
    rotate: 5,
    yOffset: 20
  }
];

export default function PhotoGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const leftPageItems = galleryItems.slice(0, 4);
  const rightPageItems = galleryItems.slice(4, 8);

  return (
    <div className="gallery-section-container">
      <div className="github-header">
        <div className="github-header-line"></div>
        <h2 className="journey-title" style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2.5rem' }}>
          <span className="text-gradient">SCRAPBOOK</span>
        </h2>
        <div className="github-header-line"></div>
      </div>

      <div className="scrapbook-wrapper">
        <motion.div
          className="scrapbook-book"
          style={{ perspective: '2000px' }}
          animate={{ x: isOpen ? "0%" : "-25%" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Empty Left Half for layout spacing */}
          <div className="scrapbook-page empty-left-half"></div>

          {/* Book Spine (Binding) */}
          <div className="scrapbook-spine">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="ring" style={{ top: `${(i * 6) + 4}%` }}></div>
            ))}
          </div>

          {/* Right Page (Base) */}
          <div className="scrapbook-page right-page">
            <div className="polaroid-gallery-grid">
              {rightPageItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    className="polaroid-card"
                    style={{ '--random': (item.id % 5) * 0.25 }}
                    initial={{ opacity: 0, scale: 0.9, y: item.yOffset + 50, rotate: item.rotate - 10 }}
                  whileInView={{ opacity: 1, scale: 1, y: item.yOffset, rotate: item.rotate }}
                  whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
                  transition={{ duration: 0.5, delay: (index + 4) * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="polaroid-img" style={{ backgroundImage: `url(${item.img})` }}></div>
                  <div className="polaroid-content">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            {/* Scrapbook Doodles */}
            <div className="scrapbook-doodle" style={{ top: '1%', right: '4%', transform: 'rotate(8deg)' }}>
              Memories... ❤️
            </div>
            <div className="scrapbook-doodle" style={{ bottom: '2%', right: '5%', transform: 'rotate(-5deg)' }}>
              2024 - Present Collection
            </div>
          </div>

          {/* 3D Flipper Cover */}
          <motion.div
            className={`scrapbook-flipper ${isOpen ? 'open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            initial={{ rotateY: 0 }}
            animate={{ rotateY: isOpen ? -180 : 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Front Cover */}
            <div className="scrapbook-cover-front">
              <div className="cover-emboss-line"></div>
              {/* Computer Sticker */}
              <div className="cover-sticker">💻</div>

              {/* Mumbai Sticker */}
              <div className="mumbai-sticker">
                <div className="mumbai-top">Take a trip to ✈</div>
                <div className="mumbai-main">MUMBAI</div>
                <div className="mumbai-bottom">you'll love it</div>
              </div>

              {/* Me Programming Sticker */}
              <div className="me-prog-sticker" style={{ backgroundImage: `url(${meProgrammingImg})` }}></div>

              {/* Hackathon Sticker */}
              <div className="hackathon-sticker">
                <svg viewBox="0 0 200 200" width="140" height="140">
                  <defs>
                    <polygon id="boom" points="100,5 115,50 160,10 130,65 195,50 145,85 190,120 135,115 170,180 115,140 100,195 80,145 20,170 55,115 5,120 60,80 10,40 70,60 40,5 85,45" />
                  </defs>
                  <use href="#boom" fill="#fff" stroke="#fff" stroke-width="16" stroke-linejoin="round" />
                  <use href="#boom" fill="#e63946" stroke="#111" stroke-width="4" stroke-linejoin="round" />
                  <use href="#boom" fill="#f4a261" stroke="#111" stroke-width="3" stroke-linejoin="round" transform="translate(100 100) scale(0.75) translate(-100 -100)" />
                  <use href="#boom" fill="#e9c46a" stroke="#111" stroke-width="2" stroke-linejoin="round" transform="translate(100 100) scale(0.5) translate(-100 -100)" />
                </svg>
                <div className="hack-text">HACKATHON!</div>
              </div>

              {/* Keep Moving Forward Sticker */}
              <div className="kmf-sticker-wrapper">
                <div className="kmf-sticker">
                  <div className="kmf-sparkle top-left">✨</div>
                  <div className="kmf-sparkle bottom-right">✨</div>
                  <span className="kmf-white">Keep</span>
                  <span className="kmf-coral">Moving</span>
                  <span className="kmf-white">Forward!</span>
                </div>
              </div>

              {/* Believe in Yourself Sticker */}
              <div className="biy-sticker">
                <span className="biy-large">BELIEVE</span>
                <span className="biy-small">
                  <span className="biy-dots">✧</span> in <span className="biy-dots">✧</span>
                </span>
                <span className="biy-large">YOURSELF</span>
              </div>

              <motion.div
                className="premium-label"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="label-title">Some memories from College life so far!</h3>
                <p className="label-subtitle">Click to open</p>
              </motion.div>
            </div>

            {/* Back of Cover (Left Page) */}
            <div className="scrapbook-cover-back scrapbook-page left-page">
              <div className="polaroid-gallery-grid">
                {leftPageItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    className="polaroid-card"
                    style={{ '--random': (item.id % 7) * 0.15 }}
                    initial={{ opacity: 0, scale: 0.9, y: item.yOffset + 50, rotate: item.rotate - 10 }}
                    whileInView={{ opacity: 1, scale: 1, y: item.yOffset, rotate: item.rotate }}
                    whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="polaroid-img" style={{ backgroundImage: `url(${item.img})` }}></div>
                    <div className="polaroid-content">
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              {/* Scrapbook Doodles */}
              <div className="scrapbook-doodle" style={{ top: '2%', left: '4%', transform: 'rotate(-8deg)' }}>
                Journey so far! ✨
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
