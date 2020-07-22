import React from "react";

import ProgressBar from 'react-animated-progress-bar';


const Info = ()=>(
    <div className="info">
       <div className="info-head">
       &lt; INFO /&gt;
       </div>
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
            &lt; My Professional Skills /&gt;
            </div>
            <div className="skills-progress">
            <div className="skills">
             Javascript
         <ProgressBar width="450px"
          height="10px"
          fontColor="white"
          trackWidth="30"
          percentage="40"
          trackPathColor="white"
          trackBorderColor="black"
          hollowBackgroundColor="#0a0003"
          />
          </div>
          <div className="skills">
            Python
            <ProgressBar width="450px"
          height="10px"
          fontColor="white"
          trackWidth="30"
          percentage="40"
          trackPathColor="white"
          trackBorderColor="black"
          hollowBackgroundColor="#0a0003"
          />
          </div>
          <div className="skills">
            C++
            <ProgressBar width="450px"
          height="10px"
          fontColor="white"
          trackWidth="30"
          percentage="40"
          trackPathColor="white"
          trackBorderColor="black"
          hollowBackgroundColor="#0a0003"
          />
          </div>
          <div className="skills">
            React
            <ProgressBar width="450px"
          height="10px"
          fontColor="white"
          trackWidth="30"
          percentage="40"
          trackPathColor="white"
          trackBorderColor="black"
          hollowBackgroundColor="#0a0003"
          />
          </div>
          <div className="skills">
            HTML/CSS
            <ProgressBar width="450px"
          height="10px"
          fontColor="white"
          trackWidth="30"
          percentage="40"
          trackPathColor="white"
          trackBorderColor="black"
          hollowBackgroundColor="#0a0003"
          />
          </div>
            </div>
        </div>
     </div>
)

export default Info;