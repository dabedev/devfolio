import React from "react";
import Project from "../components/Project";
import RenonderaImage from "../assets/images/renondera.png";
import VmastersImage from "../assets/images/vmasters.png";
import ItoolsImage from "../assets/images/itools.png";


const Projects = () => {
    return (
        <>
            <Project projectTitle="Renondera"
                projectDescription="Renondera is a project born with the ambition of changing the landscape of digital businesses. 
            Through this project, we aim to innovate the way online entrepreneurs manage their administrative or marketing operations, 
            offering a system that allows them to develop their activities in an automated and simple way."
                projectUrl="https://www.renondera.com" projectImage={RenonderaImage}
                technologies={
                    {
                        Frontend: ["React", "JavaScript", "TailwindCSS", "ReactNative", "Electron"],
                        Backend: ["NodeJS", "Express", "MySQL"],
                        Deployment: ["Nginx"]
                    }
                } />
            <Project projectTitle="vMasters"
                projectDescription="This platform helps you improve your skills quickly with a unique approach and provides easy accessibility to its resources. 
                It also has a friendly and supportive community to interact with."
                projectUrl="https://vmasters.dabe.lat" projectImage={VmastersImage}
                technologies={
                    {
                        Frontend: ["React", "JavaScript", "TailwindCSS", "ReactNative", "Electron"],
                        Backend: ["NodeJS", "Express", "MySQL"],
                        Deployment: ["Nginx"]
                    }
                } />
            <Project projectTitle="iTools"
                projectDescription="This API provides various functions, such as data measurement, statistical chart webhooks, text and data comparison."
                projectUrl="https://itools.dabe.lat" projectImage={ItoolsImage} githubUrl="https://github.com/dabedev/iTools"
                technologies={
                    {
                        Frontend: ["React", "JavaScript", "TypeScript", "CSS", "SCSS"],
                        Backend: ["NodeJS", "Express", "MySQL"],
                        Deployment: ["Nginx"]
                    }
                } />
        </>
    )
}

export default Projects;