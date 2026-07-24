import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import TechMarquee from './TechMarquee';
import TopProjects from './TopProjects';
import OtherProjects from './OtherProjects';
import Journey from './Journey';
import Achievements from './Achievements';
import GithubStats from './GithubStats';
import PhotoGallery from './PhotoGallery';
import Certifications from './Certifications';
import Contact from './Contact';
import MiniGameOverlay from './MiniGameOverlay';
import './MiniGameStyles.css';
import heroImg from '../assets/sneha.jpg';
import heroSketch from '../assets/sketch_portrait.png';
import MacDock from './MacDock';
import ParticlesNetwork from './ParticlesNetwork';

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isGameActive, setIsGameActive] = useState(false);
  const [scrollContainer, setScrollContainer] = useState(null);
  const scrollRef = useRef(null);

  const roles = ["Web Developer", "AI/ML Enthusiast", "Data Science", "DSA", "C++", "Python"];
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    let timer;
    const currentRole = roles[loopNum % roles.length];

    if (isDeleting) {
      timer = setTimeout(() => {
        setText(currentRole.substring(0, text.length - 1));
        if (text.length <= 1) {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      }, 50);
    } else {
      if (text === currentRole) {
        timer = setTimeout(() => setIsDeleting(true), 2000);
      } else {
        timer = setTimeout(() => {
          setText(currentRole.substring(0, text.length + 1));
        }, 100);
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);



  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: document.querySelector('.portfolio-scroll-container'),
        threshold: 0.5,
      }
    );

    const sections = document.querySelectorAll('.portfolio-section, .hero-section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

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

  const handleScrollRef = useCallback((node) => {
    scrollRef.current = node;
    setScrollContainer(node);
  }, []);

  return (
    <div className="portfolio-container">
      <header className="portfolio-header">
        <motion.div
          className="logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Sneha
        </motion.div>
      </header>

      <main className="portfolio-main">
        <div
          className="portfolio-scroll-container"
          ref={handleScrollRef}
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
            <a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}>Home</a>
            <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>About</a>
            <a href="#skills" className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}>Skills</a>
            <a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}>Projects</a>
            <a href="#journey" className={`nav-link ${activeSection === 'journey' ? 'active' : ''}`}>Experience</a>
            <a href="#achievements" className={`nav-link ${activeSection === 'achievements' ? 'active' : ''}`}>Achievements</a>
          </motion.nav>

          <section id="home" className="hero-section">

            <div className="hero-grid">
              <div className="hero-left">
                <motion.div
                  className="hero-status-badge"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <span className="hero-dot"></span> AVAILABLE FOR OPPORTUNITIES
                </motion.div>

                <motion.h1
                  className="hero-main-title"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <span className="hero-title-solid">Building</span><br />
                  <span className="hero-title-purple">Ideas</span><br />
                  <span className="hero-title-outline">into Reality!</span>
                </motion.h1>

                <motion.p
                  className="hero-desc"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Hi I'm <strong style={{ color: '#fff' }}>Sneha</strong> - a Computer Science Student passionate about <strong style={{ color: '#fff' }}>programming</strong> and <strong style={{ color: '#fff' }}>AI/ML</strong>. I build intelligent, scalable Solutions that solve real-world problems.
                </motion.p>

                <motion.div
                  className="hero-actions"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <button
                    className="hero-btn-primary"
                    onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                  >
                    VIEW PROJECTS
                  </button>
                </motion.div>
              </div>

              <div className="hero-hero-right">
                <motion.div
                  className="hero-viewfinder"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="hero-portrait-container">
                    <lottie-player
                      src="https://assets3.lottiefiles.com/packages/lf20_w51pcehl.json"
                      background="transparent"
                      speed="1"
                      className="hero-portrait-img"
                      style={{ objectFit: 'contain' }}
                      loop
                      autoplay
                    ></lottie-player>
                    <div className="hero-portrait-overlay">System Online // Compiling Code...</div>
                  </div>
                  <div className="hero-viewfinder-label">
                    <span className="hero-dot-small"></span> SNEHA · CS ENGINEER
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="hero-footer">
              <div className="hero-footer-left">~ GWALIOR, INDIA</div>
              <div className="hero-footer-center">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: scrolled ? 0 : 1 }}
                  transition={{ delay: scrolled ? 0 : 2, duration: scrolled ? 0.3 : 1 }}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', color: '#b176ff' }}
                  onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                >
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em' }}>SCROLL DOWN</span>
                  <motion.svg
                    animate={{ y: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <polyline points="19 12 12 19 5 12"></polyline>
                  </motion.svg>
                </motion.div>
              </div>
              <div className="hero-footer-right">
              </div>
            </div>
          </section>

          <section id="about" className="portfolio-section" style={{ position: 'relative', overflow: 'hidden' }}>
            <ParticlesNetwork />
            <div className="split-layout" style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '2rem', position: 'relative', zIndex: 10 }}>

              <motion.div
                className="left-column"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                style={{ perspective: 1000 }}
              >
                <h3
                  className="section-title"
                  style={{
                    alignSelf: 'center',
                    marginBottom: '-5rem',
                    letterSpacing: '0.1em',
                    textAlign: 'center'
                  }}
                >
                  ABOUT ME
                </h3>
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
                    <img src={heroImg} alt="Sneha Blurred" className="hero-image" style={{ filter: 'blur(10px) brightness(0.8)' }} />

                    <motion.img
                      src={heroImg}
                      alt="Sneha Sharp"
                      className="hero-image"
                      style={{ position: 'absolute', top: 0, left: 0 }}
                      initial={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}
                      animate={{ clipPath: activeSection !== 'home' ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" : "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}
                      transition={{ duration: 2.5, delay: 0.5, ease: "easeInOut" }}
                    />

                    <motion.div
                      className="scan-line"
                      initial={{ top: "0%", opacity: 0 }}
                      animate={activeSection !== 'home' ? { top: "100%", opacity: [0, 1, 1, 0] } : { top: "0%", opacity: 0 }}
                      transition={{ duration: 2.5, delay: 0.5, ease: "easeInOut" }}
                    />

                    <div className="cyber-corners">
                      <div className="corner top-left"></div>
                      <div className="corner top-right"></div>
                      <div className="corner bottom-right"></div>
                      <div className="corner bottom-left"></div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                className="right-column"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="name-title hollow-text">Sneha</h1>
                <h2 className="role-title">
                  {text}
                </h2>

                <div className="description">
                  <p>
                    I'm a 3rd year undergraduate Computer Science student at MITS-DU, Gwalior, with a strong interest in AI/ML, Data Science, Web Development and Software Engineering. I primarily code in C++ and enjoy developing Intelligent solutions that solve real-world challenges. I'm an active open-source contributor (NSoC '26 & GSSoC '26), a 3× hackathon finalist, and someone who believes there's always something new to learn. I also serve as the Class Representative, Secretary of IEEE RAS SBC MITS-DU and a Core Member of Google Developers Group on Campus MITS-DU, helping organize and grow the campus tech community.
                  </p>
                  <p className="italic-quote">
                    Tomorrow doesn't need to be perfect. It just needs to be tomorrow.
                  </p>

                  <div className="about-badges">
                    <span className="about-badge badge-pink">Open Source Contributor</span>
                    <span className="about-badge badge-cyan">Secretary IEEE RAS</span>
                    <span className="about-badge badge-indigo">3x Hackathon Finalist</span>
                  </div>
                </div>



                <div className="education-cards">
                  <div className="education-card">
                    <h3 className="ed-title">BTech Computer Science</h3>
                    <p className="ed-degree">MITS-DU, Gwalior</p>
                    <span className="ed-year">2024 - 2028</span>
                  </div>
                  <div className="education-card">
                    <h3 className="ed-title">Delhi Public School Vindhyanagar</h3>
                    <div className="ed-scores">
                      <span className="ed-score">10th - 92.4%</span>
                      <span className="ed-score">12th - 80.2%</span>
                    </div>
                  </div>
                </div>

                <div className="actions">
                  <a href="#" className="resume-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    Download CV
                  </a>

                  <button
                    className="play-game-btn"
                    onClick={() => {
                      console.log("Play Game Clicked");
                      setIsGameActive(true);
                    }}
                    style={{ position: 'relative', zIndex: 99999, pointerEvents: 'auto', marginTop: 0, marginBottom: 0 }}
                  >
                    <span style={{ fontSize: '1.2rem' }}>🎮</span> Play Mini Game
                  </button>

                  <p className="game-mobile-fallback" style={{ margin: 0, alignSelf: 'center' }}>This mini game is available on desktop.</p>

                </div>
              </motion.div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="portfolio-section skills-section">
            <div className="skills-header">
              <h2 className="journey-title">
                <span className="text-white">MY</span> <span className="text-gradient">TOOLKIT</span>
              </h2>
              <p className="skills-subtitle">The tools behind every idea, experiment, and product I build.</p>
            </div>
            <TechMarquee />
          </section>

          {/* Projects Section */}
          <section id="projects" className="portfolio-section projects-section">
            <TopProjects />
            <OtherProjects />
          </section>

          {/* Journey Section */}
          <section id="journey" className="portfolio-section journey-section">
            {scrollContainer && <Journey scrollContainer={scrollContainer} />}
          </section>

          {/* Achievements Section */}
          <section id="achievements" className="portfolio-section achievements-section">
            <Achievements />
          </section>

          {/* Certifications Section */}
          <section id="certifications" className="portfolio-section certifications-section">
            <Certifications />
          </section>

          {/* GitHub Section */}
          <section id="github" className="portfolio-section github-section">
            <GithubStats />
          </section>

          {/* Photo Gallery Section */}
          <section id="gallery" className="portfolio-section gallery-section">
            <PhotoGallery />
          </section>

          {/* Contact Section */}
          <section id="contact" className="portfolio-section contact-section">
            <Contact />
          </section>

          {/* Footer */}
          <footer className="portfolio-footer">
            <div className="portfolio-footer-content">
              <div className="footer-left">
                <h2 className="footer-logo">Sneha</h2>
                <p className="footer-bio">
                  I am a CS student at MITS-DU Gwalior, passionate about AI/ML and programming.
                </p>
              </div>
            </div>
            <p className="footer-copyright">© {new Date().getFullYear()} All Rights Reserved.</p>
          </footer>

        </div>
        <AnimatePresence>
          {activeSection !== 'home' && <MacDock />}
        </AnimatePresence>
        {isGameActive && (
          <MiniGameOverlay onExit={() => setIsGameActive(false)} />
        )}
      </main>
    </div>
  );
}
