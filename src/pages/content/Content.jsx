import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from './sections/dashboard/Dashboard';
import Appointments from './sections/appointments/Appointments';
import Patients from './sections/patients/Patients';
import Staff from './sections/staff/Staff';

import './content.css'

function Content() {
  return (
    <div className='contentBody'>
      <Routes>
        <Route path='/' element={<Navigate to='/appointments' />} />
        <Route path='/appointments' element={<Appointments />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/patients' element={<Patients />} />
        <Route path='/staff' element={<Staff />} />
      </Routes>
    </div>
  );
}

export default Content;
