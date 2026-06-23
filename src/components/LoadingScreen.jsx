import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  const [phase, setPhase] = useState('drawing');

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => { document.head.removeChild(link); }
  }, []);

  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)', transition: { duration: 0.4, ease: 'easeInOut' } }}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 99999,
      }}
    >
      <motion.div
        initial={{ clipPath: 'inset(0 100% 0 0)', scale: 1, filter: 'drop-shadow(0px 0px 0px rgba(0,0,0,0))' }}
        animate={
          phase === 'drawing' ? { 
            clipPath: 'inset(0 0% 0 0)',
            scale: 1,
            filter: 'drop-shadow(0px 0px 0px rgba(0,0,0,0))'
          } : phase === 'glow' ? {
            clipPath: 'inset(0 0% 0 0)',
            scale: 1.15,
            filter: 'drop-shadow(0px 0px 30px rgba(0,0,0,0.6))'
          } : {
            clipPath: 'inset(-500% -500% -500% -500%)',
            scale: 1.15,
            filter: 'drop-shadow(0px 0px 0px rgba(0,0,0,0))'
          }
        }
        transition={{ 
          clipPath: { duration: 2.2, ease: "easeInOut" },
          scale: { duration: 0.5, ease: "easeOut" },
          filter: { duration: 0.5, ease: "easeOut" }
        }}
        onAnimationComplete={(def) => {
          if (phase === 'drawing' && def.clipPath) {
            setPhase('glow');
            setTimeout(() => setPhase('splitting'), 500);
          }
        }}
        style={{
          display: 'flex',
          fontFamily: "'Great Vibes', cursive",
          fontSize: 'clamp(4rem, 12vw, 8rem)',
          color: '#000000',
          whiteSpace: 'nowrap',
          padding: '20px',
          lineHeight: 1.2
        }}
      >
        <motion.div
          animate={
            phase === 'splitting' 
              ? { x: '-40vw', y: '-15vh', rotate: -15, scale: 4, opacity: 0, filter: 'blur(15px)' } 
              : { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1, filter: 'blur(0px)' }
          }
          transition={{ duration: 2.2, ease: "easeInOut" }}
        >
          Sne
        </motion.div>
        <motion.div
          animate={
            phase === 'splitting' 
              ? { x: '40vw', y: '20vh', rotate: 20, scale: 4, opacity: 0, filter: 'blur(15px)' } 
              : { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1, filter: 'blur(0px)' }
          }
          transition={{ duration: 2.2, ease: "easeInOut" }}
        >
          ha
        </motion.div>
      </motion.div>

      {/* Welcome Text */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
        animate={
          phase === 'splitting'
            ? { 
                opacity: [0, 1, 1, 0], 
                scale: [0.9, 1, 1, 0.95], 
                filter: ['blur(10px)', 'blur(0px)', 'blur(0px)', 'blur(10px)'] 
              }
            : { opacity: 0, scale: 0.8, filter: 'blur(10px)' }
        }
        transition={{ 
          duration: 2.0, 
          times: [0, 0.15, 0.6, 1], 
          ease: "easeInOut",
          delay: 0.1
        }}
        onAnimationComplete={() => {
          if (phase === 'splitting') {
            onComplete();
          }
        }}
        style={{
          position: 'absolute',
          fontFamily: "'Inter', sans-serif",
          fontSize: 'clamp(0.9rem, 2vw, 1.5rem)',
          fontWeight: 800,
          color: '#000000',
          letterSpacing: '0.4em',
          textTransform: 'uppercase',
          zIndex: 10
        }}
      >
        WELCOME
      </motion.div>
    </motion.div>
  );
}
