import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds for a smooth aesthetic feel
    const intervalTime = 20;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setProgress(newProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        // Small delay after reaching 100% to let the user see it before swiping out
        setTimeout(() => {
          onComplete();
        }, 500);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="loading-container"
      initial={{ x: 0 }}
      exit={{ x: '-100vw', transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
    >
      <motion.div 
        className="loading-pill"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="loading-text">LOADING</span>
        <div className="loading-progress-wrapper">
          <span className="loading-percentage">{progress}%</span>
          {/* Subtle glowing animated background based on progress */}
          <div 
            className="loading-progress-bar"
            style={{ width: `${progress}%` }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
