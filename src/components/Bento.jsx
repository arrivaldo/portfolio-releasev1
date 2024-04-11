import React from "react";
import "./Bento.css";

const Bento = () => {
  return (
    <div style={{ display: "flex", width: "100%", justifyContent: "center" , padding: '0 10%'}}>
      <div style={{zIndex: '100000', position: 'relative'}} className="servicesCartas">
      {/* <div className="absolute bottom-auto left-auto right-auto top-0 h-[500px] w-[500px] -translate-x-[-100%] translate-y-[20%] rounded-full bg-[#bd77ec] blur-[50px] -z-10"></div> */}

        <div className="firstCard">
          {/* <div className="about-img">
            <img src={picPro}></img>
            <span className="circle-spin"></span>
          </div> */}

          <div>
            <img src='/images/erick3.png'></img>
          </div>

          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              marginTop: "12%",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <h2 style={{ fontWeight: "600" }}>Erick Bárcena</h2>
            {/* <p style={{ color: "#b1b9c8" }}>Consultant @ Rules Cube</p> */}
            <li></li>
          </div>
        </div>
        <div className="secondCard">
          <div>
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
            <p
              style={{
                marginTop: "2%",
                fontWeight: "400",
                fontSize: "1.2rem",
                color: "#b7bfd0",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perspiciatis reiciendis ratione earum corporis fugiat soluta
              consequuntur in similique, voluptates dolor! Quas hic recusandae
              quidem.
            </p>
          </div>
        </div>
        <div className="thirdCard">
          <div>
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
            <p
              style={{
                marginTop: "2%",
                fontWeight: "400",
                fontSize: "1.2rem",
                color: "#b7bfd0",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perspiciatis reiciendis ratione earum corporis fugiat soluta
              consequuntur in similique, voluptates dolor! Quas hic recusandae
              quidem.
            </p>
          </div>
        </div>
        <div className="fourthCard">
          <div>
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
            <p
              style={{
                marginTop: "2%",
                fontWeight: "400",
                fontSize: "1.2rem",
                color: "#b7bfd0",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perspiciatis reiciendis ratione earum corporis fugiat soluta
              consequuntur in similique, voluptates dolor! Quas hic recusandae
              quidem.
            </p>
          </div>
        </div>
        <div className="fifthCard">
          <div>
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
            <p
              style={{
                marginTop: "2%",
                fontWeight: "400",
                fontSize: "1.2rem",
                color: "#b7bfd0",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perspiciatis reiciendis ratione earum corporis fugiat soluta
              consequuntur in similique, voluptates dolor! Quas hic recusandae
              quidem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bento;
