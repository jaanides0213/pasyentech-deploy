import {
  addDoc,
  collection,
  serverTimestamp,
  setDoc,
  doc,
} from "firebase/firestore";
import { auth, db } from "../config/firebase";

export const createPrescription = async (
  newPrescription,
  currentPrescription
) => {
  // You can use the currentPrescription information if needed for any specific logic

  // Upload and edit logs for transparency as well as timestamps
  // so the actions of the user can be traced
  newPrescription = {
    ...newPrescription,
    createdAt: serverTimestamp(),
  };
  console.log("hhahahaahaha", newPrescription);
  const prescriptionId = newPrescription.prescriptionId;

  if (!prescriptionId || prescriptionId === "") {
    try {
      const prescriptionRef = await addDoc(collection(db, "prescription"), {
        ...newPrescription,
      });

      console.log("Prescription added successfully: ", prescriptionRef.id);

      return prescriptionRef.id;
    } catch (error) {
      console.error("Error adding prescription: ", error);
    }
  } else {
    try {
      const prescriptionRef = doc(db, "prescription", prescriptionId);
      await setDoc(prescriptionRef, {
        ...newPrescription,
      });
      console.log("prescription added successfully: ", prescriptionRef.id);
      return prescriptionRef.id;
    } catch (error) {
      console.error("Error updating prescription: ", error);
      throw error;
    }
  }
};
