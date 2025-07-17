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
      <div className="appointmentHeader">
      <h1 className="clientName">Заяць Данило Ігорович</h1>
      <h1 className="appointmentTime">11:23–12:39</h1>        
      </div>

      <p className="complaints">Біль в 8 зубі</p>
      <p className="coment">агресивний пацієнт </p>

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