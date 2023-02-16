import React from "react";
import "./overlapButton.css";

const OverlapButton = ({
  title,
  borderColor = "#2cd9ff",
  backgroundColor = "#7effb2",
}) => {
  return (
    <div
      className="button-overlap"
      style={{
        borderColor: `${borderColor}`,
        backgroundColor: `${backgroundColor}`,
      }}
    >
      {title}
    </div>
  );
};

export default OverlapButton;
