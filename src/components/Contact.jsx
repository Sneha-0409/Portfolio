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
            "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action."
          </h1>
          <p className="quote-author">- Dr. A.P.J. Abdul Kalam</p>
        </motion.div>

        <motion.div 
          className="contact-card contact-right-combined"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="journey-title" style={{ marginBottom: '1rem', fontSize: '2.5rem', marginTop: 0, textTransform: 'none', letterSpacing: 'normal' }}>
            <span className="text-gradient">Let's Connect</span>
          </h3>
          <p className="contact-desc" style={{ marginBottom: '1.5rem' }}>
            I'm always open to new opportunities, collaborations, or just a chat. Drop a message below!
          </p>
          
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Name" className="contact-input" required />
            <input type="email" placeholder="Your Email" className="contact-input" required />
            <textarea placeholder="Your Message" className="contact-textarea" rows="2" required></textarea>
            <button type="submit" className="contact-submit-btn">Send Message</button>
          </form>

          <div className="contact-divider"></div>

          <div className="contact-socials-combined">
            <a href="mailto:sneha044l2005@gmail.com" className="social-icon" title="Email Me">
              <FaEnvelope />
            </a>
            <a href="https://github.com/Sneha-0409" target="_blank" rel="noreferrer" className="social-icon" title="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/sneha-96228632b?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noreferrer" className="social-icon" title="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
