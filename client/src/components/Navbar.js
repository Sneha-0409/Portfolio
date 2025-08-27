// import React from 'react';
// import { FaGithub, FaLinkedin } from 'react-icons/fa';
// import { BsGrid3X3GapFill } from 'react-icons/bs';

// const Navbar = ({ toggleMenu }) => {
//     return (
//         <nav className="bg-transparent text-white fixed top-0 left-0 right-0 z-50">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex items-center justify-between h-20">
//                     <div className="text-2xl font-bold text-white">SN.</div>
//                     <div className="absolute left-1/2 transform -translate-x-1/2">
//                         <button
//                             onClick={toggleMenu}
//                             className="p-3 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition"
//                         >
//                             <BsGrid3X3GapFill size={20} />
//                         </button>
//                     </div>
//                     <div className="flex items-center space-x-4">
//                         <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-lavender transition"><FaGithub size={24} /></a>
//                         <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-lavender transition"><FaLinkedin size={24} /></a>
//                         <a href="#contact" className="hidden md:block bg-lavender text-white font-semibold py-2 px-4 rounded-full hover:bg-violet-500 transition cursor-pointer">
//                             Hire Me
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;

import React from 'react';

const Navbar = () => {
    const navLinks = [
        { to: "about", label: "About" },
        { to: "projects", label: "Projects" },
        { to: "experience", label: "Experience" },
        { to: "contact", label: "Contact" },
    ];

    // This function handles the smooth scroll
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
        <nav className="bg-background-dark/70 backdrop-blur-md text-white fixed top-0 left-0 right-0 z-50 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="text-2xl font-bold text-white">SN. Portfolio</div>
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.to}
                                href={`#${link.to}`}
                                onClick={(e) => handleScroll(e, link.to)}
                                className="font-medium text-gray-300 hover:text-accent transition-colors duration-300 cursor-pointer"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;