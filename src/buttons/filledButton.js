import React from "react";
import "./filledButton.scss";

const FilledButton = ({
  title,
  borderColor = "#2cd9ff",
  backgroundColor = "#2cd9ff",
}) => {
  return (
    <div
      className="button-filled"
      style={{
        borderColor: `${borderColor}`,
        backgroundColor: `${backgroundColor}`,
      }}
    >
      {title}
    </div>
  );
};

export default FilledButton;
