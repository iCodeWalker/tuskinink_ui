import React from "react";
import "./gradientOutlineButton.css";

const GradientOutlineButton = ({
  title,
  borderColor = "#2cd9ff",
  backgroundColor = "#7effb2",
}) => {
  return <div className="button-gradient-outline">{title}</div>;
};

export default GradientOutlineButton;
