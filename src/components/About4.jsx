import React, { useEffect, useRef } from "react";
import Spotlight from "../Spotlight";
import "./About4.css";
import Profile from "./Profile";
import Jobs from "./Jobs";
import Stack from "./Stack";
import CountUpStats from "./CountUpStats";
import Tabs from "./Tabs";


const About4 = () => {
  const spotlightRef = useRef(null);

  useEffect(() => {
    if (spotlightRef.current) {
      new Spotlight(spotlightRef.current);
    }
  }, []);

  const spotlightRef2 = useRef(null);

  useEffect(() => {
    if (spotlightRef2.current) {
      new Spotlight(spotlightRef2.current);
    }
  }, []);

  const spotlightRef3 = useRef(null);

  useEffect(() => {
    if (spotlightRef3.current) {
      new Spotlight(spotlightRef3.current);
    }
  }, []);

  return (
    <>
      <section style={{ padding: "0 6%", marginTop: "6%" }}>
        <div className="layer">
          <div className="upper1">
            <div
              // ref={spotlightRef}
              className="upper-cont"
            >
              <div className="" style={{ padding: "2px" }}>
                <div
                  style={{}}
                  className="relative bgColor h-full rounded-[inherit]  overflow-visible"
                >
                  <div className="group upper11">
                    <Profile />
                    <button style={{bottom: '-10px', height: '12px'}} className="absolute left-0  w-full p-0 linearGrad   hoverGrad"></button>

                  </div>
                  
                </div>
              </div>

              <div className="" style={{ padding: "2px" }}>
                <div
                  style={{}}
                  className="relative bgColor h-full rounded-[inherit]  overflow-visible"
                >
                  <div className="group upper21">
                    <Jobs />
                    <button style={{bottom: '-10px', height: '12px'}} className="absolute left-0  w-full p-0 linearGrad   hoverGrad"></button>

                  </div>
                </div>
              </div>
            </div>
            <div
              // ref={spotlightRef2}
              className="upper-cont2"
            >
              <div className="" style={{ padding: "2px" }}>
                <div
                  style={{}}
                  className="relative h-full  bgColor  rounded-[inherit]  overflow-visible"
                >
                  <div className="group upper12">
                    <div className="flex flex-col">
                      <h3 className="text-lg">April 5, 2024</h3>
                      <h2 className="text-xl font-bold py-2">
                        Crafting a design system for a multiplanetary
                      </h2>
                      <ul className="text-lg flex gap-4 pb-2 ">
                        <li>#Arquitecture</li>
                        <li>#Engineering</li>
                      </ul>
                      <p className="text-lg pb-2">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Iure eligendi fugiat vitae expedita deserunt
                        aliquam recusandae.
                      </p>
                      <a className="text-lg text-[#84cdeb]">Read article -</a>
                    </div>

                    <button style={{bottom: '-10px', height: '12px'}} className="absolute left-0  w-full p-0 linearGrad   hoverGrad"></button>

                  </div>
                </div>
              </div>

              <div className="" style={{ padding: "2px" }}>
                <div
                  style={{}}
                  className="relative h-full  bgColor rounded-[inherit]  overflow-vsible"
                >
                  <div className="group upper22">
                    <div className="flex flex-col">
                      <h3 className="text-lg">April 5, 2024</h3>
                      <h2 className="text-xl font-bold py-2">
                        Crafting a design system for a multiplanetary
                      </h2>
                      <ul className="text-lg flex gap-4 pb-2 ">
                        <li>#Arquitecture</li>
                        <li>#Engineering</li>
                      </ul>
                      <p className="text-lg pb-2">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Iure eligendi fugiat vitae expedita deserunt
                        aliquam recusandae.
                      </p>
                      <a className="text-lg text-[#84cdeb]">Read article -</a>
                    </div>
                    <button style={{bottom: '-10px', height: '12px'}} className="absolute left-0  w-full p-0 linearGrad   hoverGrad"></button>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div
              // ref={spotlightRef3}
              className="bottom1"
            >
              <div className="" style={{ padding: "2px" }}>
                <div
                  style={{}}
                  className="relative h-full  bgColor rounded-[inherit]  overflow-visible"
                >
                  <div className="group low1">
                    {/* <Stack /> */}
                    <Tabs />
                  </div>
                </div>
              </div>

              <div className="" style={{ padding: "2px" }}>
                <div
                  style={{
                    border: "1px solid #c1c1c159",
                    borderRadius: "1rem",
                  }}
                  className="flex justify-center items-center relative h-full  bgColor rounded-[inherit]  overflow-visible"
                >
                  <div className="group low2">
                    <CountUpStats />
                    <button style={{bottom: '-10px', height: '12px'}} className="absolute left-0  w-full p-0 linearGrad   hoverGrad"></button>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About4;
