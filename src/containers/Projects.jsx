import React from "react";
import Project from "../components/Project";
import RenonderaImage from "../assets/images/renondera.png";
import VmastersImage from "../assets/images/vmasters.png";
import ItoolsImage from "../assets/images/itools.png";


const Projects = () => {
    return (
        <>
            <Project projectTitle="Renondera" projectDescription="" projectUrl="" projectImage={RenonderaImage}
                technologies={["React", "JavaScript", "TailwindCSS", "ReactNative", "Electron", "NodeJS", "Express", "MySQL", "Nginx"]} />
            <Project projectTitle="vMasters" projectDescription="" projectUrl="" projectImage={VmastersImage}
                technologies={["React", "JavaScript", "TailwindCSS", "ReactNative", "Electron", "NodeJS", "Express", "MySQL", "Nginx"]} />
            <Project projectTitle="iTools" projectDescription="" projectUrl="" projectImage={ItoolsImage} githubUrl="https://github.com/dabedev/iTools"
                technologies={["React", "JavaScript", "TypeScript", "CSS", "SCSS", "NodeJS", "Express", "MySQL", "Nginx"]} />
        </>
    )
}

export default Projects;