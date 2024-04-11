import React, { useEffect, useRef } from "react";
import "./Services.css";
import Modal from "./Modal";
import Modal2 from "./Modal2";
import Spotlight from "../Spotlight";

const Services = () => {
  const spotlightRef = useRef(null);

  useEffect(() => {
    if (spotlightRef.current) {
      new Spotlight(spotlightRef.current);
    }
  }, []);

  return (
    <>
      <section id="services" style={{ padding: "0 8%", marginBottom: "6%", marginTop: '6%' }}>
        <h1
          className="text-xl"
          style={{
            width: "100%",
            color: "#e3e3e3",
            marginBottom: "2%",
            display: "flex",
            justifyContent: "flex-start",
            fontWeight: "600",
          }}
        >
          {" "}
          Checkout my Services
        </h1>

        <div ref={spotlightRef} className="services-container">
          {/* <div
            style={{ padding: "2px" }}
            className="relative h-full bg-gray-800 rounded-xl before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-gray-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden"
          >
            <div className="relative h-full bg-gray-900 p-6 pb-8 rounded-[inherit] z-0 overflow-hidden">
              <div
                className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                aria-hidden="true"
              >
                <div className="absolute inset-0 translate-z-0 bg-gray-800 rounded-full blur-[80px]"></div>
              </div> */}
          <div
            style={{ padding: "2px" }}
          >
            <div
              style={{ background: "rgb(8 8 47)" }}
              className="relative h-full bg-gray-900 rounded-[inherit]  overflow-hidden"
            >
              <div className="service-box4 flex flex-col justify-between h-24">
                <div className="flex items-center  justify-between">
                  <h3 className="text-xl">Full Stack Dev</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-terminal"
                  >
                    <polyline points="4 17 10 11 4 5"></polyline>
                    <line x1="12" y1="19" x2="20" y2="19"></line>
                  </svg>
                </div>

                {/* <h4 className="text-lg cursor-pointer text-[#84cdeb] ">Read More</h4>  */}
                <Modal
                  title="Full Stack Dev"
                  timeline={[
                    {
                      date: "February 2022",
                      title: "System Architect",
                      description:
                        "",
                    },
                    {
                      date: "March 2022",
                      title: "Marketing UI design in Figma",
                      description:
                        "",
                    },
                    {
                      date: "March 2022",
                      title: "Marketing UI design in Figma",
                      description:
                        "All of the pages and components are first designed in Figma.",
                    },
                    {
                      date: "March 2022",
                      title: "Marketing UI design in Figma",
                      description:
                        "All of the pages and components are first designed in Figma.",
                    },
                    {
                      date: "March 2022",
                      title: "Marketing UI design in Figma",
                      description:
                        "All of the pages and components are first designed in Figma.",
                    },
                  ]}
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-terminal"
                    >
                      <polyline points="4 17 10 11 4 5"></polyline>
                      <line x1="12" y1="19" x2="20" y2="19"></line>
                    </svg>
                  }
                />
              </div>
            </div>
          </div>

          <div
            style={{ padding: "2px" }}
          >
            <div
              style={{ background: "rgb(8 8 47)" }}
              className="relative h-full bg-gray-900 rounded-[inherit]  overflow-hidden"
            >
              <div className="service-box4 flex flex-col justify-between h-24">
                <div className="flex items-center  justify-between">
                  <h3 className="text-xl">QA Analyst</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-code"
                  >
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>

                {/* <h4 className="text-lg cursor-pointer text-[#84cdeb] ">Read More</h4>  */}
                <Modal
                  title="QA Analyst"
                  timeline={[
                    {
                      date: "February 2022",
                      title: "Application UI code in Tailwind CSS",
                      description:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    },
                    {
                      date: "March 2022",
                      title: "Marketing UI design in Figma",
                      description:
                        "All of the pages and components are first designed in Figma.",
                    },
                    {
                      date: "March 2022",
                      title: "Marketing UI design in Figma",
                      description:
                        "All of the pages and components are first designed in Figma.",
                    },
                    {
                      date: "March 2022",
                      title: "Marketing UI design in Figma",
                      description:
                        "All of the pages and components are first designed in Figma.",
                    },
                    {
                      date: "March 2022",
                      title: "Marketing UI design in Figma",
                      description:
                        "All of the pages and components are first designed in Figma.",
                    },
                  ]}
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-code"
                    >
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                  }
                />
              </div>
            </div>
          </div>

          <div
            style={{ padding: "2px" }}
          >
            <div
              style={{ background: "rgb(8 8 47)" }}
              className="relative h-full bg-gray-900 rounded-[inherit]  overflow-hidden"
            >
              <div className="service-box4 flex flex-col justify-between h-24">
                <div className="flex items-center  justify-between">
                  <h3 className="text-xl">B. Architect</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-settings"
                  >
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                  </svg>
                </div>

                {/* <h4 className="text-lg cursor-pointer text-[#84cdeb] ">Read More</h4>  */}
                <Modal
                  title="Business Architect"
                  timeline={[
                    {
                      date: "February 2022",
                      title: "Application UI code in Tailwind CSS",
                      description:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    },
                    {
                      date: "March 2022",
                      title: "Marketing UI design in Figma",
                      description:
                        "All of the pages and components are first designed in Figma.",
                    },
                    {
                      date: "March 2022",
                      title: "Marketing UI design in Figma",
                      description:
                        "All of the pages and components are first designed in Figma.",
                    },
                    {
                      date: "March 2022",
                      title: "Marketing UI design in Figma",
                      description:
                        "All of the pages and components are first designed in Figma.",
                    },
                    {
                      date: "March 2022",
                      title: "Marketing UI design in Figma",
                      description:
                        "All of the pages and components are first designed in Figma.",
                    },
                  ]}
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-settings"
                    >
                      <circle cx="12" cy="12" r="3"></circle>
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                    </svg>
                  }
                />
              </div>
            </div>
          </div>

          <div
            style={{ padding: "2px" }}
          >
            <div
              style={{ background: "rgb(8 8 47)" }}
              className="relative h-full bg-gray-900 rounded-[inherit]  overflow-hidden"
            >
              <div className="service-box4 flex flex-col justify-between h-24">
                <div className="flex items-center  justify-between">
                  <h3 className="text-xl">M. Engineer</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-cloud"
                  >
                    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
                  </svg>
                </div>

                {/* <h4 className="text-lg cursor-pointer text-[#84cdeb] ">Read More</h4>  */}
                <Modal
                  title="Mechatronic Engineer"
                  timeline={[
                    {
                      date: "February 2022",
                      title: "Application UI code in Tailwind CSS",
                      description:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    },
                    {
                      date: "March 2022",
                      title: "Marketing UI design in Figma",
                      description:
                        "All of the pages and components are first designed in Figma.",
                    },
                    {
                      date: "March 2022",
                      title: "Marketing UI design in Figma",
                      description:
                        "All of the pages and components are first designed in Figma.",
                    },
                    {
                      date: "March 2022",
                      title: "Marketing UI design in Figma",
                      description:
                        "All of the pages and components are first designed in Figma.",
                    },
                    {
                      date: "March 2022",
                      title: "Marketing UI design in Figma",
                      description:
                        "All of the pages and components are first designed in Figma.",
                    },
                  ]}
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-cloud"
                    >
                      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
                    </svg>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
