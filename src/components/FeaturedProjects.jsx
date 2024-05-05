// import React from "react";
// import portfolioData from "../data/portfolio.json";
// import "./FeaturedProjects.css";

// const FeaturedProjects = () => {
//   // Extract project items from portfolio data
//   const projects = portfolioData.portfolio.map((project, index) => (
//     <div
//       // className={`project-container ${
//       //   index % 2 === 0 ? "" : "project-container-reversed"
//       // }`}
//       key={index} 
//       className="project-container"
//     >
//       <div style={{ flex: '1.2', paddingTop: "2%", paddingLeft: "2%" }}>
//         <h2 style={{ fontWeight: "600", fontSize: "2rem" }}>{project.title}</h2>
//         <p
//           style={{
//             color: "#9ba4b4",
//             marginTop: "2%",
//             fontSize: "1.2rem",
//             filter: "brightness(1.3)",
//           }}
//         >
//           {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
//           omnis voluptas perspiciatis sit molestias suscipit perferendis maiores
//           excepturi, consequuntur placeat dolores amet eveniet enim delectus!
//           Deleniti dolorum labore et modi. */}
//           {project.description}
//         </p>
//         <p
//           style={{
//             color: "#9ba4b4",
//             marginTop: "2%",
//             fontSize: "1.2rem",
//             filter: "brightness(1.3)",
//           }}
//         >
//           {/* Lorem ipsum dolor sit amet consectetur,{" "}
//           <span className="stroke" style={{ color: "#e3e3e3" }}>
//             {" "}
//             praesentium
//           </span>
//           , . Voluptatum omnis voluptas perspiciatis sit molestias{" "}
//           <span style={{ color: "#e3e3e3" }}> praesentium</span>, perferendis
//           maiores excepturi, consequuntur eveniet enim delectus!{" "}
//           <span style={{ color: "#e3e3e3" }}> praesentium</span>, dolorum labore
//           et modi. */}
//           {project.description2}
//         </p>

//         <ul style={{display: 'flex',marginTop: '5%', gap: '2%', fontSize: '1.2rem'}} className="project-items">
//         {project.items.map((item, itemIndex) => (
//           <li key={itemIndex}>         <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">{item}</button>
//           </li>
//         ))}
//       </ul>

//         <div
//           style={{
//             width: "100%",
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             marginTop: "10%",
//             fontSize: "1.2rem",
//             flexDirection: "row-reverse",
//           }}
//         >
//           <svg
//             width="21"
//             height="23"
//             viewBox="0 0 21 23"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M8 18.9999C3 20.4999 3 16.4999 1 15.9999M15 21.9999V18.1299C15.0375 17.6531 14.9731 17.1737 14.811 16.7237C14.6489 16.2737 14.3929 15.8634 14.06 15.5199C17.2 15.1699 20.5 13.9799 20.5 8.51994C20.4997 7.12376 19.9627 5.78114 19 4.76994C19.4559 3.54844 19.4236 2.19829 18.91 0.999938C18.91 0.999938 17.73 0.649938 15 2.47994C12.708 1.85876 10.292 1.85876 8 2.47994C5.27 0.649938 4.09 0.999938 4.09 0.999938C3.57638 2.19829 3.54414 3.54844 4 4.76994C3.03013 5.78864 2.49252 7.1434 2.5 8.54994C2.5 13.9699 5.8 15.1599 8.94 15.5499C8.611 15.8899 8.35726 16.2953 8.19531 16.7399C8.03335 17.1844 7.96681 17.658 8 18.1299V21.9999"
//               stroke="white"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>

//           <button
//             className="viewbtn"
//             onClick={() => {
//               setSelectedProject(port);
//               setIsModalOpen(true);
//             }}
//             style={{ fontSize: "1.2rem" }}
//           >
//             View Project
//           </button>
//         </div>
//       </div>
//       <img style={{flex: '0.8'}} className="cover" src={project.cover}></img>
//       {/* </div> */}
//       {/* </div> */}
//     </div>
//   ));

//   return (
//     <>
//       <div style={{padding: '5% 10% '}}>
//           <div
//             style={{
//               display: "flex",
//               width: "100%",
//               gap: "30%",
//              // marginTop: "37%",
//             }}
//           >
            
//             <div
//             // style={{ marginLeft: "-6%" }}
//             >
//               <h2 style={{ fontWeight: "600" }}>Some of my Projects</h2>
//               {/* <p style={{ marginTop: "10%", fontSize: "1.2rem" }}>
//                 These are some examples of my projects
//               </p> */}
//             </div>
//           </div>
//           {/* Render the projects */}
//           {projects}

         
//       </div>
//     </>
//   );
// };

// export default FeaturedProjects;
import React from 'react'

const FeaturedProjects = () => {
  return (
    <div>FeaturedProjects</div>
  )
}

export default FeaturedProjects