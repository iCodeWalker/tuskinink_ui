import React from "react";
import { IoAlertCircleOutline } from "react-icons/io";

import "./alert.scss";

const Alert = () => {
  return (
    <div className="alert__container">
      <div className="alert__section">
        <div className="alert__section--icon">
          <IoAlertCircleOutline />
        </div>
        <p className="alert__section--message">Alert</p>
      </div>
    </div>
  );
};

export default Alert;
