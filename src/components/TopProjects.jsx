import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import imgCyberpunk from '../assets/proj_cyberpunk_1782069653371.png';
import imgGalaxy from '../assets/proj_galaxy_1782069664458.png';
import imgAi from '../assets/ai.png';
import imgInsti from '../assets/Insti.png';

const projectsData = [
  {
    id: 1,
    title: 'KrishiRakshak-AI',
    status: 'Complete',
    image: imgAi,
    feature: '✨ AI-Powered Smart Farming Assistant',
    description: 'KrishiRakshak AI is an AI-powered smart farming platform that detects crop diseases from images and voice input, providing bilingual diagnosis, treatment recommendations, and voice-enabled guidance for farmers.',
    techStack: ['Python', 'Machine Learning', 'Deep Learning', 'TensorFlow', 'Computer Vision', 'Generative AI'],
    demoLink: 'https://krishi-rakshak-ai-9l41.vercel.app/',
    githubLink: 'https://github.com/Sneha-0409/KrishiRakshak-AI'
  },
  {
    id: 2,
    title: 'Development of Department Report and Analytics System',
    image: imgInsti,
    feature: '✨ Centralized institutional reporting system',
    description: 'A centralized web-based portal that enables all departments to create, submit, and track annual reports in a standardized format. It integrates smart analytics, multi-year archives, and performance dashboards, reducing manual work and enabling data driven insights for institutional growth.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'React', 'Chart.js', 'Node.js', 'Firebase'],
    demoLink: 'https://instireport.web.app/',
    githubLink: 'https://github.com/Sneha-0409/Development-of-Departmental-Report-and-Analytics-system'
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

        <button className="next-project-arrow" onClick={handleNext} aria-label="Next Project">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

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
                {activeProject.status && <span className="project-status">[ {activeProject.status} ]</span>}
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
