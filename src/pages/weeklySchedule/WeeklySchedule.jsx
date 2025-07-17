import React, { useState } from "react";
import "./weeklySchedule.css";
import LogoContent from "../../components/logoContent/LogoContent";
import NavBar from "../../components/navBar/NavBar";
import Appointment from "../../components/appointments/Appointment";

function WeeklySchedule() {
  return (
    <div className="weeklyScheduleBody">
      <LogoContent />
      <NavBar />
      <div className="weeklyScheduleContent">
        <div className="dailyBox monday">
          <div className="scheduleDate">
            <h1>понеділок</h1>
            <h1>01.12</h1>
          </div>
          <div className="appointmentBox">  
            <Appointment/>        
            <Appointment/>        
            <Appointment/>        
            <Appointment/>        
            <Appointment/>        
            <Appointment/>        
            <Appointment/>        
            <Appointment/>        
            <Appointment/>        
            <Appointment/>        
          </div>
          <div className="dayStuff">
            <div><h1>лікар:</h1><h1 className="dayStuffName">Тодосюк Данило</h1></div>
            <div><h1>асистент:</h1><h1 className="dayStuffName">Тодосюк Данило</h1></div>
          </div>
        </div>
        <div className="dailyBox tuesday">
        <div className="scheduleDate">
            <h1>вівторок</h1>
            <h1>01.12</h1>
          </div>
          <div className="dayStuff">
            <div><h1>лікар</h1><h1 className="dayStuffName">Тодосюк Данило</h1></div>
            <div><h1>асистент</h1><h1 className="dayStuffName">Тодосюк Данило</h1></div>
          </div>
        </div>
        <div className="dailyBox wednesday">
        <div className="scheduleDate">
            <h1>середа</h1>
            <h1>01.12</h1>
          </div>
          <div className="dayStuff">
            <div><h1>лікар:</h1><h1 className="dayStuffName">Тодосюк Данило</h1></div>
            <div><h1>асистент:</h1><h1 className="dayStuffName">Тодосюк Данило</h1></div>
          </div>
        </div>
        <div className="dailyBox thursday">
        <div className="scheduleDate">
            <h1>четвер</h1>
            <h1>01.12</h1>
          </div>
          <div className="dayStuff">
            <div><h1>лікар</h1><h1 className="dayStuffName">Тодосюк Данило</h1></div>
            <div><h1>асистент</h1><h1 className="dayStuffName">Тодосюк Данило</h1></div>
          </div>
        </div>
        <div className="dailyBox friday">
        <div className="scheduleDate">
            <h1>п'ятниця</h1>
            <h1>01.12</h1>
          </div>
          <div className="dayStuff">
            <div><h1>лікар</h1><h1 className="dayStuffName">Тодосюк Данило</h1></div>
            <div><h1>асистент</h1><h1 className="dayStuffName">Тодосюк Данило</h1></div>
          </div>
        </div>
        <div className="dailyBox saturday">
        <div className="scheduleDate">
            <h1>субота</h1>
            <h1>01.12</h1>
          </div>
          <div className="dayStuff">
            <div><h1>лікар</h1><h1 className="dayStuffName">Тодосюк Данило</h1></div>
            <div><h1>асистент</h1><h1 className="dayStuffName">Тодосюк Данило</h1></div>
          </div>
        </div>
      </div>
      <button className="logOutBtn">Log Out</button>
    </div>
  );
}

export default WeeklySchedule;
