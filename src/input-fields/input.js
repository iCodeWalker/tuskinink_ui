import React from "react";
import { FaRegEnvelope } from "react-icons/fa";

const InputNew = () => {
  return (
    <div
      style={{
        backgroundColor: "#1f1f1f",
        width: "300px",
        display: "flex",
        alignItems: "center",
        padding: 10,
        borderRadius: 16,
      }}
    >
      <FaRegEnvelope size={24} color="white" />
      <label style={{ marginRight: 10, marginLeft: 10, color: "whitesmoke" }}>
        Email
      </label>
      <span>
        <input
          width={200}
          height="90px"
          style={{
            backgroundColor: "#1f1f1f",
            border: 0,
            outline: "none",
            fontSize: "14px",
            color: "whitesmoke",
          }}
        />
      </span>
    </div>
  );
};

export default InputNew;
