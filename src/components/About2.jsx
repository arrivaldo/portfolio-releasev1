import React from "react";
import Stats from "./CountUpStats";
import Jobs from "./Jobs";

const About2 = () => {
  return (
    <>
      <div
        style={{ padding: "0 10%", marginTop: "5%" }}
        className="flex gap-10"
      >
        <div style={{ flex: "1.2" }} className="flex flex-col">
          <h1 className="text-2xl mb-8 font-bold">About Me</h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
            molestiae velit at eum nulla voluptatibus beatae, non quaerat
            facilis debitis deserunt maiores cum nisi, unde sapiente praesentium
            amet, veniam quae.
          </p>

          <br />

          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
            molestiae velit at eum nulla voluptatibus beatae, non quaerat
            facilis debitis deserunt maiores cum nisi, unde sapiente praesentium
            amet, veniam quae.
          </p>
          <br />

          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
            molestiae velit at eum nulla voluptatibus beatae, non quaerat
            facilis debitis deserunt maiores cum nisi, unde sapiente praesentium
            amet, veniam quae.
          </p>

          <div className="flex mt-6">
            <Stats />
            {/* <Jobs /> */}
          </div>
        </div>
        <div style={{ flex: "0.8" }} className="w-full flex justify-center">
          <img
            style={{ objectFit: "cover", height: "80", width: "80%" }}
            className="order-1 object-cover w-42 h-full p-1 md:order-2 rotate-3 lg:p-2 aspect-square rounded-2xl bg-black/20 dark:bg-yellow-500/5 ring-1 ring-black/70 dark:ring-white/20 "
            src="/images/profile.jpeg"
          ></img>
        </div>
      </div>
    </>
  );
};

export default About2;
