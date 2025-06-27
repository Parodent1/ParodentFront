import Logo from "../components/logoSing/Logo"
import './signUp.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

function SignUp() {
  return (
    <div className="body">
        <div className="content">
            <div className="logoContainer">
                <Logo/>
            </div>
            <div className="signUpInputContainer">
                <h1>реєстрація</h1>
                <input className="signUpInput" type="text" placeholder="e-mail"/>
                <input className="signUpInput" type="text" placeholder="ім'я"/>
                <input className="signUpInput" type="text" placeholder="пароль"/>
                <div className="signUpBTNContainer">
                  <button className="signUpInputBTN">реєстрація</button>
                  <FontAwesomeIcon className="googleLogo" icon={faGoogle} />                 
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp