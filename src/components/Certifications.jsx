import React, { useEffect, useRef } from "react";
import "./Certifications.css";
import Spotlight from "../Spotlight";

const Certifications = () => {
  const spotlightRef = useRef(null);

  useEffect(() => {
    if (spotlightRef.current) {
      new Spotlight(spotlightRef.current);
    }
  }, []);

  return (
    <>
    

      <div style={{padding: '0 6%', marginTop: '10%'}} className=" mb-12">
        {/* <div className="gradient-line"></div>

        <div className="row g-4 mt-3">
          <div className="col-lg-4">
            <div className="gradient-border-card">
              <div className="shimmer"></div>
              <div className="glowing-wrapper glowing-wrapper-active mt-3">
                <div className="glowing-wrapper-animations">
                  <div className="glowing-wrapper-glow"></div>
                  <div className="glowing-wrapper-mask-wrapper">
                    <div className="glowing-wrapper-mask"></div>
                  </div>
                </div>
                <div className="glowing-wrapper-borders-masker">
                  <div className="glowing-wrapper-borders"></div>
                </div>
                <a href="#" className="glowing-wrapper-button w-inline-block">
                  <div className="text-white">Learn More</div>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="gradient-border-card">
              <button type="submit" className="mt-3">
                <span>
                  <span className="highlight-bg"></span>
                  <span className="button-text">Collaborate with a Team</span>
                </span>
              </button>
              <div className="shimmer"></div>
            </div>
          </div>
        
          
        </div> */}

        <h1 style={{marginBottom: '2%', fontWeight: '600'}} className="text-2xl">Certifications</h1>

        <div
          ref={spotlightRef}
          className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none group mt-3"
        >
          <div style={{    border: '1px solid #c1c1c194'}} className="relative h-full bg-gray-800 rounded-md before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-gray-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden">
            <div  className="relative h-full bg-gray-900 rounded-[inherit] z-20 overflow-hidden">
             
              <div  className="flex flex-col h-full items-center justify-center">
                <h2 className="text-xl text-white ">"System Architect"</h2>
                {/* <p className="text-lg text-gray-400 mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
                </p> */}
              </div>
            </div>
          </div>

          <div style={{    border: '1px solid #c1c1c194'}} className="relative h-full bg-gray-800 rounded-md  before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-gray-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden">
            <div className="relative h-full bg-gray-900 rounded-[inherit] z-20 overflow-hidden">
             
              <div className="flex flex-col h-full items-center justify-center">
                <h2 className="text-xl text-white ">"ISTQB Foundation"</h2>
                {/* <p className="text-xl text-gray-400 mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
                </p> */}
              </div>
            </div>
          </div>

          <div style={{    border: '1px solid #c1c1c194'}} className="relative h-full bg-gray-800 rounded-md before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-gray-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden">
            <div className="relative h-full bg-gray-900 rounded-[inherit] z-20 overflow-hidden p-3">
             
              <div className="flex flex-col h-full items-center justify-center">
                <h2 className="text-xl text-white ">"Business Architect"</h2>
                {/* <p className="text-xl text-gray-400 mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
                </p> */}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="gradient-background__wrapper">
          <div className="gradient-background">
            <div className="gradient-background__shape gradient-background__shape--1"></div>
            <div className="gradient-background__shape gradient-background__shape--2"></div>
          </div>
          <div className="gradient-background__noise"></div>
        </div> */}
      </div>
    </>
  );
};

export default Certifications;
