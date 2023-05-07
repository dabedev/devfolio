import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMysql, SiExpress, SiGithub, SiLinkedin } from "react-icons/si";

import profilePic from "../assets/logos/dabe.png";

const HeroSection = () => {
    return (
        <section className="bg-gray-100 py-20">
            <div className="container mx-auto flex flex-col md:flex-row justify-center items-center">
                <div className="w-80 h-80 relative overflow-hidden rounded-full mb-8 md:mb-0 md:mr-12">
                    <img src={profilePic} alt="Profile" className="rounded-full w-full h-full object-cover" />
                    <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-400 rounded-full animate-pulse"></div>
                </div>
                <div className="md:w-2/3 text-center md:text-left">
                    <h2 className="text-4xl font-bold mb-8 text-gray-800">Daniel Benitez</h2>
                    <p className="text-lg text-gray-700 mb-8">
                        Hi, I'm a passionate Full Stack Developer located in Areguá, Paraguay 📍. I have experience working with the MERN stack, as well as other technologies such as PHP, MySQL, and PostgreSQL. I enjoy learning about new technologies and frameworks to improve my skills and create better applications. In my free time, I like to code new projects, listen to music and read books.
                    </p>
                    <div className="flex justify-center md:justify-start mb-8">
                        <a href="https://github.com/dabedev" target="_blank" rel="noopener noreferrer" className="text-gray-600 mr-4 hover:text-gray-800 transition-all duration-300">
                            <SiGithub size={40} />
                        </a>
                        <a href="https://www.linkedin.com/in/danielbenitezpy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-all duration-300">
                            <SiLinkedin size={40} />
                        </a>
                    </div>
                    <h3 className="text-2xl mb-4 text-gray-800">Main Tech Stack</h3>
                    <div className="flex justify-center md:justify-start items-center">
                        <div className="flex flex-col items-center mr-12">
                            <SiMysql size={50} className="text-blue-500 mb-2" />
                        </div>
                        <div className="flex flex-col items-center mr-12">
                            <SiExpress size={50} className="text-gray-500 mb-2" />
                        </div>
                        <div className="flex flex-col items-center mr-12">
                            <FaReact size={50} className="text-blue-500 mb-2" />
                        </div>
                        <div className="flex flex-col items-center">
                            <FaNodeJs size={50} className="text-green-500 mb-2" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;