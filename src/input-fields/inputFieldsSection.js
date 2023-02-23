import React, { useState, useEffect } from "react";
import InputField from "./inputField";

import { FaRegEnvelope } from "react-icons/fa";
import RectangleInputField from "./rectInputField";
import StandardInputField from "./standardInputField";

const InputFieldsSection = () => {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (value.length > 10) {
      setMessage("value is not in range");
    } else {
      setMessage("");
    }
  }, [value]);

  return (
    <div style={{ margin: 20 }}>
      <h2 style={{ color: "#fff" }}>Input Fields</h2>
      <div style={{ width: "400px" }}>
        <InputField
          value={value}
          onChange={(e) => setValue(e.target.value)}
          errorMessage={message}
          icon={<FaRegEnvelope />}
          type="text"
          label="Email"
        />
        <div style={{ marginTop: 10 }}></div>
        <RectangleInputField
          value={value}
          onChange={(e) => setValue(e.target.value)}
          errorMessage={message}
          label="Email"
          icon={<FaRegEnvelope />}
          type="text"
        />
        <div style={{ marginTop: 10 }}></div>
        <StandardInputField
          value={value}
          onChange={(e) => setValue(e.target.value)}
          errorMessage={message}
          label="Email"
          icon={<FaRegEnvelope />}
          type="text"
        />
      </div>
    </div>
  );
};

export default InputFieldsSection;
