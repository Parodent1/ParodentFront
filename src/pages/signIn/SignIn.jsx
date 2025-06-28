import React, { useState } from "react";

import "../signUp/SignUp.css";
import Logo from "../../components/logoSing/Logo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

function SignIn() {
const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    surname: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Дані з форми:", formData);
  };
  return (
    <div className="body">
      <div className="content">
        <div className="logoContainer">
          <Logo />
        </div>
        <div className="signUpInputContainer">
          <h1>вхід</h1>
          <input
           className="signUpInput"
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
         className="signUpInput"
          type="password"
          name="password"
          placeholder="Пароль"
          value={formData.password}
          onChange={handleChange}
          required
        />

          <div className="signUpBTNContainer">
            <button className="signUpInputBTN">вхід</button>
            <FontAwesomeIcon className="googleLogo" icon={faGoogle} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
