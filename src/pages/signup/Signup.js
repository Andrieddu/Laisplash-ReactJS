import React, { useRef, useState } from "react";
import "./Signup.css";

import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import Alert from "@material-ui/lab/Alert";

import { useAuth } from "../../context/AuthContext";
import { Link, useHistory } from "react-router-dom";

function Signup() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  // Go to the Home Page
  const goToHome = () => history.push("/");

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(
        nameRef.current.value,
        emailRef.current.value,
        passwordRef.current.value
      );
      history.push("/");
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
    setLoading(false);
  }

  return (
    <div className="signup_page">
      <div className="form">
        <PhotoCameraIcon
          className="signup_logo"
          style={{ fontSize: 40 }}
          onClick={goToHome}
        />
        <h1>Laisplash</h1>
        <hr />
        <h2>Sign Up</h2>
        {error && (
          <Alert className="alert" variant="filled" severity="error">
            {error}
          </Alert>
        )}
        <form onSubmit={handleSubmit} className="signup_form">
          <input
            placeholder="Your name"
            id="name"
            className="name"
            type="text"
            ref={nameRef}
            required
          />
          <input
            placeholder="Email address"
            id="email"
            className="email"
            type="email"
            ref={emailRef}
            required
          />
          <input
            placeholder="Password"
            id="password"
            className="password"
            type="password"
            ref={passwordRef}
            required
          />
          <input
            placeholder="Confirm Password"
            id="password"
            className="password"
            type="password"
            ref={passwordConfirmRef}
            required
          />
          <button
            disabled={loading}
            className="log-button"
            type="submit"
            id="submit"
          >
            Sign Up
          </button>
          <p className="message">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
