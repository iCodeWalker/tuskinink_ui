import React from "react";
import { FaPlus } from "react-icons/fa";

import "./floatingActionButton.css";

const FloatingActionButton = ({
  icon = <FaPlus />,
  bgColor = "#3b71ca",
  iconColor = "#fff",
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: `${bgColor}`,
        height: "55px",
        width: "55px",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: `${iconColor}`,
      }}
    >
      {icon}
    </div>
  );
};

export default FloatingActionButton;
