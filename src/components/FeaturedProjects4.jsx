import React from "react";
import "./FeaturedProjects4.css";
import { IoIosLink } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const FeaturedProjects4 = () => {
  const portfolio = [
    {
      cover:
        "https://cdn.dribbble.com/userupload/11047215/file/original-0fcb53ef1a6000c5766118565fca7413.png?resize=752x",
      title: "A Clash of Kings",
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
      title: "Real Artist Website",
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
      title: "Conference App",
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

  const projects = portfolio.map((project, index) => {
    const isEven = index % 2 === 0;
    const projectClass = isEven ? "flex-row" : "flex-row-reverse";
    const titleClass = isEven ? "text-start" : "text-end";
    const itemsClass = isEven ? "justify-start" : "justify-end";
    const parrafClass = isEven ? "w-[110%]" : "w-[110%], ml-[-10%]";
    const hoverClass = isEven ? "left-0" : "right-0";

    return (
      <div key={index} className="projectMain-container">
        <div className={`relative project ${projectClass}`}>
          <div className="project-content">
            <div className={`project-label ${titleClass}`}>Game of Thrones</div>
            <h4 className={`project-title ${titleClass}`}>{project.title}</h4>
            <div className="group relative project-details">
              <p
                style={{
                  background: "rgb(8, 8, 47)",
                  filter: "brightness(1.3)",
                  color: "rgb(141, 147, 160)",
                  border: "1px solid #c1c1c194",
                }}
                className={` ${parrafClass}`}
              >
                {project.description}
              </p>
              <button
                style={{}}
                className={`absolute left-0 bottom-0 h-3 ${parrafClass} ${hoverClass} p-0 lineGrad hoverGrad`}
              ></button>
            </div>

            <ul
              style={{ fontSize: "15px", color: "#aaa", marginTop: "20px" }}
              className={`flex ${itemsClass}`}
            >
              {project.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="flex items-center gap-2"
                  style={{
                    marginRight: "10px",
                  }}
                >
                  {/* <div style={item.style}>{item.icon}</div> */}
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="project-img">
            <img src={project.cover} alt="" />
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div style={{ padding: "0 6%", marginTop: "6%" }}>
        <h1
          className="text-xl"
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

        <div className=" flex flex-col gap-8   items-start mt-3">
          {projects}
        </div>

        <div className="flex flex-col mt-12 justify-center items-center ">
          <h2 className="text-2xl mb-4">View all projects</h2>

          <svg
            width="50"
            height="50"
            viewBox="0 0 92 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.84766 3.3501L45.6742 46.1767L88.5008 3.3501"
              stroke="white"
              strokeWidth="5.71"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default FeaturedProjects4;