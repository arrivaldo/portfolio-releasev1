import React from "react";
import "./Quote.css";

const Quote = () => {
  return (
    <>
      <div
        style={{
          padding: "0% 8%",
          // paddingTop: '10%'
         // display: "flex",
         // justifyContent: "center",
         marginTop: '15%'
        }}
      >
        <div className="line-container">
          <div className="line"> </div>
        </div>

        <div className="triangulito">
          <svg className="svg-shadow"
            width="38"
            height="32"
            viewBox="0 0 38 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19 0L0 31.5H38L19 0Z" fill="white" />
          </svg>
        </div>

        <div
          style={{
           // position: "absolute",
            zIndex: "10000",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "5%",
          }}
        >
          <h3 className="text-2xl" style={{ width: "47%", textAlign: "center" }}>
            Resend is transforming email for developers. Simple interface, easy
            integrations et.
          </h3>
        </div>
      </div>
    </>
  );
};

export default Quote;
