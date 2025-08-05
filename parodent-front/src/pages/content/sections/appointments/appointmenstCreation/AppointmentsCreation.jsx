// import { useState } from "react";
// import "./appointmenstCreation.css";
// import TimeInput from "./timeInput/TimeInput";

// function AppointmentCreation({setShowAppointmentCreation, onCreateAppointment, doctorName }) {
//   const [formData, setFormData] = useState({
//     name: "",
//     comment: "",
//     doctor: "",
//     timeData: null,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleTimeSelect = (timeData) => {
//     setFormData((prev) => ({ ...prev, timeData }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (onCreateAppointment) {
//       await onCreateAppointment({
//         ...formData,
//         doctorName,
//       });
//     }
//   };

//   return (
//     <div className="appointmentCreationBody" 
//   onClick={() => setShowAppointmentCreation(false)}
// >

//       <div
//         className="appointmentCreationContent"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <form onSubmit={handleSubmit} className="appointmentCreationForm">
//           <div className="coolinput">
//             <label className="text" htmlFor="name">Full Name</label>
//             <input
//               id="name"
//               name="name"
//               type="text"
//               placeholder="Write here..."
//               className="input"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="coolinput">
//             <label className="text" htmlFor="comment">Comment</label>
//             <input
//               id="comment"
//               name="comment"
//               type="text"
//               placeholder="Write here..."
//               className="input"
//               value={formData.comment}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="coolinput timeInput">
//             <TimeInput onTimeSelect={handleTimeSelect} />
//           </div>

//           <div className="appointmentCreationBtnContainer">
//             <button type="submit" className="createAppointmentBTN">
//               Створити запис
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default AppointmentCreation;
