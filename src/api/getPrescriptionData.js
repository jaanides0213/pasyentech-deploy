// api/getPatientData.js

import { getDocs, collection } from "firebase/firestore";
import { db } from "../config/firebase";

export const getPrescriptionData = async () => {
  try {
    const prescriptionCollection = collection(db, "prescriptions");
    const prescriptionSnapshot = await getDocs(prescriptionCollection);

    // Map each document's data to include id, age, sex, and name
    const prescriptionData = prescriptionSnapshot.docs.map((doc) => ({
      
      id: doc.id,
    }));
    
    return prescriptionData;
  } catch (error) {
    console.error("Error fetching patients data:", error);
    throw error;
  }
};
