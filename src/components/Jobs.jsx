import React from 'react'

const Jobs = () => {
  return (
        <>
            

<div className="w-full p-4  rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none ">Latest Customers</h5>
        <a href="#" className="text-lg font-medium text-blue-600 hover:underline dark:text-blue-500">
            View all
        </a>
   </div>
   <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            <li className="py-3 sm:py-4">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image" />
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                        <p className="text-xl font-medium truncate">
                            Neil Sims
                        </p>
                        <p className="text-lg truncate">
                            email@windster.com
                        </p>
                    </div>
                    <div className="inline-flex text-xl items-center font-semibold ">
                        $320
                    </div>
                </div>
            </li>
            <li  className="py-3 sm:py-4">
                <div style={{filter: 'blur(7px)'}} className="flex items-center ">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image" />
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                        <p className="text-xl font-medium truncate ">
                            Bonnie Green
                        </p>
                        <p className="text-lg  truncate ">
                            email@windster.com
                        </p>
                    </div>
                    <div className="inline-flex text-xl items-center font-semibold">
                        $3467
                    </div>
                </div>
            </li>
            <li className="py-3 sm:py-4">
                <div style={{filter: 'blur(7px)'}} className="flex items-center">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Michael image" />
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                        <p className="text-xl font-medium  truncate ">
                            Michael Gough
                        </p>
                        <p className="text-lg  truncate ">
                            email@windster.com
                        </p>
                    </div>
                    <div className="inline-flex text-xl items-center font-semibold">
                        $67
                    </div>
                </div>
            </li>
            <li className="py-3 sm:py-4">
                <div style={{filter: 'blur(7px)'}} className="flex items-center ">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-4.jpg" alt="Lana image" />
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                        <p className="text-xl font-medium truncate">
                            Lana Byrd
                        </p>
                        <p className="text-lg truncate ">
                            email@windster.com
                        </p>
                    </div>
                    <div className="inline-flex text-xl items-center  font-semibold ">
                        $367
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