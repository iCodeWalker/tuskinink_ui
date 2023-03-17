import React from "react";
import Alert from "./alert";

const AlertSection = () => {
  return (
    <div>
      <h1 style={{ color: "white" }}>Alert Section</h1>
      <Alert
        alertType="error"
        alertMessage=" This message is regarding some error"
      />
      <Alert
        alertType="warning"
        alertMessage=" This message is regarding some warning"
      />
      <Alert
        alertType="info"
        alertMessage=" This message is regarding some info"
      />
      <Alert
        alertType="success"
        alertMessage=" This message is regarding some success"
      />
    </div>
  );
};

export default AlertSection;
