import Logo from "../components/logoSing/Logo"
import './signUp.css'

function SignUp() {
  return (
    <div className="body">
        <div className="content">
            <div className="logoContainer">
                <Logo/>
            </div>
            <div className="signUpInput">
                <h1>реєстрація</h1>
                <input type="text" placeholder="e-mail"/>
                <input type="text" placeholder="ім'я"/>
                <input type="text" placeholder="пароль"/>
                <button>реєстрація</button>
                <div className="googleLogo"></div>
            </div>
        </div>
    </div>
  )
}

export default SignUp