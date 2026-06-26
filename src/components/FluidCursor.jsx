import React, { useEffect, useRef } from 'react';
import WebGLFluid from 'webgl-fluid';

export default function FluidCursor() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const listeners = [];
    const originalAddEventListener = canvas.addEventListener;

    canvas.addEventListener = (type, listener, options) => {
      const wrappedListener = (e) => {
        const proxyEvent = new Proxy(e, {
          get(target, prop) {
            if (prop === 'offsetX') return target.clientX || (target.touches && target.touches[0] ? target.touches[0].clientX : 0);
            if (prop === 'offsetY') return target.clientY || (target.touches && target.touches[0] ? target.touches[0].clientY : 0);
            if (prop === 'preventDefault') return () => { }; // CRITICAL: Stop it from breaking page scrolling!
            const value = target[prop];
            if (typeof value === 'function') return value.bind(target);
            return value;
          }
        });
        listener(proxyEvent);
      };
      listeners.push({ type, wrappedListener, options });

      const finalOptions = (type === 'touchstart' || type === 'touchmove') ? { passive: true } : options;
      window.addEventListener(type, wrappedListener, finalOptions);
    };

    WebGLFluid(canvas, {
      IMMEDIATE: false,
      COLORFUL: true,       // Rainbow colors matching the fluid cursor
      TRANSPARENT: true,
      BLOOM: false,
      SUNRAYS: false,
      CURL: 15,
      SPLAT_RADIUS: 0.1,
      SPLAT_FORCE: 1000,
      DENSITY_DISSIPATION: 2.5,
      VELOCITY_DISSIPATION: 1.2,
    });

    return () => {
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
        pointerEvents: 'none'
      }}
    />
  );
}
