

import React from 'react';
import { motion } from 'framer-motion';
// Importing the icons we need
import { FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

// Your contact information, with the verified, correct Instagram link
const contactInfo = [
    {
        name: "LinkedIn",
        label: "sneha-96228632b",
        icon: <FaLinkedin size={30} />,
        link: "https://www.linkedin.com/in/sneha-96228632b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    },
    {
        name: "Email",
        label: "sneha044l2005@gmail.com",
        icon: <FaEnvelope size={30} />,
        link: "mailto:sneha044l2005@gmail.com"
    },
    {
        name: "Instagram",
        label: "@snehuhh_",
        icon: <FaInstagram size={30} />,
        // This is the standard, clickable URL for your profile.
        link: "https://www.instagram.com/snehuhh_"
    },
];

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-slate-900 text-white">
            <div className="container mx-auto px-6 text-center">
                <motion.h2
                    className="text-4xl font-bold mb-4"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Get In <span className="text-accent">Touch</span>
                </motion.h2>
                <motion.p
                    className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    I’m always excited to collaborate on innovative projects, brainstorm creative ideas, or join hands with passionate teams. Let’s connect and create something impactful!
                </motion.p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {contactInfo.map((item, index) => (
                        <motion.a
                            key={item.name}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-slate-800 p-6 rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/40 text-left flex items-center space-x-4"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-accent text-4xl">
                                {item.icon}
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-white">{item.name}</h4>
                                <p className="text-gray-400">{item.label}</p>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;