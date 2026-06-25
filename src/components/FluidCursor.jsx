import React, { useEffect, useRef } from 'react';
import WebGLFluid from 'webgl-fluid';

export default function FluidCursor() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // WebGLFluid attaches event listeners to the canvas itself. 
    // Since the canvas is behind the content (z-index: 0), it won't receive mouse events natively.
    // We intercept the event bindings and attach them to the window instead, 
    // feeding it mocked offsetX/offsetY coordinates and preventing it from breaking mobile scrolling.
    const listeners = [];
    const originalAddEventListener = canvas.addEventListener;
    
    canvas.addEventListener = (type, listener, options) => {
      const wrappedListener = (e) => {
        const proxyEvent = new Proxy(e, {
          get(target, prop) {
            if (prop === 'offsetX') return target.clientX || (target.touches && target.touches[0] ? target.touches[0].clientX : 0);
            if (prop === 'offsetY') return target.clientY || (target.touches && target.touches[0] ? target.touches[0].clientY : 0);
            if (prop === 'preventDefault') return () => {}; // CRITICAL: Stop it from breaking page scrolling!
            const value = target[prop];
            if (typeof value === 'function') return value.bind(target);
            return value;
          }
        });
        listener(proxyEvent);
      };
      listeners.push({ type, wrappedListener, options });
      
      // Use passive: true for touch events to ensure scrolling works flawlessly
      const finalOptions = (type === 'touchstart' || type === 'touchmove') ? { passive: true } : options;
      window.addEventListener(type, wrappedListener, finalOptions);
    };

    WebGLFluid(canvas, {
      IMMEDIATE: false,     // Don't auto-splat colors on load
      COLORFUL: true,       // Rainbow colors matching the fluid cursor
      TRANSPARENT: true,    // Transparent background so it overlays
      BLOOM: false,         // Disable intense bloom for a pastel look
      SUNRAYS: false,
      CURL: 15,             // Gentle swirl
      SPLAT_RADIUS: 0.1,    // Smaller trail following cursor
      SPLAT_FORCE: 1000,    // Less intense color injection
      DENSITY_DISSIPATION: 2.5, // Fade colors out faster
      VELOCITY_DISSIPATION: 1.2,
    });

    return () => {
      // Restore original prototype function on unmount
      canvas.addEventListener = originalAddEventListener;
      
      listeners.forEach(({ type, wrappedListener, options }) => {
        const finalOptions = (type === 'touchstart' || type === 'touchmove') ? { passive: true } : options;
        window.removeEventListener(type, wrappedListener, finalOptions);
      });
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100vw', 
        height: '100vh', 
        zIndex: 5,
        pointerEvents: 'none' // Don't block interactions
      }} 
    />
  );
}
