import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../config/firebase";

export const createAppointment = async (newAppointment, currentAppointment) => {
  newAppointment = {
    ...newAppointment,
    createdAt: serverTimestamp(),
  };

  try {
    const appointmentRef = await addDoc(collection(db, "appointment"), {
      ...newAppointment,
    });

    console.log("Appointment added successfully: ", appointmentRef.id);

    return appointmentRef.id;
  } catch (error) {
    console.error("Error adding appointment:", error);
    throw error;
  }
}; 