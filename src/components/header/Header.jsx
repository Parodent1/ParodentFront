import './header.css'
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import logo from '../../assets/logo.png'
import AppointmentActionBtn from './appointmentActionBtn/AppointmentActionBtn'
import DashboardActionBtn from './dashboardActionBtn/DashboardActionBtn'
import PatientsActionBtn from './patientsActionBtn/PatientActionBtn'
import StuffActionBtn from './stuffActionBtn/StuffActionBtn'

function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  const tabs = [
    { path: "/dashboard", label: "Dashboard" },
    { path: "/patients", label: "Patients" },
    { path: "/appointments", label: "Appointments" },
    { path: "/stuff", label: "Stuff" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const navBarRef = useRef(null);
  const [sliderStyle, setSliderStyle] = useState({});

  useEffect(() => {
    const index = tabs.findIndex(tab => tab.path === currentPath);
    setActiveIndex(index === -1 ? 0 : index);
  }, [currentPath]);

  useEffect(() => {
    if (!navBarRef.current) return;

    const navButtons = navBarRef.current.querySelectorAll(".navBarBtn");
    if (navButtons.length === 0) return;

    const activeBtn = navButtons[activeIndex];
    if (!activeBtn) return;

    const { offsetLeft, offsetWidth, offsetTop, offsetHeight } = activeBtn;

    setSliderStyle({
      left: offsetLeft,
      width: offsetWidth,
      top: offsetTop,
      height: offsetHeight,
    });
  }, [activeIndex]);

  return (
    <div className='headerBody'>
      <div className="headerContent">
        <div className="headerLogo">
          <img src={logo} alt="Logo"/>
          <h1>Parodent</h1>
        </div>
        <div className="navBar" ref={navBarRef} style={{ position: 'relative' }}>
          {tabs.map(({ path, label }, i) => (
            <Link
              key={path}
              to={path}
              className={currentPath === path ? "navBarBtn active" : "navBarBtn"}
            >
              {label}
            </Link>
          ))}
          <span
            className="selection"
            style={{
              ...sliderStyle,
              position: "absolute",
              borderRadius: "9999px",
              backgroundColor: "#000",
              transition: "all 0.3s ease",
              zIndex: 0,
            }}
          />
        </div>
        <div className="profileConteiner">
          <div className="profileImg"></div>
          <div className="profileInfo">
            <h4 className="doctorName">Тодосюк Данилоф</h4>
            <h4 className="doctorRole">Логопедик</h4>
          </div>
        </div>
      </div>
      <div className="AppointmentActionBtnContaier">
      <Routes>
        <Route path='/' element={<Navigate to='/appointments' />} />
        <Route path='/appointments' element={<AppointmentActionBtn />} />
        <Route path='/dashboard' element={<DashboardActionBtn />} />
        <Route path='/patients' element={<PatientsActionBtn />} />
        <Route path='/stuff' element={<StuffActionBtn />} />
      </Routes>
      </div>
    </div>
  )
}

export default Header;
