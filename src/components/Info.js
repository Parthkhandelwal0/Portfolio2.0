import React from "react";

import Progress from "./progressBar"

const Info = ()=>(
    <div className="info">
       
        <div className="info-det">
        Hola! I'm Parth Khandelwal and I'm a full-stack web developer currently living in Dwarka, New Delhi. 
        I try to make responsive and dynamic websites using html,css,javascript and python
        EDUCATION
        Currently pursuing Btech in Information Technology from University School Of Information 
        Communication And Technology (USICT), Dwarka, GGSIPU, New Delhi
        Graduated from Mount Carmel School, Dwarka in 2018
        HOBBIES
        I like to read, play games, listen to music and watch a lot of football
        Want to know more? View 
        </div>
        <div className="info-skills">
        <div className="skill-text">
            My Professional Skills
            </div>
            <div className="skills-progress">
             Javascript
             <Progress done="70"/>
            Python
            <Progress done="70"/>
            C++
            <Progress done="70"/>
            React
            <Progress done="70"/>
            HTML/CSS
            <Progress done="70"/>
            </div>
        </div>
     </div>
)

export default Info;