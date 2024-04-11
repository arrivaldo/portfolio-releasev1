import React from "react";
import "./About.css";
import Jobs from "./Jobs";
import Profile from "./Profile";
import Skills from "./Skills";
import Stack from "./Stack";
import Stats from "./CountUpStats";

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="top">
          <div className="top1">
            <Profile />

            {/* <h2 className="text-2xl mt-10">Lorem Ipsum et</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia doloremque ducimus itaque et harum, cupiditate saepe quo doloribus quia, tempore, repellat commodi consequatur amet quos autem ullam! Natus, perferendis numquam!</p> */}
            
          </div>
          <div className="top2">
                <Jobs />
          </div>
        </div>
        <div className="bottom">
          <div className="bottom1">
            {/* <Skills /> */}
            <Stack />
           
            {/* <img src={'/images/skills.png'}></img> */}


            </div>
          



          <div className="bottom2">
            {/* <Stats /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
