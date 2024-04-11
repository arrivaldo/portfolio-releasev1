import React, { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

 const CountUpStats = () => {
  return (
    <div className="mx-auto  ">
      {/* <h2 className="mb-8 text-center text-base text-indigo-900 sm:text-lg md:mb-16">
        BUILD TRUST WITH YOUR USERS WITH A
        <span className="text-indigo-500"> BEAUTIFUL LANDING PAGE</span>
      </h2> */}

      <div className="flex flex-col gap-4 items-center justify-center  ">
        <Stat
          num={10}
          suffix="+"
          subheading="Completed Projects"
        />
        <div className=" bg-indigo-200 " />
        <Stat
          num={8}
          decimals={0}
          suffix="+"
          subheading="Lorem ipsum dolor sit amet consectetur"
        />
        <div className=" bg-indigo-200 " />
        <Stat
          num={20}
          suffix="B+"
          subheading="Lorem ipsum dolor sit amet consectetur"
        />
      </div>
    </div>
  );
};

const Stat = ({ num, suffix, decimals = 0, subheading }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView) return;

    animate(0, num, {
      duration: 2.5,
      onUpdate(value) {
        if (!ref.current) return;

        ref.current.textContent = value.toFixed(decimals);
      },
    });
  }, [num, decimals, isInView]);

  return (
    <div className="flex  flex-col items-center  ">
      <p className="mb-2 text-center text-4xl font-semibold s">
        <span ref={ref}></span>
        {suffix}
      </p>
      <p className="max-w-48 text-center text-neutral-400">{subheading}</p>
    </div>
  );
};

export default CountUpStats