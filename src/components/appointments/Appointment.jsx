import React from 'react'
import './appointment.css'

function Apointment() {
  return (
    <div className='appointmentBody'>
        <h1 className="clientName">Данило</h1>
        <h1 className="appointmentTime">11:23-12:39</h1>
        <p className="complaints">Біль в 8 зубі</p>
        <p className="coment">агресивний пацієнт</p>
    </div>
  )
}

export default Apointment