
import "./reception.css";
import LogoContent from "../../../components/logoContent/LogoContent";
import NavBar from "../../../components/navBar/NavBar";

function Reception() {
  return (
    <div className="ReceptionBody">
      <LogoContent />
      <button className="roomSelector">кабінет</button>
      <NavBar />
      <div className="ReceptionContent">
        {/* <div className="dailyBox room1">
          <div className="scheduleDate">
            <h1>кабінет</h1>
            <h1>100</h1>
            <h1>хірургія</h1>
          </div>
          <div className="appointmentBox">
            <Appointment />
            <Appointment />
            <Appointment />
            <Appointment />
            <Appointment />
            <Appointment />
            <Appointment />
            <Appointment />
            <Appointment />
            <Appointment />
          </div>
          <div className="dayStuff">
            <div>
              <h1>лікар</h1>
              <h1 className="dayStuffName">Тодосюк Данило</h1>
            </div>
            <div>
              <h1>асистент</h1>
              <h1 className="dayStuffName">Тодосюк Данило</h1>
            </div>
          </div>
        </div>
        <div className="dailyBox room2">
          <div className="scheduleDate">
            <h1>кабінет</h1>
            <h1>100</h1>
            <h1>хірургія</h1>
          </div>
          <div className="appointmentBox">
            <Appointment />
            <Appointment />
            <Appointment />
            <Appointment />
            <Appointment />
            <Appointment />
          </div>
          <div className="dayStuff">
            <div>
              <h1>лікар</h1>
              <h1 className="dayStuffName">Тодосюк Данило</h1>
            </div>
            <div>
              <h1>асистент</h1>
              <h1 className="dayStuffName">Тодосюк Данило</h1>
            </div>
          </div>
        </div>
        <div className="dailyBox room3">
          <div className="scheduleDate">
            <h1>кабінет</h1>
            <h1>100</h1>
            <h1>хірургія</h1>
          </div>
          <div className="dayStuff">
            <div>
              <h1>лікар</h1>
              <h1 className="dayStuffName">Тодосюк Данило</h1>
            </div>
            <div>
              <h1>асистент</h1>
              <h1 className="dayStuffName">Тодосюк Данило</h1>
            </div>
          </div>
        </div>
        <div className="dailyBox room4">
          <div className="scheduleDate">
            <h1>кабінет</h1>
            <h1>100</h1>
            <h1>хірургія</h1>
          </div>
          <div className="appointmentBox">
            <Appointment />
            <Appointment />
            <Appointment />
            <Appointment />
            <Appointment />
          </div>
          <div className="dayStuff">
            <div>
              <h1>лікар</h1>
              <h1 className="dayStuffName">Тодосюк Данило</h1>
            </div>
            <div>
              <h1>асистент</h1>
              <h1 className="dayStuffName">Тодосюк Данило</h1>
            </div>
          </div>
        </div>
        <div className="dailyBox room5">
          <div className="scheduleDate">
            <h1>кабінет</h1>
            <h1>100</h1>
            <h1>хірургія</h1>
          </div>
          <div className="dayStuff">
            <div>
              <h1>лікар</h1>
              <h1 className="dayStuffName">Тодосюк Данило</h1>
            </div>
            <div>
              <h1>асистент</h1>
              <h1 className="dayStuffName">Тодосюк Данило</h1>
            </div>
          </div>
        </div>
        <div className="dailyBox room6">
          <div className="scheduleDate">
            <h1>кабінет</h1>
            <h1>100</h1>
            <h1>хірургія</h1>
          </div>
          <div className="dayStuff">
            <div>
              <h1>лікар</h1>
              <h1 className="dayStuffName">Тодосюк Данило</h1>
            </div>
            <div>
              <h1>асистент</h1>
              <h1 className="dayStuffName">Тодосюк Данило</h1>
            </div>
          </div>
        </div>
        <div className="dailyBox room7">
          <div className="scheduleDate">
            <h1>кабінет</h1>
            <h1>100</h1>
            <h1>хірургія</h1>
          </div>
          <div className="dayStuff">
            <div>
              <h1>лікар</h1>
              <h1 className="dayStuffName">Тодосюк Данило</h1>
            </div>
            <div>
              <h1>асистент</h1>
              <h1 className="dayStuffName">Тодосюк Данило</h1>
            </div>
          </div>
        </div> */}
      </div>
      <button className="logOutBtn">Log Out</button>
    </div>
  );
}

export default Reception;
