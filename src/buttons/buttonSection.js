import React from "react";
import OutlineButton from "./outlineButton";
import OutlineGlowButton from "./outlineGlowButton";
import FilledButton from "./filledButton";
import "./buttonSection.scss";
import OverlapButton from "./overlapButton";
import GradientOutlineButton from "./gradientOutlineButton";

const ButtonSection = () => {
  return (
    <div className="btn-section">
      <h2>Buttons</h2>
      <div className="btn-section__container">
        <div className="btn-section__container--item">
          <OutlineButton title="Submit" />
          <p>Outline Button</p>
        </div>

        <div className="btn-section__container--item">
          <OutlineGlowButton title="Submit" />
          <p>Outline Glow Button</p>
        </div>
        <div className="btn-section__container--item">
          <FilledButton title="Submit" />
          <p>Filled Button</p>
        </div>
        <div className="btn-section__container--item">
          <OverlapButton title="Submit" />
          <p>Overlap Button</p>
        </div>
        <div className="btn-section__container--item">
          <GradientOutlineButton title="Submit" />
          <p>Gradient Outline Button</p>
        </div>
      </div>
    </div>
  );
};

export default ButtonSection;
