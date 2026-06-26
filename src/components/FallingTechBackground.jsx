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

    const engine = Engine.create();
    engine.gravity.y = 0.5;
    engineRef.current = engine;

    const width = window.innerWidth;
    const height = window.innerHeight;

    const wallOptions = { isStatic: true, render: { visible: false } };
    const ground = Bodies.rectangle(width / 2, height + 50, width * 3, 100, wallOptions);
    const leftWall = Bodies.rectangle(-50, height / 2, 100, height * 3, wallOptions);
    const rightWall = Bodies.rectangle(width + 50, height / 2, 100, height * 3, wallOptions);

    Composite.add(engine.world, [ground, leftWall, rightWall]);

    const bodiesDom = [];

    let spawnCount = 0;
    const maxActive = 30;

    const spawnInterval = setInterval(() => {
      const size = 45 + Math.random() * 35;
      const x = Math.random() * (width - size * 2) + size;
      const y = -size - Math.random() * 50;

      const body = Bodies.rectangle(x, y, size, size, {
        restitution: 0.4,
        friction: 0.3,
        frictionAir: 0.005,
        density: 0.005,
        render: { visible: false }
      });

      Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.15);

      Composite.add(engine.world, body);
      const el = document.createElement('div');
      el.className = 'physics-tech-tile';
      el.style.width = `${size}px`;
      el.style.height = `${size}px`;
      el.style.transition = 'opacity 1s ease-out';

      const img = document.createElement('img');
      img.src = techIcons[spawnCount % techIcons.length];
      el.appendChild(img);

      sceneRef.current.appendChild(el);

      bodiesDom.push({ body, el });
      spawnCount++;

      if (bodiesDom.length > maxActive) {
        const oldest = bodiesDom.shift();

        oldest.el.style.opacity = '0';

        Composite.remove(engine.world, oldest.body);

        setTimeout(() => {
          if (oldest.el.parentNode) {
            oldest.el.parentNode.removeChild(oldest.el);
          }
        }, 1000);
      }
    }, 600);

    const runner = Runner.create();
    Runner.run(runner, engine);
    runnerRef.current = runner;

    Events.on(engine, 'afterUpdate', () => {
      for (let i = 0; i < bodiesDom.length; i++) {
        const { body, el } = bodiesDom[i];
        const x = body.position.x - el.offsetWidth / 2;
        const y = body.position.y - el.offsetHeight / 2;
        const angle = body.angle;

        el.style.transform = `translate(${x}px, ${y}px) rotate(${angle}rad)`;
      }
    });

    //ufo logic
    let ufoActive = false;
    let teleportTimeoutId;
    let activationTimeoutId;

    // Create UFO DOM element
    const ufoEl = document.createElement('div');
    ufoEl.className = 'ufo-ship';
    ufoEl.style.opacity = '0';
    ufoEl.style.transform = `scale(0)`; 
    ufoEl.style.transition = 'opacity 0.4s ease, transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'; // warp animation

    const ufoDome = document.createElement('div');
    ufoDome.className = 'ufo-dome';
    const ufoBase = document.createElement('div');
    ufoBase.className = 'ufo-base';
    const ufoLights = document.createElement('div');
    ufoLights.className = 'ufo-lights';
    const ufoBeam = document.createElement('div');
    ufoBeam.className = 'ufo-tractor-beam';

    ufoEl.appendChild(ufoDome);
    ufoEl.appendChild(ufoBase);
    ufoEl.appendChild(ufoLights);
    ufoEl.appendChild(ufoBeam);

    sceneRef.current.appendChild(ufoEl);

    const fireLaser = (targetBodyDom, originX, originY) => {
      const bullet = document.createElement('div');
      bullet.className = 'ufo-bullet';

      const targetX = targetBodyDom.body.position.x;
      const targetY = targetBodyDom.body.position.y;

      const distance = targetY - originY;
      const fallDuration = distance / 1000;

      bullet.style.left = `${originX}px`;
      bullet.style.top = `${originY}px`;
      bullet.style.transition = `transform ${fallDuration}s linear`;

      sceneRef.current.appendChild(bullet);

      requestAnimationFrame(() => {
        bullet.style.transform = `translateY(${distance}px)`;
      });

      setTimeout(() => {
        if (bullet.parentNode) bullet.parentNode.removeChild(bullet);

        for (let i = 0; i < 8; i++) {
          const p = document.createElement('div');
          p.className = 'ufo-particle';
          p.style.left = `${targetX}px`;
          p.style.top = `${targetY}px`;
          const vx = (Math.random() - 0.5) * 150;
          const vy = (Math.random() - 0.5) * 150;
          sceneRef.current.appendChild(p);

          requestAnimationFrame(() => {
            p.style.transform = `translate(${vx}px, ${vy}px) scale(0)`;
            p.style.opacity = '0';
          });

          setTimeout(() => {
            if (p.parentNode) p.parentNode.removeChild(p);
          }, 600);
        }

        const shockwave = document.createElement('div');
        shockwave.className = 'ufo-shockwave';
        shockwave.style.left = `${targetX}px`;
        shockwave.style.top = `${targetY}px`;
        sceneRef.current.appendChild(shockwave);

        setTimeout(() => {
          if (shockwave.parentNode) shockwave.parentNode.removeChild(shockwave);
        }, 500);

        targetBodyDom.el.style.display = 'none';
        Composite.remove(engine.world, targetBodyDom.body);

        const index = bodiesDom.indexOf(targetBodyDom);
        if (index > -1) {
          bodiesDom.splice(index, 1);
        }
        setTimeout(() => {
          if (targetBodyDom.el.parentNode) {
            targetBodyDom.el.parentNode.removeChild(targetBodyDom.el);
          }
        }, 100);
      }, fallDuration * 1000);
      
      return fallDuration;
    };

    const teleportRoutine = () => {
      if (!ufoActive) return;

      const containerLeft = (width - Math.min(width, 1200)) / 2;
      const cardLeft = containerLeft + 32; 
      const cardRight = cardLeft + 350; 
      const safeMargin = 100; 
      const activeBodies = bodiesDom.filter(b => {
         if (b.el.style.opacity === '0' || b.body.position.y <= 50) return false;
         
         if (width > 768) {
           const bx = b.body.position.x;
           if (bx > cardLeft - safeMargin && bx < cardRight + safeMargin) {
             return false;
           }
         }
         return true;
      });
      
      if (activeBodies.length > 0) {
        // Pick random target
        const targetBodyDom = activeBodies[Math.floor(Math.random() * activeBodies.length)];
        
        const targetX = targetBodyDom.body.position.x;
        const targetY = targetBodyDom.body.position.y;
        
        const ufoX = targetX - 40;
        const maxSpawnY = Math.max(80, targetY - 200);
        const spawnY = Math.max(80, Math.random() * maxSpawnY); 
        
        const scaleX = Math.random() > 0.5 ? 1 : -1;

        ufoEl.style.transform = `translate(${ufoX}px, ${spawnY}px) scaleX(${scaleX}) scale(1)`;
        ufoEl.style.opacity = '1';
        
        setTimeout(() => {
           let fallMs = 0;
           if (targetBodyDom.el.style.opacity !== '0') {
             const fallSeconds = fireLaser(targetBodyDom, ufoX + 40, spawnY + 25);
             fallMs = fallSeconds * 1000;
           }
           
           setTimeout(() => {
             ufoEl.style.transform = `translate(${ufoX}px, ${spawnY}px) scaleX(${scaleX}) scale(0)`;
             ufoEl.style.opacity = '0';
             
             const nextDelay = 800 + Math.random() * 2000;
             teleportTimeoutId = setTimeout(teleportRoutine, nextDelay);
           }, 1000); 
           
        }, 400); 
      } else {
        teleportTimeoutId = setTimeout(teleportRoutine, 1000);
      }
    };
    activationTimeoutId = setTimeout(() => {
      ufoActive = true;
      teleportRoutine();
    }, 1000 + Math.random() * 1000);

    // Cleanup on unmount
    return () => {
      clearInterval(spawnInterval);
      clearTimeout(activationTimeoutId);
      clearTimeout(teleportTimeoutId);
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
