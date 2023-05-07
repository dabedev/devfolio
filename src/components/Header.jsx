import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import useToggle from '../hooks/useToggle';

const Header = () => {
    const [isOpen, setIsOpen] = useToggle();

    return (
        <header className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50 transition-all duration-300">
            <div className="container mx-auto flex justify-between items-center px-4 py-3 md:py-4">
                <a href="#" className="font-bold text-lg md:text-2xl text-gray-900">Daniel Benitez</a>
                <div className="md:hidden">
                    <button
                        className="flex items-center focus:outline-none"
                        onClick={setIsOpen}
                    >
                        {isOpen ? (
                            <FaTimes className="w-6 h-6 text-gray-700" />
                        ) : (
                            <FaBars className="w-6 h-6 text-gray-700" />
                        )}
                    </button>
                </div>
                <nav className="hidden md:flex md:flex-row">
                    <a href="#hero" className="mx-3 px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-md transition duration-300">Home</a>
                    <a href="#about-me" className="mx-3 px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-md transition duration-300">About</a>
                    <a href="#projects" className="mx-3 px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-md transition duration-300">Projects</a>
                    <a href="#hero" className="mx-3 px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-md transition duration-300">Contact</a>
                </nav>
            </div>
            <div
                className={`${isOpen ? 'block bg-white' : 'hidden'
                    } md:hidden bg-gray-100 py-2`}
            >
                <a href="#hero" className="block mx-3 px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition duration-300">
                    Home
                </a>
                <a href="#about-me" className="block mx-3 px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition duration-300">
                    About
                </a>
                <a href="#projects" className="block mx-3 px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition duration-300">
                    Projects
                </a>
                <a href="#hero" className="block mx-3 px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition duration-300">
                    Contact
                </a>
            </div>
        </header>
    );
};

export default Header;