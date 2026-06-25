const si = require('react-icons/si');
const fa = require('react-icons/fa');

const iconsToCheck = [
  'SiPython', 'SiCplusplus', 'SiC', 'SiHtml5', 'SiCss3', 'SiJavascript', 'SiReact', 
  'SiChartdotjs', 'SiNodedotjs', 'SiExpress', 'SiFirebase', 'SiMongodb', 'SiSupabase', 
  'SiTypescript', 'SiJupyter', 'SiGoogledocs', 'SiCanva', 'SiNumpy', 'SiPandas', 
  'SiGooglecloud', 'SiMysql', 'SiScikitlearn', 'SiGit', 'SiGithub',
  'FaRobot', 'FaBrain', 'FaChartArea', 'FaCode', 'FaChartPie'
];

for (const icon of iconsToCheck) {
  if (icon.startsWith('Si')) {
    if (!si[icon]) console.log('Missing in si:', icon);
  } else {
    if (!fa[icon]) console.log('Missing in fa:', icon);
  }
}
console.log('Done checking.');
