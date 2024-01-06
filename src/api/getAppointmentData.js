// api/getPatientData.js

import { getDocs, collection } from "firebase/firestore";
import { db } from "../config/firebase";

export const getAppointmentData = async () => {
  try {
    const appointmentCollection = collection(db, "appointment");
    const appointmentSnapshot = await getDocs(appointmentCollection);

    const appointmentData = appointmentSnapshot.docs.map((doc) => ({
      
      id: doc.id,
      patientName: doc.data().patientName,
      apptDate: doc.data().apptDate,
      apptTime: doc.data().apptTime,
    }));
    
    return appointmentData;
  } catch (error) {
    console.error("Error fetching appointment data:", error);
    throw error;
  }
};
