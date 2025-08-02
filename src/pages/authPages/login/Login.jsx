import { useState } from "react";

import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import logo from '../../../assets/logo.png'

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="loginBody">
      <div className="logincontent">
        <form className="loginForm">
                  <div className="loginLogo">
                    <img src={logo} alt="loginLogo"/>
                    <h1>Parodent</h1>
                  </div>
          <div className="flex-column">
            <label>Email</label>
          </div>
          <div className="inputForm">
            <span class="material-symbols-outlined">alternate_email</span>
            <input
              type="email"
              className="input"
              name="email"
              placeholder="Enter your Email"
              required
            />
          </div>

          <div className="flex-column">
            <label>Password</label>
          </div>
          <div className="inputForm">
            <span class="material-symbols-outlined">lock</span>
            <input
              type={showPassword ? "text" : "password"}
              className="input"
              name="password"
              placeholder="Enter your Password"
              required
            />
            <button
              type="button"
              className="togglePasswordBtn"
              onClick={() => setShowPassword(!showPassword)}
            >
              <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
            </button>
          </div>

          <div className="flex-row">
            <div>
              <input type="checkbox" />
              <label>Remember me</label>
            </div>
            <span className="span">Forgot password?</span>
          </div>

          <button className="button-submit">Sign In</button>
          <p className="p">
            <button className="btn google">
              <FontAwesomeIcon icon={faGoogle} />
              Log in with Google
            </button>
          </p>
          <div className="flex-row"></div>
        </form>
      </div>
    </div>
  );
}

export default Login;
