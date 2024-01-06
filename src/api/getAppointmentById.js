import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";

export const getAppointmentById = async (appointmentId) => {
  try {
    const appointmentRef = doc(db, "appointment", appointmentId);
    const appointmentSnapshot = await getDoc(appointmentRef);

    if (appointmentSnapshot.exists()) {
      return { id: appointmentSnapshot.id, ...appointmentSnapshot.data() };
    } else {
      throw new Error("Appointment not found");
    }
  } catch (error) {
    console.error("Error fetching appointment by ID:", error);
    throw error;
  }
};