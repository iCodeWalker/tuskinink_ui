import React from "react";
import "./gradientOutlineButton.scss";

const GradientOutlineButton = ({
  title,
  borderColor = "#2cd9ff",
  backgroundColor = "#7effb2",
}) => {
  return <div className="btn-gradient-outline">{title}</div>;
};

export default GradientOutlineButton;
