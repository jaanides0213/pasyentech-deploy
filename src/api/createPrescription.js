import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../config/firebase";

export const createPrescription = async (newPrescription, currentPrescription) => {
  // You can use the currentPrescription information if needed for any specific logic

  // Upload and edit logs for transparency as well as timestamps
  // so the actions of the user can be traced
  newPrescription = {
    ...newPrescription,
    createdAt: serverTimestamp(),
  };

  try {
    const prescriptionRef = await addDoc(collection(db, "prescription"), {
      ...newPrescription,
    });

    console.log("Prescription added successfully: ", prescriptionRef.id);

    return prescriptionRef.id;
  } catch (error) {
    console.error("Error adding prescription:", error);
    throw error;
  }
}; 