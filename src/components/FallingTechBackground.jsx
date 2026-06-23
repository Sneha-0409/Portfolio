import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';

const techIcons = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"
];

export default function FallingTechBackground() {
  const sceneRef = useRef(null);
  const engineRef = useRef(null);
  const runnerRef = useRef(null);

  useEffect(() => {
    if (!sceneRef.current) return;

    const Engine = Matter.Engine,
          Render = Matter.Render,
          Runner = Matter.Runner,
          Bodies = Matter.Bodies,
          Composite = Matter.Composite,
          Events = Matter.Events;

    // Create engine
    const engine = Engine.create();
    // Reduce gravity for a slow-motion floating effect, but keep it snappy
    engine.gravity.y = 0.5;
    engineRef.current = engine;

    // Use window dimensions since the section will expand to full screen
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Create Boundaries (Ground, Left Wall, Right Wall)
    // We add an extra thickness (1000px) so objects don't clip through at high speeds
    const wallOptions = { isStatic: true, render: { visible: false } };
    const ground = Bodies.rectangle(width / 2, height + 50, width * 3, 100, wallOptions);
    const leftWall = Bodies.rectangle(-50, height / 2, 100, height * 3, wallOptions);
    const rightWall = Bodies.rectangle(width + 50, height / 2, 100, height * 3, wallOptions);

    Composite.add(engine.world, [ground, leftWall, rightWall]);

    // Keep track of our bodies and their DOM elements
    const bodiesDom = [];

    // Spawner config
    let spawnCount = 0;
    const maxActive = 30; // Maximum number of tiles to keep on screen at once

    const spawnInterval = setInterval(() => {
      const size = 45 + Math.random() * 35; // 45px to 80px
      // Random X position across the top
      const x = Math.random() * (width - size * 2) + size;
      // Start slightly above the viewport
      const y = -size - Math.random() * 50;
      
      const body = Bodies.rectangle(x, y, size, size, {
        restitution: 0.4, // Bounciness
        friction: 0.3,
        frictionAir: 0.005, // Slight air resistance
        density: 0.005,
        render: { visible: false } 
      });

      // Give it a little random rotation spin
      Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.15);

      Composite.add(engine.world, body);

      // Create the DOM element for the box
      const el = document.createElement('div');
      el.className = 'physics-tech-tile';
      el.style.width = `${size}px`;
      el.style.height = `${size}px`;
      el.style.transition = 'opacity 1s ease-out'; // For smooth fade out
      
      const img = document.createElement('img');
      img.src = techIcons[spawnCount % techIcons.length];
      el.appendChild(img);

      sceneRef.current.appendChild(el);

      bodiesDom.push({ body, el });
      spawnCount++;

      // Space management: Endless loop, remove the oldest (bottom) tile
      if (bodiesDom.length > maxActive) {
        const oldest = bodiesDom.shift();
        
        // 1. Fade it out smoothly
        oldest.el.style.opacity = '0';
        
        // 2. Remove from physics engine so the stack above it falls down
        Composite.remove(engine.world, oldest.body);
        
        // 3. Remove from DOM after fade out completes
        setTimeout(() => {
          if (oldest.el.parentNode) {
            oldest.el.parentNode.removeChild(oldest.el);
          }
        }, 1000);
      }
    }, 600); // Drop a new box every 600ms

    // Run the physics engine
    const runner = Runner.create();
    Runner.run(runner, engine);
    runnerRef.current = runner;

    // Sync DOM elements with physics bodies 60 times a second
    Events.on(engine, 'afterUpdate', () => {
      for (let i = 0; i < bodiesDom.length; i++) {
        const { body, el } = bodiesDom[i];
        
        // Translate center of body to center of div
        const x = body.position.x - el.offsetWidth / 2;
        const y = body.position.y - el.offsetHeight / 2;
        const angle = body.angle;

        el.style.transform = `translate(${x}px, ${y}px) rotate(${angle}rad)`;
      }
    });

    // Cleanup on unmount
    return () => {
      clearInterval(spawnInterval);
      if (runnerRef.current) {
        Runner.stop(runnerRef.current);
      }
      if (engineRef.current) {
        Engine.clear(engineRef.current);
      }
      if (sceneRef.current) {
        sceneRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div 
      ref={sceneRef} 
      className="falling-tech-container"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0
      }}
    />
  );
}
