import React from "react";
import "./roundFilledButton.scss";

const RoundFilledButton = ({
  title,
  borderColor = "#2cd9ff",
  backgroundColor = "#2cd9ff",
}) => {
  return (
    <div
      className="button-round-filled "
      style={{
        borderColor: `${borderColor}`,
        backgroundColor: `${backgroundColor}`,
      }}
    >
      {title}
    </div>
  );
};

export default RoundFilledButton;
