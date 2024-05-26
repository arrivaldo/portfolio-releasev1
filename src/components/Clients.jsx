import React, { useEffect, useRef, useState } from "react";
import Spotlight from "../Spotlight";

import "./Clients.css";

const Clients = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // If a user hasn't opted in for reduced motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation(scrollers);
    }
  }, []); // Empty dependency array to run the effect once when the component mounts

  function addAnimation(scrollers) {
    scrollers.forEach((scroller) => {
      // add data-animated="true" to every `.scroller` on the page
      scroller.setAttribute("data-animated", true);

      // Make an array from the elements within `.scroller-inner`
      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);

      // For each item in the array, clone it
      // add aria-hidden to it
      // add it into the `.scroller-inner`
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  }

  const spotlightRef = useRef(null);

  useEffect(() => {
    if (spotlightRef.current) {
      new Spotlight(spotlightRef.current);
    }
  }, []);

  return (
    <>
      <div
      className=""
        style={{
          height: "100%",
          borderLeft: "1px solid #2e2e32",
          borderRight: "1px solid #2e2e32",
          zIndex: "10",
        }}
      >

      <h1
        className="p-title-clients text-xl tinyMobile:text-[1.05rem] mobile:text-[1.05rem]  mobileBig:text-[1.05rem]"
        style={{
          width: "100%",
          color: "#e3e3e3",

          // marginBottom: "1%",
          display: "flex",
          justifyContent: "flex-start",
          fontWeight: "600",
          marginBottom: '2%',
          marginTop: '5%'
        }}
      >
        {" "}
        Awesome clients that we've helped
      </h1>

      <div
        style={{ position: "relative"}}
        className="text-xl tinyMobile:text-[0.9rem] mobile:text-[0.9rem]  mobileBig:text-[0.9rem] font-bold falseBody overflow-x-hidden"
      >
        <div className="scroller overflow-x-hidden" data-speed="slow">
          <ul ref={spotlightRef} className="tag-list scroller__inner overflow-x-hidden mobileBig:text-lg">
            <div className="overflow-x-hidden" style={{ padding: "2px",borderRadius: '5px'}}>
              <div
                style={{ background: 'rgb(0 0 69)',borderRadius: '5px' }}
                className="relative h-full overflow-x-hidden "
              >
                <li className="overflow-x-hidden" style={{borderRadius: '5px'}}>
                  {/* 
        <svg width="193" height="44" viewBox="0 0 193 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.3764 17.9844H19.777C19.6747 17.2599 19.4659 16.6165 19.1506 16.054C18.8352 15.483 18.4304 14.9972 17.9361 14.5966C17.4418 14.196 16.8707 13.8892 16.223 13.6761C15.5838 13.4631 14.8892 13.3565 14.1392 13.3565C12.7841 13.3565 11.6037 13.6932 10.598 14.3665C9.59233 15.0312 8.8125 16.0028 8.25852 17.2812C7.70455 18.5511 7.42756 20.0937 7.42756 21.9091C7.42756 23.7756 7.70455 25.3437 8.25852 26.6136C8.82102 27.8835 9.60511 28.8423 10.6108 29.4901C11.6165 30.1378 12.7798 30.4616 14.1009 30.4616C14.8423 30.4616 15.5284 30.3636 16.1591 30.1676C16.7983 29.9716 17.3651 29.6861 17.8594 29.3111C18.3537 28.9276 18.7628 28.4631 19.0866 27.9176C19.419 27.3722 19.6491 26.75 19.777 26.0511L25.3764 26.0767C25.2315 27.2784 24.8693 28.4375 24.2898 29.554C23.7188 30.6619 22.9474 31.6548 21.9759 32.5327C21.0128 33.402 19.8622 34.0923 18.5241 34.6037C17.1946 35.1065 15.6903 35.358 14.0114 35.358C11.6761 35.358 9.58807 34.8295 7.74716 33.7727C5.91477 32.7159 4.46591 31.1861 3.40057 29.1832C2.34375 27.1804 1.81534 24.7557 1.81534 21.9091C1.81534 19.054 2.35227 16.625 3.42614 14.6222C4.5 12.6193 5.95739 11.0937 7.7983 10.0455C9.6392 8.98864 11.7102 8.46023 14.0114 8.46023C15.5284 8.46023 16.9347 8.67329 18.2301 9.09943C19.5341 9.52557 20.6889 10.1477 21.6946 10.9659C22.7003 11.7756 23.5185 12.7685 24.1491 13.9446C24.7884 15.1207 25.1974 16.4673 25.3764 17.9844ZM34.6896 8.81818V35H29.2436V8.81818H34.6896ZM44.6516 35.3707C43.3988 35.3707 42.2823 35.1534 41.3022 34.7188C40.3221 34.2756 39.5465 33.6236 38.9755 32.7628C38.413 31.8935 38.1317 30.8111 38.1317 29.5156C38.1317 28.4247 38.332 27.5085 38.7326 26.767C39.1332 26.0256 39.6786 25.429 40.369 24.9773C41.0593 24.5256 41.8434 24.1847 42.7212 23.9545C43.6076 23.7244 44.5366 23.5625 45.5082 23.4688C46.6502 23.3494 47.5707 23.2386 48.2695 23.1364C48.9684 23.0256 49.4755 22.8636 49.7908 22.6506C50.1062 22.4375 50.2639 22.1222 50.2639 21.7045V21.6278C50.2639 20.8182 50.0082 20.1918 49.4968 19.7486C48.994 19.3054 48.2781 19.0838 47.3491 19.0838C46.369 19.0838 45.5891 19.3011 45.0096 19.7358C44.43 20.1619 44.0465 20.6989 43.859 21.3466L38.8221 20.9375C39.0778 19.7443 39.5806 18.7131 40.3306 17.8438C41.0806 16.9659 42.0479 16.2926 43.2326 15.8239C44.4258 15.3466 45.8065 15.108 47.3746 15.108C48.4656 15.108 49.5096 15.2358 50.5067 15.4915C51.5124 15.7472 52.4031 16.1435 53.1786 16.6804C53.9627 17.2173 54.5806 17.9077 55.0323 18.7514C55.484 19.5866 55.7099 20.5881 55.7099 21.7557V35H50.5451V32.277H50.3917C50.0763 32.8906 49.6545 33.4318 49.1261 33.9006C48.5977 34.3608 47.9627 34.723 47.2212 34.9872C46.4798 35.2429 45.6232 35.3707 44.6516 35.3707ZM46.2113 31.6122C47.0124 31.6122 47.7198 31.4545 48.3335 31.1392C48.9471 30.8153 49.4286 30.3807 49.7781 29.8352C50.1275 29.2898 50.3022 28.6719 50.3022 27.9815V25.8977C50.1317 26.0085 49.8974 26.1108 49.5991 26.2045C49.3093 26.2898 48.9812 26.3707 48.6147 26.4474C48.2482 26.5156 47.8817 26.5795 47.5153 26.6392C47.1488 26.6903 46.8164 26.7372 46.5181 26.7798C45.8789 26.8736 45.3207 27.0227 44.8434 27.2273C44.3661 27.4318 43.9954 27.7088 43.7312 28.0582C43.467 28.3991 43.3349 28.8253 43.3349 29.3366C43.3349 30.0781 43.6033 30.6449 44.1403 31.0369C44.6857 31.4205 45.3761 31.6122 46.2113 31.6122ZM59.935 35V15.3636H65.2148V18.7898H65.4194C65.7773 17.571 66.3782 16.6506 67.2219 16.0284C68.0657 15.3977 69.0373 15.0824 70.1367 15.0824C70.4094 15.0824 70.7035 15.0994 71.0188 15.1335C71.3342 15.1676 71.6112 15.2145 71.8498 15.2741V20.1065C71.5941 20.0298 71.2404 19.9616 70.7887 19.902C70.337 19.8423 69.9237 19.8125 69.5487 19.8125C68.7475 19.8125 68.0316 19.9872 67.4009 20.3366C66.7788 20.6776 66.2844 21.1548 65.918 21.7685C65.56 22.3821 65.381 23.0895 65.381 23.8906V35H59.935ZM82.6236 35.3835C80.6378 35.3835 78.9205 34.9616 77.4716 34.1179C76.0313 33.2656 74.919 32.081 74.1349 30.5639C73.3509 29.0384 72.9588 27.2699 72.9588 25.2585C72.9588 23.2301 73.3509 21.4574 74.1349 19.9403C74.919 18.4148 76.0313 17.2301 77.4716 16.3864C78.9205 15.5341 80.6378 15.108 82.6236 15.108C84.6094 15.108 86.3224 15.5341 87.7628 16.3864C89.2116 17.2301 90.3281 18.4148 91.1122 19.9403C91.8963 21.4574 92.2884 23.2301 92.2884 25.2585C92.2884 27.2699 91.8963 29.0384 91.1122 30.5639C90.3281 32.081 89.2116 33.2656 87.7628 34.1179C86.3224 34.9616 84.6094 35.3835 82.6236 35.3835ZM82.6491 31.1648C83.5526 31.1648 84.3068 30.9091 84.9119 30.3977C85.517 29.8778 85.973 29.1705 86.2798 28.2756C86.5952 27.3807 86.7528 26.3622 86.7528 25.2202C86.7528 24.0781 86.5952 23.0597 86.2798 22.1648C85.973 21.2699 85.517 20.5625 84.9119 20.0426C84.3068 19.5227 83.5526 19.2628 82.6491 19.2628C81.7372 19.2628 80.9702 19.5227 80.348 20.0426C79.7344 20.5625 79.2699 21.2699 78.9545 22.1648C78.6477 23.0597 78.4943 24.0781 78.4943 25.2202C78.4943 26.3622 78.6477 27.3807 78.9545 28.2756C79.2699 29.1705 79.7344 29.8778 80.348 30.3977C80.9702 30.9091 81.7372 31.1648 82.6491 31.1648ZM108.064 22.0881V26.4091H96.1236V22.0881H108.064ZM122.155 35.358C120.246 35.358 118.546 35.0298 117.054 34.3736C115.571 33.7088 114.4 32.7969 113.539 31.6378C112.686 30.4702 112.248 29.1236 112.222 27.598H117.796C117.83 28.2372 118.039 28.7997 118.422 29.2855C118.814 29.7628 119.334 30.1335 119.982 30.3977C120.63 30.6619 121.358 30.794 122.168 30.794C123.012 30.794 123.757 30.6449 124.405 30.3466C125.053 30.0483 125.56 29.6349 125.926 29.1065C126.293 28.5781 126.476 27.9687 126.476 27.2784C126.476 26.5795 126.28 25.9616 125.888 25.4247C125.505 24.8793 124.951 24.4531 124.226 24.1463C123.51 23.8395 122.658 23.6861 121.669 23.6861H119.228V19.6207H121.669C122.505 19.6207 123.242 19.4759 123.881 19.1861C124.529 18.8963 125.032 18.4957 125.39 17.9844C125.748 17.4645 125.926 16.8594 125.926 16.169C125.926 15.5128 125.769 14.9375 125.453 14.4432C125.147 13.9403 124.712 13.5483 124.15 13.267C123.596 12.9858 122.948 12.8452 122.206 12.8452C121.456 12.8452 120.77 12.9815 120.148 13.2543C119.526 13.5185 119.027 13.8977 118.652 14.392C118.277 14.8864 118.077 15.4659 118.051 16.1307H112.746C112.772 14.6222 113.202 13.2926 114.037 12.142C114.873 10.9915 115.998 10.0923 117.412 9.4446C118.836 8.78835 120.442 8.46023 122.232 8.46023C124.039 8.46023 125.62 8.78835 126.975 9.4446C128.33 10.1009 129.382 10.9872 130.132 12.1037C130.891 13.2116 131.266 14.456 131.257 15.8366C131.266 17.3026 130.81 18.5256 129.89 19.5057C128.978 20.4858 127.789 21.108 126.323 21.3722V21.5767C128.249 21.8239 129.715 22.4929 130.721 23.5838C131.735 24.6662 132.238 26.0213 132.229 27.6491C132.238 29.1406 131.807 30.4659 130.938 31.625C130.077 32.7841 128.888 33.696 127.371 34.3608C125.854 35.0256 124.115 35.358 122.155 35.358ZM146.256 35.358C144.91 35.3494 143.61 35.1236 142.357 34.6804C141.113 34.2372 139.996 33.517 139.008 32.5199C138.019 31.5227 137.235 30.2017 136.656 28.5568C136.085 26.9119 135.799 24.892 135.799 22.4972C135.808 20.2983 136.059 18.3338 136.553 16.6037C137.056 14.8651 137.772 13.3906 138.701 12.1804C139.638 10.9702 140.759 10.0497 142.063 9.41903C143.367 8.77983 144.829 8.46023 146.448 8.46023C148.195 8.46023 149.738 8.80114 151.076 9.48295C152.414 10.1562 153.488 11.0724 154.298 12.2315C155.116 13.3906 155.61 14.6903 155.781 16.1307H150.322C150.109 15.2188 149.661 14.5028 148.979 13.983C148.298 13.4631 147.454 13.2031 146.448 13.2031C144.744 13.2031 143.448 13.9446 142.562 15.4276C141.684 16.9105 141.237 18.9261 141.219 21.4744H141.398C141.79 20.6989 142.319 20.0384 142.984 19.4929C143.657 18.9389 144.42 18.517 145.272 18.2273C146.133 17.929 147.04 17.7798 147.995 17.7798C149.546 17.7798 150.927 18.1463 152.137 18.8793C153.347 19.6037 154.302 20.6009 155.001 21.8707C155.7 23.1406 156.049 24.5937 156.049 26.2301C156.049 28.0028 155.636 29.5795 154.809 30.9602C153.991 32.3409 152.844 33.4233 151.37 34.2074C149.904 34.983 148.2 35.3665 146.256 35.358ZM146.231 31.0114C147.083 31.0114 147.846 30.8068 148.519 30.3977C149.192 29.9886 149.721 29.4347 150.104 28.7358C150.488 28.0369 150.68 27.2528 150.68 26.3835C150.68 25.5142 150.488 24.7344 150.104 24.044C149.729 23.3537 149.21 22.804 148.545 22.3949C147.88 21.9858 147.121 21.7812 146.269 21.7812C145.63 21.7812 145.038 21.9006 144.492 22.1392C143.955 22.3778 143.482 22.7102 143.073 23.1364C142.673 23.5625 142.357 24.0568 142.127 24.6193C141.897 25.1733 141.782 25.7656 141.782 26.3963C141.782 27.2401 141.974 28.0114 142.357 28.7102C142.749 29.4091 143.278 29.9673 143.942 30.3849C144.616 30.8026 145.379 31.0114 146.231 31.0114ZM170.239 35.5753C168.04 35.5668 166.148 35.0256 164.563 33.9517C162.987 32.8778 161.772 31.3224 160.92 29.2855C160.076 27.2486 159.658 24.7983 159.667 21.9347C159.667 19.0795 160.089 16.6463 160.933 14.6349C161.785 12.6236 162.999 11.0937 164.576 10.0455C166.161 8.98864 168.049 8.46023 170.239 8.46023C172.43 8.46023 174.313 8.98864 175.89 10.0455C177.475 11.1023 178.694 12.6364 179.546 14.6477C180.398 16.6506 180.82 19.0795 180.812 21.9347C180.812 24.8068 180.386 27.2614 179.533 29.2983C178.69 31.3352 177.479 32.8906 175.903 33.9645C174.326 35.0384 172.438 35.5753 170.239 35.5753ZM170.239 30.9858C171.739 30.9858 172.937 30.2315 173.832 28.723C174.727 27.2145 175.17 24.9517 175.161 21.9347C175.161 19.9489 174.957 18.2955 174.548 16.9744C174.147 15.6534 173.576 14.6605 172.835 13.9957C172.102 13.331 171.237 12.9986 170.239 12.9986C168.748 12.9986 167.555 13.7443 166.66 15.2358C165.765 16.7273 165.313 18.9602 165.305 21.9347C165.305 23.946 165.505 25.625 165.906 26.9716C166.315 28.3097 166.89 29.3153 167.631 29.9886C168.373 30.6534 169.242 30.9858 170.239 30.9858ZM186.939 35.3324C186.095 35.3324 185.37 35.0341 184.765 34.4375C184.169 33.8324 183.87 33.108 183.87 32.2642C183.87 31.429 184.169 30.7131 184.765 30.1165C185.37 29.5199 186.095 29.2216 186.939 29.2216C187.757 29.2216 188.473 29.5199 189.086 30.1165C189.7 30.7131 190.007 31.429 190.007 32.2642C190.007 32.8267 189.862 33.3423 189.572 33.8111C189.291 34.2713 188.92 34.642 188.46 34.9233C188 35.196 187.493 35.3324 186.939 35.3324Z" fill="white"/>
<path d="M81 10V0H85V10H81Z" fill="white"/>
<path d="M90.0002 11.826L98.6504 0.952148L101.781 3.44235L93.1305 14.3162L90.0002 11.826Z" fill="white"/>
</svg> */}
                  Munich RE
                </li>
              </div>
            </div>

            <div style={{ padding: "2px",borderRadius: '5px'}}>
              <div
                style={{ background: 'rgb(0 0 69)',borderRadius: '5px' }}
                className="relative h-full  rounded-[inherit]  overflow-hidden"
              >
                <li style={{borderRadius: '5px'}}>
                  {/* <svg width="131" height="44" viewBox="0 0 131 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.98153 35V8.81818H19.8537V13.9574H8.30966V19.3267H18.7159V24.4787H8.30966V35H1.98153ZM23.7601 35V8.81818H42.0158V13.9574H30.0883V19.3267H41.0826V24.4787H30.0883V29.8608H42.0158V35H23.7601ZM46.6989 8.81818H54.5355L61.1833 25.0284H61.4901L68.1378 8.81818H75.9744V35H69.8125V18.9176H69.5952L63.3054 34.8338H59.3679L53.0781 18.8281H52.8608V35H46.6989V8.81818ZM94.7935 16.6676C94.7083 15.7301 94.329 15.0014 93.6557 14.4815C92.991 13.9531 92.0407 13.6889 90.8049 13.6889C89.9867 13.6889 89.3049 13.7955 88.7594 14.0085C88.214 14.2216 87.8049 14.5156 87.5322 14.8906C87.2594 15.2571 87.1188 15.679 87.1103 16.1562C87.0932 16.5483 87.1699 16.8935 87.3404 17.1918C87.5194 17.4901 87.7751 17.7543 88.1074 17.9844C88.4484 18.206 88.8574 18.402 89.3347 18.5724C89.812 18.7429 90.3489 18.892 90.9455 19.0199L93.1955 19.5312C94.491 19.8125 95.633 20.1875 96.6217 20.6562C97.6188 21.125 98.454 21.6832 99.1273 22.331C99.8092 22.9787 100.325 23.7244 100.674 24.5682C101.024 25.4119 101.203 26.358 101.211 27.4062C101.203 29.0597 100.785 30.4787 99.9583 31.6634C99.1316 32.848 97.9427 33.7557 96.3915 34.3864C94.8489 35.017 92.9867 35.3324 90.8049 35.3324C88.6145 35.3324 86.7055 35.0043 85.0776 34.348C83.4498 33.6918 82.1842 32.6946 81.2807 31.3565C80.3773 30.0185 79.9128 28.3267 79.8873 26.2812H85.9469C85.9981 27.125 86.2239 27.8281 86.6245 28.3906C87.0251 28.9531 87.5748 29.3793 88.2736 29.669C88.981 29.9588 89.7992 30.1037 90.7282 30.1037C91.5805 30.1037 92.3049 29.9886 92.9015 29.7585C93.5066 29.5284 93.9711 29.2088 94.2949 28.7997C94.6188 28.3906 94.785 27.9219 94.7935 27.3935C94.785 26.8991 94.6316 26.4773 94.3333 26.1278C94.035 25.7699 93.5748 25.4631 92.9526 25.2074C92.339 24.9432 91.5549 24.7003 90.6003 24.4787L87.8645 23.8395C85.5975 23.3196 83.812 22.4801 82.508 21.321C81.204 20.1534 80.5563 18.5767 80.5648 16.5909C80.5563 14.9716 80.991 13.5526 81.8688 12.3338C82.7467 11.1151 83.9611 10.1648 85.5123 9.48295C87.0634 8.80114 88.8319 8.46023 90.8177 8.46023C92.8461 8.46023 94.606 8.8054 96.0975 9.49574C97.5975 10.1776 98.7609 11.1364 99.5876 12.3722C100.414 13.608 100.836 15.0398 100.853 16.6676H94.7935ZM109.982 35H103.181L112.015 8.81818H120.439L129.273 35H122.472L116.323 15.4148H116.118L109.982 35ZM109.074 24.696H123.29V29.5028H109.074V24.696Z" fill="white"/>
</svg>
 */}
                  FEMSA
                </li>
              </div>
            </div>

            <div style={{ padding: "2px",borderRadius: '5px' }}>
              <div
                style={{ background: 'rgb(0 0 69)',borderRadius: '5px' }}
                className="relative h-ful rounded-[inherit]  overflow-hidden"
              >
                <li style={{borderRadius: '5px'}}>
                  {/* <svg width="194" height="44" viewBox="0 0 194 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.98153 8.81818H9.81818L16.4659 25.0284H16.7727L23.4205 8.81818H31.2571V35H25.0952V18.9176H24.8778L18.5881 34.8338H14.6506L8.3608 18.8281H8.14347V35H1.98153V8.81818ZM48.5932 26.5241V15.3636H54.8319V35H48.8745V31.3438H48.6699C48.2353 32.5455 47.4938 33.5 46.4455 34.2074C45.4057 34.9062 44.1486 35.2557 42.6742 35.2557C41.3361 35.2557 40.16 34.9489 39.1458 34.3352C38.1316 33.7216 37.3432 32.8651 36.7807 31.7656C36.2182 30.6577 35.9327 29.3622 35.9242 27.8793V15.3636H42.1756V26.652C42.1841 27.7173 42.4654 28.5568 43.0194 29.1705C43.5733 29.7841 44.3276 30.0909 45.2821 30.0909C45.9043 30.0909 46.4625 29.9545 46.9569 29.6818C47.4597 29.4006 47.856 28.9957 48.1458 28.4673C48.4441 27.9304 48.5932 27.2827 48.5932 26.5241ZM65.7823 23.8011V35H59.5309V15.3636H65.4755V18.9688H65.6928C66.1275 17.767 66.869 16.8253 67.9173 16.1435C68.9656 15.4531 70.2141 15.108 71.663 15.108C73.0437 15.108 74.2411 15.419 75.2553 16.0412C76.2781 16.6548 77.0707 17.5156 77.6332 18.6236C78.2042 19.723 78.4855 21.0099 78.4769 22.4844V35H72.2255V23.7116C72.234 22.6207 71.957 21.7685 71.3945 21.1548C70.8406 20.5412 70.0693 20.2344 69.0806 20.2344C68.4244 20.2344 67.8448 20.3793 67.342 20.669C66.8477 20.9503 66.4641 21.3551 66.1914 21.8835C65.9272 22.4119 65.7909 23.0511 65.7823 23.8011ZM83.0673 35V15.3636H89.3187V35H83.0673ZM86.1994 13.0753C85.3216 13.0753 84.5673 12.7855 83.9366 12.206C83.306 11.6179 82.9906 10.9105 82.9906 10.0838C82.9906 9.26562 83.306 8.56676 83.9366 7.98722C84.5673 7.39915 85.3216 7.10511 86.1994 7.10511C87.0858 7.10511 87.84 7.39915 88.4622 7.98722C89.0929 8.56676 89.4082 9.26562 89.4082 10.0838C89.4082 10.9105 89.0929 11.6179 88.4622 12.206C87.84 12.7855 87.0858 13.0753 86.1994 13.0753ZM103.184 35.3707C101.113 35.3707 99.336 34.9446 97.853 34.0923C96.3786 33.2401 95.2451 32.0554 94.4524 30.5384C93.6598 29.0128 93.2635 27.2486 93.2635 25.2457C93.2635 23.2344 93.6598 21.4702 94.4524 19.9531C95.2536 18.4276 96.3914 17.2386 97.8658 16.3864C99.3487 15.5341 101.117 15.108 103.171 15.108C104.987 15.108 106.567 15.4361 107.914 16.0923C109.269 16.7486 110.326 17.6776 111.085 18.8793C111.852 20.0724 112.256 21.4744 112.299 23.0852H106.457C106.337 22.0795 105.996 21.2912 105.434 20.7202C104.88 20.1491 104.156 19.8636 103.261 19.8636C102.536 19.8636 101.901 20.0682 101.356 20.4773C100.81 20.8778 100.384 21.4744 100.077 22.267C99.7791 23.0511 99.63 24.0227 99.63 25.1818C99.63 26.3409 99.7791 27.321 100.077 28.1222C100.384 28.9148 100.81 29.5156 101.356 29.9247C101.901 30.3253 102.536 30.5256 103.261 30.5256C103.84 30.5256 104.352 30.402 104.795 30.1548C105.246 29.9077 105.617 29.5455 105.907 29.0682C106.197 28.5824 106.38 27.9943 106.457 27.304H112.299C112.239 28.9233 111.835 30.3381 111.085 31.5483C110.343 32.7585 109.299 33.7003 107.952 34.3736C106.614 35.0384 105.025 35.3707 103.184 35.3707ZM122.47 23.8011V35H116.218V8.81818H122.265V18.9688H122.482C122.926 17.7585 123.65 16.8125 124.656 16.1307C125.67 15.4489 126.91 15.108 128.376 15.108C129.757 15.108 130.958 15.4148 131.981 16.0284C133.004 16.6335 133.796 17.4901 134.359 18.598C134.93 19.706 135.211 21.0014 135.203 22.4844V35H128.951V23.7116C128.96 22.6207 128.687 21.7685 128.133 21.1548C127.579 20.5412 126.799 20.2344 125.794 20.2344C125.137 20.2344 124.558 20.3793 124.055 20.669C123.561 20.9503 123.173 21.3551 122.892 21.8835C122.619 22.4119 122.478 23.0511 122.47 23.8011ZM148.279 35V8.81818H159.095C161.055 8.81818 162.747 9.17187 164.17 9.87926C165.602 10.5781 166.705 11.5838 167.481 12.8963C168.257 14.2003 168.644 15.7472 168.644 17.5369C168.644 19.3523 168.248 20.8949 167.455 22.1648C166.663 23.4261 165.538 24.3892 164.08 25.054C162.623 25.7102 160.897 26.0384 158.903 26.0384H152.063V21.0526H157.727C158.681 21.0526 159.478 20.929 160.117 20.6818C160.765 20.4261 161.255 20.0426 161.588 19.5312C161.92 19.0114 162.086 18.3466 162.086 17.5369C162.086 16.7273 161.92 16.0582 161.588 15.5298C161.255 14.9929 160.765 14.5923 160.117 14.3281C159.47 14.0554 158.673 13.919 157.727 13.919H154.607V35H148.279ZM163.019 23.0341L169.539 35H162.636L156.244 23.0341H163.019ZM172.835 35V8.81818H191.091V13.9574H179.163V19.3267H190.158V24.4787H179.163V29.8608H191.091V35H172.835Z" fill="white"/>
</svg> */}
                  CLARO 360
                </li>
              </div>
            </div>

            <div style={{ padding: "2px",borderRadius: '5px' }}>
              <div
                style={{ background: 'rgb(0 0 69)',borderRadius: '5px' }}
                className="relative h-full rounded-[inherit]  overflow-hidden"
              >
                <li style={{borderRadius: '5px'}}>
                  {/* <svg width="103" height="44" viewBox="0 0 103 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.98153 8.81818H9.81818L16.4659 25.0284H16.7727L23.4205 8.81818H31.2571V35H25.0952V18.9176H24.8778L18.5881 34.8338H14.6506L8.3608 18.8281H8.14347V35H1.98153V8.81818ZM44.0523 8.81818V35H37.7242V8.81818H44.0523ZM50.545 35V8.81818H61.3603C63.3205 8.81818 65.0123 9.17187 66.4356 9.87926C67.8674 10.5781 68.9711 11.5838 69.7467 12.8963C70.5222 14.2003 70.91 15.7472 70.91 17.5369C70.91 19.3523 70.5137 20.8949 69.7211 22.1648C68.9285 23.4261 67.8035 24.3892 66.3461 25.054C64.8887 25.7102 63.1629 26.0384 61.1686 26.0384H54.3291V21.0526H59.9924C60.947 21.0526 61.7438 20.929 62.383 20.6818C63.0308 20.4261 63.5208 20.0426 63.8532 19.5312C64.1856 19.0114 64.3518 18.3466 64.3518 17.5369C64.3518 16.7273 64.1856 16.0582 63.8532 15.5298C63.5208 14.9929 63.0308 14.5923 62.383 14.3281C61.7353 14.0554 60.9384 13.919 59.9924 13.919H56.8731V35H50.545ZM65.285 23.0341L71.8049 35H64.9015L58.5095 23.0341H65.285ZM82.5643 35H75.7631L84.5969 8.81818H93.0216L101.855 35H95.0543L88.9052 15.4148H88.7006L82.5643 35ZM81.6566 24.696H95.8725V29.5028H81.6566V24.696Z" fill="white"/>
</svg> */}
                  MIRA
                </li>
              </div>
            </div>

            <div style={{ padding: "2px",borderRadius: '5px' }}>
              <div
                style={{ background: 'rgb(0 0 69)',borderRadius: '5px' }}
                className="relative h-full rounded-[inherit]  overflow-hidden"
              >
                <li style={{borderRadius: '5px'}}>
                  {/* <svg width="260" height="90" viewBox="0 0 260 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.98153 36V9.81818H12.7969C14.7571 9.81818 16.4489 10.2017 17.8722 10.9688C19.304 11.7273 20.4077 12.7884 21.1832 14.152C21.9588 15.5071 22.3466 17.0838 22.3466 18.8821C22.3466 20.6889 21.9503 22.2699 21.1577 23.625C20.3736 24.9716 19.2528 26.0156 17.7955 26.7571C16.3381 27.4986 14.608 27.8693 12.6051 27.8693H5.93182V22.8835H11.429C12.3835 22.8835 13.1804 22.7173 13.8196 22.3849C14.4673 22.0526 14.9574 21.5881 15.2898 20.9915C15.6222 20.3864 15.7884 19.6832 15.7884 18.8821C15.7884 18.0724 15.6222 17.3736 15.2898 16.7855C14.9574 16.1889 14.4673 15.7287 13.8196 15.4048C13.1719 15.081 12.375 14.919 11.429 14.919H8.30966V36H1.98153ZM34.9654 36.3707C32.9029 36.3707 31.1302 35.9489 29.6472 35.1051C28.1728 34.2528 27.035 33.0682 26.2338 31.5511C25.4412 30.0256 25.0449 28.2571 25.0449 26.2457C25.0449 24.2259 25.4412 22.4574 26.2338 20.9403C27.035 19.4148 28.1728 18.2301 29.6472 17.3864C31.1302 16.5341 32.9029 16.108 34.9654 16.108C37.0279 16.108 38.7963 16.5341 40.2708 17.3864C41.7537 18.2301 42.8915 19.4148 43.6841 20.9403C44.4853 22.4574 44.8858 24.2259 44.8858 26.2457C44.8858 28.2571 44.4853 30.0256 43.6841 31.5511C42.8915 33.0682 41.7537 34.2528 40.2708 35.1051C38.7963 35.9489 37.0279 36.3707 34.9654 36.3707ZM35.0037 31.6534C35.7537 31.6534 36.3887 31.4233 36.9086 30.9631C37.4285 30.5028 37.8248 29.8636 38.0975 29.0455C38.3787 28.2273 38.5194 27.2812 38.5194 26.2074C38.5194 25.1165 38.3787 24.1619 38.0975 23.3438C37.8248 22.5256 37.4285 21.8864 36.9086 21.4261C36.3887 20.9659 35.7537 20.7358 35.0037 20.7358C34.2282 20.7358 33.5719 20.9659 33.035 21.4261C32.5066 21.8864 32.1017 22.5256 31.8205 23.3438C31.5478 24.1619 31.4114 25.1165 31.4114 26.2074C31.4114 27.2812 31.5478 28.2273 31.8205 29.0455C32.1017 29.8636 32.5066 30.5028 33.035 30.9631C33.5719 31.4233 34.2282 31.6534 35.0037 31.6534ZM48.8083 43.3636V16.3636H54.9958V19.7259H55.1875C55.4432 19.1293 55.8054 18.554 56.2742 18C56.7514 17.446 57.3565 16.9943 58.0895 16.6449C58.831 16.2869 59.7173 16.108 60.7486 16.108C62.1122 16.108 63.3864 16.4659 64.571 17.1818C65.7642 17.8977 66.7273 19.0014 67.4602 20.4929C68.1932 21.9844 68.5597 23.8849 68.5597 26.1946C68.5597 28.419 68.206 30.2812 67.4986 31.7812C66.7997 33.2812 65.8537 34.4062 64.6605 35.1562C63.4759 35.9062 62.1591 36.2812 60.7102 36.2812C59.7216 36.2812 58.8651 36.1193 58.1406 35.7955C57.4162 35.4716 56.8068 35.0455 56.3125 34.517C55.8267 33.9886 55.4517 33.4219 55.1875 32.8168H55.0597V43.3636H48.8083ZM54.9318 26.1818C54.9318 27.2386 55.0725 28.1591 55.3537 28.9432C55.6435 29.7273 56.0568 30.3366 56.5938 30.7713C57.1392 31.1974 57.7912 31.4105 58.5497 31.4105C59.3168 31.4105 59.9688 31.1974 60.5057 30.7713C61.0426 30.3366 61.4475 29.7273 61.7202 28.9432C62.0014 28.1591 62.1421 27.2386 62.1421 26.1818C62.1421 25.125 62.0014 24.2088 61.7202 23.4332C61.4475 22.6577 61.0426 22.0568 60.5057 21.6307C59.9773 21.2045 59.3253 20.9915 58.5497 20.9915C57.7827 20.9915 57.1307 21.2003 56.5938 21.6179C56.0568 22.0355 55.6435 22.6321 55.3537 23.4077C55.0725 24.1832 54.9318 25.108 54.9318 26.1818ZM85.2246 27.5241V16.3636H91.4633V36H85.5059V32.3438H85.3013C84.8667 33.5455 84.1252 34.5 83.0769 35.2074C82.0371 35.9062 80.78 36.2557 79.3056 36.2557C77.9675 36.2557 76.7914 35.9489 75.7772 35.3352C74.763 34.7216 73.9746 33.8651 73.4121 32.7656C72.8496 31.6577 72.5641 30.3622 72.5556 28.8793V16.3636H78.807V27.652C78.8155 28.7173 79.0968 29.5568 79.6508 30.1705C80.2047 30.7841 80.959 31.0909 81.9136 31.0909C82.5357 31.0909 83.094 30.9545 83.5883 30.6818C84.0911 30.4006 84.4874 29.9957 84.7772 29.4673C85.0755 28.9304 85.2246 28.2827 85.2246 27.5241ZM102.414 9.81818V36H96.1623V9.81818H102.414ZM112.648 36.3324C111.395 36.3324 110.283 36.1236 109.312 35.706C108.349 35.2798 107.586 34.6406 107.023 33.7884C106.469 32.9276 106.192 31.8494 106.192 30.554C106.192 29.4631 106.384 28.5426 106.768 27.7926C107.151 27.0426 107.68 26.4332 108.353 25.9645C109.026 25.4957 109.802 25.142 110.68 24.9034C111.557 24.6562 112.495 24.4901 113.492 24.4048C114.609 24.3026 115.508 24.196 116.189 24.0852C116.871 23.9659 117.366 23.7997 117.672 23.5866C117.988 23.3651 118.145 23.054 118.145 22.6534V22.5895C118.145 21.9332 117.92 21.4261 117.468 21.0682C117.016 20.7102 116.407 20.5312 115.64 20.5312C114.813 20.5312 114.148 20.7102 113.645 21.0682C113.143 21.4261 112.823 21.9205 112.687 22.5511L106.921 22.3466C107.091 21.1534 107.53 20.0881 108.238 19.1506C108.954 18.2045 109.934 17.4631 111.178 16.9261C112.431 16.3807 113.935 16.108 115.691 16.108C116.944 16.108 118.099 16.2571 119.155 16.5554C120.212 16.8452 121.133 17.2713 121.917 17.8338C122.701 18.3878 123.306 19.0696 123.732 19.8793C124.167 20.6889 124.384 21.6136 124.384 22.6534V36H118.503V33.2642H118.35C118.001 33.929 117.553 34.4915 117.008 34.9517C116.471 35.4119 115.836 35.7571 115.103 35.9872C114.378 36.2173 113.56 36.3324 112.648 36.3324ZM114.579 32.2415C115.252 32.2415 115.857 32.1051 116.394 31.8324C116.939 31.5597 117.374 31.1847 117.698 30.7074C118.022 30.2216 118.184 29.6591 118.184 29.0199V27.1534C118.005 27.2472 117.787 27.3324 117.532 27.4091C117.285 27.4858 117.012 27.5582 116.714 27.6264C116.415 27.6946 116.109 27.7543 115.793 27.8054C115.478 27.8565 115.175 27.9034 114.886 27.946C114.297 28.0398 113.795 28.1847 113.377 28.3807C112.968 28.5767 112.653 28.8324 112.431 29.1477C112.218 29.4545 112.111 29.821 112.111 30.2472C112.111 30.8949 112.341 31.3892 112.802 31.7301C113.27 32.071 113.863 32.2415 114.579 32.2415ZM128.927 36V16.3636H134.999V19.9432H135.204C135.561 18.6477 136.145 17.6847 136.955 17.054C137.765 16.4148 138.706 16.0952 139.78 16.0952C140.07 16.0952 140.368 16.1165 140.675 16.1591C140.982 16.1932 141.267 16.2486 141.532 16.3253V21.7585C141.233 21.6562 140.841 21.5753 140.356 21.5156C139.878 21.456 139.452 21.4261 139.077 21.4261C138.336 21.4261 137.667 21.5923 137.07 21.9247C136.482 22.2486 136.017 22.7045 135.677 23.2926C135.344 23.8722 135.178 24.554 135.178 25.3381V36H128.927ZM153.253 36V9.81818H164.171C166.131 9.81818 167.772 10.0952 169.093 10.6491C170.422 11.2031 171.419 11.9787 172.084 12.9759C172.758 13.973 173.094 15.1278 173.094 16.4403C173.094 17.4375 172.885 18.3281 172.468 19.1122C172.05 19.8878 171.475 20.5312 170.742 21.0426C170.009 21.554 169.161 21.9119 168.198 22.1165V22.3722C169.255 22.4233 170.231 22.7088 171.125 23.2287C172.029 23.7486 172.753 24.473 173.299 25.402C173.844 26.3224 174.117 27.4134 174.117 28.6747C174.117 30.081 173.759 31.3381 173.043 32.446C172.327 33.5455 171.292 34.4148 169.936 35.054C168.581 35.6847 166.936 36 165.002 36H153.253ZM159.581 30.8991H163.493C164.865 30.8991 165.875 30.6392 166.523 30.1193C167.179 29.5994 167.508 28.875 167.508 27.946C167.508 27.2727 167.35 26.6932 167.034 26.2074C166.719 25.7131 166.272 25.3338 165.692 25.0696C165.113 24.7969 164.418 24.6605 163.608 24.6605H159.581V30.8991ZM159.581 20.5824H163.084C163.775 20.5824 164.388 20.4673 164.925 20.2372C165.462 20.0071 165.88 19.6747 166.178 19.2401C166.485 18.8054 166.638 18.2812 166.638 17.6676C166.638 16.7898 166.327 16.0994 165.705 15.5966C165.083 15.0938 164.243 14.8423 163.186 14.8423H159.581V20.5824ZM183.415 36.3324C182.162 36.3324 181.05 36.1236 180.078 35.706C179.115 35.2798 178.353 34.6406 177.79 33.7884C177.236 32.9276 176.959 31.8494 176.959 30.554C176.959 29.4631 177.151 28.5426 177.534 27.7926C177.918 27.0426 178.446 26.4332 179.12 25.9645C179.793 25.4957 180.568 25.142 181.446 24.9034C182.324 24.6562 183.262 24.4901 184.259 24.4048C185.375 24.3026 186.274 24.196 186.956 24.0852C187.638 23.9659 188.132 23.7997 188.439 23.5866C188.754 23.3651 188.912 23.054 188.912 22.6534V22.5895C188.912 21.9332 188.686 21.4261 188.235 21.0682C187.783 20.7102 187.174 20.5312 186.406 20.5312C185.58 20.5312 184.915 20.7102 184.412 21.0682C183.909 21.4261 183.59 21.9205 183.453 22.5511L177.688 22.3466C177.858 21.1534 178.297 20.0881 179.004 19.1506C179.72 18.2045 180.701 17.4631 181.945 16.9261C183.198 16.3807 184.702 16.108 186.458 16.108C187.71 16.108 188.865 16.2571 189.922 16.5554C190.979 16.8452 191.899 17.2713 192.683 17.8338C193.468 18.3878 194.073 19.0696 194.499 19.8793C194.933 20.6889 195.151 21.6136 195.151 22.6534V36H189.27V33.2642H189.117C188.767 33.929 188.32 34.4915 187.774 34.9517C187.237 35.4119 186.603 35.7571 185.87 35.9872C185.145 36.2173 184.327 36.3324 183.415 36.3324ZM185.345 32.2415C186.019 32.2415 186.624 32.1051 187.161 31.8324C187.706 31.5597 188.141 31.1847 188.465 30.7074C188.789 30.2216 188.951 29.6591 188.951 29.0199V27.1534C188.772 27.2472 188.554 27.3324 188.299 27.4091C188.051 27.4858 187.779 27.5582 187.48 27.6264C187.182 27.6946 186.875 27.7543 186.56 27.8054C186.245 27.8565 185.942 27.9034 185.652 27.946C185.064 28.0398 184.561 28.1847 184.144 28.3807C183.735 28.5767 183.419 28.8324 183.198 29.1477C182.985 29.4545 182.878 29.821 182.878 30.2472C182.878 30.8949 183.108 31.3892 183.568 31.7301C184.037 32.071 184.629 32.2415 185.345 32.2415ZM205.945 24.8011V36H199.693V16.3636H205.638V19.9688H205.855C206.29 18.767 207.031 17.8253 208.08 17.1435C209.128 16.4531 210.376 16.108 211.825 16.108C213.206 16.108 214.403 16.419 215.418 17.0412C216.44 17.6548 217.233 18.5156 217.796 19.6236C218.367 20.723 218.648 22.0099 218.639 23.4844V36H212.388V24.7116C212.396 23.6207 212.119 22.7685 211.557 22.1548C211.003 21.5412 210.232 21.2344 209.243 21.2344C208.587 21.2344 208.007 21.3793 207.504 21.669C207.01 21.9503 206.626 22.3551 206.354 22.8835C206.09 23.4119 205.953 24.0511 205.945 24.8011ZM228.867 30.848L228.893 23.3949H229.762L235.285 16.3636H242.367L234.16 26.4375H232.511L228.867 30.848ZM223.23 36V9.81818H229.481V36H223.23ZM235.426 36L230.286 27.8438L234.403 23.4077L242.649 36H235.426Z" fill="white"/>
</svg> */}
                  Popular Bank
                </li>
              </div>
            </div>

            {/* <li>animation</li>
          <li>UI/UX</li> */}
          </ul>
        </div>
      </div>
      </div>
    </>
  );
};

export default Clients;
