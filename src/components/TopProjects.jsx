import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import imgCyberpunk from '../assets/proj_cyberpunk_1782069653371.png';
import imgGalaxy from '../assets/proj_galaxy_1782069664458.png';
import imgAi from '../assets/proj_ai_1782069677055.png';

const projectsData = [
  {
    id: 1,
    title: 'Neo-Kyoto Analytics',
    status: 'Current',
    image: imgCyberpunk,
    shellCommands: [
      'sneha@dev:~$ cd Neo-Kyoto',
      'sneha@dev:~/Neo-Kyoto$ npm run build',
      '[✔] Compiling... Done!'
    ],
    feature: '✨ Real-time data visualization dashboard',
    description: 'A modern, fully responsive dashboard with smooth animations, adaptive dark/light themes, and a sleek UI—all built purely in React.',
    techStack: ['React', 'Framer Motion', 'Tailwind CSS'],
    demoLink: '#',
    githubLink: '#'
  },
  {
    id: 2,
    title: 'Cosmic Stride',
    status: 'Completed',
    image: imgGalaxy,
    shellCommands: [
      'sneha@dev:~$ cd Cosmic-Stride',
      'sneha@dev:~/Cosmic-Stride$ deploy --production',
      '[✔] Deployment successful!'
    ],
    feature: '✨ Seamless 3D WebGL shopping experience',
    description: 'A galaxy-themed e-commerce platform built for the future. Integrates seamless 3D models and advanced shopping cart features.',
    techStack: ['Next.js', 'Three.js', 'Stripe'],
    demoLink: '#',
    githubLink: '#'
  },
  {
    id: 3,
    title: 'Aurora AI Interface',
    status: 'Beta',
    image: imgAi,
    shellCommands: [
      'sneha@dev:~$ cd Aurora-AI',
      'sneha@dev:~/Aurora-AI$ python3 train_model.py',
      '[✔] Neural weights synced!'
    ],
    feature: '✨ Node-based generative AI workspace',
    description: 'A powerful AI image generation interface allowing users to craft stunning visuals through an intuitive nodal workflow.',
    techStack: ['Python', 'TensorFlow', 'React'],
    demoLink: '#',
    githubLink: '#'
  }
];

export default function TopProjects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projectsData[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % projectsData.length);
  };

  return (
    <div className="top-projects-container">
      <div className="top-projects-header">
        <h2 className="brutalist-title-single">
          <span className="outline-word">TOP</span> <span className="solid-word">PROJECTS</span>
        </h2>
        <div className="pagination-dots">
          {projectsData.map((_, idx) => (
            <div 
              key={idx} 
              className={`dot ${idx === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(idx)}
            />
          ))}
        </div>
      </div>

      <div className="top-projects-content">
        {/* Left: CSS Laptop Frame */}
        <div className="laptop-showcase">
          <div className="laptop-screen-frame">
            <div className="laptop-camera"></div>
            <div className="laptop-screen-inner">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeProject.id}
                  src={activeProject.image}
                  alt={activeProject.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="laptop-project-image"
                />
              </AnimatePresence>
            </div>
          </div>
          <div className="laptop-base">
            <div className="laptop-notch"></div>
          </div>
        </div>

        {/* Center: Next Arrow */}
        <button className="next-project-arrow" onClick={handleNext} aria-label="Next Project">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

        {/* Right: Project Details Panel */}
        <div className="project-details-panel">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="project-details-inner"
            >
              <h3 className="project-card-title">
                <span className="laptop-icon">💻</span> {activeProject.title} 
                <span className="project-status">[ {activeProject.status} ]</span>
              </h3>

              <p className="project-description">
                🚀 {activeProject.description}
              </p>

              <div className="project-feature-highlight">
                <span>{activeProject.feature}</span>
              </div>

              <div className="project-tech-stack">
                {activeProject.techStack.map((tech, idx) => (
                  <span key={idx} className="tech-pill">{tech}</span>
                ))}
              </div>

              <div className="project-actions">
                <a href={activeProject.demoLink} className="action-btn primary" target="_blank" rel="noreferrer">
                  Live Demo
                </a>
                <a href={activeProject.githubLink} className="action-btn secondary" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
