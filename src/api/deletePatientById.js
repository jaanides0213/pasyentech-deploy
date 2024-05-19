import { doc, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "../config/firebase";

export const deletePatientById = async (patientId) => {
  try {
    const patientRef = doc(db, "patients", patientId);

    await deleteDoc(doc(db, "patients", patientId));
  } catch (error) {
    console.error("Error deleting patient by ID:", error);
    throw error;
  }
};
