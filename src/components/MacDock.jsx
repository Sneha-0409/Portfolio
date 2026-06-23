import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

function AppIcon({ mouseY, icon, label, url, bgColor }) {
  let ref = useRef(null);

  // Calculate distance from mouse to the center of this icon
  let distance = useTransform(mouseY, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { y: 0, height: 0 };
    return val - bounds.y - bounds.height / 2;
  });

  // Base width is 38px, max is 75px when mouse is directly over
  let widthSync = useTransform(distance, [-150, 0, 150], [38, 75, 38]);
  let springWidth = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });
  // Clamp to prevent spring overshoot from generating negative/invalid widths
  let width = useTransform(springWidth, (val) => Math.max(38, Math.min(val, 75)));

  const [hovered, setHovered] = useState(false);

  return (
    <div className="dock-item-container" style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <motion.a
        ref={ref}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ width, height: width, backgroundColor: bgColor }}
        className="dock-item"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img src={icon} alt={label} className="dock-item-img" />
      </motion.a>
      {hovered && (
        <motion.div 
          className="dock-tooltip"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.15 }}
        >
          {label}
        </motion.div>
      )}
    </div>
  );
}

export default function MacDock() {
  let mouseY = useMotionValue(99999);

  const apps = [
    { label: 'GitHub', url: '#', bgColor: '#24292e', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg' },
    { label: 'LinkedIn', url: '#', bgColor: '#0077b5', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg' },
    { label: 'Email', url: '#', bgColor: '#ea4335', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/gmail.svg' },
    { label: 'X', url: '#', bgColor: '#000000', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/x.svg' },
    { label: 'LeetCode', url: '#', bgColor: '#f79f1b', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/leetcode.svg' },
    { label: 'Discord', url: '#', bgColor: '#5865F2', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/discord.svg' }
  ];

  return (
    <motion.div 
      className="mac-dock-wrapper"
      initial={{ x: -100, y: "-50%", opacity: 0 }}
      animate={{ x: 0, y: "-50%", opacity: 1 }}
      exit={{ x: -100, y: "-50%", opacity: 0 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      <motion.div
        className="mac-dock"
        onMouseMove={(e) => mouseY.set(e.clientY)}
        onMouseLeave={() => mouseY.set(99999)}
      >
        {apps.map((app, i) => (
          <AppIcon key={i} mouseY={mouseY} {...app} />
        ))}
      </motion.div>
    </motion.div>
  );
}
