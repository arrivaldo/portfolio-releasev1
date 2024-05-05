import React from 'react'
import { FiBookOpen } from "react-icons/fi";


const Jobs = () => {
  return (
        <>
            

<div className="w-full p-4  rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none ">Latest Customers</h5>
        {/* <a href="#" className="text-lg font-medium text-blue-600 hover:underline dark:text-blue-500">
            View all
        </a> */}
<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-6 w-6 flex-none"><path d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z" className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"></path><path d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5" className="stroke-zinc-400 dark:stroke-zinc-500"></path></svg>
   </div>
   <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            <li className="py-3 sm:py-4">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src="/images/rulesCube.jpg" alt="Neil image" />
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                        <p className="text-xl font-medium truncate">
                            Rules Cube
                        </p>
                        <p className="text-lg truncate">
                            Consultant
                        </p>
                    </div>
                    <div className="inline-flex text-xl items-center font-semibold ">
                      2021-present  
                    </div>
                </div>
            </li>
            <li  className="py-3 sm:py-4">
            <div className="flex items-center transition duration-300 ease-in-out transform hover:blur-none blur-sm">
                    <div className="flex-shrink-0">
                        <img style={{objectFit: 'contain'}} className="w-8 h-8 rounded-full" src="/images/global.png" alt="Bonnie image" />
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                        <p className="text-xl font-medium truncate ">
                            Global Human Capital
                        </p>
                        <p className="text-lg  truncate ">
                            Frontend Developer
                        </p>
                    </div>
                    <div className="inline-flex text-xl items-center font-semibold">
                        2020
                    </div>
                </div>
            </li>
            <li className="py-3 sm:py-4">
            <div className="flex items-center transition duration-300 ease-in-out transform hover:blur-none blur-sm">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src="/images/neoris.jpg" alt="Michael image" />
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                        <p className="text-xl font-medium  truncate ">
                            Neoris
                        </p>
                        <p className="text-lg  truncate ">
                            Full Stack Developer Jr.
                        </p>
                    </div>
                    <div className="inline-flex text-xl items-center font-semibold">
                        2020
                    </div>
                </div>
            </li>
            <li className="py-3 sm:py-4">
            <div className="flex items-center transition duration-300 ease-in-out transform hover:blur-none blur-sm">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src="/images/hsbc.jpg" alt="Lana image" />
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                        <p className="text-xl font-medium truncate">
                            HSBC
                        </p>
                        <p className="text-lg truncate ">
                            IT Consultant
                        </p>
                    </div>
                    <div className="inline-flex text-xl items-center  font-semibold ">
                        2019
                    </div>
                </div>
            </li>
            {/* 
             */}
        </ul>
   </div>
</div>

        </>
    )
}

export default Jobs