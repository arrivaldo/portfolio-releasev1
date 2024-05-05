import React, { useState } from 'react';
import './Tabs.css'
import Stack from './Stack';

function Tabs() {
  const [activeTab, setActiveTab] = useState(1);

  const handleClick = (tabNum) => {
    setActiveTab(tabNum);
  };

  return (
    <div className="container-tabs">
      <div className="text-lg tabs">
        <a
          className={`tab ${activeTab === 1 ? 'active' : ''}`}
          href="#"
          data-tab="1"
          onClick={() => handleClick(1)}
        >
          Technologies
        </a>
        <a
          className={`tab ${activeTab === 2 ? 'active' : ''}`}
          href="#"
          data-tab="2"
          onClick={() => handleClick(2)}
        >
          Certifications
        </a>
        <a
          className={`tab ${activeTab === 3 ? 'active' : ''}`}
          href="#"
          data-tab="3"
          onClick={() => handleClick(3)}
        >
          Resume
        </a>
        <span className="highlighter"></span>
      </div>
      <div className="content-tabs">
        <div className={`text-lg content__section ${activeTab === 1 ? 'visible' : ''}`} data-tab="1">
          {/* <p>Frontend: React, JavaScript, Pega, Tailwind</p>  
          <br />
          <p>Backend: Node, Express, MySQL, Postgree</p>  
          <br />

          <p>Tools:  Pega, Figma, Jira, Java</p>   */}
          <Stack />
        </div>
        <div className={`content__section ${activeTab === 2 ? 'visible' : ''}`} data-tab="2">
            <p>Certified System Architect</p>
            <p>Certified Business Architect</p>
            <p>ISTQB Foundation</p>
        </div>
        <div className={`content__section ${activeTab === 3 ? 'visible' : ''}`} data-tab="3">
    <p>Resume</p>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
