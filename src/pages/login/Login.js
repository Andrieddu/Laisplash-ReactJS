import React, { useRef, useState } from "react";
import "./Login.css";

import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import Alert from "@material-ui/lab/Alert";

import { useAuth } from "../../context/AuthContext";
import { Link, useHistory } from "react-router-dom";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  // Go to the Home Page
  const goToHome = () => history.push("/");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch (e) {
      setError(e.message);
    }
    setLoading(false);
  }

  return (
    <div className="login_page">
      <div className="form">
        <PhotoCameraIcon
          className="login_logo"
          style={{ fontSize: 40 }}
          onClick={goToHome}
        />
        <h1>Laisplash</h1>
        <hr />
        <h2>Login</h2>
        {error && (
          <Alert className="alert" variant="filled" severity="error">
            {error}
          </Alert>
        )}
        <form onSubmit={handleSubmit} className="login_form">
          <input
            placeholder="Email address"
            id="Email"
            className="Email"
            type="text"
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
          <button
            disabled={loading}
            className="w-100"
            type="submit"
            id="submit"
          >
            Login
          </button>
          <p className="message">
            Need an account? <Link to="/signup">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
