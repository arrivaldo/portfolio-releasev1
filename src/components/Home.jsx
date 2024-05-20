import React, { useEffect, useRef } from "react";
import "./Home.css";
import { wrap } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { IoIosContact } from "react-icons/io";
import Spotlight from "../Spotlight";
import Modal2 from "./Modal2";

const Home = () => {
  const spotlightRef = useRef(null);

  useEffect(() => {
    if (spotlightRef.current) {
      new Spotlight(spotlightRef.current);
    }
  }, []);

  return (
    <>
      <div
      //   style={{
      //     padding: "0% 6%",
      //     marginTop: "2%",
      //  }}
        className="padding-home flex w-full justify-between items-center mobile:flex-col "
      >
        <div
          style={{
     
          }}
          className="mainText flex flex-col justify-center "
        >
          <h3 className="text-xl" style={{ color: "#b7bfd0" }}>
            Hi there, this is Erick
          </h3>
          <h2
            className="text-4xl leading-relaxed"
            style={{ fontWeight: "600", marginTop: "2%" }}
          >
            I'm a <span style={{}}>Full-Stack Developer </span> and a&nbsp;
            <span className="" style={{}}>
              Quality Engineer
            </span>
          </h2>

          <p
            className="text-xl leading-relaxed"
            style={{
              opacity: "0.8",
              filter: "brightness(1.3)",
              color: "#8d93a0",
              marginTop: "2%",
            }}
          >
            Engineer based in México with experience in&nbsp;
            <span
              style={{
                color: "#ccedff",
                filter: "brightness(0.8) contrast(2)",
              }}
            >
              project development&nbsp;
            </span>
            and delivering&nbsp;
            <span
              style={{
                color: "#ccedff",
                filter: "brightness(0.8) contrast(2)",
              }}
            >
              quality products.&nbsp;
            </span>
          </p>
          
      <div
        ref={spotlightRef}
        style={{ display: "flex", gap: "2%", marginTop: '5%' }}
      >
        <div
          style={{ padding: "2px" }}
          // className="relative h-full bg-gray-800 rounded-xl before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-gray-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden"
        >
          <div className="relative h-full bg-gray-900  rounded-[inherit] z-0 overflow-hidden">
            <button
              style={{
                background: "rgb(11 13 57)",
                border: "1px solid #c1c1c194",
                borderRadius: "5px",
              }}
              type="button"
              className="text-md flex items-center gap-2 p-1 px-4 "
            >
              <FaLinkedinIn />
              LinkedIn
            </button>
          </div>
        </div>

        <div
          style={{ padding: "2px" }}
        >
          <div className="relative h-full bg-gray-900 rounded-[inherit] z-0 overflow-hidden">
            <button
              style={{
                background: "rgb(11 13 57)",
                border: "1px solid #c1c1c194",
                borderRadius: "5px",
              }}
              type="button"
              className="text-md flex items-center gap-2 p-1  px-4"
            >
              <FiGithub />
              Github
            </button>
          </div>
        </div>

        <div
          style={{ padding: "2px" }}
          // className="relative h-full bg-gray-800 rounded-xl before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-gray-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden"
        >
          <div className="relative h-full bg-gray-900 rounded-[inherit] z-0 overflow-hidden">
            <button
              style={{
                background: "rgb(11 13 57)",
                border: "1px solid #c1c1c194",
                borderRadius: "5px",
              }}
              type="button"
              className="text-md flex items-center gap-2 p-1  px-4"
            >
              <IoIosContact />
              Contact
            </button>
          </div>
        </div>
      </div>
        </div>
        {/* <img
          style={{ objectFit: "cover", width: "35%" }}
          src="/images/wolf.webp"
        ></img> */}
        {/* <video autoPlay loop style={{top: '0%', left: '0', padding: '0 27.5%', zIndex: '0', scale: '1.2'}} className="absolute" src="/astro1.mp4"></video> */}
        {/* <video src="/hologram2.mp4" 
          type="video/mp4"
          id="myVideo"
          autoPlay
          loop
          muted
          style={{scale: '1', width: '50%'}}
          className="relative"
        ></video> */}


<video src="/hologram21.mp4" 
          type="video/mp4"
          id="myVideo"
          autoPlay
          loop
          muted
          // style={{scale: '1', width: '39%'}}
          className="relative home-video"
        ></video>
   

{/* 
      <video src="/hologram22.webm" 
          type="video/mp4"
          id="myVideo"
          autoPlay
          loop
          muted
          style={{scale: '1', width: '39%'}}
          className="relative"
        ></video> */}
      </div>


      <div
        style={{
          width: "100%",
          // marginTop: "6%",
          
        }}
      >
        {/* <h6>Some information</h6> */}

        <div className="p-midHome">
          <h2
            className="text-xl"
            style={{ fontWeight: "600", marginBottom: "4%" }}
          >
            {/* We're a Design Studio based in Querétaro, México, offering
            full-stack development */}
            {/* I'm a mechatronic engineer based in Querétaro, México, offering full-stack development. */}
            I run a software engineering studio based in México, offering
            full-stack development.
          </h2>
          <div className="flex gap-24">
            {/* <img className="w-50 h-60" src="/images/erick3.png"></img> */}
            <div>
              <p
                className="text-xl leading-normal"
                style={{
                  filter: "brightness(1.3)",
                  color: "#8d93a0",
                }}
              >
                The world of development and software engineering is constantly
                <span style={{ color: "#e3e3e3" }}> evolving&nbsp;</span>
                and so has my
                <span style={{ color: "#e3e3e3" }}>
                  {" "}
                  role over the last 5 years&nbsp;
                </span>
                {/* <span style={{ color: "#e3e3e3" }}> 5 years&nbsp;</span> */}
                by collaborating in impactul projects across the globe.
                {/* Lorem at sum teiko rumba from sur not attem from my top structure main. */}
                {/* <span style={{ color: "#e3e3e3" }}> praesentium</span>, voluptatum
            rerum fuga minus
            <span style={{ color: "#e3e3e3" }}> perspiciatis pariatur </span>
            obcaecati, soluta temporibus molestiae ut  */}
                {/* quidem? Lorem ipsum dolor
            sit, amet consectetur adipisicing elit. Neque eaque atque laudantium
            ad sunt? Nihil quo nisi dolores autem, iusto tempora qui. */}
              </p>

              <br />

              <p
                className="text-xl leading-normal"
                style={{
                  // fontSize: "1.2rem",
                  filter: "brightness(1.3)",
                  color: "#8d93a0",
                  position: "relative",
                }}
              >
                {" "}
                {/* soluta accusamus, neque fugiat vel. Quae, nesciunt sunt? Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Voluptas cum
                ducimus eos repudiandae deserunt eaque sequi,fuga nulla */}
                {/* I have participated in impactul projects as a developér, QA and
                Business Architect by some the colloborating with clients, fellow
                engineers and business. */}
                During my career I've helped international clients fulfill their
                projects during the entire life cycle by collaborating as
                a&nbsp;
                <span style={{ color: "#e3e3e3" }}>web developer,&nbsp;</span>
                <span style={{ color: "#e3e3e3" }}>quality analyst&nbsp;</span>
                and&nbsp;
                {/* corporis optio, consectetur asperiores repellendus maxime quo, */}
                <span style={{ color: "#e3e3e3" }}>business architect</span>
                {/* from any form of arquitecture. */}
              </p>
            </div>
          </div>

          {/* <button style={{background: '#212149',fontSize: '1.2rem', color: '#fff', marginTop: '2%', fontWeight: '600', padding: '5px 25px'}}>Resume.pdf</button> */}
          {/* <EncriptButton /> */}
          {/* <EncriptButton /> */}
        </div>
      </div>
    </>
  );
};

export default Home;
