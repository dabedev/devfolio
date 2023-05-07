import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="right-0 bg-white shadow-lg">
            <div className="container mx-auto flex justify-between items-center px-4 py-3 md:py-4">
                <a href="#" className="font-bold text-lg md:text-2xl text-gray-900">My Portfolio</a>
                <div className="md:hidden">
                    <button
                        className="flex items-center focus:outline-none"
                        onClick={toggleMenu}
                    >
                        {isOpen ? (
                            <FaTimes className="w-6 h-6 text-gray-700" />
                        ) : (
                            <FaBars className="w-6 h-6 text-gray-700" />
                        )}
                    </button>
                </div>
                <nav className="hidden md:flex md:flex-row">
                    <a href="#" className="mx-3 px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-md transition duration-300">Home</a>
                    <a href="#" className="mx-3 px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-md transition duration-300">About</a>
                    <a href="#" className="mx-3 px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-md transition duration-300">Portfolio</a>
                    <a href="#" className="mx-3 px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-md transition duration-300">Contact</a>
                </nav>
            </div>
            <div
                className={`${isOpen ? 'block bg-white' : 'hidden'
                    } md:hidden bg-gray-100 py-2`}
            >
                <a href="#" className="block mx-3 px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition duration-300">
                    Home
                </a>
                <a href="#" className="block mx-3 px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition duration-300">
                    About
                </a>
                <a href="#" className="block mx-3 px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition duration-300">
                    Portfolio
                </a>
                <a href="#" className="block mx-3 px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition duration-300">
                    Contact
                </a>
            </div>
        </header>
    );
};

export default Header;