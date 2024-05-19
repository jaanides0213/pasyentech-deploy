import { doc, getDoc, deleteDoc, updateDoc } from "firebase/firestore";
import { db, auth } from "../config/firebase";

export const notEditing = async () => {
  try {
    //const appointmentRef = doc(db, "users", appointmentId);

    const user = auth.currentUser;

    if (user) {
      const userId = user.uid;
      console.log("Current user ID :", userId);

      const toUpdate = doc(db, "users", userId);
      await updateDoc(toUpdate, {
        currentlyEditing: "",
      });
      return ("HUMAN NA")
    }
  } catch (error) {
    console.error("Error editing appointment by ID:", error);
    throw error;
  }
};
