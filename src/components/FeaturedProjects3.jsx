import React from "react";
import { IoIosLink } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const FeaturedProjects3 = () => {
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
      ];
  const projects = portfolio.map((project, index) => {
    const isEven = index % 2 === 0;
    const projectClass = isEven ? "flex-row" : "flex-row-reverse";
    const titleClass = isEven ? "text-start" : "text-end";
    const itemsClass = isEven ? "justify-start" : "justify-end";
    const parrafClass = isEven ? "w-[110%]" : "w-[110%], ml-[-10%]";



    return (
      <div style={{}} key={index} className={`p-2 ${projectClass}`}>
        <div
          style={
            {
              //   padding: "1rem"
            }
          }text-xl mt-3 font-semibold mb-5
        >
          <div id="project" className={`flex w-full items-center  ${projectClass}`}>
            <div className="flex flex-col w-full">
              <h1 className={`${titleClass}`} style={{ color: "rgb(132 205 235" }}>Featured Project</h1>
              <h2 style={{marginTop: '2%', marginBottom: '3%'}} className={`font-bold text-xl ${titleClass}`}>{project.title}</h2>

              <div className="project-text">
                <p
                  className={`${parrafClass}`}
                  style={{
                    fontWeight: "400",
                    color: "#b7bfd0",
                    // background: "#000",
                    padding: "5%",
                    // background: 'rgb(0 17 81)',      
                    background: 'rgb(8, 8, 47)', 
                    border: '1px solid #c1c1c194' ,
                    position: 'relative',
                    zIndex: '100'  
                  }}
                >
                  {project.description2}
                </p>
                <br />

                <ul
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "5%",
                    gap: "2%",
                  }}
                  className={`project-items text-md ${itemsClass}`}
                >
                  {project.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-center gap-2"
                      style={{
                        marginRight: "10px",
                      }}
                    >
                      <div style={item.style}>{item.icon}</div>
                      <span>{item.name}</span>
                    </li>
                  ))}
                </ul>

                <div
                className={`${itemsClass}`}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    marginTop: "3%",
                    flexDirection: "row",
                    gap: "25px",
                    // justifyContent: 'flex-end'
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
                    View Project
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
              </div>
            </div>
            <div
              style={{ width: "100%", height: "250px" }}
              className="flex  justify-center items-center "
            >
              <img
                style={{}}
                className=" w-full h-full object-cover overflow-hidden "
                src={project.cover}
                alt={`Cover for ${project.title}`}
              ></img>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div style={{ padding: "0 8%", marginTop: "6%" }}>
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

        <div className=" flex flex-col gap-8   items-start  group mt-3">
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

export default FeaturedProjects3;
