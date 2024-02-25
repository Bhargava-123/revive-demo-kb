import React, { useState } from "react";
import "../LoginComponent/LoginComponent.css";
const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const formsubmitHandler = (event) => {
    event.preventDefault();
    console.log(email, password);
  };

  return (
    <form onSubmit={formsubmitHandler}>
      <h1>Login</h1>

      <div className="details-container">
        <label>EmailID</label>
        <input
          type="text"
          className="basic-details"
          placeholder="Enter your email address"
          value={email}
          onChange={emailHandler}
          required
        />

        <label>Password</label>
        <input
          type="password"
          className="basic-details"
          placeholder="Enter your password"
          value={password}
          onChange={passwordHandler}
          required
        />

        <div className="submit">
          <button type="submit" className="btn">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginComponent;
