import React from "react";
import {ProgressBar} from "react-bootstrap"
import ProfilePic from "../images/profile_pic.jpeg"

const Info = ()=>(
    <div className="info">
        <div className="info-head">
          Parth Khandelwal
        </div>
        <div className="info-subhead">
            Web Developer
        </div>
        <div className="info-det">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
         It has survived not only five centuries, but also the leap into electronic typesetting, r
         emaining essentially unchanged. It was popularised in the 1960s with the release of Let
         raset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
          software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
        <div className="info-skills">
        <div className="skill-text">
            My Professional Skills
            <img src={ProfilePic} alt="Logo" className="profile-image" />
            </div>
            <div className="skills-progress">
            ddf
            <ProgressBar  now={60} label={"60%"} />
            ddf
            <ProgressBar now={60} label={"60%"} />
            ddf
            <ProgressBar now={60} label={"60%"} />
            ddf
            <ProgressBar now={60} label={"60%"} />
            ddf
            <ProgressBar now={60} label={"60%"} />
            </div>
        </div>
    </div>
)

export default Info;