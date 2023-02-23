import React, { useState, useEffect } from "react";

import LoginForm from "./loginForm";
import SignupForm from "./signupForm";

const FormSection = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [userErrMsg, setUserErrMsg] = useState("");
  const [conPassErrMsg, setConPassErrMsg] = useState("");

  const [user, setUser] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  useEffect(() => {
    if (email.length > 15) {
      setEmailError("Please enter a valid email");
    } else {
      setEmailError("");
    }
  }, [email]);

  useEffect(() => {
    if (confirmPassword.length > 15) {
      setConPassErrMsg("Password did not matched");
    } else {
      setConPassErrMsg("");
    }
  }, [confirmPassword]);
  return (
    <div style={{ margin: 20 }}>
      <h2 style={{ color: "#fff" }}>Forms</h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LoginForm
          email={email}
          onEmailChange={(e) => setEmail(e.target.value)}
          password={password}
          onPasswordChange={(e) => setPassword(e.target.value)}
          emailErrorMessage={emailError}
          passwordErrorMessage={passwordError}
          submitHandler={submitHandler}
          title="Login Here"
          titleStyle={{}}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SignupForm
          username={user}
          onUserNameChange={(e) => setUser(e.target.value)}
          email={email}
          onEmailChange={(e) => setEmail(e.target.value)}
          password={password}
          onPasswordChange={(e) => setPassword(e.target.value)}
          confirmPassword={confirmPassword}
          onConfirmPasswordChange={(e) => setConfirmPassword(e.target.value)}
          emailErrorMessage={emailError}
          passwordErrorMessage={passwordError}
          userErrorMessage={userErrMsg}
          confirmPasswordErrorMessage={conPassErrMsg}
          submitHandler={submitHandler}
          title="Sign up Here"
          titleStyle={{}}
        />
      </div>
    </div>
  );
};

export default FormSection;
