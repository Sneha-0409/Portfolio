

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
        // The main container that holds all background effects
        <div className="bg-background-dark text-white cursor-none background-container">

            {/* The new grid background layer */}
            <div className="grid-overlay"></div>

            {/* This container holds all the visible content and places it on top */}
            <div className="relative z-10">
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
        </div>
    );
}

export default App;
