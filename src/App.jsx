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
import Services from './components/Services'
import FeaturedProjects2 from './components/FeaturedProjects2'
import Projects from './components/Projects'
import CodeBeams from './components/CodeBeams'
import Testimonials from './components/Testimonials'
import About from './components/About'
import About2 from './components/About2'
import About3 from './components/About3'
import About4 from './components/About4'
import CountUpStats from './components/CountUpStats'
import Navbar from './components/Navbar'

function App() {

  return ( 
    <>
          <div  className="absolute left-0 top-0 z-[-1] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),#000)]"></div>

<div className="absolute left-0 top-0 z-[-1] h-screen w-screen gradient-bg"></div>
    <Navbar />

    <div className="cont">
      
      <div className="content">

      <Home />
      {/* <Bento /> */}
      <Clients />

      {/* <About4 /> */}

      <Services />

      {/* <FeaturedProjects /> */}
      <FeaturedProjects2 />
      {/* <CodeBeams /> */}
      {/* <Bento2 /> */}
      
      
      {/* <About /> */}
      {/* <About3 /> */}
      <About4 />
      {/* <CountUpStats /> */}
    {/* <About2 /> */}
    {/* <Testimonials /> */}


      <Quote />

      {/* <InfiniteHor /> */}
      <Certifications />
      <Testimonials />
      <Projects />

      <Contact />
      </div>
    </div>

    </>
  )
}

export default App
