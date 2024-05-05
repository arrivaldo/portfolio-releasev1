import { motion } from "framer-motion";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { ImQuotesLeft } from "react-icons/im";

const Testimonials = () => {
  const [position, setPosition] = useState(0);

  const shiftLeft = () => {
    if (position > 0) {
      setPosition((pv) => pv - 1);
    }
  };

  const shiftRight = () => {
    if (position < features.length - 1) {
      setPosition((pv) => pv + 1);
    }
  };

  const [imgIndex, setImgIndex] = useState(0);

  return (
    <section
      style={{ padding: "0 8%", marginTop: "10%" }}
      className="overflow-hidden"
    >
      <div className="">
        <div className="mb-8 flex items-center justify-center gap-4">
          {/* <h2 className="text-xl font-bold leading-[1.2] md:text-xl">
            We're good. <span className="text-neutral-400">Here's why.</span>
          </h2> */}
          <h2 className="text-2xl font-bold">Testimonials</h2>
          {/* <p>What clients say about me.</p> */}
          {/* <div className="flex gap-2 overflow-hidden ">
            <button
              className="h-fit p-4 text-2xl text-white transition-colors hover:bg-neutral-700"
              onClick={shiftLeft}
            >
              <FiChevronLeft />
            </button>
            <button
              className="h-fit p-4 text-2xl text-white transition-colors hover:bg-neutral-700"
              onClick={shiftRight}
            >
              <FiChevronRight />
            </button>
          </div> */}
        </div>
        <div className="flex gap-8 overflow-hidden">
          {features.map((feat, index) => (
            <Feature
              key={feat.id}
              features={features}
              position={position}
              index={index}
            />
          ))}
        </div>

        <div className="flex justify-between overflow-hidden items-center ">
          <button
            className="h-fit p-4 text-2xl text-white transition-colors hover:bg-neutral-700"
            onClick={shiftLeft}
          >
            <svg
              width="60"
              height="44"
              viewBox="0 0 147 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M143.685 22.0708L3.05533 22.1051M3.05533 22.1051L22.1929 3.06646M3.05533 22.1051L22.0939 41.2426"
                stroke="#E3E3E3"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <Dots
          position={position}
          setPosition={setPosition}
          totalTestimonials={features.length}
        />


          <button
            className="h-fit p-4 text-2xl text-white transition-colors hover:bg-neutral-700"
            onClick={shiftRight}
          >
            <svg
              width="60"
              height="44"
              viewBox="0 0 147 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.5 21.9931L143.13 21.9928M143.13 21.9928L123.987 41.0268M143.13 21.9928L124.096 2.8507"
                stroke="#E3E3E3"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          
        </div>

        
      </div>
    </section>
  );
};

const Feature = ({ position, index, features }) => {
  const feature = features[index];
  const translateAmt =
    position >= index ? index * 100 : index * 100 - 100 * (index - position);

  return (
    <motion.div
      style={{ border: "1px solid rgba(255, 255, 255, 0.125)" }}
      animate={{ x: `${-translateAmt}%` }}
      transition={{
        ease: "easeInOut",
        duration: 0.35,
      }}
      className={`relative flex min-h-[250px] max-w-lg shrink-0 flex-col justify-between overflow-hidden  shadow-lg w-[30%]`}
    >
      <div
        key={feature.id}
        className="shrink-0 flex rounded-lg overflow-hidden relative h-full"
      >
        <div className="flex flex-col justify-between bg-slate-900 text-slate-50 p-4">
          <div>
            <div className="flex w-full justify-between items-center">
              <span style={{}} className="text-7xl text-slate-700">
                <ImQuotesLeft style={{ width: "70%" }} />
              </span>
              <p>2011 Jan 2023</p>
            </div>

            <span
              style={{ marginTop: "7%" }}
              className="block text-lg text-slate-300"
            >
              {feature.info}
            </span>
          </div>

          <div style={{ marginTop: "12%" }} className="flex items-center gap-3">
            <div style={{ borderRadius: "50%", width: "12%" }}>
              <img
                style={{ borderRadius: "50%" }}
                src="/images/madhu.jpeg"
              ></img>
            </div>
            <div className="flex flex-col">
              <span className="block font-semibold text-lg mb-1">
                {feature.name}
              </span>
              <span className="block mb-3 text-sm font-medium">
                {feature.title}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Dots = ({ position, setPosition, totalTestimonials }) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {Array.from({ length: totalTestimonials }).map((_, index) => {
        return (
          <button
            key={index}
            onClick={() => setPosition(index)}
            className={`h-1 w-3  transition-colors ${
              position === index ? "bg-neutral-50" : "bg-neutral-500"
            }`}
          />
        );
      })}
    </div>
  );
};

export default Testimonials;

const features = [
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
