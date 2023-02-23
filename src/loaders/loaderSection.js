import React from "react";
import "./loaderSection.css";

import SpinLoader from "./spinLoader";
import PulseLoader from "./pulseLoader";
import Loader from "./loader";
import WaveLoader from "./waveLoader";
import Loader3DRect from "./loader3dRect";

const LoaderSection = () => {
  return (
    <div style={{ margin: 20 }}>
      <h2 style={{ color: "#fff" }}>Loaders</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <div className="btn-view">
          <SpinLoader />
          <p>Spin Loader</p>
        </div>

        <div className="btn-view">
          <Loader />
          <p>Loader</p>
        </div>
        <div className="btn-view">
          <PulseLoader />
          <p>Pulse Loader</p>
        </div>
        <div className="btn-view">
          <WaveLoader />
          <p>Wave Loader</p>
        </div>

        <div className="btn-view">
          <Loader3DRect />
          <p>Spin Loader</p>
        </div>
      </div>
    </div>
  );
};

export default LoaderSection;
