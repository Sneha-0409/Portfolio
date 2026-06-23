import React from 'react';
import { motion } from 'framer-motion';
import sketchReal from '../assets/sneha_sketch_real.jpg';
import sketchPortrait from '../assets/sketch_portrait.png';
import sketchAnimal from '../assets/sketch_animal.png';
import sketchLandscape from '../assets/sketch_landscape.png';
import sketchScifi from '../assets/sketch_scifi.png';
import sketchArchitecture from '../assets/sketch_architecture.png';
import sketchBotanical from '../assets/sketch_botanical.png';
import sketchFantasy from '../assets/sketch_fantasy.png';

const galleryItems = [
  {
    id: 1,
    img: sketchReal,
    title: 'Self Portrait',
    desc: 'A realistic pencil sketch exploring depth and emotion.',
    rotate: -4,
    yOffset: 15
  },
  {
    id: 2,
    img: sketchPortrait,
    title: 'Mysterious Aura',
    desc: 'An artistic portrait focusing on dramatic, realistic shading.',
    rotate: 3,
    yOffset: -10
  },
  {
    id: 3,
    img: sketchAnimal,
    title: 'Wild Roar',
    desc: 'Capturing the raw power of wildlife with intricate pencil strokes.',
    rotate: -5,
    yOffset: 25
  },
  {
    id: 4,
    img: sketchLandscape,
    title: 'Silent Path',
    desc: 'Ancient trees and a quiet forest path brought to life.',
    rotate: 6,
    yOffset: 5
  },
  {
    id: 5,
    img: sketchScifi,
    title: 'Cyber Alley',
    desc: 'A futuristic concept sketch filled with neon and shadows.',
    rotate: -3,
    yOffset: -20
  },
  {
    id: 6,
    img: sketchArchitecture,
    title: 'Gothic Dreams',
    desc: 'Intricate architectural details of an ancient cathedral.',
    rotate: 4,
    yOffset: 15
  },
  {
    id: 7,
    img: sketchBotanical,
    title: 'Botanical Grace',
    desc: 'Intricate botanical flowers and leaves drawn with precision.',
    rotate: -6,
    yOffset: -5
  },
  {
    id: 8,
    img: sketchFantasy,
    title: 'Dragon\'s Peak',
    desc: 'A majestic dragon perched above a classic fantasy landscape.',
    rotate: 5,
    yOffset: 20
  }
];

export default function PhotoGallery() {
  return (
    <div className="gallery-section-container">
      <div className="github-header">
        <div className="github-header-line"></div>
        <h2 className="github-title" style={{ color: '#c2b5f5' }}>PHOTO GALLERY</h2>
        <div className="github-header-line"></div>
      </div>

      <div className="polaroid-gallery-grid">
        {galleryItems.map((item, index) => (
          <motion.div
            key={item.id}
            className="polaroid-card"
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
    </div>
  );
}
