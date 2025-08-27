import React from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '../hooks/useMousePosition';

const CustomCursor = () => {
    const { x, y } = useMousePosition();

    return (
        // We are replacing the motion.div with a motion.svg to create the star shape
        <motion.svg
            width="30" // Set the size of the star
            height="30"
            viewBox="0 0 100 100" // The coordinate system for the SVG shape
            className="hidden md:block fixed pointer-events-none z-50"
            style={{
                translateX: '-50%',
                translateY: '-50%',
                // This adds a subtle glow effect to make the star pop
                filter: 'drop-shadow(0 0 4px currentColor)'
            }}
            animate={{
                x: x,
                y: y,
                rotate: 180 // We can even make it spin!
            }}
            transition={{
                type: 'spring',
                stiffness: 500,
                damping: 30,
                mass: 0.1,
                rotate: {
                    duration: 2,
                    repeat: Infinity,
                    ease: 'linear'
                }
            }}
        >
            {/* This is the SVG path that draws a five-pointed star */}
            <polygon
                points="50,5 61,35 95,35 68,57 79,87 50,70 21,87 32,57 5,35 39,35"
                className="text-accent" // Use the accent color from your theme
                fill="currentColor"
            />
        </motion.svg>
    );
};

export default CustomCursor;