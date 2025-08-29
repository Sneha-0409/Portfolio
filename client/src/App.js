

// import React from 'react';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import About from './components/About';
// import Projects from './components/Projects';
// import Experience from './components/Experience';
// import Contact from './components/Contact';
// import CustomCursor from './components/CustomCursor';
// import './index.css';

// function App() {
//     return (
//         <div className="bg-gradient-to-br from-background-dark to-background-light min-h-screen text-white cursor-none">
//             <CustomCursor />
//             <Navbar />

//             <main>
//                 <section id="home"><Home /></section>
//                 <section id="about"><About /></section>
//                 <section id="projects"><Projects /></section>
//                 <section id="experience"><Experience /></section>
//                 <section id="contact"><Contact /></section>
//             </main>
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
        // The main gradient has been removed. We now have a solid dark background.
        <div className="bg-background-dark text-white cursor-none">
            <CustomCursor />
            <Navbar />

            <main>
                {/* Each section will now control its own background */}
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