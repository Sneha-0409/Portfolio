import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimationFrame } from 'framer-motion';

const techBadges = [
  'React', 'Next.js', 'JavaScript', 'TypeScript', 'Python', 'C++',
  'Node.js', 'Express', 'MongoDB', 'Firebase', 'Tailwind CSS',
  'HTML', 'CSS', 'Git', 'GitHub', 'Docker', 'TensorFlow',
  'PyTorch', 'FastAPI', 'OpenCV', 'Streamlit', 'Vite'
];

export default function MiniGameOverlay({ onExit }) {
  const containerRef = useRef(null);
  const ufoRef = useRef(null);
  
  // Game state stored in refs to avoid re-renders
  const gameState = useRef({
    badges: [],
    lasers: [],
    particles: [],
    floatingTexts: [],
    lastSpawnTime: 0,
    mouseX: window.innerWidth / 2,
    mouseY: window.innerHeight / 2,
    ufoX: window.innerWidth / 2,
    ufoY: window.innerHeight / 2,
    score: 0
  });

  // Force re-render for UI occasionally or just score
  const [displayScore, setDisplayScore] = useState(0);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      gameState.current.mouseX = e.clientX;
      gameState.current.mouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Shooting
  useEffect(() => {
    const handleClick = (e) => {
      if (e.target.closest('.exit-game-btn')) return; // Don't shoot when clicking exit button
      
      // Spawn laser
      gameState.current.lasers.push({
        id: Math.random().toString(36).substr(2, 9),
        x: gameState.current.ufoX,
        y: gameState.current.ufoY - 20,
        speed: 12
      });
    };
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  // Add class to body to hide global cursor
  useEffect(() => {
    document.body.classList.add('game-active');
    return () => {
      document.body.classList.remove('game-active');
    };
  }, []);

  useAnimationFrame((time) => {
    if (!containerRef.current) return;
    
    const state = gameState.current;
    
    // Smooth UFO movement
    state.ufoX += (state.mouseX - state.ufoX) * 0.15;
    state.ufoY += (state.mouseY - state.ufoY) * 0.15;
    
    if (ufoRef.current) {
      ufoRef.current.style.transform = `translate(${state.ufoX}px, ${state.ufoY}px)`;
    }

    // Spawn badges
    if (time - state.lastSpawnTime > 800) {
      const text = techBadges[Math.floor(Math.random() * techBadges.length)];
      state.badges.push({
        id: Math.random().toString(36).substr(2, 9),
        text,
        x: Math.random() * (window.innerWidth - 100) + 50,
        y: -50,
        speed: 1.5 + Math.random() * 2,
        rotation: Math.random() * 360,
        swaySpeed: 0.002 + Math.random() * 0.003,
        swayAmount: 30 + Math.random() * 40,
        swayOffset: Math.random() * Math.PI * 2,
        color: `hsl(${Math.random() * 360}, 80%, 65%)`
      });
      state.lastSpawnTime = time;
    }

    // Update Lasers
    for (let i = state.lasers.length - 1; i >= 0; i--) {
      const laser = state.lasers[i];
      laser.y -= laser.speed;
      if (laser.y < -50) {
        state.lasers.splice(i, 1);
      }
    }

    // Update Badges & Collision Detection
    for (let i = state.badges.length - 1; i >= 0; i--) {
      const badge = state.badges[i];
      badge.y += badge.speed;
      badge.rotation += 0.5;
      
      if (badge.y > window.innerHeight + 50) {
        state.badges.splice(i, 1);
        continue;
      }

      // Check collision with lasers
      let hit = false;
      const currentX = badge.x + Math.sin(time * badge.swaySpeed + badge.swayOffset) * badge.swayAmount;
      
      for (let j = state.lasers.length - 1; j >= 0; j--) {
        const laser = state.lasers[j];
        const dx = currentX - laser.x;
        const dy = badge.y - laser.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 45) { // Collision radius
          hit = true;
          state.lasers.splice(j, 1);
          break;
        }
      }

      if (hit) {
        // Explosion particles
        for(let p=0; p<10; p++) {
          state.particles.push({
            id: Math.random().toString(),
            x: currentX,
            y: badge.y,
            vx: (Math.random() - 0.5) * 10,
            vy: (Math.random() - 0.5) * 10,
            life: 1,
            color: badge.color
          });
        }
        
        // Floating text
        state.floatingTexts.push({
          id: Math.random().toString(),
          x: currentX,
          y: badge.y,
          life: 1
        });

        state.badges.splice(i, 1);
        state.score += 1;
        setDisplayScore(state.score);
      }
    }
    
    // Update Particles
    for (let i = state.particles.length - 1; i >= 0; i--) {
      const p = state.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.life -= 0.04;
      if (p.life <= 0) state.particles.splice(i, 1);
    }
    
    // Update Floating Texts
    for (let i = state.floatingTexts.length - 1; i >= 0; i--) {
      const ft = state.floatingTexts[i];
      ft.y -= 1.5;
      ft.life -= 0.03;
      if (ft.life <= 0) state.floatingTexts.splice(i, 1);
    }

    // Render loop manually updating DOM elements to avoid React state overhead
    // Lasers
    const lasersContainer = document.getElementById('lasers-container');
    if (lasersContainer) {
      lasersContainer.innerHTML = state.lasers.map(l => 
        `<div class="game-laser" style="transform: translate(${l.x}px, ${l.y}px)"></div>`
      ).join('');
    }

    // Badges
    const badgesContainer = document.getElementById('badges-container');
    if (badgesContainer) {
      badgesContainer.innerHTML = state.badges.map(b => {
        const currentX = b.x + Math.sin(time * b.swaySpeed + b.swayOffset) * b.swayAmount;
        return `<div class="game-badge" style="transform: translate(-50%, -50%) translate(${currentX}px, ${b.y}px) rotate(${b.rotation}deg); border: 1px solid ${b.color}; color: ${b.color}; box-shadow: 0 0 10px ${b.color}44 inset, 0 0 10px ${b.color}44;">${b.text}</div>`
      }).join('');
    }
    
    // Particles
    const particlesContainer = document.getElementById('particles-container');
    if (particlesContainer) {
      particlesContainer.innerHTML = state.particles.map(p => 
        `<div class="game-particle" style="transform: translate(-50%, -50%) translate(${p.x}px, ${p.y}px) scale(${p.life}); background-color: ${p.color}"></div>`
      ).join('');
    }
    
    // Floating Texts
    const floatTextContainer = document.getElementById('float-text-container');
    if (floatTextContainer) {
      floatTextContainer.innerHTML = state.floatingTexts.map(ft => 
        `<div class="game-float-text" style="transform: translate(-50%, -50%) translate(${ft.x}px, ${ft.y}px); opacity: ${ft.life}">+1</div>`
      ).join('');
    }
  });

  return (
    <motion.div 
      ref={containerRef}
      className="mini-game-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="game-stars"></div>
      
      <div className="game-hud">
        <div className="game-score">Score: <span>{displayScore}</span></div>
        <button className="exit-game-btn" onClick={(e) => { e.stopPropagation(); onExit(); }}>
          Exit Game
        </button>
      </div>
      
      <div className="game-instructions">
        Move your UFO and click to shoot the falling tech stacks!
      </div>

      <div id="lasers-container"></div>
      <div id="badges-container"></div>
      <div id="particles-container"></div>
      <div id="float-text-container"></div>

      <div ref={ufoRef} className="ufo-cursor">
        <span className="ufo-emoji">🛸</span>
      </div>
    </motion.div>
  );
}
