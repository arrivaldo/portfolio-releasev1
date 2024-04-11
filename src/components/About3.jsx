import React from "react";
import "./About3.css";
import Jobs from "./Jobs";
import Profile from "./Profile";
import Stack from "./Stack";
import Stats from "./CountUpStats";

const About3 = () => {
  return (
    <>
    <section style={{padding: '0 10%', marginTop: '5%'}}>
      <div className="hist-blog">
        <div className="blogs">
          <div className="blog1">
            <div className="flex flex-col">
                <h3 className="text-lg">April 5, 2024</h3>
                <h2 className="text-2xl font-bold py-4">Crafting a design system for a multiplanetary</h2>
                <ul className="text-lg flex gap-4 pb-4 ">
                    <li>#Arquitecture</li>
                    <li>#Engineering</li>
                </ul>
                <p className="text-xl pb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure eligendi fugiat vitae expedita deserunt aliquam recusandae quod blanditiis porro delectus, ipsum velit.</p>
                <a className="text-lg text-[#84cdeb]">Read article -</a>
            </div>
          </div>
          <div className="blog2">
          <div className="flex flex-col">
                <h3 className="text-lg">April 5, 2024</h3>
                <h2 className="text-2xl font-bold py-4">Crafting a design system for a multiplanetary</h2>
                <ul className="text-lg flex gap-4 pb-4 ">
                    <li>#Arquitecture</li>
                    <li>#Engineering</li>
                </ul>
                <p className="text-xl pb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure eligendi fugiat vitae expedita deserunt aliquam recusandae quod blanditiis porro delectus, ipsum velit.</p>
                <a className="text-lg text-[#84cdeb]">Read article -</a>
            </div>
          </div>
          <div className="blog3">
          {/* <div className="flex flex-col">
                <h3 className="text-lg">April 5, 2024</h3>
                <h2 className="text-2xl font-bold py-4">Crafting a design system for a multiplanetary</h2>
                <ul className="text-lg flex gap-4 pb-4 ">
                    <li>#Arquitecture</li>
                    <li>#Engineering</li>
                </ul>
                <p className="text-xl pb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure eligendi fugiat vitae expedita deserunt aliquam recusandae quod blanditiis porro delectus, ipsum velit.</p>
                <a className="text-lg text-[#84cdeb]">Read article -</a>
            </div> */}


            <Stack />


          </div>
        </div>
        <div className="material">
          <div className="mat1">
            <Profile />
            {/* <Stack /> */}
            
<div className="w-full max-w-[16rem]">
    <div className="relative">
        <label for="npm-install-copy-button" className="sr-only">Label</label>
        <input id="npm-install-copy-button" type="text" className="col-span-6  border border-gray-300 text-white text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value="npm install flowbite" disabled readonly />
        <button data-copy-to-clipboard-target="npm-install-copy-button" data-tooltip-target="tooltip-copy-npm-install-copy-button" className="absolute end-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-2 inline-flex items-center justify-center">
            <span id="default-icon">
                <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                </svg>
            </span>
            <span id="success-icon" className="hidden inline-flex items-center">
                <svg className="w-3.5 h-3.5 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                </svg>
            </span>
        </button>
        <div id="tooltip-copy-npm-install-copy-button" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            <span id="default-tooltip-message">Copy to clipboard</span>
            <span id="success-tooltip-message" className="hidden">Copied!</span>
            <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
    </div>
</div>

{/* <Stats /> */}
<Jobs />


          </div>
          <div className="mat2">
            {/* <Jobs /> */}
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default About3;
