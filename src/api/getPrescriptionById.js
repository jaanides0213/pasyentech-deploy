import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";

export const getPrescriptionById = async (prescriptionId) => {
  try {
    const prescriptionRef = doc(db, "prescriptions", prescriptionId);
    const prescriptionSnapshot = await getDoc(prescriptionRef);

    if (prescriptionSnapshot.exists()) {
      return { id: prescriptionSnapshot.id, ...prescriptionSnapshot.data() };
    } else {
      throw new Error("Prescription not found");
    }
  } catch (error) {
    console.error("Error fetching prescription by ID:", error);
    throw error;
  }
};