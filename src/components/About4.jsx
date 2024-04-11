import React, { useEffect, useRef } from "react";
import Spotlight from "../Spotlight";
import "./About4.css";
import Profile from "./Profile";
import Jobs from "./Jobs";
import Stack from "./Stack";
import CountUpStats from "./CountUpStats";

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
      <section style={{ padding: "0 8%", marginTop: "6%" }}>
        <div className="layer">
          <div className="upper1">
            <div ref={spotlightRef} className="upper-cont">
              <div className="" style={{ padding: "2px" }}>
                <div
                  style={{ }}
                  className="relative h-full bg-gray-900 rounded-[inherit]  overflow-hidden"
                >
                  <div className="upper11">
                    <Profile />
                  </div>
                </div>
              </div>

              <div className="" style={{ padding: "2px" }}>
                <div
                  style={{ }}
                  className="relative h-full bg-gray-900 rounded-[inherit]  overflow-hidden"
                >
                  <div className="upper21">
                    <Jobs />
                  </div>
                </div>
              </div>
            </div>
            <div ref={spotlightRef2} className="upper-cont2">
              <div className="" style={{ padding: "2px" }}>
                <div
                  style={{ }}
                  className="relative h-full bg-gray-900 rounded-[inherit]  overflow-hidden"
                >
                  <div className="upper12">
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
                  </div>
                </div>
              </div>

              <div className="" style={{ padding: "2px" }}>
                <div
                  style={{ }}
                  className="relative h-full bg-gray-900 rounded-[inherit]  overflow-hidden"
                >
                  <div className="upper22">
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
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div >
            <div ref={spotlightRef3} className="bottom1">
              <div className="" style={{ padding: "2px" }}>
                <div
                  style={{ }}
                  className="relative h-full bg-gray-900 rounded-[inherit]  overflow-hidden"
                >
                  <div className="low1">
                    <Stack />
                  </div>
                </div>
              </div>

              <div className="" style={{ padding: "2px" }}>
                <div
                  style={{  border: '1px solid #c1c1c159', borderRadius: '1rem' }}
                  className="flex justify-center items-center relative h-full bg-gray-900 rounded-[inherit]  overflow-hidden"
                >
                  <div className="low2">
                    <CountUpStats />
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
