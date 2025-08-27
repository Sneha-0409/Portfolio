import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';

const NavModal = ({ isOpen, toggleMenu }) => {
    if (!isOpen) return null;

    const NavItem = ({ href, label }) => (
        <a
            href={href}
            onClick={toggleMenu}
            className="text-4xl md:text-5xl font-bold text-gray-300 hover:text-white cursor-pointer transition-colors"
        >
            {label}
        </a>
    );

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-95 z-50 flex flex-col items-center justify-center">
            <button
                onClick={toggleMenu}
                className="absolute top-8 right-8 text-white"
            >
                <XMarkIcon className="h-10 w-10" />
            </button>
            <div className="flex flex-col items-center space-y-8">
                <NavItem href="#home" label="Home" />
                <NavItem href="#about" label="About Me" />
                <NavItem href="#projects" label="My Projects" />
                <NavItem href="#experience" label="Experience" />
                <NavItem href="#contact" label="Contact" />
            </div>
        </div>
    );
};

export default NavModal;