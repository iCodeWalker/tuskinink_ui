import React from "react";

import "./card.css";

const Card = ({
  imageSrc,
  titleText = "Title Text",
  titleTextColor = "white",
  descriptionText,
  descriptionTextColor = "white",
  buttonTitle = "Submit",
  buttonTitleColor = "white",
  buttonBgColor = "#3b71ca",
  onButtonClick,
}) => {
  return (
    <div className="container">
      <div className="card">
        <div className="face face1">
          <div className="card-content">
            <img src={imageSrc} alt="new" />
            <h3 style={{ color: `${titleTextColor}` }}>{titleText}</h3>
          </div>
        </div>

        <div
          className="face face2"
          style={{
            backgroundColor: "#1f1f1f",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            className="card-content"
            style={{ color: `${descriptionTextColor}`, fontSize: "13px" }}
          >
            {descriptionText}
          </div>
          <div
            onClick={onButtonClick}
            style={{
              padding: "10px 2px",
              backgroundColor: `${buttonBgColor}`,
              color: `${buttonTitleColor}`,
              fontSize: "13px",
              fontWeight: "600",
              textAlign: "center",
              borderRadius: "10px",
              cursor: "pointer",
              width: "10vw",
              marginTop: "15px",
            }}
          >
            {buttonTitle}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
