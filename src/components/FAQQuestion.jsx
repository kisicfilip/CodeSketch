import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import "../index.css"; // Import the CSS file for styles

const FAQQuestion = (props) => {
  const { questionTitle, questionAnswer } = props;
  const [isExpanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div className="faq-question-container flex justify-between">
      <div className="pb-10">
        <h2
          className="font-ebrimaBold text-white text-xl leading-tight tracking-[2.4px] cursor-pointer"
          onClick={toggleExpansion}
        >
          {questionTitle}
        </h2>
        <p
          className={`faq-answer text-white text-base font-ebrima tracking-[1.9px] leading-[24px] pt-5 max-w-[90%] ${
            isExpanded ? "open" : "closed"
          }`}
        >
          {questionAnswer}
        </p>
      </div>
      <div className="cursor-pointer" onClick={toggleExpansion}>
        <FontAwesomeIcon
          icon={isExpanded ? faMinus : faPlus}
          style={{ color: "#A885E5", fontSize: "1.5em" }}
        />
      </div>
    </div>
  );
};

export default FAQQuestion;
