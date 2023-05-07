import React from "react";
import HeroSection from "../components/HeroSection";
import Projects from "../containers/Projects";

import { DiTerminal } from "react-icons/di";
import { FiMail, FiMapPin } from 'react-icons/fi';

const Home = () => {
    return (
        <>
            <HeroSection />
            <section className="bg-white py-20" id="about-me">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
                    <div className="md:w-2/3 text-center md:text-left">
                        <h2 className="text-4xl font-bold mb-8 md:mb-4 text-gray-800">About Me</h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-8">
                            Hi, I'm Daniel Benitez, a passionate Full Stack Developer with expertise in developing web applications and APIs using the MERN stack, which includes MySQL, Express.js, React.js, and Node.js. I also have experience in other technologies such as React Native, Electron, MariaDB, MongoDB, and PostgreSQL. In my free time, I enjoy challenging myself, reading, and learning new things, especially STEM-related topics. I'm always eager to learn and implement new technologies and frameworks to improve my skills and create better applications.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mb-8">
                            I believe in the power of teamwork and collaboration, and I'm always looking for opportunities to work on exciting projects with like-minded people. If you have any questions or would like to work together, please don't hesitate to contact me!
                        </p>
                    </div>
                    <div className="md:w-1/3 flex justify-center">
                        <div className="w-64 h-64 relative overflow-hidden rounded-full mb-8 md:mb-0 md:mr-12">
                            <DiTerminal className="rounded-full w-full h-full text-gray-800 object-cover" />
                            <div className="absolute top-0 left-0 w-full h-full border-4 border-gray-400 rounded-full animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-gray-100 py-20" id="projects">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-center">My Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        <Projects />
                    </div>
                </div>
            </section>
            <section className="bg-white py-20" id="contact">
                <h2 className="text-4xl font-bold mb-12 text-center">Contact me</h2>
                <div className="flex justify-center">
                    <div className="w-1/4 mx-5 px-4 sm:px-6 lg:px-8">
                        <div className="bg-gray-50 shadow-md rounded-lg overflow-hidden">
                            <div className="flex items-center px-6 py-4">
                                <FiMail className="text-gray-500 mr-4" size={24} />
                                <h2 className="text-lg font-medium text-gray-800">Get in touch</h2>
                            </div>
                            <div className="px-6 py-4">
                                <p className="text-gray-600">If you have any questions or comments, feel free to drop me an email:</p>
                                <a href="mailto:benitezdaniel6@gmail.com" className="mt-2 block text-blue-600 hover:text-blue-700 font-semibold text-lg">benitezdaniel6@gmail.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/4 mx-5 px-4 sm:px-6 lg:px-8">
                        <div className="bg-gray-50 shadow-md rounded-lg overflow-hidden">
                            <div className="flex items-center px-6 py-4">
                                <FiMapPin className="text-gray-500 mr-4" size={24} />
                                <h2 className="text-lg font-medium text-gray-800">Location</h2>
                            </div>
                            <div className="px-6 py-4">
                                <p className="text-gray-600">I am based in:</p>
                                <p className="mt-2 block text-blue-600 hover:text-blue-700 font-semibold text-lg">Areguá, Paraguay</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Home;