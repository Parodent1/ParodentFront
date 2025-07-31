import React, { useState } from "react";
import "./appointmentActionBtn.css";
import Calendar from "./calendar/Calendar";
import AppointmentCreation from "./appointmenstCreation/AppointmentsCreation";

function AppointmentActionBtn() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [showAppointmentCreation, setShowAppointmentCreation] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const formatSelectedDate = () => {
    const dayStr = String(selectedDate.getDate()).padStart(2, "0");
    const monthStr = String(selectedDate.getMonth() + 1).padStart(2, "0");
    return `${dayStr}.${monthStr}.${selectedDate.getFullYear()}`;
  };

  const handleSelectDoctor = (e) => {
    setSelectedDoctor(e.target.value);
  };

  const doctors = ["Дмитро Тодосюк", "Андрій Коваленко", "Наталія Сидоренко"];
  return (
    <div className="calendarContainer">
      <div className="calendarContainerContent">
        <button
          className="ActionBtn"
          onClick={() => setShowCalendar(!showCalendar)}
        >
          <span class="material-symbols-outlined" style={{ color: "#FF5858" }}>
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
      <div className="rightGroup">
        <div className="ActionBtn">
          <span class="material-symbols-outlined"
          style={{ color: "#FF5858" }}>
person
</span>
          <select
            name="doctor"
            id="doctor"
            value={selectedDoctor}
            onChange={handleSelectDoctor}
            className="doctorSelectBtn"
          >
            <option value="">All clinic</option>
            {doctors.map((doctor, index) => (
              <option key={index} value={doctor}>
                {doctor}
              </option>
            ))}
          </select>
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
    </div>
  );
}

export default AppointmentActionBtn;

// біля створення запису чекбокс мій розклад на тиждень
