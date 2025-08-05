import express from 'express'
import { auth } from '../middleware/auth'
import { createAppointment } from '../controlers/appointmentControlers/createAppointment'
import { getAppointments } from '../controlers/appointmentControlers/getAppointments'


const router = express.Router()

//Creates appointment for patient
router.post('/createapp', auth, createAppointment)

//Fetch all appointments 
router.get('/appointments', auth, getAppointments)

export default router