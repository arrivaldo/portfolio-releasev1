import React, { useState } from "react";
import Stack from "./Stack";
import CodeBeams2 from "./CodeBeans2";
import Certifications from "./Certifications";
import Certifications2 from "./Certifications2";
import Faqs from "./Faqs"
import Stack2 from "./Stack2";

const Tabs2 = () => {
  const [activeTab, setActiveTab] = useState("about");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <div className="w-full rounded-lg shadow overflow-hidden">
        <ul
          className="flex justify-between text-lg font-medium text-center text-gray-200 border-b border-gray-200 rounded-t-lg"
          id="defaultTab"
          role="tablist"
        >
          <li className="me-2 flex-1">
            <button
              id="about-tab"
              onClick={() => handleTabClick("about")}
              type="button"
              role="tab"
              aria-controls="about"
              aria-selected={activeTab === "about"}
              className={`inline-block p-4 rounded-ss-lg  ${
                activeTab === "about" && "bg-[#20157140] dark:bg-gr"
              }`}
            >
              Stack
            </button>
          </li>
          <li className="me-2 flex-1">
            <button
              id="services-tab"
              onClick={() => handleTabClick("services")}
              type="button"
              role="tab"
              aria-controls="services"
              aria-selected={activeTab === "services"}
              className={`inline-block p-4 ${
                activeTab === "services" && "bg-[#20157140]"
              }`}
            >
              Certifications
            </button>
          </li>
          <li className="me-2 flex-1">
            <button
              id="statistics-tab"
              onClick={() => handleTabClick("statistics")}
              type="button"
              role="tab"
              aria-controls="statistics"
              aria-selected={activeTab === "statistics"}
              className={`inline-block p-4  ${
                activeTab === "statistics" && "bg-gray-500 "
              }`}
            >
              Faqs
            </button>
          </li>
        </ul>
        <div id="defaultTabContent">
          <div
            className={` pt-4 overflow-hidden bg-transparent rounded-lg md:p-8 ${
              activeTab !== "about" && "hidden"
            }`}
            id="about"
            role="tabpanel"
            aria-labelledby="about-tab"
            // style={{height: '300px'}}
          >
            {/* About content */}

            {/* <Stack /> */}
            {/* <CodeBeams2 /> */}
            <Stack2 />
            
          </div>
          <div
            className={`p-4 rounded-lg md:p-8 ${
              activeTab !== "services" && "hidden"
            }`}
            id="services"
            role="tabpanel"
            aria-labelledby="services-tab"
          >
            {/* Services content */}
            {/* <p>Some Text2</p> */}
            <Certifications2 />
          </div>
          <div
            className={`p-4 rounded-lg md:p-8 overflow-hidden h ${
              activeTab !== "statistics" && "hidden"
            }`}
            id="statistics"
            role="tabpanel"
            aria-labelledby="statistics-tab"
          >
            {/* Statistics content */}
              <Faqs />

          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs2;
