import { db } from "../config/firebase";
import { getDoc, doc } from "firebase/firestore";

export const getUserData = async (uid) => {
  try {
    if (uid) {
      const docRef = doc(db, "users", uid);
      const userSnapshot = await getDoc(docRef);

      if (userSnapshot.exists()) {
        return userSnapshot.data();
      }
    }
    return null;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw new Error(`Failed to get user data: ${error.message}`);
  }
};
