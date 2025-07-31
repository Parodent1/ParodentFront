import "./appointments.css";
import Appointment from "../../../../components/appointments/Appointment";

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

  return (
    <div className="appointmentsBody">
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
