// import React from 'react';
// import { motion } from 'framer-motion';

// const Home = () => {
//     // Re-using the same scroll handler function
//     const handleScroll = (e, targetId) => {
//         e.preventDefault();
//         const targetElement = document.getElementById(targetId);
//         if (targetElement) {
//             window.scrollTo({
//                 top: targetElement.offsetTop - 80, // Offset for the navbar
//                 behavior: 'smooth'
//             });
//         }
//     };

//     return (
//         <section id="home" className="min-h-screen flex items-center bg-transparent text-white p-5 pt-20">
//             <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
//                 <motion.div
//                     className="md:w-1/2 text-center md:text-left"
//                     initial={{ opacity: 0, x: -100 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.8 }}
//                 >
//                     <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
//                         Hi, I'm <span className="text-accent">Sneha</span>
//                     </h1>
//                     <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-8">
//                         A passionate Full Stack Web Developer specializing in creating dynamic and beautiful web applications. Welcome to my portfolio!
//                     </p>
//                     <div className="flex justify-center md:justify-start space-x-4">
//                         {/* The hover color on this button has been changed */}
//                         <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="bg-accent text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition cursor-pointer">
//                             My Projects
//                         </a>
//                         <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-600 transition cursor-pointer">
//                             About Me
//                         </a>
//                     </div>
//                 </motion.div>
//                 <motion.div
//                     className="md:w-1/3"
//                     initial={{ opacity: 0, scale: 0.5 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.8, delay: 0.2 }}
//                 >
//                     <img
//                         src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/172/826/original/IMG_6333_%281%29.jpg?1756275958"
//                         alt="Sneha"
//                         className="w-80 h-80 md:w-96 md:h-96 rounded-full object-cover mx-auto border-4 border-accent shadow-2xl"
//                     />
//                 </motion.div>
//             </div>
//         </section>
//     );
// };

// export default Home;

import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
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
                    <h1
                        className="text-6xl md:text-8xl font-black mb-4 uppercase"
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            textShadow: '0 0 8px rgba(167, 139, 250, 0.6), 0 0 20px rgba(167, 139, 250, 0.4)'
                        }}
                    >
                        Sneha
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-8">
                        I'm a passionate MERN Stack Developer with a knack for building clean, responsive, and user-friendly web interfaces.
                    </p>
                    <div className="flex justify-center md:justify-start space-x-4">
                        <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="bg-accent text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition cursor-pointer">
                            See My Work
                        </a>
                        {/* --- THIS BUTTON HAS BEEN CHANGED --- */}
                        <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-600 transition cursor-pointer">
                            Contact Me
                        </a>
                    </div>
                </motion.div>

                {/* Right Column: Image */}
                <motion.div
                    className="md:w-1/3"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <img
                        src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/172/826/original/IMG_6333_%281%29.jpg?1756275958"
                        alt="Sneha"
                        className="w-80 h-80 md:w-96 md:h-96 rounded-full object-cover mx-auto border-4 border-accent shadow-2xl"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Home;