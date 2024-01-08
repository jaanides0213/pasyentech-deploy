import { doc, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "../config/firebase";

export const deletePrescriptionById = async (prescriptionId) => {
  try {
    const prescriptionRef = doc(db, "prescription", prescriptionId);

    await deleteDoc(doc(db, "prescription", prescriptionId));
  } catch (error) {
    console.error("Error deleting prescription by ID:", error);
    throw error;
  }
};
