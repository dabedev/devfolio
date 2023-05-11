import React from "react";
import useToggle from "../hooks/useToggle";

import LangHmap from "../dict/langHmap";
import { SiGithub } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

const Project = (props) => {
    const [show, setShow] = useToggle();

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg relative" onMouseEnter={setShow} onMouseLeave={setShow}>
            <img src={props.projectImage} alt="Project Image" className="object-cover h-64 w-full" />
            <div className="p-6 sm:p-8 md:p-10 lg:p-12 pb-16 relative">
                <h3 className="text-3xl font-bold mb-4">{props.projectTitle}</h3>
                <div className="relative h-64">
                    <div className={`${show ? 'opacity-0 visibility-hidden' : 'opacity-100 visibility-visible'} z-10 w-full h-full top-0 left-0 absolute`}>
                        <p className="text-gray-700 mb-8 text-xl">{props.projectDescription}</p>
                    </div>
                    <div className={`z-20 py-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 justify-center transition-all duration-300 ease-in-out absolute w-full h-full top-0 left-0 ${show ? 'opacity-100 visibility-visible' : 'opacity-0 visibility-hidden'}`}>
                        {Object.keys(props.technologies).map((area, index1) => {
                            return (
                                <div key={`area-${index1}`}>
                                    <p className="text-gray-700 max-auto font-bold mt-2">{area}</p>
                                    {props.technologies[area].map((key, index2) => {
                                        const { icon: Icon, color, url } = LangHmap[key];
                                        return (
                                            <a href={url} target="_blank" rel="noopener noreferrer" key={`technology-${index1}-${index2}`}>
                                                <div className="items-center mr-12 transition mx-auto my-auto duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                                                    <Icon className={`${color} text-2xl sm:text-3xl md:text-4xl`} />
                                                </div>
                                            </a>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="flex justify-center mt-8">
                    <a href={props.projectUrl} className="flex items-center bg-black hover:bg-gray-900 text-white font-bold py-3 px-10 rounded-full inline-block mr-4 transition-all duration-300">
                        View
                        <FiExternalLink size={20} className="text-white ml-2" />
                    </a>
                    {props.githubUrl ? (
                        <a href={props.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center bg-black hover:bg-gray-900 text-white font-bold py-3 px-10 rounded-full inline-block transition-all duration-300">
                            <SiGithub size={20} className="text-white mr-2" />
                            GitHub
                        </a>
                    ) : (<></>)}
                </div>
            </div>
        </div>
    )
}

export default Project;