
import "./personalCardStuff.css";
import LogoContent from "../../../components/logoContent/LogoContent";
import NavBar from "../../../components/navBar/NavBar";

function PersonalCardsStuff() {

    return (
        <div className="personalCardStuffBody">
            <LogoContent />
            <NavBar />
            <div className="personalCardStuffContent">
                <div className="doctorName">
                    <h1 className="doctorName">Тодосюк Данило Євгенович</h1>
                    <h1 className="dateOfBirth">07 . 10 . 2002</h1>
                </div>
                <div className="doctorContacts">
                    <p>КОНТАКТИ</p>
                    <p>E-mail:</p>
                    <p>Телефон:</p>
                </div>

            </div>
        </div>
    );
}

export default PersonalCardsStuff;
