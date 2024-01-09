import {
  addDoc,
  collection,
  serverTimestamp,
  setDoc,
  doc,
} from "firebase/firestore";
import { auth, db } from "../config/firebase";

export const createPatient = async (newPatient, currentUser) => {
  // You can use the currentUser information if needed for any specific logic

  // Upload and edit logs for transparency as well as timestamps
  // so the actions of the user can be traced
  newPatient = {
    ...newPatient,
    createdAt: serverTimestamp(),
  };

  console.log("hahaha", newPatient);
  const patientId = newPatient.patientId;

  // If patientId is undefined or empty, remove it from the object
  if (!patientId || patientId === "") {
    // This ensures that patientId is not sent as an undefined or empty string
    delete newPatient.patientId;
  }

  try {
    const patientRef = await addDoc(collection(db, "patients"), {
      ...newPatient,
    });

    console.log("Patient added successfully: ", patientRef.id);

    return patientRef.id;
  } catch (error) {
    console.error("error: ", error);
  }
};
