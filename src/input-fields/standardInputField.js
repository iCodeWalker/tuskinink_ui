import React, { useState, useEffect, useRef } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";

import "./standardInputField.css";

const StandardInputField = ({
  value,
  onChange,
  errorMessage,
  label,
  icon,
  placeholder,
  type,
}) => {
  const [errorClass, setErrorClass] = useState("");
  const [hideLabel, setHideLabel] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const inputRef = useRef();

  const handlePasswordVisible = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleBlur = () => {
    if (value.length > 0) {
      setHideLabel("hidden");
    } else {
      setHideLabel("");
    }
  };
  useEffect(() => {
    // if (document.activeElement === inputRef.current) {
    //   // do something
    //   console.log("true");
    // }

    if (value) {
      if (value.length > 15) {
        setErrorClass("error");
      } else {
        setErrorClass("");
      }
    }
  }, [value, inputRef]);

  useEffect(() => {
    if (value) {
      setHideLabel("hidden");
    } else {
      setHideLabel("");
    }
  }, [value]);

  return (
    <div className="input-wrapper-s">
      <div className="input-container-s">
        <input
          ref={inputRef}
          id="email-input-s"
          className={`input-field-s ${errorClass} input-field-rect-s`}
          value={value}
          onChange={onChange}
          type={isPasswordVisible ? "text" : type}
          onBlur={handleBlur}
        />
        <label className={`${hideLabel}`} for="email-input-s">
          {label}
        </label>

        {/* <i id="email-icon-s">{icon}</i> */}
        {type === "password" ? (
          <div onClick={handlePasswordVisible}>
            <i id="show-icon-s">
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

export default StandardInputField;
