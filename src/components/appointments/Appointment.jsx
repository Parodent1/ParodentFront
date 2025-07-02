import React, { useState } from 'react'
import './appointment.css'

function Appointment() {
  // const [menuVisible, setMenuVisible] = useState(false);
  // const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

  // const handleContextMenu = (event) => {
  //   event.preventDefault();
  //   setMenuPosition({ x: event.pageX, y: event.pageY });
  //   setMenuVisible(true);
  // };

  // const handleClickOutside = () => {
  //   setMenuVisible(false);
  // };

  return (
    <div
      className="appointmentBody"
      // onContextMenu={handleContextMenu}
      // onClick={handleClickOutside}
    >
      <h1 className="clientName">Данило</h1>
      <h1 className="appointmentTime">11:23–12:39</h1>
      <p className="complaints">Біль в 8 зубі</p>
      <p className="coment">агресивний пацієнт jkdsn wlefnkwe lweknflweknf f</p>

      {/* {menuVisible && (
        <div
          className="contextMenu"
          style={{ top: menuPosition.y, left: menuPosition.x }}
        >
          <button>Редагувати</button>
          <button>Перенести</button>
          <button>Видалити</button>
          <button>Історія</button>
          <button>Закрити</button>
        </div>
      )} */}
    </div>
  );
}

export default Appointment;