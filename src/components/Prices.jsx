import React, { useEffect, useState } from "react";
import "./Prices.css";
import Spotlight from "../Spotlight";
import { ImQuotesLeft } from "react-icons/im";

const Prices = () => {
  //   const spotlightRef = useRef(null);

  //   useEffect(() => {
  //     if (spotlightRef.current) {
  //       new Spotlight(spotlightRef.current);
  //     }
  //   }, []);

  return (
    <>
      <main style={{ padding: "0 6%" }} className="main flow">
        <h1 className="main__heading">Courses</h1>
        <div className="main__cards cards">
          <div class="cards__inner">
            <div class="cards__card card">
              {/* <h2 class="card__heading">Front-End Development</h2>
              <p class="card__price">$2.99</p>
              <ul role="list" class="card__bullets flow">
                <li>100+ front-end projects</li>
                <li>Email support</li>
                <li>Placement questions</li>
                <li>brief notes for revision</li>
              </ul>
              <a href="#basic" class="card__cta cta">
                Get It Now
              </a> */}

              <div className="flex flex-col bg-slate-900 text-slate-50 p-4">
                <div className="flex w-full justify-between items-center">
                  <span style={{}} className="text-7xl text-slate-700">
                    <ImQuotesLeft style={{ width: "70%" }} />
                  </span>

                  <p>2011 Jan 2023</p>
                </div>
                <span
                  style={{ marginTop: "7%" }}
                  className="block text-md text-slate-300"
                >
                  {/* {testim.info} */}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati est error, beatae ratione temporibus ea alias dolore
                  laborum aliquam modi tempore eveniet inventore voluptate qui,
                  facilis quibusdam fugiat quisquam quaerat!
                </span>

                <div
                  style={{ marginTop: "12%" }}
                  className="flex items-center gap-3"
                >
                  <div style={{ borderRadius: "50%", width: "12%" }}>
                    <img
                      style={{ borderRadius: "50%" }}
                      src="/images/madhu.jpeg"
                    ></img>
                  </div>
                  <div className="flex flex-col">
                    <span className="block font-semibold text-lg mb-1">
                      Sam Garnagh
                    </span>
                    <span className="block mb-3 text-sm font-medium">
                      Senior Developer
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="cards__card card">
              <div className="flex flex-col text-slate-50 p-4">
                <div className="flex w-full justify-between items-center">
                  <span style={{}} className="text-7xl text-slate-700">
                    <ImQuotesLeft style={{ width: "70%" }} />
                  </span>

                  <p>2011 Jan 2023</p>
                </div>
                <span
                  style={{ marginTop: "7%" }}
                  className="block text-md text-slate-300"
                >
                  {/* {testim.info} */}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati est error, beatae ratione temporibus ea alias dolore
                  laborum aliquam modi tempore eveniet inventore voluptate qui,
                  facilis quibusdam fugiat quisquam quaerat!
                </span>

                <div
                  style={{ marginTop: "12%" }}
                  className="flex items-center gap-3"
                >
                  <div style={{ borderRadius: "50%", width: "12%" }}>
                    <img
                      style={{ borderRadius: "50%" }}
                      src="/images/madhu.jpeg"
                    ></img>
                  </div>
                  <div className="flex flex-col">
                    <span className="block font-semibold text-lg mb-1">
                      Sam Garnagh
                    </span>
                    <span className="block mb-3 text-sm font-medium">
                      Senior Developer
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="cards__card card">
            <div className="flex flex-col bg-slate-900 text-slate-50 p-4">
                <div className="flex w-full justify-between items-center">
                  <span style={{}} className="text-7xl text-slate-700">
                    <ImQuotesLeft style={{ width: "70%" }} />
                  </span>

                  <p>2011 Jan 2023</p>
                </div>
                <span
                  style={{ marginTop: "7%" }}
                  className="block text-md text-slate-300"
                >
                  {/* {testim.info} */}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati est error, beatae ratione temporibus ea alias dolore
                  laborum aliquam modi tempore eveniet inventore voluptate qui,
                  facilis quibusdam fugiat quisquam quaerat!
                </span>

                <div
                  style={{ marginTop: "12%" }}
                  className="flex items-center gap-3"
                >
                  <div style={{ borderRadius: "50%", width: "12%" }}>
                    <img
                      style={{ borderRadius: "50%" }}
                      src="/images/madhu.jpeg"
                    ></img>
                  </div>
                  <div className="flex flex-col">
                    <span className="block font-semibold text-lg mb-1">
                      Sam Garnagh
                    </span>
                    <span className="block mb-3 text-sm font-medium">
                      Senior Developer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="overlay cards__inner"></div>
        </div>
      </main>
    </>
  );
};

export default Prices;

const testim = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1627161683077-e34782c24d81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=703&q=80",
    name: "Sam Gharnagh",
    title: "Vice President",
    info: "Erick helped in QA activities for an upgrade project of the Pega platform with smooth successful result. He took initiative to quickly learn the client application, create test cases and execute them",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
    name: "Darwin Batres",
    title: "Lead Developer",
    info: "Erick has been doing a great job, he got direct exposure to the client and was able to interact with them. The client liked his work and he was able to help them directly whenever they needed it. i.e creating data, providing demos, knowledge transfer.",
  },
  {
    id: 3,
    img: "https://plus.unsplash.com/premium_photo-1670588776139-da93b47afc6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Madhu Chalamaiah",
    title: "Lead Developer",
    info: "I had the pleasure of working alongside with Erick in couple of projects. His meticulous attention to detail, strong analytical skills, and dedication to ensuring product quality were evident in every project. Erick is a valuable asset to any team, and I highly recommend them for their expertise.",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
    name: "Danica W.",
    title: "Founder of XYZ",
    info: "Erick demostró no solo habilidades técnicas sólidas sino también un compromiso importante con sus responsabilidades. Su enfoque meticuloso y su capacidad para abordar desafíos complejos fueron de gran valor para el equipo y contribuyeron significativamente al éxito de nuestros proyectos. ",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Peter H.",
    title: "Founder of XYZ",
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore.",
  },
];
