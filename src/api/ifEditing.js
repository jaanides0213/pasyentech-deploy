import { doc, getDoc, deleteDoc, updateDoc } from "firebase/firestore";
import { db, auth } from "../config/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const ifEditing = async () => {
  //const appointmentRef = doc(db, "users", appointmentId);
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const userId = user.uid;
          console.log("Current user ID :", userId);
          const toUpdateRef = doc(db, "users", userId);

          const toUpdateSnapshot = await getDoc(toUpdateRef);

          if (toUpdateSnapshot.exists()) {
            console.log(`toUpdate: `, toUpdateSnapshot.data());
            const editId = toUpdateSnapshot.data().currentlyEditing;
            resolve(editId);
          } else {
            console.log("Document does not exist");
            resolve(null); // Handle the case when the document doesn't exist
          }
        } catch (error) {
          console.error("Error editing appointment by ID:", error);
          reject(error);
        } finally {
          unsubscribe(); // Unsubscribe from onAuthStateChanged after processing
        }
      }
    });
  });
};

/*

const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      try {
        const userId = user.uid;
        console.log("Current user ID :", userId);
        const toUpdateRef = doc(db, "users", userId);
        //const toUpdate = getDoc(toUpdateRef);

        console.log(`toUpdate: `, toUpdateRef.data());
        const editId = toUpdateRef.data().currentlyEditing;
        return editId;
      } catch (error) {
        console.error("Error editing appointment by ID:", error);
        throw error;
      }
    }
  });


import { doc, getDoc, deleteDoc, updateDoc,   } from "firebase/firestore";
import { db, auth } from "../config/firebase";

export const ifEditing = async () => {
    try {
      const user = auth.currentUser;
      console.log(user);
  
      if (user) {
        const userId = user.uid;
        console.log('Current user ID:', userId);
  
        const toUpdateRef = doc(db, "users", userId);
        const toUpdate = await getDoc(toUpdateRef);
  
        console.log(`toUpdate: `, toUpdate.data()); // Use .data() to access the document data
        const editId = toUpdate.data().currentlyEditing;
        return editId;
      }
    } catch (error) {
      console.error("Error editing appointment by ID:", error);
      throw error;
    }
  };

  */
