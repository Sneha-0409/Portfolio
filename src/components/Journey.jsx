import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const journeyData = [
  {
    id: 1,
    year: 'Jun 2026 - Present',
    title: 'Google AI/ML Virtual Intern by Google Developers Groups via EduSkills Academy',
    description: 'Currently pursuing the Google AI/ML Virtual Internship by Google Developer Groups (GDG) via EduSkills Academy, gaining hands-on experience in Machine Learning, Computer Vision, and CNNs.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
        <line x1="14" y1="4" x2="10" y2="20"></line>
      </svg>
    )
  },
  {
    id: 2,
    year: 'Mar 2026 - Present',
    title: 'Secretary - IEEE Robotics and Automation Society, MITS-DU',
    description: 'Serving as the Secretary for the IEEE Robotics and Automation Society, Student Branch Chapter at MITS-DU. Focused on team leadership and organizing tech-related initiatives.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
        <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
      </svg>
    )
  },
  {
    id: 3,
    year: 'Sep 2025 - Present',
    title: 'Content & Documentation - Google Developer Groups MITS-DU Gwalior',
    description: 'Part of the Content & Documentation team at GDGoC MITS-DU Gwalior. Focused on content writing, technical documentation, and community resources.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
      </svg>
    )
  }
];

const TimelineItem = ({ item, index, isLast, scrollContainer }) => {
  const isLeft = index % 2 === 0;
  const itemRef = useRef(null);

  const scrollRef = useRef(scrollContainer);
  scrollRef.current = scrollContainer;

  const { scrollYProgress } = useScroll({
    container: scrollRef,
    target: itemRef,
    offset: ["start center", "center center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={itemRef} className={`timeline-item ${isLeft ? 'left' : 'right'}`}>
      <div className="timeline-dot"></div>

      <div className="timeline-segment-bg"></div>
      <motion.div
        className="timeline-segment-fill"
        style={{ height: lineHeight }}
      ></motion.div>

      <div className="timeline-content">
        <div className="timeline-year-wrapper">
          <span className="timeline-year">{item.year}</span>
          <div className="timeline-connector"></div>
        </div>

        <div className="timeline-card">
          <div className="timeline-card-header">
            <h3 className="timeline-card-title">{item.title}</h3>
            <div className="timeline-icon-box">
              {item.icon}
            </div>
          </div>
          <p className="timeline-card-description">{item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default function Journey({ scrollContainer }) {
  return (
    <div className="journey-container">
      <div className="journey-header">
        <h4 className="journey-subtitle">THE STORY SO FAR</h4>
        <h2 className="journey-title">
          <span className="text-white">MY </span>
          <span className="text-gradient">JOURNEY</span>
        </h2>
      </div>

      <div className="timeline">
        {journeyData.map((item, index) => (
          <TimelineItem
            key={item.id}
            item={item}
            index={index}
            isLast={index === journeyData.length - 1}
            scrollContainer={scrollContainer}
          />
        ))}
      </div>
    </div>
  );
}
