import React from 'react';
import { motion } from 'framer-motion';
import PillLoader from './PillLoader';

export default function Portfolio() {
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
        <div className="nav-placeholder">
          {/* simple decorative vertical bars like in the first screenshot */}
          <div className="nav-bars">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
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
          <PillLoader />
        </div>
      </main>
    </div>
  );
}
