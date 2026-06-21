import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const techStack = [
  "React", "Node.js", "Python", "AWS", "Three.js", 
  "MongoDB", "PostgreSQL", "Docker", "GraphQL", 
  "Next.js", "TypeScript", "TailwindCSS", "Figma", 
  "Vercel", "Git", "C++", "Java", "Go"
];

const colors = ["#4da6ff", "#00ffcc", "#ffaa00", "#c2b5f5", "#ff0055"];

export default function TechStarfield() {
  const stars = useMemo(() => {
    return techStack.map((tech, i) => {
      // Random X and Y positions within the viewable area
      const x = Math.random() * 80 - 40; // -40vw to 40vw
      const y = Math.random() * 80 - 40; // -40vh to 40vh
      const duration = 15 + Math.random() * 10; // 15-25 seconds for slow, readable flight
      // Use negative delay to scatter them across the timeline immediately
      const delay = -(Math.random() * duration);
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      return { tech, x, y, duration, delay, color };
    });
  }, []);

  return (
    <div className="tech-starfield-container">
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="tech-star"
          initial={{
            z: -4000,
            x: `${star.x}vw`,
            y: `${star.y}vh`,
            opacity: 0
          }}
          animate={{
            z: 1000,
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            borderColor: star.color,
            boxShadow: `0 0 30px ${star.color}60, inset 0 0 15px ${star.color}60`
          }}
        >
          <span style={{ color: star.color, textShadow: `0 0 15px ${star.color}` }}>
            {star.tech}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
