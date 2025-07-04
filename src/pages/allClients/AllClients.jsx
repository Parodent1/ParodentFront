import React from "react";
import "./allClients.css";

import NavBar from "../../components/navBar/NavBar";
import LogoContent from "../../components/logoContent/LogoContent";

function AllClients() {
  return (
    <div className="allClientsBody">
      <LogoContent />
      <NavBar />
      <div className="allClientsContent">
        <table>
          <thead>
            <tr>
              <th>ПІБ</th>
              <th>Посада</th>
              <th>Кабінет</th>
              <th>Кабінет</th>
            </tr>
          </thead>
          <tbody>
            {/* {stuff.map((index, person) => (
                    <tr key={index}>
                        <td>{person.name}</td>
                        <td>{person.role}</td>
                        <td>{person.room}</td>
                    </tr>
                ))} */}
            <tr>
              <td>Тодосюк Данило</td>
              <td>Лікар</td>
              <td>204</td>
            </tr>
            <tr>
              <td>Іваненко Олена</td>
              <td>Асистент</td>
              <td>205</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllClients;
