import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../SignupComponent/SignupComponent.css";
const SignupComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(name, email, password);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <h1>Sign up</h1>

      <div>
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter your first name"
          value={name}
          onChange={nameHandler}
          required
        />
      </div>

      <div>
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={emailHandler}
          required
        />
      </div>

      <div>
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={passwordHandler}
          required
        />
      </div>

      <div>
        <button type="submit">Submit</button>
      </div>

      <p>
        Already registered, <Link to="/login">Login here?</Link>
      </p>
    </form>
  );
};

export default SignupComponent;
