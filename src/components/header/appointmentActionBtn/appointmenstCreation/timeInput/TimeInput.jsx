import React, { useState } from "react";
import "./timeInput.css";
import Calendar from "../../calendar/Calendar"; // не забудь, якщо використовуєш календар

function TimeInput({ onTimeSelect }) {
  const [startTime, setStartTime] = useState("");
  const [duration, setDuration] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const formatSelectedDate = () => {
    const dayStr = String(selectedDate.getDate()).padStart(2, "0");
    const monthStr = String(selectedDate.getMonth() + 1).padStart(2, "0");
    return `${dayStr}.${monthStr}.${selectedDate.getFullYear()}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (startTime && duration) {
      if (onTimeSelect) {
        onTimeSelect({
          startTime,
          duration: parseInt(duration),
        });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="manualTimeForm">
      <div className="coolinput">
        <label className="text">Date</label>
        <button
          type="button"
          className="dateInput"
          onClick={() => setShowCalendar(!showCalendar)}
        >
          {formatSelectedDate()}
        </button>

        {showCalendar && (
          <div className="timeCalendarCover">
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

      <div className="coolinput">
        <label className="text">Start time</label>
        <input
          type="time"
          className="dateInput"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          required
        />
      </div>

      <div className="coolinput">
        <label className="text">Duration (min)</label>
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          placeholder="--"
          className="dateInput"
          value={duration}
          onChange={(e) => {
            const onlyNumbers = e.target.value.replace(/\D/g, "");
            setDuration(onlyNumbers);
          }}
          required
        />
      </div>
    </form>
  );
}

export default TimeInput;
