// import React, { useEffect, useRef, useState } from "react";
// import "./InfiniteHor.css";

// const InfiniteHor = () => {
//   useEffect(() => {
//     const scrollers = document.querySelectorAll(".scroller");

//     // If a user hasn't opted in for reduced motion, then we add the animation
//     if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
//       addAnimation(scrollers);
//     }
//   }, []); // Empty dependency array to run the effect once when the component mounts

//   function addAnimation(scrollers) {
//     scrollers.forEach((scroller) => {
//       // add data-animated="true" to every `.scroller` on the page
//       scroller.setAttribute("data-animated", true);

//       // Make an array from the elements within `.scroller-inner`
//       const scrollerInner = scroller.querySelector(".scroller__inner");
//       const scrollerContent = Array.from(scrollerInner.children);

//       // For each item in the array, clone it
//       // add aria-hidden to it
//       // add it into the `.scroller-inner`
//       scrollerContent.forEach((item) => {
//         const duplicatedItem = item.cloneNode(true);
//         duplicatedItem.setAttribute("aria-hidden", true);
//         scrollerInner.appendChild(duplicatedItem);
//       });
//     });
//   }

//   return (
//     <>
//       <div style={{ padding: "0 10%" }}>
//         <h2
//           style={{ fontWeight: "600", marginTop: "5%", position: "relative" }}
//         >
//           Testimonials
//         </h2>

//         <div className="falseBody">
//           <div className="scroller" data-speed="fast">
//             <ul
//               className="tag-list scroller__inner"
//               style={{ fontSize: "1.3rem" }}
//             >
//               <li>
//               "I had the pleasure of working alongside with Erick in couple of projects. Their meticulous attention to detail, strong analytical skills, and dedication to ensuring product quality were evident in every project. Erick is a valuable asset to any team, and I highly recommend them for their expertise."
//                 <div
//                   style={{
//                     display: "flex",
//                     height: "40%",
//                     alignItems: "center",
//                     //marginTop: '3%',
//                     borderRadius: "99999px",
//                     overflow: "hidden",
//                   }}
//                 >
//                   <span className="imgTestSpan">
//                     <img src="/images/madhu.jpeg"></img>
//                   </span>
//                   <div
//                     style={{
//                       display: "flex",
//                       flexDirection: "column",
//                       marginLeft: "2%",
//                     }}
//                   >
//                     <p style={{ color: "#dedede", fontWeight: "500" }}>
//                       Madhu Chalamaiah
//                     </p>
//                     <p style={{ color: "#b1b9c8", fontSize: "1rem" }}>
//                         Lead System Architect
//                     </p>
//                   </div>
//                 </div>
//               </li>

//               <li>
//                "Erick helped in QA activities for an upgrade project of the Pega platform with smooth successful result. He took initiative to quickly learn the client application, create test cases and execute them."
//                 <div
//                   style={{
//                     display: "flex",
//                     height: "40%",
//                     alignItems: "center",
//                     //marginTop: '3%',
//                     borderRadius: "99999px",
//                     overflow: "hidden",
//                   }}
//                 >
//                   <span className="imgTestSpan">
//                     <img src="/images/SamG.jpg"></img>
//                   </span>
//                   <div
//                     style={{
//                       display: "flex",
//                       flexDirection: "column",
//                       marginLeft: "2%",
//                     }}
//                   >
//                     <p style={{ color: "#dedede", fontWeight: "500" }}>
//                       Sam Gharnagh
//                     </p>
//                     <p style={{ color: "#b1b9c8", fontSize: "1rem" }}>
//                       Vicepresident and Head of Sales at Rules Cube
//                     </p>
//                   </div>
//                 </div>
//               </li>
//               <li>
//                 "Erick has been doing a great job, he got direct exposure to the client and was able to interact with them. The client liked his work and was able to help them direectly whenever they need it, i.e providing functionality demos, creating data."
//                 <div
//                   style={{
//                     display: "flex",
//                     height: "40%",
//                     alignItems: "center",
//                     //marginTop: '3%',
//                     borderRadius: "99999px",
//                     overflow: "hidden",
//                   }}
//                 >
//                   <span className="imgTestSpan">
//                     <img src="/images/darwin.jpeg"></img>
//                   </span>
//                   <div
//                     style={{
//                       display: "flex",
//                       flexDirection: "column",
//                       marginLeft: "2%",
//                     }}
//                   >
//                     <p className="text-sm" style={{ color: "#dedede", fontWeight: "500" }}>
//                       Darwin Batres
//                     </p>
//                     <p style={{ color: "#b1b9c8", fontSize: "1rem" }}>
//                       Lead System Architect
//                     </p>
//                   </div>
//                 </div>
//               </li>

//               <li>
//                 "Durante su tiempo con nosotros, Erick demostró habilidades técnicas sólidas además de un compromiso importante con sus responsabilidades. Su enfoque meticuloso y su capacidad para abordar desafios complejos, fueron de gran valor para el equipo y contribuyeron significativamente al éxito de nuestros proyectos."
//                 <div
//                   style={{
//                     display: "flex",
//                     height: "40%",
//                     alignItems: "center",
//                     //marginTop: '3%',
//                     borderRadius: "99999px",
//                     overflow: "hidden",
//                   }}
//                 >
//                   <span className="imgTestSpan">
//                     <img src="/images/gabriel.jpeg"></img>
//                   </span>
//                   <div
//                     style={{
//                       display: "flex",
//                       flexDirection: "column",
//                       marginLeft: "2%",
//                     }}
//                   >
//                     <p style={{ color: "#dedede", fontWeight: "500" }}>
//                       Gabriel Franch.
//                     </p>
//                     <p style={{ color: "#b1b9c8", fontSize: "1rem" }}>
//                       Responsable Regional LATAM.
//                     </p>
//                   </div>
//                 </div>
//               </li>

//               <li>
//                 "Resend not only streamlines our emails to accommodate our
//                 expanding customer base, but their team also offered valuable
//                 hands-on support during the transition from our old API. Their
//                 product is visually stunning and seamlessly integrates with
//                 React Email."
//                 <div
//                   style={{
//                     display: "flex",
//                     height: "40%",
//                     alignItems: "center",
//                     //marginTop: '3%',
//                     borderRadius: "99999px",
//                     overflow: "hidden",
//                   }}
//                 >
//                   <span className="imgTestSpan">
//                     <img src="/images/erick3.png"></img>
//                   </span>
//                   <div
//                     style={{
//                       display: "flex",
//                       flexDirection: "column",
//                       marginLeft: "2%",
//                     }}
//                   >
//                     <p style={{ color: "#dedede", fontWeight: "500" }}>
//                       Sam Gharnagh
//                     </p>
//                     <p style={{ color: "#b1b9c8", fontSize: "1rem" }}>
//                       Vicepresident and Head of Sales & Operations at Rules Cube
//                     </p>
//                   </div>
//                 </div>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default InfiniteHor;

import React from 'react'

const InfiniteHor = () => {
  return (
    <div>InfiniteHor</div>
  )
}

export default InfiniteHor