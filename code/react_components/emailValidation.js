import React, { useState } from "react";

const EmailInput = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (e) => {
    const emailRegex = /\S+@\S+\.\S+/;
    if (emailRegex.test(e.target.value)) {
      setEmailError("");
    } else {
      setEmailError("Please enter a valid email address.");
    }
  };

  return (
    <div>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" value={email} onChange={(e) => { setEmail(e.target.value); validateEmail(e); }} />
      {emailError && <p style={{ color: "red" }}>{emailError}</p>}
    </div>
  );
};

export default EmailInput;
