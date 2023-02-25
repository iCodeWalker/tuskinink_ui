import React from "react";

import "./simpleCard.css";

const SimpleCard = ({
  bgColor = "#1f1f1f",
  imageSrc,
  imgOverlayText,
  imgOverlayTextColor = "white",
  headerText,
  headerTextColor = "white",
  title = "Title",
  titleTextColor = "white",
  descriptionText = "Please provide descripton here",
  descriptionTextColor = "white",
  buttonTitle = "Submit",
  buttonTitleColor = "white",
  onButtonClick,
  buttonBgColor = "#3b71ca",
  list,
  links,
  footerText,
  footerTextColor = "white",
}) => {
  return (
    <div
      className="simple-card-container"
      style={{
        backgroundColor: `${bgColor}`,
      }}
    >
      {imageSrc && (
        <div className="img-container ">
          <img
            alt="new img"
            src={imageSrc}
            width="100%"
            height="100%"
            className="simple-card-img-style"
          />

          <div className="overlay-text">
            <p
              style={{
                color: `${imgOverlayTextColor}`,
              }}
            >
              {imgOverlayText ? imgOverlayText : ""}
            </p>
          </div>
        </div>
      )}

      <div>
        {headerText && (
          <div className="header-container">
            <p
              style={{
                color: `${headerTextColor}`,
              }}
            >
              {headerText}
            </p>
          </div>
        )}
        <div className="details-container">
          <p
            className="title-container"
            style={{
              color: `${titleTextColor}`,
            }}
          >
            {title}
          </p>
          <p
            className="description-container"
            style={{
              color: `${descriptionTextColor}`,
            }}
          >
            {descriptionText}
          </p>

          <div
            onClick={onButtonClick}
            className="button-container"
            style={{
              backgroundColor: `${buttonBgColor}`,
              color: `${buttonTitleColor}`,
            }}
          >
            {buttonTitle}
          </div>
        </div>

        {list && (
          <div>
            {list.map((item, id) => {
              return (
                <div className="list-container">
                  <p>List Item {id}</p>
                </div>
              );
            })}
          </div>
        )}

        {links && (
          <div className="links-container">
            {links.map((item, id) => {
              return (
                <div key={id} className="links" onClick={item.onClick}>
                  <p style={{ color: "#3366CC" }}>{item.linktitle}</p>
                </div>
              );
            })}
          </div>
        )}

        {footerText && (
          <div className="footer-container">
            <p
              style={{
                color: `${footerTextColor}`,
              }}
            >
              {footerText}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SimpleCard;
