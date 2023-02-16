import React from "react";
import "./outlineButton.css";

const OutlineButton = ({
  title,
  borderColor = "#2cd9ff",
  backgroundColor = "#090909",
}) => {
  return (
    <div
      className="button-outline"
      style={{
        borderColor: `${borderColor}`,
        backgroundColor: `${backgroundColor}`,
      }}
    >
      {title}
    </div>
  );
};

export default OutlineButton;
