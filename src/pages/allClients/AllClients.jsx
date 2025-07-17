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
              <th>Телефон</th>
              <th>E-mail</th>
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
              <td>+38 (063) 272 50 59</td>
              <td>yura0092@gmail.com</td>
            </tr>
            <tr>
              <td>Іваненко Олена</td>
              <td>Асистент</td>
              <td>205</td>
              <td>+38 (063) 272 50 59</td>
              <td>yura0092@gmail.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllClients;
