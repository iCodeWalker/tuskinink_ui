import React, { useState, useEffect } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";

import "./styledInputField.css";

const StyledInputField = ({
  value,
  onChange,
  errorMessage,
  label,
  icon,
  placeholder,
  inputFieldType = "rect",
  type,
}) => {
  const [errorClass, setErrorClass] = useState("");
  const [hideLabel, setHideLabel] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handlePasswordVisible = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  useEffect(() => {
    if (value) {
      if (value.length > 15) {
        setErrorClass("error");
      } else {
        setErrorClass("");
      }
    }
  }, [value]);

  useEffect(() => {
    if (value) {
      setHideLabel("hidden");
    } else {
      setHideLabel("");
    }
  }, [value]);

  return (
    <div className="input-wrapper">
      <div className="input-container">
        <input
          id="email-input"
          className={`input-field ${errorClass} input-field-${inputFieldType}`}
          value={value}
          onChange={onChange}
          type={isPasswordVisible ? "text" : type}
          placeholder={placeholder}
        />
        <label className={`${hideLabel}`} for="email-input">
          {label}
        </label>

        <i id="email-icon">{icon}</i>
        {type === "password" ? (
          <div onClick={handlePasswordVisible}>
            <i id="show-icon">
              {isPasswordVisible ? <FaEye /> : <FaEyeSlash />}
            </i>
          </div>
        ) : (
          ""
        )}

        <span className="toast-msg" id="invalid-toast">
          {errorMessage ? (
            <>
              <p>{errorMessage}</p>
            </>
          ) : (
            ""
          )}
        </span>
      </div>
    </div>
  );
};

export default StyledInputField;
