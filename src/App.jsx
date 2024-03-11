import React from 'react'
import Home from './components/Home'
import './App.css'
import Bento from './components/Bento'
import Bento2 from './components/Bento2'
import Contact from './components/Contact'
import FeaturedProjects from './components/FeaturedProjects'
import Quote from './components/Quote'
import InfiniteHor from './components/InfiniteHor'
import Certifications from './components/Certifications'
import Clients from './components/Clients'

function App() {

  return (
    <>
          <div  class="absolute left-0 top-0 z-[-1] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),#000)]"></div>

    <div className="container">
      
      <div className="content">

      <Home />
      {/* <Bento /> */}
      <Clients />
      <FeaturedProjects />

      <Bento2 />
    
      <Quote />
      <InfiniteHor />
      <Certifications />
      <Contact />
      </div>
    </div>

    </>
  )
}

export default App
