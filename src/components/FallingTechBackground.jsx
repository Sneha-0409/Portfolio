import React from 'react';

const techIcons = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"
];

// Generate 24 tiles with random starting positions, animations delays, and sizes
const generateTiles = () => {
  const tiles = [];
  for (let i = 0; i < 24; i++) {
    const icon = techIcons[i % techIcons.length];
    const left = Math.random() * 100; // 0 to 100%
    const delay = Math.random() * 30; // 0 to 30s (using negative delays in CSS ensures they start at different points)
    const duration = 20 + Math.random() * 20; // 20s to 40s
    const size = 70 + Math.random() * 60; // 70px to 130px
    const rotateStart = Math.random() * 360; // Initial rotation
    const rotateEnd = rotateStart + (Math.random() > 0.5 ? 360 : -360); // Rotate 360deg clockwise or counter-clockwise
    
    tiles.push(
      <div 
        key={i} 
        className="falling-tech-tile"
        style={{
          left: `${left}%`,
          width: `${size}px`,
          height: `${size}px`,
          animationDelay: `-${delay}s`,
          animationDuration: `${duration}s`,
          '--start-rotation': `${rotateStart}deg`,
          '--end-rotation': `${rotateEnd}deg`,
          opacity: 0.15 + Math.random() * 0.15 // Opacity between 0.15 and 0.30
        }}
      >
        <img src={icon} alt="Tech Icon" />
      </div>
    );
  }
  return tiles;
};

export default function FallingTechBackground() {
  return (
    <div className="falling-tech-container">
      {generateTiles()}
    </div>
  );
}
