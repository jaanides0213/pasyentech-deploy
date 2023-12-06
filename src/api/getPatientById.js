import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";

export const getPatientById = async (patientId) => {
  try {
    const patientRef = doc(db, "patients", patientId);
    const patientSnapshot = await getDoc(patientRef);

    if (patientSnapshot.exists()) {
      return { id: patientSnapshot.id, ...patientSnapshot.data() };
    } else {
      throw new Error("Patient not found");
    }
  } catch (error) {
    console.error("Error fetching patient by ID:", error);
    throw error;
  }
};
