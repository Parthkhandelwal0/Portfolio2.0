import React from "react";


function ProjectBlock(props){
    return(
        <div className="project-block">
        <img src={props.image} alt="Logo" className="project-image" />
            {props.title}
            {props.content}
            <button>know more</button>
            <button>know more</button>
            </div>
    )
}


export default ProjectBlock;