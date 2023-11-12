import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../config/firebase";

export const createUser = async (email, password, userInfo) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      await db.collection("users").doc(user.uid).set({
        fname: userInfo.fname,
        lname: userInfo.lname,
        email: userInfo.email,
        contactNo: userInfo.contactNo,
        uname: userInfo.uname,
      });
  
      console.log("User successfully created:", user);
      return user;
    } catch (error) {
      console.error("Error creating user:", error.message);
      if (error.code === 'auth/invalid-email') {
        console.error('Invalid email format.'); //for debugging
      }
      throw error;
    }
  };