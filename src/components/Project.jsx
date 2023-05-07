import React from "react";
import useToggle from "../hooks/useToggle";

import LangHmap from "../dict/langHmap";
import { SiGithub } from "react-icons/si";

const Project = (props) => {
    const [show, setShow] = useToggle();
    console.log(props.githubUrl)

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg" onMouseEnter={setShow} onMouseLeave={setShow}>
            <img src={props.projectImage} alt="Project Image" className="object-cover h-64 w-full" />
            <div className="p-6 sm:p-8 md:p-10 lg:p-12">
                <h3 className="text-3xl font-bold mb-4">{props.projectTitle}</h3>
                <p className="text-gray-700 mb-8">{props.projectDescription}</p>
                <div className="flex justify-center mt-8">
                    <a href={props.projectUrl} className="bg-black hover:bg-gray-900 text-white font-bold py-3 px-10 rounded-full inline-block mr-4 transition-all duration-300">View</a>
                    {props.githubUrl ? (
                        <a href={props.githubUrl} target="_blank" rel="noopener noreferrer"
                            className="bg-black hover:bg-gray-900 text-white font-bold py-3 px-10 rounded-full inline-block transition-all duration-300">
                            <SiGithub size={20} className="text-white mr-4" />
                        </a>
                    ) : (<></>)}
                </div>
                <div className={`py-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 ${show ? 'block' : 'hidden'} transition duration-500 ease-in-out transform`}>
                    {props.technologies.map((key) => {
                        const { icon: Icon, color, url } = LangHmap[key];
                        return (
                            <a href={url} target="_blank" rel="noopener noreferrer" key={key}>
                                <div className="flex flex-col items-center mr-12 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                                    <Icon className={`${color} text-2xl sm:text-3xl md:text-4xl`} />
                                </div>
                            </a>
                        )
                    })}
                </div>
            </div>
        </div>

    )
}

export default Project;