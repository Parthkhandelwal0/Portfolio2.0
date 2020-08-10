import React from "react";


function ProjectBlock(props){
    return(
        <div className="project-block">
        <img src={props.image} alt="Logo" className="project-image" />
            <div className="prjct-title">{props.title}</div>
            <div className="prjct-content">{props.content}</div>
            <div className="btns">
            <a href={props.github}><button className="github">Github </button></a>
           <a href={props.website}> <button className="website">Website</button></a>
            </div>
            </div>
    )
}


export default ProjectBlock;