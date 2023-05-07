import React from "react";
import HeroSection from "../components/HeroSection";
import Projects from "../containers/Projects";

import { DiTerminal } from "react-icons/di";

const Home = () => {
    return (
        <>
            <HeroSection />
            <section className="bg-white py-20">
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
            <section className="bg-gray-100 py-20">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-center">My Portfolio</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        <Projects />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;