// api/getPatientData.js

import { getDocs, collection } from "firebase/firestore";
import { db } from "../config/firebase";

export const getPatientData = async () => {
  try {
    const patientsCollection = collection(db, "patients");
    const patientsSnapshot = await getDocs(patientsCollection);

    // Map each document's data to include id, age, sex, and name
    const patientsData = patientsSnapshot.docs.map((doc) => ({
      id: doc.id,
      name: doc.data().name,
      age: doc.data().age,
      sex: doc.data().sex,
    }));
    

    return patientsData;
  } catch (error) {
    console.error("Error fetching patients data:", error);
    throw error;
  }
};
