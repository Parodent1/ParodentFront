import "./appointments.css";
import Appointment from "../../../../components/appointments/Appointment";
import AppointmentCreation from "./appointmenstCreation/AppointmentsCreation";
import Calendar from "./calendar/Calendar";
import { useState } from "react";

function Appointments() {
  const rooms = [
    { id: 1, doctor: "Дмитро Тодосюк", assistant: "Ірина Кравчук" },
    { id: 2, doctor: "Андрій Коваленко", assistant: "Анна Мельник" },
    { id: 3, doctor: "Наталія Сидоренко", assistant: "Оксана Романюк" },
    { id: 4, doctor: "Ігор Іванов", assistant: "Тетяна Шевчук" },
    { id: 5, doctor: "Сергій Петренко", assistant: "Олена Бондар" },
    { id: 6, doctor: "Максим Дяченко", assistant: "Юлія Григоренко" },
    { id: 7, doctor: "Олександр Гончар", assistant: "Інна Олійник" },
    { id: 8, doctor: "Тетяна Жук", assistant: "Людмила Савчук" },
  ];

  const [showCalendar, setShowCalendar] = useState(false);
  const [showAppointmentCreation, setShowAppointmentCreation] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const formatSelectedDate = () => {
    const dayStr = String(selectedDate.getDate()).padStart(2, "0");
    const monthStr = String(selectedDate.getMonth() + 1).padStart(2, "0");
    return `${dayStr}.${monthStr}.${selectedDate.getFullYear()}`;
  };

  return (
    <div className="appointmentsBody">
      <div className="calendarContainer">
        <div className="calendarContainerContent">
          <button
            className="ActionBtn"
            onClick={() => setShowCalendar(!showCalendar)}
          >
            <span
              class="material-symbols-outlined"
              style={{ color: "#FF5858" }}
            >
              calendar_month
            </span>
            {formatSelectedDate()}
          </button>

          {showCalendar && (
            <div className="calendarBox">
              <Calendar
                setShowCalendar={setShowCalendar}
                onDateSelect={(day, month, year) => {
                  setSelectedDate(new Date(year, month, day));
                  setShowCalendar(false);
                }}
              />
            </div>
          )}
        </div>

        <div className="appointmentCreationContainer">
          <button
            className="ActionBtn"
            onClick={() => setShowAppointmentCreation(!showAppointmentCreation)}
          >
            <span
              class="material-symbols-outlined"
              style={{ color: "#FF5858" }}
            >
              add_circle
            </span>
            Create appointment
          </button>

          {showAppointmentCreation && (
            <div className="appointmentCreationBox">
              <AppointmentCreation
                setShowAppointmentCreation={setShowAppointmentCreation}
  showAppointmentCreation={showAppointmentCreation}
              />
            </div>
          )}
        </div>
      </div>
      <div className="appointmentsContent">
        {rooms.map((room) => (
          <div className="room" key={room.id}>
            <h3 className="roomName">
              <span
                class="material-symbols-outlined"
                style={{ color: "#FF5858" }}
              >
                door_back
              </span>
              Room {room.id}
            </h3>
            <div className="appointmentContainer">
              <Appointment />
              <Appointment />
              <Appointment />
            </div>
            <div className="roomPersonal">
              <h5>
                <span>Doctor</span>: {room.doctor}
              </h5>
              <h5>
                <span>Assistant</span>: {room.assistant}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Appointments;
