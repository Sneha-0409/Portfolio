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
      exit={{ opacity: 0, scale: 1.5, transition: { duration: 0.5, ease: 'backIn' } }}
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
        onAnimationComplete={() => {
          if (phase === 'drawing') {
            setPhase('glow');
            setTimeout(() => {
              setPhase('splitting');
              onComplete();
            }, 500);
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
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Sne
        </motion.div>
        <motion.div
          animate={
            phase === 'splitting' 
              ? { x: '40vw', y: '20vh', rotate: 20, scale: 4, opacity: 0, filter: 'blur(15px)' } 
              : { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1, filter: 'blur(0px)' }
          }
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          ha
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
