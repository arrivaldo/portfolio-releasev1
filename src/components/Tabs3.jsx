import React, { useState } from 'react';
import './Tabs3.css';
import Stack from './Stack';
import Faqs from './Faqs';

import Certifications2 from './Certifications2';

const Tabs3 = () => {
  const [activeTab, setActiveTab] = useState('one');

  const handleTabClick = (contentId) => {
    setActiveTab(contentId);
  };

  return (
    <div className="wrap">
      <ul className="tabs group w-full">
        <li><button href="#one" className={`text-lg activeTab === 'one' ? 'active' : ''`} onClick={() => handleTabClick('one')}>Stack</button></li>
        <li><button href="#two" className={`text-lg activeTab === 'two' ? 'active' : ''`} onClick={() => handleTabClick('two')}>Certifications</button></li>
        <li><button href="#three" className={`text-lg activeTab === 'three' ? 'active' : ''`} onClick={() => handleTabClick('three')}>Faqs</button></li>
      </ul>
      <div id="contentTab">
        <div id="one" className={`tab-content ${activeTab === 'one' ? 'active' : ''}`}><Stack /></div>
        <div id="two" className={`tab-content ${activeTab === 'two' ? 'active' : ''}`}><Certifications2 /></div>
        <div style={{maxHeight: '300px'}} id="three" className={`tab-content overflow-y-scroll ${activeTab === 'three' ? 'active' : ''}`}> <Faqs /> </div>
      </div>
    </div>
  );
};

export default Tabs3;
