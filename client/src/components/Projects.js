import React from 'react';
import { motion } from 'framer-motion'; // Import motion

const myProjects = [
    // ... your project data
];

const Projects = () => {
    // This variant will be used for each project card
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        // This section is a required part of the portfolio [cite: 19]
        <section id="projects" className="py-20 bg-transparent text-white">
            <div className="container mx-auto px-6">
                <motion.h2
                    className="text-4xl font-bold text-center mb-12"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    My Projects
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {myProjects.map((project, index) => (
                        // Apply motion to each card
                        <motion.div
                            key={index}
                            className="bg-gray-800 rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }} // Animate when 30% of the card is visible
                        >
                            <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover" />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-2 text-lavender">{project.title}</h3>
                                <p className="text-gray-300 mb-4">{project.description}</p>
                                <div className="flex justify-start space-x-4">
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="bg-lavender text-white py-2 px-4 rounded hover:bg-violet-500 transition-colors">
                                        GitHub
                                    </a>
                                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-500 transition-colors">
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;