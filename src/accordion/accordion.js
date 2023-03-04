import React, { useState } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

import "./accordion.scss";

const Accordion = () => {
  const [showContent, setShowContent] = useState(false);

  const handleContainerSection = () => {
    setShowContent(!showContent);
  };
  return (
    <div className="accordion__container">
      <div
        className="accordion__container--section"
        onMouseEnter={handleContainerSection}
        onMouseLeave={handleContainerSection}
      >
        <div className="accordion__container--title-container">
          <p className="title">Accordion Title</p>
          <div className="icon__container">
            {showContent ? (
              <AiOutlineArrowUp size={16} />
            ) : (
              <AiOutlineArrowDown size={16} />
            )}
          </div>
        </div>
        <div className="accordion__container--hidden-section">
          lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s. lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s.
        </div>
      </div>
    </div>
  );
};

export default Accordion;
