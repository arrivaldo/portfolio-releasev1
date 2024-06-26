import React, { useEffect, useState } from "react";
import { FiZap } from "react-icons/fi";
import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { FiStar } from "react-icons/fi";
import { Highlight } from "prism-react-renderer";

const CodeBeams2 = () => {
  return (
    <div style={{height: '100vh', width: '100vw', position: 'absolute', top: '0', left: '0', zIndex: '-1'}} className=" overflow-hidden h-full ">
 
      <BGGrid />
    </div>
  );
};

const BGGrid = () => {
  return (
    <div
      style={{
         backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http:www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='2' stroke='rgb(30 27 75 / 0.5)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
      }}
      className="absolute bottom-0 left-0 right-0 top-0"
    >
      <div className="absolute " />
      <Beams />
    </div>
  );
};

const Beams = () => {
  const { width } = useWindowSize();

  const numColumns = width ? Math.floor(width / GRID_BOX_SIZE) : 0;

  const placements = [
     {
       top: GRID_BOX_SIZE * 0,
       left: Math.floor(numColumns * 0.05) * GRID_BOX_SIZE,
       transition: {
         duration: 5,
         repeatDelay: 5,
         delay: 2,
       },
     },
     {
       top: GRID_BOX_SIZE * 5,
       left: Math.floor(numColumns * 0.25) * GRID_BOX_SIZE,
       transition: {
         duration: 5,
         repeatDelay: 5,
         delay: 2,
       },
     },
    // {
    //   top: 300,
    //   left: 205,
    //   transition: {
    //     duration: 3.5,
    //     repeatDelay: 5,
    //     delay: 2,
    //   },
    // },
    // {
    //   top: 300,
    //   left: 605,
    //   transition: {
    //     duration: 3.5,
    //     repeatDelay: 5,
    //     delay: 2,
    //   },
    // },
 
      {
        top: GRID_BOX_SIZE * 9,
        left: Math.floor(numColumns * 0.75) * GRID_BOX_SIZE,
        transition: {
          duration: 2,
          repeatDelay: 7.5,
          delay: 3.5,
        },
      },
      {
        top: 0,
        left: Math.floor(numColumns * 0.7) * GRID_BOX_SIZE,
        transition: {
          duration: 3,
          repeatDelay: 2,
          delay: 1,
        },
      },
      {
        top: GRID_BOX_SIZE * 2,
        left: Math.floor(numColumns * 1) * GRID_BOX_SIZE - GRID_BOX_SIZE,
        transition: {
          duration: 5,
          repeatDelay: 5,
          delay: 5,
        },
      },
      {
        top: GRID_BOX_SIZE * 5,
        left: Math.floor(numColumns * 0.85) * GRID_BOX_SIZE - GRID_BOX_SIZE,
        transition: {
          duration: 5,
          repeatDelay: 5,
          delay: 5,
        },
      },
      {
        top: GRID_BOX_SIZE * 3,
        left: Math.floor(numColumns * 0.68) * GRID_BOX_SIZE - GRID_BOX_SIZE,
        transition: {
          duration: 5,
          repeatDelay: 5,
          delay: 5,
        },
      },
   
  ];

  return (
    <>
      {placements.map((p, i) => (
        <Beam
          key={i}
          top={p.top}
          left={p.left - BEAM_WIDTH_OFFSET}
          transition={p.transition || {}}
        />
      ))}
    </>
  );
};

const Beam = ({ top, left, transition = {} }) => {
  return (
    <motion.div
      initial={{
        y: 0,
        opacity: 0,
      }}
      animate={{
        opacity: [0, 1, 0],
        y: 32 * 52,
      }}
      transition={{
        ease: "easeInOut",
        duration: 3,
        repeat: Infinity,
        repeatDelay: 1.5,
        ...transition,
      }}
      style={{
        top,
        left,
      }}
      className="absolute z-10 h-[104px] w-[5px] bg-gradient-to-b from-indigo-500/0 to-indigo-500"
    />
  );
};






const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
};

const GRID_BOX_SIZE = 32;
const BEAM_WIDTH_OFFSET = 1;



  export default CodeBeams2