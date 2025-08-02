import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from './sections/dashboard/Dashboard';
import Appointments from './sections/appointments/Appointments';
import Patients from './sections/patients/Patients';
import Stuff from './sections/stuff/Stuff';
import Login from '../authPages/login/Login'

import './content.css'

function Content() {
  return (
    <div className='contentBody'>
      <Routes>
        <Route path='/' element={<Navigate to='/appointments' />} />
        <Route path='/appointments' element={<Appointments />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/patients' element={<Patients />} />
        <Route path='/stuff' element={<Stuff />} />
      </Routes>
    </div>
  );
}

export default Content;
