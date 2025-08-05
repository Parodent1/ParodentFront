import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import dayjs from "dayjs";
import { useAppointmentDate } from "./AppointmentDataContext";

const AppointmentContext = createContext();

export const useAppointments = () => useContext(AppointmentContext)

export const AppointmentProvider = ({children}) => {
    const [appointments, setAppointments] = useState([]);
    const { selectedDate } = useAppointmentDate();

    const fetchAppointments = async () => {
        const token = localStorage.getItem("token");
        const formattedDate = dayjs(selectedDate).format("YYYY-MM-DD");
    
        try {
        const res = await axios.get(
            `http://localhost:3000/apiAppointment/appointments?date=${formattedDate}`,
            {
            headers: { Authorization: `Bearer ${token}` },
            }
        );
    
        const groupedAppointments = res.data;
        const allAppointments = Object.values(groupedAppointments).flat();
    
        setAppointments(allAppointments);
        } catch (err) {
        console.error("Failed to fetch appointments", err);
        }
    };
    
    useEffect(() => {
        fetchAppointments();
    }, [selectedDate]);
    
    return (
        <AppointmentContext.Provider value={{ appointments, fetchAppointments }}>
        {children}
        </AppointmentContext.Provider>
    );
    };
