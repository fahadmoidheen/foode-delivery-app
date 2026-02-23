import React, { useState } from "react";
import "./Loginpopup.css";
import { assets } from "../../assets/assets";
function LoginPopup({ setShowLogin }) {
  const [currState, setCurrState] = useState("login");
  return (
    <div className="login-popup">
      <div className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState === "login" ? "Login" : "Sign Up"}</h2>
          <img
            src={assets.cross_icon}
            alt=""
            onClick={() => setShowLogin(false)}
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Name" />
          )}
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </div>
        <button>{currState === "sign up" ? "Create Account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" />
          <p>I agree to the terms and conditions</p>
        </div>
        <p>
          {currState === "login" ? "New here?" : "Already have an account?"}
          <span
            onClick={() =>
              setCurrState((prev) => (prev === "login" ? "sign up" : "login"))
            }
          >
            {currState === "login" ? "Create an account" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginPopup;
