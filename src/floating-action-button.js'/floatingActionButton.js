import React from "react";
import { FaPlus } from "react-icons/fa";

import "./floatingActionButton.css";

const FloatingActionButton = ({
  icon = <FaPlus size={18} />,
  textContent,
  bgColor = "#3b71ca",
  iconColor = "#fff",
  onClick,
  size = "55px",
}) => {
  return textContent ? (
    <div
      onClick={onClick}
      className="icon-text-fab"
      style={{
        backgroundColor: `${bgColor}`,
        color: `${iconColor}`,
      }}
    >
      <span>{icon}</span>
      <span
        style={{
          fontSize: "15px",
          marginLeft: "10px",
        }}
      >
        {textContent}
      </span>
    </div>
  ) : (
    <div
      onClick={onClick}
      className="icon-fab"
      style={{
        backgroundColor: `${bgColor}`,
        height: `${size}`,
        width: `${size}`,
        color: `${iconColor}`,
      }}
    >
      {icon}
    </div>
  );
};

export default FloatingActionButton;
