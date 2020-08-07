import React from "react";


function ProjectBlock(props){
    return(
        <div className="project-block">
        <img src={props.image} alt="Logo" className="project-image" />
            <div className="prjct-title">{props.title}</div>
            <div className="prjct-content">{props.content}</div>
            <div className="btns">
            <button className="github">Github </button>
            <button className="website">Website</button>
            </div>
            </div>
    )
}


export default ProjectBlock;