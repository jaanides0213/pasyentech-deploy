import { doc, getDoc, deleteDoc, updateDoc  } from "firebase/firestore";
import { db, auth } from "../config/firebase";

export const currentlyEditing = async (editId) => {
  try {
    //const appointmentRef = doc(db, "users", appointmentId);

    const user = auth.currentUser;

    if (user) {
        const userId = user.uid;
        console.log('Current user ID :', userId);
        
        const toUpdate = doc(db, "users", userId);
        await updateDoc(toUpdate, {
            currentlyEditing: editId
        });
        console.log('currently editing: ', editId);
        return editId;
    }

  } catch (error) {
    console.error("Error editing appointment by ID:", error);
    throw error;
  }
};

