import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
    // Animation variants for the main container
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.5, staggerChildren: 0.4 }
        }
    };

    // Variants for the text and line to fade and slide up
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    // Variants for the pulsing dots
    const dotVariants = {
        pulsing: {
            scale: [1, 1.2, 1],
            transition: {
                duration: 0.8,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <motion.div
            // --- CHANGE 1: New Background Color ---
            // Changed to a deep, dark slate color
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-900"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
            {/* --- CHANGE 2: New Gradient Text Color --- */}
            {/* Using a vibrant cyan-to-sky-blue gradient */}
            <motion.h1
                className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-sky-500 text-transparent bg-clip-text mb-2"
                variants={itemVariants}
            >
                Sneha
            </motion.h1>

            {/* Subtitle text color */}
            <motion.p className="text-lg text-gray-400 mb-4" variants={itemVariants}>
                Full Stack Web Developer
            </motion.p>

            {/* The decorative line will now be cyan */}
            <motion.div className="w-24 h-1 bg-cyan-400 mb-6" variants={itemVariants}></motion.div>

            {/* The pulsing dots will also be cyan */}
            <motion.div className="flex space-x-2" variants={itemVariants}>
                <motion.span className="w-3 h-3 bg-cyan-400 rounded-full" variants={dotVariants} animate="pulsing" />
                <motion.span className="w-3 h-3 bg-cyan-400 rounded-full" variants={dotVariants} animate="pulsing" style={{ animationDelay: '0.2s' }} />
                <motion.span className="w-3 h-3 bg-cyan-400 rounded-full" variants={dotVariants} animate="pulsing" style={{ animationDelay: '0.4s' }} />
            </motion.div>
        </motion.div>
    );
};

export default Loader;