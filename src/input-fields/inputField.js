import React, { useEffect, useState, useRef } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";

import "./inputField.css";

const InputField = ({
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

  const inputRef = useRef();

  const handleBlur = () => {
    if (value.length > 0) {
      setHideLabel("hidden");
    } else {
      setHideLabel("");
    }
  };
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
    <div className="input-wrapper-c">
      <div className="input-container-c">
        <input
          ref={inputRef}
          id="email-input-c"
          className={`input-field-c ${errorClass} input-field-${inputFieldType}-c`}
          value={value}
          onChange={onChange}
          type={isPasswordVisible ? "text" : type}
          onBlur={handleBlur}
        />
        <label className={`${hideLabel} ${inputFieldType}`} for="email-input-c">
          {label}
        </label>

        {/* <i id="email-icon-s">{icon}</i> */}
        {type === "password" ? (
          <div onClick={handlePasswordVisible}>
            <i id="show-icon-c">
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

export default InputField;
