import React from 'react'
import Profile from './Profile'
import Jobs from './Jobs'
import Tabs2 from './Tabs2'
import CountUpStats from './CountUpStats'

const GridExample = () => {
  return (
    <>
   


<div className="grid grid-cols-2 grid-rows-3 gap-4">
    <div style={{background:'cyan'}} >
        <Profile />

    </div>
    <div style={{background:'red'}} className="row-span-2 col-start-1 row-start-2">
        <Jobs />
    </div>
    <div style={{background:'green'}} className="row-span-2 col-start-2 row-start-1">
    <div className="flex flex-col">
                      <h3 className="text-lg">April 5, 2024</h3>
                      <h2 className="text-xl font-bold py-2">
                        Crafting a design system for a multiplanetary
                      </h2>
                      <ul className="text-lg flex gap-4 pb-2 ">
                        <li>#Arquitecture</li>
                        <li>#Engineering</li>
                      </ul>
                      <p className="text-lg pb-2">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Iure eligendi fugiat vitae expedita deserunt
                        aliquam recusandae.
                      </p>
                      <a className="text-lg text-[#84cdeb]">Read article -</a>
                    </div>
    </div>
    <div style={{background:'blue'}} className="row-span-2 col-start-2 row-start-3">
    <div className="flex flex-col">
                      <h3 className="text-lg">April 5, 2024</h3>
                      <h2 className="text-xl font-bold py-2">
                        Crafting a design system for a multiplanetary
                      </h2>
                      <ul className="text-lg flex gap-4 pb-2 ">
                        <li>#Arquitecture</li>
                        <li>#Engineering</li>
                      </ul>
                      <p className="text-lg pb-2">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Iure eligendi fugiat vitae expedita deserunt
                        aliquam recusandae.
                      </p>
                      <a className="text-lg text-[#84cdeb]">Read article -</a>
                    </div>
    </div>
    <div style={{background:'green', width: '150%'}} className="row-span-9 row-start-5">
        <Tabs2 />
    </div>
    <div style={{background:'cyan', width: '50%', marginLeft: '50%'}} className="row-span-9 row-start-5">
        <CountUpStats />
    </div>
</div>
    </>
)
}

export default GridExample