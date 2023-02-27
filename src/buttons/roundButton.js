import React from "react";
import "./roundButton.scss";

const RoundButton = ({
  title,
  borderColor = "#2cd9ff",
  backgroundColor = "#090909",
}) => {
  return (
    <div
      className="button-round"
      style={{
        borderColor: `${borderColor}`,
        backgroundColor: `${backgroundColor}`,
      }}
    >
      {title}
    </div>
  );
};

export default RoundButton;
