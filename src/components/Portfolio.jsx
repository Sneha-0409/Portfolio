import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import PillLoader from './PillLoader';
import TechStarfield from './TechStarfield';
import heroImg from '../assets/sneha.jpg';

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = (e) => {
    if (e.target.scrollTop > 50) {
      if (!scrolled) setScrolled(true);
    } else {
      if (scrolled) setScrolled(false);
    }
  };

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["35deg", "-35deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-35deg", "35deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="portfolio-container">
      <header className="portfolio-header">
        <motion.div
          className="logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          RedoyanulHaque
        </motion.div>
      </header>

      <main className="portfolio-main">
        {/* Background text marquee */}
        <motion.div
          className="background-marquee"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="marquee-content">
            <span className="background-title">
              DSA &bull; ML &amp; Data Science &bull;  Full Stack Developer &bull; Open Source Contributor &bull;&nbsp;
            </span>
            <span className="background-title">
              DSA &bull; ML &amp; Data Science &bull; Full Stack Developer &bull; Open Source Contributor &bull;&nbsp;
            </span>
          </div>
        </motion.div>

        {/* Floating Pill Loader positioned perfectly in the center overlaying the text */}
        <div className="pill-wrapper">
          <PillLoader>
            <div 
              className="portfolio-scroll-container" 
              onScroll={handleScroll}
              style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', overflowY: 'auto', pointerEvents: 'auto', scrollBehavior: 'smooth' }}
            >
              {/* Floating Navbar */}
              <motion.nav 
                className="floating-nav"
                initial={{ y: -20, opacity: 0, x: "-50%" }}
                animate={{ y: 0, opacity: 1, x: "-50%" }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <a href="#about">About us</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#experience">Experience</a>
                <a href="#contact">Contact</a>
              </motion.nav>

              <section id="about" className="portfolio-section">
                <div className="split-layout" style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
                  
                  {/* Left Column: Image */}
              <motion.div 
                className="left-column"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                style={{ perspective: 1000 }}
              >
                <motion.div 
                  className="image-wrapper"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  whileHover={{ y: -10, scale: 1.02 }}
                  style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d"
                  }}
                >
                  <div className="image-inner">
                    {/* Blurred Background */}
                    <img src={heroImg} alt="Sneha Blurred" className="hero-image" style={{ filter: 'blur(10px) brightness(0.8)' }} />
                    
                    {/* Sharp Foreground revealed by scan */}
                    <motion.img 
                      src={heroImg} 
                      alt="Sneha Sharp" 
                      className="hero-image" 
                      style={{ position: 'absolute', top: 0, left: 0 }}
                      initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
                      animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                      transition={{ duration: 2.5, delay: 1.2, ease: "easeInOut" }}
                    />
                    
                    {/* Scan Line */}
                    <motion.div
                      className="scan-line"
                      initial={{ top: "0%", opacity: 0 }}
                      animate={{ top: "100%", opacity: [0, 1, 1, 0] }}
                      transition={{ duration: 2.5, delay: 1.2, ease: "easeInOut" }}
                    />

                    {/* Cyber Corners */}
                    <div className="cyber-corners">
                      <div className="corner top-left"></div>
                      <div className="corner top-right"></div>
                      <div className="corner bottom-right"></div>
                      <div className="corner bottom-left"></div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Column: Content */}
              <motion.div 
                className="right-column"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="greeting">Good evening —</p>
                <h1 className="name-title hollow-text">Sneha</h1>
                <h2 className="role-title">Full Stack Developer</h2>
                
                <div className="description">
                  <p>
                    I love building stuff that actually works. Problem solving is my thing — 
                    give me a pain point and I'll ship a clean, functional solution for it. Not 
                    here to write code that just "runs." I build things that reduce friction, cut 
                    the noise, and make life easier for the people using them.
                  </p>
                  <p className="italic-quote">
                    Clean code. Functional apps. Less pain points. That's the whole vibe.
                  </p>
                </div>

                <div className="actions">
                  <a href="#" className="resume-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    RESUME
                  </a>
                  
                  <div className="social-links">
                    {/* LinkedIn */}
                    <a href="#" className="social-icon">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                    {/* Gmail */}
                    <a href="#" className="social-icon">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/></svg>
                    </a>
                    {/* GitHub */}
                    <a href="#" className="social-icon">
                       <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                    {/* LeetCode */}
                    <a href="#" className="social-icon">
                       <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.7-.933-.7-1.644s.233-1.177.7-1.644l2.853-2.853a2.023 2.023 0 0 1 2.854 0l1.478 1.478c.467.467.467 1.177 0 1.644-.467.467-1.177.467-1.644 0l-.654-.654-2.023 2.023 3.51 3.51 1.867-1.867c.467-.467 1.177-.467 1.644 0 .467.467.467 1.177 0 1.644z"/><path d="M20.715 13.068l-3.033 3.033c-.467.467-1.177.467-1.644 0-.467-.467-.467-1.177 0-1.644l2.21-2.21-3.51-3.51-1.867 1.867c-.467.467-1.177.467-1.644 0-.467-.467-.467-1.177 0-1.644l2.697-2.607c.467-.467 1.111-.662 1.823-.662s1.357.195 1.824.662l4.332 4.363c.467.467.7.933.7 1.644s-.233 1.177-.7 1.644z"/></svg>
                    </a>
                    {/* X */}
                    <a href="#" className="social-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </a>
                    {/* Discord */}
                    <a href="#" className="social-icon">
                       <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

                {/* Scroll Down Indicator */}
                <motion.div 
                  className="scroll-indicator"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: scrolled ? 0 : 1 }}
                  transition={{ delay: scrolled ? 0 : 2, duration: scrolled ? 0.3 : 1 }}
                >
                  <span>Scroll Down</span>
                  <motion.svg 
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  >
                    <path d="M12 5v14M19 12l-7 7-7-7"/>
                  </motion.svg>
                </motion.div>
            </section>

              {/* Skills Section (3D Tech Starfield) */}
              <section id="skills" className="portfolio-section skills-section">
                <div className="skills-header">
                  <h2 className="section-title skills-title">MY TOOLKIT</h2>
                  <p className="skills-subtitle">The cosmic armory I use to forge digital experiences and launch stellar projects.</p>
                </div>
                <TechStarfield />
              </section>
            </div>
          </PillLoader>
        </div>
      </main>
    </div>
  );
}
