// import React from 'react';
// import { motion } from 'framer-motion'; // Import motion

// const About = () => {
//     return (
//         // This section is a required part of the portfolio
//         <section id="about" className="py-20 bg-transparent text-white">
//             <div className="container mx-auto px-6">
//                 {/* Animate the main heading */}
//                 <motion.h2
//                     className="text-4xl font-bold text-center mb-12"
//                     initial={{ opacity: 0, y: -50 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5 }}
//                     viewport={{ once: true }}
//                 >
//                     About Me
//                 </motion.h2>

//                 <div className="flex flex-col md:flex-row items-start gap-10">
//                     {/* Animate the first column (your bio) */}
//                     <motion.div
//                         className="md:w-2/3"
//                         initial={{ opacity: 0, x: -50 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.5 }}
//                         viewport={{ once: true }}
//                     >
//                         <h3 className="text-2xl font-semibold mb-4 text-lavender">Who I Am</h3>
//                         <p className="text-gray-300 leading-relaxed">
//                             [Your brief bio goes here. Discuss your background, your journey into tech, and your professional interests. Talk about what drives you and what kind of problems you love to solve.]
//                         </p>
//                     </motion.div>

//                     {/* Animate the second column (your skills) with a slight delay */}
//                     <motion.div
//                         className="md:w-1/3"
//                         initial={{ opacity: 0, x: 50 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.5, delay: 0.2 }}
//                         viewport={{ once: true }}
//                     >
//                         <h3 className="text-2xl font-semibold mb-4 text-lavender">My Skills</h3>
//                         <div className="flex flex-wrap gap-2">
//                             <span className="bg-gray-700 py-2 px-4 rounded-lg">JavaScript</span>
//                             <span className="bg-gray-700 py-2 px-4 rounded-lg">React</span>
//                             <span className="bg-gray-700 py-2 px-4 rounded-lg">Node.js</span>
//                             <span className="bg-gray-700 py-2 px-4 rounded-lg">Express.js</span>
//                             <span className="bg-gray-700 py-2 px-4 rounded-lg">MongoDB</span>
//                             <span className="bg-gray-700 py-2 px-4 rounded-lg">Tailwind CSS</span>
//                             {/* TODO: Add more of your skills */}
//                         </div>
//                     </motion.div>
//                 </div>
//             </div>
//         </section>
//     );
// };

import React from 'react';
import { motion } from 'framer-motion';
// Importing all necessary icons
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaUsers, FaMicrophone, FaPencilAlt, FaUniversity } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb } from 'react-icons/si';

// Data for your skills
const skills = [
    { name: 'HTML5', icon: <FaHtml5 size={50} />, color: 'text-orange-500' },
    { name: 'CSS3', icon: <FaCss3Alt size={50} />, color: 'text-blue-500' },
    { name: 'JavaScript', icon: <FaJsSquare size={50} />, color: 'text-yellow-400' },
    { name: 'React', icon: <FaReact size={50} />, color: 'text-cyan-400' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={50} />, color: 'text-teal-400' },
    { name: 'Node.js', icon: <FaNodeJs size={50} />, color: 'text-green-500' },
    { name: 'MongoDB', icon: <SiMongodb size={50} />, color: 'text-green-400' },
    { name: 'Leadership', icon: <FaUsers size={50} />, color: 'text-accent' },
    { name: 'Anchoring', icon: <FaMicrophone size={50} />, color: 'text-accent' },
    { name: 'Content Writing', icon: <FaPencilAlt size={50} />, color: 'text-accent' },
];

// Data for your education history
const education = [
    {
        institution: "Madhav Institute of Technology & Science, Gwalior",
        degree: "Bachelor of Technology, Computer Science",
        years: "2023 - 2027 (Expected)"
    },
    {
        institution: "Your High School Name",
        degree: "Higher Secondary Certificate (HSC)",
        years: "Year - Year"
    }
];

const About = () => {
    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
    };

    return (
        <section id="about" className="py-20 bg-transparent text-white">
            <div className="container mx-auto px-6 text-center">

                <motion.h2
                    className="text-4xl font-bold mb-8"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    About <span className="text-accent">Me</span>
                </motion.h2>

                {/* --- BIO TEXT WITH ENHANCED GLOWING BORDER --- */}
                <motion.div
                    // --- THIS IS THE LINE THAT WAS CHANGED ---
                    className="max-w-3xl mx-auto text-lg text-gray-300 space-y-4 mb-16 p-8 border border-accent/40 rounded-lg shadow-2xl shadow-accent/20 transition-all duration-300 hover:border-accent/60 hover:shadow-accent/40"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <p>
                        I'm Sneha, a dedicated MERN Stack Developer passionate about crafting intuitive and visually appealing digital experiences. I enjoy blending creativity with functionality to solve real-world problems through design and code.
                    </p>
                    <p>
                        When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
                    </p>
                </motion.div>

                {/* --- SKILLS SECTION (NO BOX) --- */}
                <motion.h3
                    className="text-3xl font-bold mb-8"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    Skills & <span className="text-accent">Expertise</span>
                </motion.h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-4xl mx-auto mb-16">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            className="flex flex-col items-center justify-center p-4 bg-slate-700 rounded-lg shadow-lg"
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className={`mb-2 ${skill.color}`}>
                                {skill.icon}
                            </div>
                            <p className="font-semibold">{skill.name}</p>
                        </motion.div>
                    ))}
                </div>

                {/* --- EDUCATION SECTION (NO BOX) --- */}
                <motion.h3
                    className="text-3xl font-bold mb-8"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    My <span className="text-accent">Education</span>
                </motion.h3>
                <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                    {education.map((edu, index) => (
                        <motion.div
                            key={edu.institution}
                            className="bg-slate-700 p-6 rounded-lg shadow-lg flex items-start space-x-4"
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <div className="text-accent pt-1">
                                <FaUniversity size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">{edu.institution}</h4>
                                <p className="text-gray-300">{edu.degree}</p>
                                <p className="text-sm text-gray-400">{edu.years}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default About;