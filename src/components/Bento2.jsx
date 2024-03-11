import React, { useEffect, useRef } from "react";
import Spotlight from "../Spotlight";
import "./Bento2.css";

const Bento2 = () => {
  const spotlightRef = useRef(null);

  useEffect(() => {
    if (spotlightRef.current) {
      new Spotlight(spotlightRef.current);
    }
  }, []);

  return (
    <>
      <div style={{ display: "flex", marginTop: '5%' }}>
        <div ref={spotlightRef} className="bento-container">
          {/* <div classNameName="relative bottom-auto left-auto right-auto top-0 h-[500px] w-[500px] -translate-x-[-100%] translate-y-[20%] rounded-full bg-[#bd77ec] blur-[50px] -z-10"></div> */}


          

          <div className="relative h-full bg-gray-800 rounded-xl p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-gray-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden">
            <div className="relative h-full bg-gray-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
          <div className="first">
            <div className="flex justify-between   ">
              <h2
                style={{
                  marginTop: "5%",
                  fontWeight: "600",
                  fontSize: "1.4rem",
                  marginBottom: "7%",
                }}
              >
                Full-Stack Developer
              </h2>
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
            <div className="card-text">
              <p
                className=""
                style={{
                  marginTop: "2%",
                  fontWeight: "400",
                  fontSize: "1.2rem",
                  color: "#b7bfd0",
                }}
              >
                3 years of experience participating in impactul web application
                projects as a frontend developer, while venturing into the
                backend realm to ensrue end-to-end solutions.
              </p>
            </div>
          </div>
          </div>
          </div>

          <div className="relative h-full bg-gray-800 rounded-xl p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-gray-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden">
            <div className="relative h-full bg-gray-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
          <div className="second">
            
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="flex items-start pb-10 gap-4">
                {/* <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src="/images/erick3.png"
                alt="Erick image"
              /> */}
                <div className="relative">
                  <img
                    className="w-10 h-10 rounded-full"
                    src="/images/erick3.png"
                    alt=""
                  />
                  <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                </div>
                <div className="flex flex-col">
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    Erick Rodríguez Bárcena
                  </h5>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Open to Work Open to Work
                  </span>
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>




          <div className="relative h-full bg-gray-800 rounded-xl p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-gray-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden">
            <div className="relative h-full bg-gray-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
          <div className="third">
            <div className="flex justify-between   ">
              <h2
                style={{
                  marginTop: "5%",
                  fontWeight: "600",
                  fontSize: "1.4rem",
                  marginBottom: "7%",
                }}
              >
                Business Architect
              </h2>
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
              </svg>{" "}
            </div>
            <p
              style={{
                marginTop: "2%",
                fontWeight: "400",
                fontSize: "1.2rem",
                color: "#b7bfd0",
              }}
            >
              
              5 years of experience participating in impactul web application
                projects as a frontend developer, while venturing into the
                backend realm to ensrue end-to-end solutions.
            </p>
          </div>
          </div>
          </div>


          <div className="relative h-full bg-gray-800 rounded-xl p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-gray-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden">
            <div className="relative h-full bg-gray-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
          <div className="fourth">
            <div className="flex justify-between">
              <h2
                style={{
                  marginTop: "5%",
                  fontWeight: "600",
                  fontSize: "1.4rem",
                  marginBottom: "7%",
                }}
              >
                QA Analyst
              </h2>
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
            <p
              style={{
                marginTop: "2%",
                fontWeight: "400",
                fontSize: "1.2rem",
                color: "#b7bfd0",
              }}
            >
              
              5 years of experience participating in impactul web application
                projects as a frontend developer, while venturing into the
                backend realm to ensrue end-to-end solutions.
            </p>
          </div>
          </div>
          </div>

          
          
          <div className="relative h-full bg-gray-800 rounded-xl p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-gray-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden">
            <div className="relative h-full bg-gray-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
            <div className="fifth">
            <div className="fifthB">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                  justifyContent: "center",
                }}
                className=""
              >
                {/* <img className="h-8 w-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Jese image" /> */}

                <div className="leading-1.5 flex w-full  flex-col">
                  <div className="flex items-center justify-between  rounded-xl p-4">
                    <div className="me-2">
                      <span className="flex items-center gap-2 text-lg font-medium text-gray-900 dark:text-white pb-2">
                        <svg
                          fill="none"
                          aria-hidden="true"
                          className="w-5 h-5 flex-shrink-0"
                          viewBox="0 0 20 21"
                        >
                          <g clipPath="url(#clip0_3173_1381)">
                            <path
                              fill="#E2E5E7"
                              d="M5.024.5c-.688 0-1.25.563-1.25 1.25v17.5c0 .688.562 1.25 1.25 1.25h12.5c.687 0 1.25-.563 1.25-1.25V5.5l-5-5h-8.75z"
                            />
                            <path
                              fill="#B0B7BD"
                              d="M15.024 5.5h3.75l-5-5v3.75c0 .688.562 1.25 1.25 1.25z"
                            />
                            <path
                              fill="#CAD1D8"
                              d="M18.774 9.25l-3.75-3.75h3.75v3.75z"
                            />
                            <path
                              fill="#F15642"
                              d="M16.274 16.75a.627.627 0 01-.625.625H1.899a.627.627 0 01-.625-.625V10.5c0-.344.281-.625.625-.625h13.75c.344 0 .625.281.625.625v6.25z"
                            />
                            <path
                              fill="#fff"
                              d="M3.998 12.342c0-.165.13-.345.34-.345h1.154c.65 0 1.235.435 1.235 1.269 0 .79-.585 1.23-1.235 1.23h-.834v.66c0 .22-.14.344-.32.344a.337.337 0 01-.34-.344v-2.814zm.66.284v1.245h.834c.335 0 .6-.295.6-.605 0-.35-.265-.64-.6-.64h-.834zM7.706 15.5c-.165 0-.345-.09-.345-.31v-2.838c0-.18.18-.31.345-.31H8.85c2.284 0 2.234 3.458.045 3.458h-1.19zm.315-2.848v2.239h.83c1.349 0 1.409-2.24 0-2.24h-.83zM11.894 13.486h1.274c.18 0 .36.18.36.355 0 .165-.18.3-.36.3h-1.274v1.049c0 .175-.124.31-.3.31-.22 0-.354-.135-.354-.31v-2.839c0-.18.135-.31.355-.31h1.754c.22 0 .35.13.35.31 0 .16-.13.34-.35.34h-1.455v.795z"
                            />
                            <path
                              fill="#CAD1D8"
                              d="M15.649 17.375H3.774V18h11.875a.627.627 0 00.625-.625v-.625a.627.627 0 01-.625.625z"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_3173_1381">
                              <path
                                fill="#fff"
                                d="M0 0h20v20H0z"
                                transform="translate(0 .5)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        Download Erick Resume
                      </span>
                      <span className="flex text-md  font-normal text-gray-500 dark:text-gray-400 gap-2">
                        2 Pages
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          className="self-center"
                          width="3"
                          height="4"
                          viewBox="0 0 3 4"
                          fill="none"
                        >
                          <circle cx="1.5" cy="2" r="1.5" fill="#6B7280" />
                        </svg>
                        1.2 MB
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          className="self-center"
                          width="3"
                          height="4"
                          viewBox="0 0 3 4"
                          fill="none"
                        >
                          <circle cx="1.5" cy="2" r="1.5" fill="#6B7280" />
                        </svg>
                        PDF
                      </span>
                    </div>
                    <div className="inline-flex self-center items-center">
                      <a
                        href="/e_resume.pdf"
                        download
                        className="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                        type="button"
                      >
                        <svg
                          className="w-4 h-4 text-gray-900 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                          <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="fifthA">
              <h2 className="text-xl flex justify-center">
                Some awesome clients 
              </h2>
              <div className="flex flex-col gap-4 items-center justify-center h-full">
                <div className="flex gap-4">
                  <div className="text-xl">Claro 360</div>
                  <div className="text-xl">FEMSA</div>
                  <div className="text-xl">MIRA</div>
                </div>
                <div className="flex gap-4">
                <div className="text-xl">Munich RE</div>
                  <div className="text-xl">Popular Bank</div>
                  {/* <div className="text-xl">MIRA</div> */}
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>

 
          <div className="relative h-full bg-gray-800 rounded-xl p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-gray-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden">
            <div className="relative h-full bg-gray-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
          <div className="sixth">
            <div className="flex justify-between">
              <h2
                style={{
                  marginTop: "5%",
                  fontWeight: "600",
                  fontSize: "1.4rem",
                  marginBottom: "7%",
                }}
              >
                Mechatronic Engineer
              </h2>
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
            <p
              style={{
                marginTop: "2%",
                fontWeight: "400",
                fontSize: "1.2rem",
                color: "#b7bfd0",
              }}
            >
              
              5 years of experience participating in impactul web application
                projects as a frontend developer, while venturing into the
                backend realm to ensrue end-to-end solutions.
            </p>
          </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bento2;
