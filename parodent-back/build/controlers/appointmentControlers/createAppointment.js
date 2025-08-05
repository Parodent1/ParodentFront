"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAppointment = void 0;
const firebase_1 = __importDefault(require("../../firebase/firebase"));
const dayjs_1 = __importDefault(require("dayjs"));
const createAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { date, time, duration, patientName, cabinet, comment, doctorName } = req.body;
    const doctorId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
    if (!doctorId || !doctorName || !date || !time || !duration || !cabinet || !patientName) {
        return res.status(400).send("Missing required fields");
    }
    const startTime = (0, dayjs_1.default)(`${date} ${time}`, "YYYY-MM-DD HH:mm");
    const endTime = startTime.add(duration, "minute");
    const startMinutes = startTime.hour() * 60 + startTime.minute();
    const endMinutes = endTime.hour() * 60 + endTime.minute();
    try {
        const snapshot = yield firebase_1.default.collection('appointments')
            .where("date", "==", date)
            .where("cabinet", "==", cabinet)
            .get();
        for (const doc of snapshot.docs) {
            const appt = doc.data();
            const apptStart = (0, dayjs_1.default)(`${date} ${appt.time}`, "YYYY-MM-DD HH:mm");
            const apptEnd = (0, dayjs_1.default)(`${date} ${appt.endTime}`, "YYYY-MM-DD HH:mm");
            const apptStartMin = apptStart.hour() * 60 + apptStart.minute();
            const apptEndMin = apptEnd.hour() * 60 + apptEnd.minute();
            const overlaps = startMinutes < apptEndMin && endMinutes > apptStartMin;
            if (overlaps) {
                res.status(401).send("Appointment overlaps with existing one !");
                return;
            }
        }
        const newAppointment = {
            date,
            time: time,
            endTime: endTime.format("HH:mm"),
            duration,
            patientName,
            cabinet,
            comment,
            doctorId,
            doctorName,
        };
        const docRef = yield firebase_1.default.collection('appointments').add(newAppointment);
        res.status(200).send(Object.assign({ id: docRef.id }, newAppointment));
    }
    catch (error) {
        res.status(500).send("Failed to create appointment");
    }
});
exports.createAppointment = createAppointment;
