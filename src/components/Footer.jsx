import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-700 text-white">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between md:flex-row">
                <div className="mb-4 md:mb-0">
                    <h2 className="text-3xl font-bold text-white">Daniel Benitez</h2>
                    <p className="mt-2 text-sm text-white">Areguá, Paraguay.</p>
                </div>
                <div className="flex items-center">
                    <a href="https://twitter.com/c0mplexfps" target="_blank" rel="noopener noreferrer" className="mr-6 text-white hover:text-gray-200 transition-colors duration-300 ease-in-out flex items-center">
                        <span className="mr-2"><FaTwitter /></span>
                        Twitter
                    </a>
                    <a href="https://www.linkedin.com/in/danielbenitezpy/" target="_blank" rel="noopener noreferrer" className="mr-6 text-white hover:text-gray-200 transition-colors duration-300 ease-in-out flex items-center">
                        <span className="mr-2"><FaLinkedin /></span>
                        LinkedIn
                    </a>
                    <a href="https://github.com/dabedev" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 transition-colors duration-300 ease-in-out flex items-center">
                        <span className="mr-2"><FaGithub /></span>
                        GitHub
                    </a>
                </div>
            </div>
            <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm text-white">
                <span>&copy; 2023 Daniel Benitez. All rights reserved.</span>
                <span>Built with React and TailwindCSS ❤️</span>
            </div>
        </footer>
    )
}

export default Footer;