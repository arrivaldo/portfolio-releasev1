import React from "react";
import "./Home.css";
import { wrap } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { IoIosContact } from "react-icons/io";

const Home = () => {
  return (
    <>
    
      <div
        style={{
          padding: "0% 10%",
          display: "flex",
          width: "100%",
          paddingBottom: "0",
          justifyContent: "space-between",
          marginTop: '3%'
          // flexWrap: wrap
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "55%",
            // marginLeft: "32.5%",
            justifyContent: "center",
          }}
        >
          <h3 className="text-2xl" style={{ color: "#b7bfd0",  }}>
            Hi there, this is Erick
          </h3>
          <h2  className= 'text-5xl leading-relaxed  ' style={{  fontWeight: "600", marginTop: "2%" }}>
            I'm a <span style={{}}>Full-Stack Developer </span> and a{" "}
            <span style={{}}>Quality Engineer</span>
          </h2>

          <p
          className="text-2xl leading-loose"
            style={{
              //marginTop: "10px",
              //fontSize: '1.2rem',
              opacity: "0.8",
              filter: "brightness(1.3)",
              color: "#8d93a0",
              marginTop: "3%",
            }}
          >
            Engineer based in México with experience in  projects as a 
            <span
              style={{
                color: "#ccedff",
                filter: "brightness(0.8) contrast(2)",
              }}
            >
                           web developer and quality assurance.{" "}

              {" "}
            </span>
          </p>
        </div>
        <img style={{}} src="/images/wolf.webp"></img>
      </div>

<div style={{ marginTop: '-1%',          padding: "0 10%", display: 'flex'
}}>
      <button type="button" className="flex items-center gap-2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"><FaLinkedinIn />LinkedIn</button>
      <button type="button" className="flex items-center gap-2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"><FiGithub />Github</button>
      <button type="button" className="flex items-center gap-2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"><IoIosContact />Contact</button>
</div>





     
          <div
            style={{
              width: "100%",
             // marginTop: "6%",
             padding: '6% 10%'
            }}
          >
            {/* <h6>Some information</h6> */}

            <div>
              <h2 className="text-2xl" style={{ fontWeight: "600", marginBottom: "4%" }}>
                We're a Design Studio based in Querétaro, México, offering
                full-stack development
              </h2>
              <p className="text-2xl leading-normal"
                style={{
                 // fontSize: "1.2rem",
                  filter: "brightness(1.3)",
                  color: "#8d93a0",
                }}
              >
                The world of digital design and
development is constantly evolving and so
has my role over the last 7 years.
                <span style={{ color: "#e3e3e3" }}> praesentium</span>,
                voluptatum rerum fuga minus{" "}
                <span style={{ color: "#e3e3e3" }}>
                  {" "}
                  perspiciatis pariatur{" "}
                </span>
                obcaecati, soluta temporibus molestiae ut quidem? Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Neque eaque atque
                laudantium ad sunt? Nihil quo nisi dolores autem, iusto tempora
                qui.{" "}
              </p>

              <br />

              {/* <p
              className="text-2xl leading-normal"
                style={{
                  // fontSize: "1.2rem",
                  filter: "brightness(1.3)",
                  color: "#8d93a0",
                  position: "relative",
                  zIndex: "10000000000000000000000",
                }}
              >
                {" "}
                soluta accusamus, neque fugiat vel. Quae, nesciunt sunt? Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Voluptas cum
                ducimus eos repudiandae deserunt eaque sequi,fuga nulla
                corporis optio, consectetur asperiores repellendus maxime quo,
                ipsam <span style={{ color: "#e3e3e3" }}>non minima</span> .
              </p> */}

              {/* <button style={{background: '#212149',fontSize: '1.2rem', color: '#fff', marginTop: '2%', fontWeight: '600', padding: '5px 25px'}}>Resume.pdf</button> */}
              {/* <EncriptButton /> */}
              {/* <EncriptButton /> */}
            </div>
          </div>

    </>
  );
};

export default Home;
