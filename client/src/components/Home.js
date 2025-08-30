
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Home = () => {
    // State to track if the card is flipped
    const [isFlipped, setIsFlipped] = useState(false);

    // This function handles smooth scrolling when a button is clicked
    const handleScroll = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Offset for the navbar height
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="home" className="min-h-screen flex items-center bg-transparent text-white p-5 pt-20">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

                {/* Left Column: Text Content */}
                <motion.div
                    className="md:w-1/2 text-center md:text-left"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-lg text-gray-400 mb-2">Hello, I'm</p>
                    <h1
                        className="text-6xl md:text-8xl font-black mb-4 uppercase"
                        style={{
                            fontFamily: "'Audiowide', sans-serif", // Font changed here
                            textShadow: '0 0 10px rgba(142, 68, 173, 0.7), 0 0 25px rgba(142, 68, 173, 0.5)' // Glow adjusted
                        }}
                    >
                        Sneha
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-8">
                        A passionate Full Stack Web Developer specializing in creating dynamic and beautiful web applications. Welcome to my portfolio!
                    </p>
                    <div className="flex justify-center md:justify-start space-x-4">
                        <a
                            href="#projects"
                            onClick={(e) => handleScroll(e, 'projects')}
                            className="bg-accent text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg shadow-accent/50 hover:shadow-xl hover:shadow-accent/70 hover:bg-blue-700"
                        >
                            See my Work
                        </a>
                        <a
                            href="#contact"
                            onClick={(e) => handleScroll(e, 'contact')}
                            className="bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-600 transition"
                        >
                            Get in touch
                        </a>
                    </div>
                </motion.div>

                {/* Right Column: 3D Flipping Image */}
                <motion.div
                    className="md:w-1/2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div
                        className="w-80 h-80 md:w-96 md:h-96 mx-auto"
                        style={{ perspective: '1000px' }}
                        onMouseEnter={() => setIsFlipped(true)}
                        onMouseLeave={() => setIsFlipped(false)}
                    >
                        <motion.div
                            className="relative w-full h-full"
                            style={{ transformStyle: 'preserve-3d' }}
                            animate={{ rotateY: isFlipped ? 180 : 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Front of the card (your photo) */}
                            <div className="absolute w-full h-full" style={{ backfaceVisibility: 'hidden' }}>
                                <img
                                    src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/172/826/original/IMG_6333_%281%29.jpg?1756275958"
                                    alt="Sneha"
                                    className="w-full h-full rounded-full object-cover border-4 border-accent shadow-2xl"
                                />
                            </div>

                            {/* Back of the card (your name with a dark background) */}
                            <div
                                className="absolute w-full h-full bg-slate-800 rounded-full flex items-center justify-center border-4 border-accent p-4 text-center"
                                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                            >
                                <span className="text-2xl font-bold text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                    An Aspiring Software Engineer...
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Home;



