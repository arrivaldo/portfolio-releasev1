import React, { useEffect, useRef } from "react";
import Spotlight from "../Spotlight";
import { IoIosLink } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

// import portfolioData from "../data/portfolio.json";

import "./Projects.css";

const Proyects = () => {
  const spotlightRef = useRef(null);

  useEffect(() => {
    if (spotlightRef.current) {
      new Spotlight(spotlightRef.current);
    }
  }, []);

  const portfolio = [
    {
      cover: "/images/nedelka.png",
      title: "Real New York Artist Website",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elitianiti. Saepe deserunt ipsum rerum sit amet.",
      description2:
        "This is a real artist website made for showcasing Nedelka's musical and acting projects as she ventures into her artist projects and jobs all for in.",
      items: [
        {
          name: "React",
          icon: <FaReact />,
          style: { color: "#61DAFB" }, // Example style for React
        },
        {
          name: "JSX",
          icon: <FaReact />,
          style: { color: "#F7DF1E" }, // Example style for JSX
        },
        // Add more items as needed
      ],
    },
    {
      cover:
        "https://cdn.dribbble.com/userupload/11047215/file/original-0fcb53ef1a6000c5766118565fca7413.png?resize=752x",
      title: "Real New York Artist Website",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elitianiti. Saepe deserunt ipsum rerum sit amet.",
      description2:
        "This is a real artist website made for showcasing Nedelka's musical and acting projects as she ventures into her artist projects and jobs all for in.",
      items: [
        {
          name: "React",
          icon: <FaReact />,
          style: { color: "#61DAFB" }, // Example style for React
        },
        {
          name: "JSX",
          icon: <FaReact />,
          style: { color: "#F7DF1E" }, // Example style for JSX
        },
        // Add more items as needed
      ],
    },
    {
      cover: "/images/nedelka.png",
      title: "Real New York Artist Website",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elitianiti. Saepe deserunt ipsum rerum sit amet.",
      description2:
        "This is a real artist website made for showcasing Nedelka's musical and acting projects as she ventures into her artist projects and jobs all for in.",
      items: [
        {
          name: "React",
          icon: <FaReact />,
          style: { color: "#61DAFB" }, // Example style for React
        },
        {
          name: "JSX",
          icon: <FaReact />,
          style: { color: "#F7DF1E" }, // Example style for JSX
        },
        // Add more items as needed
      ],
    },
    {
      cover: "/images/astro-portfolio.png",
      title: "Real New York Artist Website",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elitianiti. Saepe deserunt ipsum rerum sit amet.",
      description2:
        "This is a real artist website made for showcasing Nedelka's musical and acting projects as she ventures into her artist projects and jobs all for in.",
      items: [
        {
          name: "React",
          icon: <FaReact />,
          style: { color: "#61DAFB" }, // Example style for React
        },
        {
          name: "JSX",
          icon: <FaReact />,
          style: { color: "#F7DF1E" }, // Example style for JSX
        },
        // Add more items as needed
      ],
    },

    {
      cover: "/images/nedelka.png",
      title: "Real New York Artist Website",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elitianiti. Saepe deserunt ipsum rerum sit amet.",
      description2:
        "This is a real artist website made for showcasing Nedelka's musical and acting projects as she ventures into her artist projects and jobs all for in.",
      items: [
        {
          name: "React",
          icon: <FaReact />,
          style: { color: "#61DAFB" }, // Example style for React
        },
        {
          name: "JSX",
          icon: <FaReact />,
          style: { color: "#F7DF1E" }, // Example style for JSX
        },
        // Add more items as needed
      ],
    },
    {
      cover:
        "https://cdn.dribbble.com/userupload/11047215/file/original-0fcb53ef1a6000c5766118565fca7413.png?resize=752x",
      title: "Real New York Artist Website",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elitianiti. Saepe deserunt ipsum rerum sit amet.",
      description2:
        "This is a real artist website made for showcasing Nedelka's musical and acting projects as she ventures into her artist projects and jobs all for in.",
      items: [
        {
          name: "React",
          icon: <FaReact />,
          style: { color: "#61DAFB" }, // Example style for React
        },
        {
          name: "JSX",
          icon: <FaReact />,
          style: { color: "#F7DF1E" }, // Example style for JSX
        },
        // Add more items as needed
      ],
    },
  ];

  const projects = portfolio.map((project, index) => (


    <div
    key={index}
    style={{     border: '1px solid #c1c1c194' }}
    className="relative h-full bg-gray-800 rounded-xl before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-gray-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden"
  >
    <div className="relative h-full bg-gray-900 p-3 rounded-[inherit] z-20 overflow-hidden">
      <div
        className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
        aria-hidden="true"
      >
        <div className="absolute inset-0 translate-z-0 bg-gray-800 rounded-full blur-[80px]"></div>
      </div>


    <div  className="project1">
      <div className="flex justify-between w-full">
        <div className="flex flex-col w-full flex-1 ">
          {/* <h2 className="text-xl mt-3 font-semibold mb-5">{project.title}</h2> */}

          {/* <ul
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "5%",
              gap: "2%",
            }}
            className="project-items text-md"
          >
            {project.items.map((item, itemIndex) => (
              <li
                key={itemIndex}
                className="flex items-center gap-2"
                style={{
                  marginRight: "10px",
                  border: "1px solid #c1c1c194",
                  borderRadius: "1rem",
                  padding: "1% 5%",
                }}
              >
                <div style={item.style}>{item.icon}</div>
                <span>{item.name}</span>
              </li>
            ))}
          </ul> */}
          <div className="flex  justify-center items-center w-full h-52 ">
            <img
              style={{}}
              className=" w-full h-full object-cover "
              src={project.cover}
            ></img>
          </div>
                    {/* <h2 className="text-lg mt-3 font-semibold mb-5">{project.title}</h2> */}


          {/* <ul
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "5%",
              gap: "2%",
            }}
            className="project-items text-md"
          >
            {project.items.map((item, itemIndex) => (
              <li
                key={itemIndex}
                className="flex items-center gap-2"
                style={{
                  marginRight: "10px",
                  border: "1px solid #c1c1c194",
                  borderRadius: "1rem",
                  padding: "1% 5%",
                }}
              >
                <div style={item.style}>{item.icon}</div>
                <span>{item.name}</span>
              </li>
            ))}
          </ul> */}

          {/* <div className="project-text">
            <p
                  className="text-md"
                  style={{
                    fontWeight: "400",
                    color: "#b7bfd0",
                  }}
                >
                  {project.description2}
                </p>
            <br />
            <p
              className="text-md"
              style={{
                // marginTop: "2%",
                fontWeight: "400",
                color: "#b7bfd0",
              }}
            >
              {project.description}
            </p>

            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                marginTop: "5%",
                flexDirection: "row",
                gap: "25px",
              }}
            >
              <button
                className="flex items-center gap-2 text-lg"
                onClick={() => {
                  setSelectedProject(port);
                  setIsModalOpen(true);
                }}
              >
                <IoIosLink />
                View
              </button>
              <button
                className="flex items-center gap-2 text-lg"
                onClick={() => {
                  setSelectedProject(port);
                  setIsModalOpen(true);
                }}
              >
                <FiGithub />
                Code
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
    </div>
    </div>

  ));

  return (
    <>
      <div style={{ padding: "0 8%", marginTop: "10%" }}>
        <h1
          className="text-2xl"
          style={{
            width: "100%",
            color: "#fff",
            marginBottom: "2%",
            display: "flex",
            justifyContent: "flex-start",
            fontWeight: "600",
          }}
        >
          Checkout some of my personal projects
        </h1>

        <div ref={spotlightRef} className=" main-project-container">
          {projects}
        </div>
      </div>
    </>
  );
};

export default Proyects;
