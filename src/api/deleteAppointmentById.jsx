import { doc, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "../config/firebase";

export const deleteAppointmentById = async (appointmentId) => {
  try {
    const appointmentRef = doc(db, "appointment", appointmentId);

    await deleteDoc(doc(db, "appointment", appointmentId));
  } catch (error) {
    console.error("Error deleting appointment by ID:", error);
    throw error;
  }
};
