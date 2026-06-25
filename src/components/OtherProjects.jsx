import React from 'react';

import imgCyberpunk from '../assets/proj_cyberpunk_1782069653371.png';
import imgGalaxy from '../assets/proj_galaxy_1782069664458.png';
import imgAi from '../assets/proj_ai_1782069677055.png';

const otherProjectsData = [
  {
    id: 1,
    title: 'Tata Steel – L&D',
    image: imgCyberpunk,
    description: 'An internal web application designed to manage employee training programs, track learning progress, schedule workshops, and provide...',
    techStack: [
      'https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat-square&logo=typescript&logoColor=white',
      'https://img.shields.io/badge/javascript-%23323330.svg?style=flat-square&logo=javascript&logoColor=%23F7DF1E',
      'https://img.shields.io/badge/Next-black?style=flat-square&logo=next.js&logoColor=white'
    ],
    demoLink: '#',
    githubLink: '#'
  },
  {
    id: 2,
    title: 'DevElevate',
    image: imgGalaxy,
    description: 'A dynamic platform crafted to empower developers with curated resources, real-world projects, coding challenges, and learning tools...',
    techStack: [
      'https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat-square&logo=typescript&logoColor=white',
      'https://img.shields.io/badge/javascript-%23323330.svg?style=flat-square&logo=javascript&logoColor=%23F7DF1E',
      'https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat-square&logo=tailwind-css&logoColor=white'
    ],
    demoLink: '#',
    githubLink: '#'
  },
  {
    id: 3,
    title: 'Smart Hospital',
    image: imgAi,
    description: 'The Hospital Management System optimizes queuing and resource availability to improve patient care. It integrates with city-wide...',
    techStack: [
      'https://img.shields.io/badge/javascript-%23323330.svg?style=flat-square&logo=javascript&logoColor=%23F7DF1E',
      'https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat-square&logo=typescript&logoColor=white',
      'https://img.shields.io/badge/python-3670A0?style=flat-square&logo=python&logoColor=ffdd54'
    ],
    demoLink: '#',
    githubLink: '#'
  }
];

export default function OtherProjects() {
  return (
    <div className="other-projects-container">
      <div className="other-projects-header" style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <h2 className="cursive-heading">More <span style={{ color: 'white' }}>Projects...</span></h2>
      </div>

      <div className="other-projects-grid">
        {otherProjectsData.map((project) => (
          <div key={project.id} className="other-project-card">
            <div className="card-image-wrapper">
              <img src={project.image} alt={project.title} className="card-image" />
            </div>
            <div className="card-content">
              <h3 className="card-title">{project.title}</h3>
              <p className="card-description">{project.description}</p>
              
              <div className="card-tech-stack">
                {project.techStack.map((techUrl, idx) => (
                  <img key={idx} src={techUrl} alt="Tech Badge" className="tech-badge" />
                ))}
              </div>

              <div className="card-actions">
                <a href={project.demoLink} className="action-btn primary" target="_blank" rel="noreferrer">
                  Live Demo
                </a>
                <a href={project.githubLink} className="action-btn secondary" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
