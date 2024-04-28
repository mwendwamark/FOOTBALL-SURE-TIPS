import React, { useRef, useState } from "react";
import data from "../assets/AccordionData";
import { RiArrowDropDownLine } from "react-icons/ri";
import "../Styles/Accordion.css";
import { PiSoccerBallFill } from "react-icons/pi";

//  accordionitem component
const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  const contentHeight = useRef();
  return (
    <div className="wrapper">
      <div className="question-section">
        {/* <PiSoccerBallFill /> */}
        <button
          className={`question-container ${isOpen ? "active" : ""}`}
          onClick={onClick}
        >
          <p className="question-content">{question}</p>
          <RiArrowDropDownLine className={`arrow ${isOpen ? "active" : ""}`} />
        </button>
      </div>

      <div
        ref={contentHeight}
        className="answer-container"
        style={
          isOpen
            ? { height: contentHeight.current.scrollHeight }
            : { height: "0px" }
        }
      >
        {/* Render answer as HTML */}
        <div dangerouslySetInnerHTML={{ __html: answer }} className="answer-content" />
      </div>
    </div>
  );
};

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="accordion-container">
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
