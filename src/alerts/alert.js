import React from "react";
import { FiAlertTriangle, FiAlertCircle, FiInfo } from "react-icons/fi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

import "./alert.scss";

const Alert = ({ alertType, alertMessage }) => {
  const alertTypeBg = {
    error: "rgb(253, 237, 237)",
    warning: "rgb(255, 244, 229)",
    info: "rgb(229, 246, 253)",
    success: "rgb(237, 247, 237)",
  };

  const alertIcon = {
    error: <FiAlertTriangle size={18} color="#d32f2f" />,
    warning: <FiAlertCircle size={18} color="#ed6c02" />,
    info: <FiInfo size={18} color="#0288d1" />,
    success: <IoMdCheckmarkCircleOutline size={18} color="#2e7d32" />,
  };
  return (
    <div
      className="alert__container"
      style={{ backgroundColor: alertTypeBg[alertType] }}
    >
      <div className="alert__section">
        <div className="alert__section--icon">{alertIcon[alertType]}</div>
        <p className="alert__section--message">{alertMessage}</p>
      </div>
    </div>
  );
};

export default Alert;
