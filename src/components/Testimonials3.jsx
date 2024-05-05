import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { ImQuotesLeft } from "react-icons/im";

import "./Testimonials3.css";

const Testimonials3 = () => {
  const [currentCard, setCurrentCard] = useState(2); // Initialize currentCard state to 2
  const [dir, setDir] = useState(1);

  useEffect(() => {
    // Run animation to position the cards when the component mounts
    moveCards();
  }, []);

  const testimonials = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1627161683077-e34782c24d81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=703&q=80",
      name: "Sam Gharnagh",
      title: "Vice President",
      info: "Erick helped in QA activities for an upgrade project of the Pega platform with smooth successful result. He took initiative to quickly learn the client application, create test cases and execute them",
    },
    {
        id: 2,
        img: "https://plus.unsplash.com/premium_photo-1670588776139-da93b47afc6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        name: "Madhu Chalamaiah",
        title: "Lead Developer",
        info: "I had the pleasure of working alongside with Erick in couple of projects. His meticulous attention to detail, strong analytical skills, and dedication to ensuring product quality were evident in every project. Erick is a valuable asset to any team, and I highly recommend them for their expertise.",
      },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
      name: "Darwin Batres",
      title: "Lead Developer",
      info: "Erick has been doing a great job, he got direct exposure to the client and was able to interact with them. The client liked his work and he was able to help them directly whenever they needed it. i.e creating data, providing demos, knowledge transfer.",
    },
    {
      id: 3,
      img: "https://plus.unsplash.com/premium_photo-1670588776139-da93b47afc6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "Madhu Chalamaiah",
      title: "Lead Developer",
      info: "I had the pleasure of working alongside with Erick in couple of projects. His meticulous attention to detail, strong analytical skills, and dedication to ensuring product quality were evident in every project. Erick is a valuable asset to any team, and I highly recommend them for their expertise.",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
      name: "Danica W.",
      title: "Founder of XYZ",
      info: "Erick demostró no solo habilidades técnicas sólidas sino también un compromiso importante con sus responsabilidades. Su enfoque meticuloso y su capacidad para abordar desafíos complejos fueron de gran valor para el equipo y contribuyeron significativamente al éxito de nuestros proyectos. ",
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "Peter H.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore.",
    },
  ];

  const moveCards = (dur = 0) => {
    gsap
      .timeline({
        defaults: {
          duration: dur,
          ease: "power3",
          stagger: { each: -0.03 * dir },
        },
      })
      .to(
        ".testimonial-card",
        {
          x: -270 * currentCard,
          y: (i) => (i === currentCard ? 0 : 35),
          height: (i) => (i === currentCard ? 270 : 240),
          ease: "elastic.out(0.4)",
        },
        0
      )
      .to(
        ".testimonial-card",
        {
          cursor: (i) => (i === currentCard ? "default" : "pointer"),
          "box-shadow": (i) =>
            i === currentCard ? "0 6px 11px #00000030" : "0 0px 0px #00000030",
        //   border: (i) => (i === currentCard ? "2px solid #26a" : "none"),
        // border: '1px solid #e3e3e3',
          background: (i) =>
            i === currentCard ? "rgb(8, 8, 47)" : "rgb(8, 8, 47)",
          ease: "expo",
        },
        0
      )
      .to(
        ".icon svg",
        {
          attr: {
            stroke: (i) => (i === currentCard ? "transparent" : "#36a"),
            fill: (i) => (i === currentCard ? "#36a" : "transparent"),
          },
        },
        0
      )
      .to(
        ".arrow-btn-prev",
        {
          autoAlpha: currentCard === 0 ? 0 : 1,
        },
        0
      )
      .to(
        ".arrow-btn-next",
        {
          autoAlpha: currentCard === 4 ? 0 : 1,
        },
        0
      )
      .to(
        ".testimonial-card h4",
        {
          y: (i) => (i === currentCard ? 0 : 8),
          opacity: (i) => (i === currentCard ? 1 : 0),
        },
        0
      );
  };

  const handleArrowButtonClick = (i) => {
    setDir(i === 0 ? 1 : -1);
    setCurrentCard((prevCard) => {
      let newCard = prevCard + (i === 0 ? -1 : 1);
      newCard = Math.max(0, Math.min(4, newCard)); // Ensure the newCard stays within range
      return newCard;
    });
    moveCards(0.75);
  };

  const handleCardButtonClick = (i) => {
    setDir(i < currentCard ? 1 : -1);
    setCurrentCard(i);
    moveCards(0.75);
  };

  return (
    <>
      <div
        style={{ marginBottom: "3%" }}
        className="flex justify-center w-full"
      >
        <h3 className="text-slate-50 text-2xl font-bold text-left">
          Testimonials
        </h3>
      </div>

      <div className=" overflow-hidden testimonial-wrapper">
        <div className="testimonial-cards">
          {testimonials.map((t) => (
            <button
            // style={{border: '1px solid #e3e3e3'}}
              key={t.id}
              className={`testimonial-card testimonial-card${t.id}`}
              onClick={() => handleCardButtonClick(t.id)}
              tabIndex="-1"
            >
             <div style={{border: '1px solid #c1c1c159'}} className="flex flex-col bg-slate-900 text-slate-50 p-4">
              <div className="flex justify-between items-center">
                <span
                  style={{ marginTop: "-15%" }}
                  className="text-7xl text-slate-700"
                >
                  <ImQuotesLeft style={{ width: "70%" }} />
                </span>
                <div className="text-right flex flex-col">
                  <span className="block font-semibold text-lg mb-1">
                    {t.name}
                  </span>
                  <span className="block mb-3 text-sm font-medium">
                    {t.title}
                  </span>
                </div>
              </div>
              <span
                style={{ marginTop: "7%" }}
                className="text-left block text-lg text-slate-300"
              >
                {t.info}
              </span>
            </div>
            </button>
          ))}
        </div>
        <button
          className="arrow-btn arrow-btn-prev"
          onClick={() => handleArrowButtonClick(0)}
          tabIndex="0"
        >
          <IoIosArrowBack style={{ width: "100%", fill: "#fff" }} />
        </button>
        <button
          className="arrow-btn arrow-btn-next"
          onClick={() => handleArrowButtonClick(1)}
          tabIndex="0"
        >
          <IoIosArrowForward style={{ width: "100%", fill: "#fff" }} />
        </button>
      </div>
    </>
  );
};

