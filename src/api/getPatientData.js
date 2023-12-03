import { getDocs, collection } from "firebase/firestore";
import { db } from "../config/firebase";

export const getPatientData = async () => {
  try {
    const patientsCollection = collection(db, "patients");
    const patientsSnapshot = await getDocs(patientsCollection);
    const patientsData = patientsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return patientsData;
  } catch (error) {
    console.error("Error fetching patients data:", error);
    throw error;
  }
};