import React from "react";
import OutlineButton from "./outlineButton";
import OutlineGlowButton from "./outlineGlowButton";
import FilledButton from "./filledButton";
import "./buttonSection.css";
import OverlapButton from "./overlapButton";
import GradientOutlineButton from "./gradientOutlineButton";

const ButtonSection = () => {
  return (
    <div style={{ margin: 20 }}>
      <h2 style={{ color: "#fff" }}>Buttons</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <div className="btn-view">
          <OutlineButton title="Click Here" />
          <p>Outline Button</p>
        </div>

        <div className="btn-view">
          <OutlineGlowButton title="Submit" />
          <p>Outline Glow Button</p>
        </div>
        <div className="btn-view">
          <FilledButton title="Click Here" />
          <p>Filled Button</p>
        </div>
        <div className="btn-view">
          <OverlapButton title="click here" />
          <p>Overlap Button</p>
        </div>
        <div className="btn-view">
          <GradientOutlineButton title="click here" />
          <p>Gradient Outline Button</p>
        </div>
      </div>
    </div>
  );
};

export default ButtonSection;
