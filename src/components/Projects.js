import React from "react";
import Project from "./ProjectBlock"
import projects from "../projects"


function Projects(props){
    return(
    <div>
    <div className="project-head" id="projects">
    &lt; PROJECTS /&gt;
    </div>
    <div className="prjct">
    {projects.map((project)=>{
        return(
        <Project 
        key={project.key}
        title={project.title}
        content={project.content}
        image={project.image}
        github={project.github}
        website={project.website}
        />
        )
    })}
    </div>
    </div>
    )
}


export default Projects;