import React, { useState, useEffect } from "react";

import { FaRegEnvelope } from "react-icons/fa";
import InputField from "./inputField";
import StyledInputField from "./styledInputField";
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
        <h4 style={{ color: "#fff" }}>Input fields</h4>
        <InputField
          value={value}
          onChange={(e) => setValue(e.target.value)}
          errorMessage={message}
          type="text"
          label="Email"
          icon={<FaRegEnvelope />}
        />
        <div style={{ marginTop: 10 }}></div>
        <InputField
          value={value}
          onChange={(e) => setValue(e.target.value)}
          errorMessage={message}
          type="text"
          label="Email"
          icon={<FaRegEnvelope />}
          inputFieldType="round"
        />

        <div style={{ marginTop: 10 }}></div>
        <h4 style={{ color: "#fff" }}>Styled Input fields</h4>
        <StyledInputField
          value={value}
          onChange={(e) => setValue(e.target.value)}
          errorMessage={message}
          label="Email"
          icon={<FaRegEnvelope />}
          type="text"
          inputFieldType="rect"
        />

        <div style={{ marginTop: 10 }}></div>
        <StyledInputField
          value={value}
          onChange={(e) => setValue(e.target.value)}
          errorMessage={message}
          label="Email"
          icon={<FaRegEnvelope />}
          type="text"
          inputFieldType="round"
        />
        <div style={{ marginTop: 10 }}></div>
        <h4 style={{ color: "#fff" }}>Standard Input field</h4>
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
