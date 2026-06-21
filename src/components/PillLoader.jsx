import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SparkleTrail from './SparkleTrail';
import WebGLFluid from 'webgl-fluid';

function FluidWelcome() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      WebGLFluid(canvasRef.current, {
        IMMEDIATE: false,     // Don't auto-splat colors
        COLORFUL: true,
        TRANSPARENT: true,
        BLOOM: false,         // Disable intense bloom for a pastel look
        SUNRAYS: false,
        CURL: 15,             // Gentle swirl
        SPLAT_RADIUS: 0.1,    // Smaller trail
        SPLAT_FORCE: 1000,    // Less intense color injection
        DENSITY_DISSIPATION: 2.5, // Fade colors out faster
        VELOCITY_DISSIPATION: 1.2,
      });
    }

    // Forward mouse/pointer events to the canvas so the fluid effect works even when covered by the scrollable container
    const forwardEvent = (e) => {
      if (e.isTrusted && canvasRef.current) {
        let clonedEvent;
        if (window.PointerEvent && e instanceof PointerEvent) {
          clonedEvent = new PointerEvent(e.type, {
            bubbles: false, cancelable: true,
            clientX: e.clientX, clientY: e.clientY,
            pointerId: e.pointerId, pointerType: e.pointerType,
            isPrimary: e.isPrimary,
          });
        } else if (window.TouchEvent && e instanceof TouchEvent) {
           clonedEvent = new TouchEvent(e.type, {
             bubbles: false, cancelable: true,
             touches: e.touches, changedTouches: e.changedTouches
           });
        } else if (e instanceof MouseEvent) {
          clonedEvent = new MouseEvent(e.type, {
            bubbles: false, cancelable: true,
            clientX: e.clientX, clientY: e.clientY,
          });
        }
        
        if (clonedEvent) {
          canvasRef.current.dispatchEvent(clonedEvent);
        }
      }
    };

    window.addEventListener('pointermove', forwardEvent);
    window.addEventListener('pointerdown', forwardEvent);
    window.addEventListener('pointerup', forwardEvent);
    window.addEventListener('mousemove', forwardEvent);
    window.addEventListener('mousedown', forwardEvent);
    window.addEventListener('mouseup', forwardEvent);
    window.addEventListener('touchmove', forwardEvent, { passive: false });
    window.addEventListener('touchstart', forwardEvent, { passive: false });
    window.addEventListener('touchend', forwardEvent);

    return () => {
      window.removeEventListener('pointermove', forwardEvent);
      window.removeEventListener('pointerdown', forwardEvent);
      window.removeEventListener('pointerup', forwardEvent);
      window.removeEventListener('mousemove', forwardEvent);
      window.removeEventListener('mousedown', forwardEvent);
      window.removeEventListener('mouseup', forwardEvent);
      window.removeEventListener('touchmove', forwardEvent);
      window.removeEventListener('touchstart', forwardEvent);
      window.removeEventListener('touchend', forwardEvent);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      style={{ position: 'absolute', inset: 0, zIndex: 0 }}
    >
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
      <SparkleTrail />
    </motion.div>
  );
}

export default function PillLoader({ children }) {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const duration = 2000;
    const intervalTime = 20;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setProgress(newProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          setIsLoaded(true);
          setTimeout(() => {
            setIsExpanded(true);
            setTimeout(() => setShowContent(true), 1200); // WELCOME vanishes and content shows after 1.2s
          }, 1100); // Wait for the wipe to finish, then expand
        }, 300);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="loading-pill"
      initial={{ opacity: 0, scale: 0.9, width: 280, height: 75, borderRadius: 50 }}
      animate={{
        opacity: 1,
        scale: 1,
        width: isExpanded ? '100vw' : 280,
        height: isExpanded ? '100vh' : 75,
        borderRadius: isExpanded ? 0 : 50,
        borderWidth: isExpanded ? 0 : 1
      }}
      transition={{
        duration: isExpanded ? 0.9 : 0.6,
        ease: [0.76, 0, 0.24, 1]
      }}
    >
      {/* Background Fluid & Sparkles (Only render when expanded) */}
      {isExpanded && <FluidWelcome />}

      {/* SVG Filter for grain dissolve effect */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <filter id="grainy-blur">
          <feTurbulence type="fractalNoise" baseFrequency="0.12" numOctaves="2" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="30" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      <div className="pill-content" style={{ zIndex: 10 }}>
        {/* Revealed Text (WELCOME) */}
        <AnimatePresence>
          {!showContent && (
            <motion.div
              className="pill-text-base"
              animate={{
                scale: isExpanded ? 1.4 : 1,
                letterSpacing: isExpanded ? '0.5em' : '0.2em'
              }}
              exit={{ 
                opacity: 0, 
                scale: 1.6,
                filter: "url(#grainy-blur) blur(4px)",
                transition: { duration: 0.6, ease: "easeOut" } 
              }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            >
              WELCOME
            </motion.div>
          )}
        </AnimatePresence>

        {/* Wiping Overlay (LOADING) */}
        <AnimatePresence>
          {!isExpanded && (
            <motion.div
              className="pill-text-overlay"
              initial={{ width: '100%' }}
              animate={{ width: isLoaded ? '0%' : '100%' }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            >
              <div className="pill-text-loading">
                LOADING <span style={{ minWidth: '4ch', display: 'inline-block', textAlign: 'right' }}>{progress}%</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* The White Wiper Rectangle */}
        <AnimatePresence>
          {!isExpanded && (
            <motion.div
              className="pill-wiper"
              initial={{ left: '100%' }}
              animate={{ left: isLoaded ? '0%' : '100%' }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Child Content */}
      {showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          style={{ position: 'absolute', zIndex: 20, width: '100%', height: '100%', pointerEvents: 'none' }}
        >
          {children}
        </motion.div>
      )}
    </motion.div>
  );
}
