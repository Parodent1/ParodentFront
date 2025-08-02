import { useState } from "react";
import "./appointmenstCreation.css";
import TimeInput from "./timeInput/TimeInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faComment } from "@fortawesome/free-solid-svg-icons";

function AppointmentCreation({
  setShowAppointmentCreation,
  onCreateAppointment,
  doctorName,
}) {
  const [formData, setFormData] = useState({
    name: "",
    comment: "",
    doctor: "",
    timeData: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleTimeSelect = (timeData) => {
    setFormData((prev) => ({ ...prev, timeData }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (onCreateAppointment) {
      await onCreateAppointment({
        ...formData,
        doctorName,
      });
    }
  };

  return (
    <div
      className="appointmentModalOverlay"
      onClick={() => setShowAppointmentCreation(false)}
    >
      <div
        className="appointmentModalContent"
        onClick={(e) => e.stopPropagation()}
      >
        <form onSubmit={handleSubmit} className="appointmentForm">
          <div className="flex-column">
            <label>Full Name</label>
          </div>
          <div className="inputForm">
            <FontAwesomeIcon icon={faUser} style={{ color: "#FF5858" }}/>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Write patient name..."
              className="input"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex-column">
            <label>Comment</label>
          </div>
          <div className="inputForm">
            <FontAwesomeIcon icon={faComment} style={{ color: "#FF5858" }}/>
            <input
              id="comment"
              name="comment"
              type="text"
              placeholder="Write a comment..."
              className="input"
              value={formData.comment}
              onChange={handleChange}
              required
            />
          </div>

            <TimeInput onTimeSelect={handleTimeSelect} />

          <button type="submit" className="button-submit">
            Створити запис
          </button>
        </form>
      </div>
    </div>
  );
}

export default AppointmentCreation;
