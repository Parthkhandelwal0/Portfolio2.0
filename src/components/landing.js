import React from "react";
import Typical from "react-typical"
// import {ProgressBar} from "react-bootstrap"
import ProfilePic from "../images/profile_pic.jpeg"

const Landing = ()=>(
    <div className="landing">
        <div className="landing-head">
          Parth Khandelwal
        </div>
        <Typical className="landing-subhead"
            loop={Infinity}
            steps={[
                'Web Developer',
                1000,
                'Student',
                2000,
                'Gamer',
                2000
            ]}
            />
            <img src={ProfilePic} alt="Logo" className="profile-image" />
        
        </div>
    
)

export default Landing;