export default Testimonials3;

const testimonials = {
  top: [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1627161683077-e34782c24d81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=703&q=80",
      name: "Sam Gharnagh",
      title: "Vice President and Head of Operations",
      info: "Erick helped in QA activities for an upgrade project of the Pega platform with smooth succesful result. He took initiative to quicky learn the client application, create test cases and execute them",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
      name: "Darwin Batres",
      title: "Lead Developer",
      info: "Erick has been doing a great job, he got direct exposure to the client and was able to interact with them. The client liked his work and he was able to help them directly whenever they needed it. i.e creating data, providing demos, knowledge transfer.",
    },
    {
      id: 3,
      img: "https://plus.unsplash.com/premium_photo-1670588776139-da93b47afc6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "Madhu Chalamaiah",
      title: "Lead Developer",
      info: "I had the pleasure of working alongside with Erick in couple of projects. His meticulous attention to detail, strong analytical skills, and dedication to ensuring product quiality were evident in every project. Erick is a valuable asset to any team, and I highly recommend them fot their expertise.",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
      name: "Danica W.",
      title: "Founder of XYZ",
      info: "Erick demostró no solo habilidades técnicas sólidas sino también un compromiso importante con sus responsabilidades. Su enfoque meticuloso y su capacidad para abordar desafíos complejos fueron de gran valor para el equipo y contribuyeron significativamente al éxito de nuestros proyectos. ",
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "Peter H.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore.",
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      name: "Lanny B.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur esse!",
    },
  ],
  middle: [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1573497161161-c3e73707e25c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "Alex F.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam.",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1580518324671-c2f0833a3af3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "Claude O.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt.",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
      name: "Max Q.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis.",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1562788869-4ed32648eb72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80",
      name: "Jeff R.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur esse corporis!",
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1625504615927-c14f4f309b63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80",
      name: "Kevin K.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit!",
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1589729132389-8f0e0b55b91e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      name: "Andrea B.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere!",
    },
  ],
  bottom: [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1558222218-b7b54eede3f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "Danny G.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur!",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1620932934088-fbdb2920e484?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80",
      name: "Ian D.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere.",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1514222709107-a180c68d72b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=898&q=80",
      name: "Ben S.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "Matthew I.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur esse corporis!",
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1597346908500-28cda8acfe4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "Garrett P.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia.",
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1642790595397-7047dc98fa72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80",
      name: "Xavier C.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur.",
    },
  ],
};
