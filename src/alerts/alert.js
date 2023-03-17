import React from "react";
import { FiAlertCircle } from "react-icons/fi";

import "./alert.scss";

const Alert = () => {
  return (
    <span className="alert__container">
      <div className="alert__section">
        <div className="alert__section--icon">
          <FiAlertCircle size={18} />
        </div>
        <p className="alert__section--message">
          This message is regarding some error
        </p>
      </div>
    </span>
  );
};

export default Alert;
