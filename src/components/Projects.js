import React from "react";
import Project from "./ProjectBlock"
import projects from "../projects"


function Projects(props){
    return(
    <div>
    <div className="project-head">
    PROJECTS
    </div>
    <div className="prjct">
    {projects.map((project)=>{
        return(
        <Project 
        key={project.key}
        title={project.title}
        content={project.content}
        image={project.image}
        />
        )
    })}
    </div>
    </div>
    )
}


export default Projects;