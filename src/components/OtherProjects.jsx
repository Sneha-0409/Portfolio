import React from 'react';

import imgCyberpunk from '../assets/proj_cyberpunk_1782069653371.png';
import imgGalaxy from '../assets/proj_galaxy_1782069664458.png';
import imgAi from '../assets/proj_ai_1782069677055.png';
import imgCinematch from '../assets/CinematchAI.png';
import imgCampus from '../assets/Campus.png';
import imgFace from '../assets/face.png';

const otherProjectsData = [
  {
    id: 1,
    title: 'CineMatch AI: Intelligent Movie Recommendation System',
    image: imgCinematch,
    description: 'A content-based movie recommendation system that uses AI to suggest similar movies based on genres, cast, directors, keywords, and plot. Built with Python, Scikit-Learn, and Streamlit.',
    techStack: [
      'https://img.shields.io/badge/Python-%2314354C.svg?style=flat-square&logo=python&logoColor=white',
      'https://img.shields.io/badge/Scikit--Learn-%23F7931E.svg?style=flat-square&logo=scikit-learn&logoColor=white',
      'https://img.shields.io/badge/Machine%20Learning-%23e91e63.svg?style=flat-square',
      'https://img.shields.io/badge/Data%20Science-%2300bcd4.svg?style=flat-square'
    ],
    demoLink: 'https://cinematch-ai-movie.streamlit.app/',
    githubLink: 'https://github.com/Sneha-0409/CineMatch-AI-Intelligent-Movie-Recommendation-System'
  },
  {
    id: 2,
    title: 'CampusImpact DAO',
    image: imgCampus,
    description: 'A blockchain-based platform that empowers students to submit, vote on, and fund campus innovation projects through decentralized governance on Polygon.',
    techStack: [
      'https://img.shields.io/badge/React-%2320232A.svg?style=flat-square&logo=react&logoColor=61DAFB',
      'https://img.shields.io/badge/Next-black?style=flat-square&logo=next.js&logoColor=white',
      'https://img.shields.io/badge/Smart%20Contract-%234200ff.svg?style=flat-square',
      'https://img.shields.io/badge/Polygon-%238248FF.svg?style=flat-square&logo=polygon&logoColor=white',
      'https://img.shields.io/badge/Web3%20Wallet-%23F6851B.svg?style=flat-square&logo=metamask&logoColor=white'
    ],
    demoLink: '#',
    githubLink: 'https://github.com/Sneha-0409/CAMPUSIMPACT'
  },
  {
    id: 3,
    title: 'Face_Attendance_System_Project',
    image: imgFace,
    description: 'Automates daily attendance using face recognition and real-time detection. It captures and logs attendance with accurate time-stamping into a CSV file. By recognizing faces through a webcam and matching them with a pre-trained database, it ensures efficient, reliable, and contactless record-keeping.',
    techStack: [
      'https://img.shields.io/badge/NumPy-%23013243.svg?style=flat-square&logo=numpy&logoColor=white',
      'https://img.shields.io/badge/Pandas-%23150458.svg?style=flat-square&logo=pandas&logoColor=white',
      'https://img.shields.io/badge/OpenCV-%235C3EE8.svg?style=flat-square&logo=opencv&logoColor=white',
      'https://img.shields.io/badge/Python-%2314354C.svg?style=flat-square&logo=python&logoColor=white'
    ],
    demoLink: '#',
    githubLink: 'https://github.com/Sneha-0409/Face_Attendance_System_Project'
  }
];

export default function OtherProjects() {
  return (
    <div className="other-projects-container">
      <div className="other-projects-header" style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <h2 className="journey-title">
          <span className="text-white">MORE</span> <span className="text-gradient">PROJECTS...</span>
        </h2>
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
