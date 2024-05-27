import React, { useState } from 'react';
import './Tabs3.css';
import Stack from './Stack';
import Faqs from './Faqs';

import Certifications2 from './Certifications2';
import Stack2 from './Stack2';
import Stack3 from './Stack3';

const Tabs3 = () => {
  const [activeTab, setActiveTab] = useState('one');

  const handleTabClick = (contentId) => {
    setActiveTab(contentId);
  };

  return (
    <div className="wrap">
      <ul className="tabs group w-full ">
        <li><button href="#one" className={`text-lg tinyMobile:text-[1.05rem] mobile:text-[1.05rem] mobileBig:text-[1.05rem] activeTab === 'one' ? 'active' : ''`} onClick={() => handleTabClick('one')}>Stack</button></li>
        <li><button href="#two" className={`text-lg tinyMobile:text-[1.05rem] mobile:text-[1.05rem] mobileBig:text-[1.05rem] activeTab === 'two' ? 'active' : ''`} onClick={() => handleTabClick('two')}>Certifications</button></li>
        <li><button href="#three" className={`text-lg tinyMobile:text-[1.05rem] mobile:text-[1.05rem] mobileBig:text-[1.05rem] activeTab === 'three' ? 'active' : ''`} onClick={() => handleTabClick('three')}>Faqs</button></li>
      </ul>
      <div id="contentTab">
        <div id="one" className={`tab-content ${activeTab === 'one' ? 'active' : ''}`}>
          {/* <Stack2 /> */}
          <Stack2 />
        </div>
        <div id="two" className={`tab-content ${activeTab === 'two' ? 'active' : ''}`}><Certifications2 /></div>
        <div style={{maxHeight: '300px'}} id="three" className={`tab-content overflow-y-scroll overflow-x-hidden ${activeTab === 'three' ? 'active' : ''}`}> <Faqs /> </div>
      </div>
    </div>
  );
};

export default Tabs3;
