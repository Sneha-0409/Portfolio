import React from 'react';
import { motion } from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';

export default function GithubStats() {
  const username = 'Sneha-0409';
  const theme = 'tokyonight';
  const hideBorder = true;
  const bgColor = '14141d'; // matching the space theme
  const titleColor = 'c2b5f5';
  const textColor = 'a09d9c';
  const iconColor = 'ffffff';
  const lineColor = 'ff3333'; // bright red

  // API URLs
  const statsUrl = `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=${theme}&hide_border=${hideBorder}&bg_color=${bgColor}&title_color=${titleColor}&text_color=${textColor}&icon_color=${iconColor}&ring_color=${titleColor}`;
  const streakUrl = `https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=${theme}&hide_border=${hideBorder}&background=${bgColor}&ring=${titleColor}&fire=${titleColor}&currStreakNum=${titleColor}&currStreakLabel=${textColor}&sideNums=${textColor}&sideLabels=${textColor}&dates=${textColor}`;
  const topLangsUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=${theme}&hide_border=${hideBorder}&bg_color=${bgColor}&title_color=${titleColor}&text_color=${textColor}`;
  const activityGraphUrl = `https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=${theme}&hide_border=${hideBorder}&bg_color=${bgColor}&color=e6e0ff&title_color=${titleColor}&line=${lineColor}&point=${textColor}`;

  return (
    <div className="github-section-container">
      <div className="github-header" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2 className="journey-title">
          <span className="text-gradient">GITHUB </span>
          <span className="text-white">STATS</span>
        </h2>
      </div>

      <div className="github-grid">
        <motion.div
          className="github-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <img src={statsUrl} alt={`${username}'s GitHub Stats`} />
        </motion.div>

        <motion.div
          className="github-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <img src={streakUrl} alt={`${username}'s GitHub Streak`} />
        </motion.div>

        <motion.div
          className="github-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img src={topLangsUrl} alt={`${username}'s Top Languages`} />
        </motion.div>
      </div>

      <motion.div
        className="github-card github-activity-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <img src={activityGraphUrl} alt={`${username}'s Contribution Graph`} />
      </motion.div>

      <motion.div
        className="github-card github-calendar-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        style={{ marginTop: '1.5rem', padding: '2rem' }}
      >
        <GitHubCalendar
          username={username}
          colorScheme="dark"
          theme={{
            dark: ['rgba(255, 255, 255, 0.05)', '#0e4429', '#006d32', '#26a641', '#39d353']
          }}
          style={{
            color: '#ffcc00' // Matches the yellow text from screenshot
          }}
          blockSize={15}
          blockMargin={5}
          fontSize={16}
        />
      </motion.div>
    </div>
  );
}
