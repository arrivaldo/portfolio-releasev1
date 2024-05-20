import React from "react";
import Home from "./components/Home";
import "./App.css";
import Bento from "./components/Bento";
import Bento2 from "./components/Bento2";
import Contact from "./components/Contact";
import FeaturedProjects from "./components/FeaturedProjects";
import Quote from "./components/Quote";
import InfiniteHor from "./components/InfiniteHor";
import Certifications from "./components/Certifications";
import Clients from "./components/Clients";
import Services from "./components/Services";
import FeaturedProjects2 from "./components/FeaturedProjects2";
import Projects from "./components/Projects";
import CodeBeams from "./components/CodeBeams";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import About2 from "./components/About2";
import About3 from "./components/About3";
import About4 from "./components/About4";
import CountUpStats from "./components/CountUpStats";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import Testimonials2 from "./components/Testimonials2";
import Footer from "./components/Footer";
import FeaturedProjects3 from "./components/FeaturedProjects3";
import FeaturedProjects4 from "./components/FeaturedProjects4";
import Prices from "./components/Prices";
import CodeBeams2 from "./components/CodeBeans2";
import Projects2 from "./components/Projects2";
import Services2 from "./components/Services2";
import Testimonials3 from "./components/Testimonials3";
import Testimonials4 from "./components/Testimonials4";
import Tabs from "./components/Tabs";
import GridExample from "./components/GridExample";

function App() {
  return (
    <>
      <div className="absolute left-0 top-0 z-[-1] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),#000)]"></div>

      <div className="absolute left-0 top-0 z-[-1] h-screen w-screen gradient-bg"></div>
      {/* <Navbar /> */}
      {/* <Navbar2 /> */}
{/* <div className="absolute left-0 top-0">
  <img src="/images/circuit.png"></img>
  <img src="/images/circuit.png"></img>

</div> */}
      <div className="cont">
        <div className="content">
        <CodeBeams2 /> 

          <Home />
          {/* <Bento /> */}
          <Clients />

          {/* <About4 /> */}

          <Services />
          {/* <Services2 /> */}
          

          {/* <FeaturedProjects /> */}
          {/* <FeaturedProjects2 /> */}
          {/* <FeaturedProjects3 /> */}

          <FeaturedProjects4 />
          {/* <GridExample /> */}

          {/* <CodeBeams /> */}
          {/* <Bento2 /> */}

          {/* <About /> */}
          {/* <About3 /> */}
          <About4 />
          {/* <CountUpStats /> */}
          {/* <About2 /> */}
          {/* <Testimonials /> */}
          {/* <Prices /> */}
          {/* <Testimonials /> */}
          {/* <Testimonials /> */}
          {/* <Testimonials /> */}
          <Testimonials4 />

          {/* <Tabs /> */}
          {/* <Quote /> */}
          {/* <Testimonials2 /> */}

          {/* <InfiniteHor /> */}
          {/* <Certifications /> */}
          {/* <Testimonials /> */}
          {/* <Projects /> */}
          <Projects2 />

          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
