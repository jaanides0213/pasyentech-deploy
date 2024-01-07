import { getDocs, collection } from "firebase/firestore";
import { db } from "../config/firebase";

export const getPatientData = async () => {
  try {
    const patientsCollection = collection(db, "patients");
    const patientsSnapshot = await getDocs(patientsCollection);
    const patientsData = patientsSnapshot.docs.map((doc) => ({
      id: doc.id,
      patientName: doc.data().patientName,
      patientAge: doc.data().patientAge,
      patientSex: doc.data().patientSex,
      createdAt: doc.data().createdAt, 
    }));
    
    return patientsData;
  } catch (error) {
    console.error("Error fetching patients data:", error);
    throw error;
  }
};