import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../config/firebase";

export const createPatient = async (newPatient, currentUser) => {
  // You can use the currentUser information if needed for any specific logic

  // Upload and edit logs for transparency as well as timestamps
  // so the actions of the user can be traced
  newPatient = {
    ...newPatient,
    createdAt: serverTimestamp(),
  };

  try {
    const patientRef = await addDoc(collection(db, "patients"), {
      ...newPatient,
    });

    console.log("Patient added successfully: ", patientRef.id);

    return patientRef.id;
  } catch (error) {
    console.error("Error adding patient:", error);
    throw error;
  }
};