import React, { useEffect, useState } from "react";
import { FaRegEnvelope, FaKey, FaUser } from "react-icons/fa";
import FilledButton from "../buttons/filledButton";
import InputField from "../input-fields/inputField";

import "../input-fields/inputField.css";
import "./loginForm.css";

const SignupForm = ({
  username,
  onUserNameChange,
  email,
  onEmailChange,
  password,
  onPasswordChange,
  confirmPassword,
  onConfirmPasswordChange,
  userErrorMessage,
  emailErrorMessage,
  passwordErrorMessage,
  confirmPasswordErrorMessage,
  submitHandler,
  title,
  titleStyle,
}) => {
  //   useEffect(() => {
  //     if (email.length > 15) {
  //       setEmailError("Please enter a valid email");
  //     } else {
  //       setEmailError("");
  //     }
  //   }, [email]);
  console.log("This is from form element", {
    email,
    password,
  });
  return (
    <form className="form">
      <p
        style={{
          fontSize: 24,
          fontWeight: 600,
          color: "wheat",
          textAlign: "center",
          ...titleStyle,
        }}
      >
        {title}
      </p>
      <InputField
        value={username}
        onChange={onUserNameChange}
        errorMessage={userErrorMessage}
        label="Username"
        icon={<FaUser />}
        type="text"
      />
      <InputField
        value={email}
        onChange={onEmailChange}
        errorMessage={emailErrorMessage}
        label="Email"
        icon={<FaRegEnvelope />}
        type="email"
      />

      <InputField
        value={password}
        onChange={onPasswordChange}
        errorMessage={passwordErrorMessage}
        label="Password"
        icon={<FaKey />}
        type="password"
      />

      <InputField
        value={confirmPassword}
        onChange={onConfirmPasswordChange}
        errorMessage={confirmPasswordErrorMessage}
        label="Confirm Password"
        icon={<FaKey />}
        type="password"
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <button
          onClick={submitHandler}
          style={{
            backgroundColor: "#341232",
            padding: "0.9rem 1.5rem",
            fontSize: "16px",
            fontWeight: "600",
            color: "wheat",
            border: 0,
            borderRadius: "10px",
            boxShadow: "1px 1px 1.5px 1.5px rgba(0, 0, 0, 0.3)",
            cursor: "pointer",
          }}
        >
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default SignupForm;
