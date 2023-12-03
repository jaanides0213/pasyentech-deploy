import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../config/firebase";

export const createPatient = async (newPatient) => {
  // Getting currently logged in user
  const currentUser = auth.currentUser;

  // Upload and edit logs for transparency as well as timestamps
  // so the actions of the user can be traced
  newPatient = {
    ...newPatient,
    createdAt: serverTimestamp(), // Ensure this line is present
  };

  if (
    !newPatient.name ||
    !newPatient.age ||
    !newPatient.sex ||
    !newPatient.dateofbirth
  ) {
    throw new Error("Please fill in all fields");
  }

  try {
    // Creating a variable to hold "addDoc",
    // await function to give way for upload time, added to collection "patients"
    // "...newPatient" is to add the contents of "newpatient" sa useState
    const patientRef = await addDoc(collection(db, "patients"), {
      ...newPatient,
    });

    // Adding console log with the id of the individual upload for double-checking
    console.log("Patient added successfully: ", patientRef.id);

    return patientRef.id;
  } catch (error) {
    console.error("Error adding patient:", error);
    throw error;
  }
};
