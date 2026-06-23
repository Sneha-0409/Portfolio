import React from 'react';
import { 
  SiReact, SiTypescript, SiNextdotjs, SiNodedotjs, SiTailwindcss, SiFigma, SiMongodb, SiDocker,
  SiGit, SiJavascript, SiExpress, SiPhp, SiPostgresql, SiPython, SiGraphql 
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

const row1 = [
  { name: 'Figma', icon: <SiFigma color="#F24E1E" size={24} /> },
  { name: 'React', icon: <SiReact color="#61DAFB" size={24} /> },
  { name: 'TypeScript', icon: <SiTypescript color="#3178C6" size={24} /> },
  { name: 'Next.js', icon: <SiNextdotjs color="#ffffff" size={24} /> },
  { name: 'Node.js', icon: <SiNodedotjs color="#339933" size={24} /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss color="#06B6D4" size={24} /> },
  { name: 'MongoDB', icon: <SiMongodb color="#47A248" size={24} /> },
  { name: 'Docker', icon: <SiDocker color="#2496ED" size={24} /> }
];

const row2 = [
  { name: 'Git', icon: <SiGit color="#F05032" size={24} /> },
  { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" size={24} /> },
  { name: 'Express.js', icon: <SiExpress color="#ffffff" size={24} /> },
  { name: 'PHP', icon: <SiPhp color="#777BB4" size={24} /> },
  { name: 'PostgreSQL', icon: <SiPostgresql color="#4169E1" size={24} /> },
  { name: 'Python', icon: <SiPython color="#3776AB" size={24} /> },
  { name: 'AWS', icon: <FaAws color="#FF9900" size={24} /> },
  { name: 'GraphQL', icon: <SiGraphql color="#E10098" size={24} /> }
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
      {/* Row 1 - Moves Right */}
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

      {/* Row 2 - Moves Left */}
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
