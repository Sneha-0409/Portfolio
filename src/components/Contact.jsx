import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="contact-section-container">
      <div className="contact-grid">
        <motion.div 
          className="contact-left-quote"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h1 className="motivational-quote">
            "The future belongs to those who learn more skills and combine them in creative ways."
          </h1>
          <p className="quote-author">— Robert Greene</p>
        </motion.div>

        <motion.div 
          className="contact-card contact-right-combined"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 style={{ color: '#c2b5f5', marginBottom: '1rem', fontSize: '1.5rem', marginTop: 0 }}>Let's Connect</h3>
          <p className="contact-desc" style={{ marginBottom: '1.5rem' }}>
            I'm always open to new opportunities, collaborations, or just a chat. Drop a message below!
          </p>
          
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Name" className="contact-input" required />
            <input type="email" placeholder="Your Email" className="contact-input" required />
            <textarea placeholder="Your Message" className="contact-textarea" rows="4" required></textarea>
            <button type="submit" className="contact-submit-btn">Send Message</button>
          </form>

          <div className="contact-divider"></div>

          <div className="contact-socials-combined">
            <a href="mailto:hello@example.com" className="social-icon" title="Email Me">
              <FaEnvelope />
            </a>
            <a href="https://github.com/Sneha-0409" target="_blank" rel="noreferrer" className="social-icon" title="GitHub">
              <FaGithub />
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="social-icon" title="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
