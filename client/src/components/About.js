

import React from 'react';
import { motion } from 'framer-motion';
// Importing all necessary icons
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaUsers, FaMicrophone, FaPencilAlt, FaUniversity } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiCplusplus } from 'react-icons/si';

// Data for your skills
const skills = [
    { name: 'HTML5', icon: <FaHtml5 size={50} />, color: 'text-orange-500' },
    { name: 'CSS3', icon: <FaCss3Alt size={50} />, color: 'text-blue-500' },
    { name: 'JavaScript', icon: <FaJsSquare size={50} />, color: 'text-yellow-400' },
    { name: 'C++', icon: <SiCplusplus size={50} />, color: 'text-blue-600' },
    { name: 'React', icon: <FaReact size={50} />, color: 'text-cyan-400' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={50} />, color: 'text-teal-400' },
    { name: 'MongoDB', icon: <SiMongodb size={50} />, color: 'text-green-400' },
    { name: 'Leadership', icon: <FaUsers size={50} />, color: 'text-accent' },
    { name: 'Anchoring', icon: <FaMicrophone size={50} />, color: 'text-accent' },
    { name: 'Content Writing', icon: <FaPencilAlt size={50} />, color: 'text-accent' },
];

// Data for your education history
const education = [
    {
        institution: "Madhav Institute of Technology & Science - DU",
        degree: "Bachelor of Technology, Computer Science",
        years: "2024 - 2028",
        details: null
    },
    {
        institution: "Delhi Public School Vindhyanagar",
        degree: "Higher Secondary Education",
        years: "2015 - 2023",
        details: "12th: 80.2% | 10th: 92.4%"
    }
];

const About = () => {
    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
    };

    return (
        <section id="about" className="py-20 bg-slate-900 text-white">
            <div className="container mx-auto px-6">

                <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-16">
                    <motion.div
                        className="md:w-1/3 text-center md:text-left"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl md:text-6xl font-bold">
                            About <span className="text-accent">Me</span>
                        </h2>
                    </motion.div>
                    <motion.div
                        className="md:w-2/3 text-lg text-gray-300 space-y-4 p-8 border border-accent/50 rounded-lg shadow-2xl shadow-accent/40 transition-all duration-300 hover:shadow-accent/60 hover:border-accent/80"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <p>
                            I'm Sneha, a dedicated FULL Stack Developer passionate about crafting intuitive and visually appealing digital experiences. I enjoy blending creativity with functionality to solve real-world problems through design and code.
                        </p>
                        <p>
                            Outside of coding, I love diving into new technologies, contributing to open-source like got selected as contributor in GSSOC'25, and sharpening my soft skills in areas like public speaking and leadership. I’ve had exciting experiences in hackathons - securing a place in the top 15 teams at a college-level hackathon and reaching the finale of the Triwizardathon - National Hackathon. Apart from that, I’m the Head Content Writer at IEEE RAS SBC MITS-DU, and I’ve also anchored at an international online webinar organised by IEEE- PES, as well as a national-level hackathon Hackorbit'25. I aspire to become a Software Engineer and excel in my field.
                        </p>
                    </motion.div>
                </div>

                <div className="text-center">
                    <motion.h3 className="text-3xl font-bold mb-8" /* ...animation props... */>
                        Skills & <span className="text-accent">Expertise</span>
                    </motion.h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-4xl mx-auto mb-16">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                className="flex flex-col items-center justify-center p-4 bg-slate-800 rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/40"
                            // ...animation props
                            >
                                <div className={`mb-2 ${skill.color}`}>{skill.icon}</div>
                                <p className="font-semibold">{skill.name}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.h3 className="text-3xl font-bold mb-8" /* ...animation props... */>
                        My <span className="text-accent">Education</span>
                    </motion.h3>
                    <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                        {education.map((edu, index) => (
                            <motion.div
                                key={edu.institution}
                                className="bg-slate-800 p-6 rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/40 flex items-start space-x-4"
                            // ...animation props
                            >
                                <div className="text-accent pt-1"><FaUniversity size={24} /></div>
                                <div>
                                    <h4 className="font-bold text-lg">{edu.institution}</h4>
                                    <p className="text-gray-300">{edu.degree}</p>
                                    {/* --- THIS IS THE LINE THAT WAS CHANGED --- */}
                                    {edu.details && <p className="text-sm text-gray-400">{edu.details}</p>}
                                    <p className="text-sm text-gray-400 mt-1">{edu.years}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;