import React from 'react';
import {
  SiPython, SiCplusplus, SiC, SiHtml5, SiCss, SiJavascript, SiReact, SiChartdotjs,
  SiNodedotjs, SiExpress, SiFirebase, SiMongodb, SiSupabase, SiTypescript, SiJupyter,
  SiGoogledocs, SiCanva, SiNumpy, SiPandas, SiGooglecloud, SiMysql, SiScikitlearn,
  SiGit, SiGithub, SiTensorflow, SiVercel, SiRender
} from 'react-icons/si';
import { FaRobot, FaBrain, FaChartPie, FaCode, FaMagic, FaEye } from 'react-icons/fa';

const row1 = [
  { name: 'Machine Learning', icon: <FaRobot color="#ff5722" size={24} /> },
  { name: 'Deep Learning', icon: <FaBrain color="#e91e63" size={24} /> },
  { name: 'Data Science', icon: <FaChartPie color="#00bcd4" size={24} /> },
  { name: 'Python', icon: <SiPython color="#3776AB" size={24} /> },
  { name: 'C++', icon: <SiCplusplus color="#00599C" size={24} /> },
  { name: 'C', icon: <SiC color="#A8B9CC" size={24} /> },
  { name: 'DSA', icon: <FaCode color="#9c27b0" size={24} /> },
  { name: 'HTML', icon: <SiHtml5 color="#E34F26" size={24} /> },
  { name: 'CSS', icon: <SiCss color="#1572B6" size={24} /> },
  { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" size={24} /> },
  { name: 'React.js', icon: <SiReact color="#61DAFB" size={24} /> },
  { name: 'Chart.js', icon: <SiChartdotjs color="#FF6384" size={24} /> },
  { name: 'Node.js', icon: <SiNodedotjs color="#339933" size={24} /> },
  { name: 'Express.js', icon: <SiExpress color="#ffffff" size={24} /> },
  { name: 'TensorFlow', icon: <SiTensorflow color="#FF6F00" size={24} /> },
  { name: 'Gen AI', icon: <FaMagic color="#8E75B2" size={24} /> },
  { name: 'Computer Vision', icon: <FaEye color="#5C3EE8" size={24} /> }
];

const row2 = [
  { name: 'Firebase', icon: <SiFirebase color="#FFCA28" size={24} /> },
  { name: 'MongoDB', icon: <SiMongodb color="#47A248" size={24} /> },
  { name: 'Supabase', icon: <SiSupabase color="#3ECF8E" size={24} /> },
  { name: 'TypeScript', icon: <SiTypescript color="#3178C6" size={24} /> },
  { name: 'Jupyter Notebook', icon: <SiJupyter color="#F37626" size={24} /> },
  { name: 'Google Docs', icon: <SiGoogledocs color="#4285F4" size={24} /> },
  { name: 'Canva', icon: <SiCanva color="#00C4CC" size={24} /> },
  { name: 'NumPy', icon: <SiNumpy color="#013243" size={24} /> },
  { name: 'Pandas', icon: <SiPandas color="#150458" size={24} /> },
  { name: 'Google Cloud', icon: <SiGooglecloud color="#4285F4" size={24} /> },
  { name: 'MySQL', icon: <SiMysql color="#4479A1" size={24} /> },
  { name: 'Scikit-Learn', icon: <SiScikitlearn color="#F7931E" size={24} /> },
  { name: 'Git', icon: <SiGit color="#F05032" size={24} /> },
  { name: 'GitHub', icon: <SiGithub color="#ffffff" size={24} /> },
  { name: 'Vercel', icon: <SiVercel color="#ffffff" size={24} /> },
  { name: 'Render', icon: <SiRender color="#46E3B7" size={24} /> }
];

const TechPill = ({ name, icon }) => (
  <div className="tech-pill">
    <div className="tech-icon">{icon}</div>
    <span className="tech-name">{name}</span>
  </div>
);

export default function TechMarquee() {
  return (
    <div className="tech-marquee-container">
      <div className="marquee-row right">
        <div className="marquee-content">
          {row1.map((tech, i) => (
            <TechPill key={`r1-${i}`} name={tech.name} icon={tech.icon} />
          ))}
        </div>
        <div className="marquee-content" aria-hidden="true">
          {row1.map((tech, i) => (
            <TechPill key={`r1-dup-${i}`} name={tech.name} icon={tech.icon} />
          ))}
        </div>
      </div>

      <div className="marquee-row left">
        <div className="marquee-content">
          {row2.map((tech, i) => (
            <TechPill key={`r2-${i}`} name={tech.name} icon={tech.icon} />
          ))}
        </div>
        <div className="marquee-content" aria-hidden="true">
          {row2.map((tech, i) => (
            <TechPill key={`r2-dup-${i}`} name={tech.name} icon={tech.icon} />
          ))}
        </div>
      </div>
    </div>
  );
}
