import Logo from "../../components/logoSing/Logo";
import React, { useState } from "react";
import "./signUp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

function SignUp() {
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
          <h1>реєстрація</h1>
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
        <input
         className="signUpInput"
          type="text"
          name="name"
          placeholder="Ім’я"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
         className="signUpInput"
          type="text"
          name="surname"
          placeholder="Прізвище"
          value={formData.surname}
          onChange={handleChange}
          required
        />
          <div className="signUpBTNContainer">
            <button type="submit" className="signUpInputBTN">реєстрація</button>
            <FontAwesomeIcon className="googleLogo" icon={faGoogle} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
