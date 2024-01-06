// api/getPatientData.js

import { getDocs, collection } from "firebase/firestore";
import { db } from "../config/firebase";

export const getPrescriptionData = async () => {
  try {
    const prescriptionsCollection = collection(db, "prescription");
    const prescriptionsSnapshot = await getDocs(prescriptionsCollection);

    const prescriptionsData = prescriptionsSnapshot.docs.map((doc) => ({
      
      id: doc.id,
      patientName: doc.data().patientName,
      patientAge: doc.data().patientAge,
    }));
    
    return prescriptionsData;
  } catch (error) {
    console.error("Error fetching prescriptions data:", error);
    throw error;
  }
};
