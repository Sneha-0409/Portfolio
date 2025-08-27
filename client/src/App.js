

// import React, { useState, useEffect } from 'react';
// import { AnimatePresence } from 'framer-motion'; // Import AnimatePresence for exit animations
// import Navbar from './components/Navbar';
// import NavModal from './components/NavModal';
// import Home from './components/Home';
// import About from './components/About';
// import Projects from './components/Projects';
// import Experience from './components/Experience';
// import Contact from './components/Contact';
// import CustomCursor from './components/CustomCursor';
// import Loader from './components/Loader'; // Import your new Loader component
// import './index.css';

// function App() {
//     const [loading, setLoading] = useState(true);
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     useEffect(() => {
//         // This timer will hide the loader after 3 seconds
//         const timer = setTimeout(() => {
//             setLoading(false);
//         }, 3000);

//         return () => clearTimeout(timer); // Cleanup the timer
//     }, []);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     return (
//         <div className="bg-gradient-to-br from-background-dark to-background-light min-h-screen text-white cursor-none">
//             {/* AnimatePresence handles the smooth exit of the Loader */}
//             <AnimatePresence>
//                 {loading && <Loader />}
//             </AnimatePresence>

//             {/* This part of your portfolio will only appear after loading is false */}
//             {!loading && (
//                 <>
//                     <CustomCursor />
//                     <Navbar toggleMenu={toggleMenu} />
//                     <NavModal isOpen={isMenuOpen} toggleMenu={toggleMenu} />
//                     <main>
//                         <section id="home"><Home /></section>
//                         <section id="about"><About /></section>
//                         <section id="projects"><Projects /></section>
//                         <section id="experience"><Experience /></section>
//                         <section id="contact"><Contact /></section>
//                     </main>
//                 </>
//             )}
//         </div>
//     );
// }

// export default App;

import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import './index.css';

function App() {
    return (
        <div className="bg-gradient-to-br from-background-dark to-background-light min-h-screen text-white cursor-none">
            <CustomCursor />
            <Navbar />

            <main>
                <section id="home"><Home /></section>
                <section id="about"><About /></section>
                <section id="projects"><Projects /></section>
                <section id="experience"><Experience /></section>
                <section id="contact"><Contact /></section>
            </main>
        </div>
    );
}

export default App;