import { addDoc, collection, serverTimestamp, setDoc, doc } from "firebase/firestore";
import { auth, db } from "../config/firebase";

export const createAppointment = async (newAppointment, currentAppointment) => {
  newAppointment = {
    ...newAppointment,
    createdAt: serverTimestamp(),
  };

  console.log("hahhahhaahaha", newAppointment);
  const appointmentId = newAppointment.apptId;

  if (!appointmentId || appointmentId === "") {
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
  } else {
    try {
      const appointmentRef = doc(db, "appointment", appointmentId);

      await setDoc(appointmentRef, {
        ...newAppointment,
      });

      console.log("Appointment updated successfully: ", appointmentRef.id);

      return appointmentRef.id;
    } catch (error) {
      console.error("Error updating appointment:", error);
      throw error;
    }
  }
};
