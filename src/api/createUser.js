import {
    createUserWithEmailAndPassword,
    updateProfile,
    sendEmailVerification,
  } from "firebase/auth";
  import { setDoc, doc, serverTimestamp } from "firebase/firestore";
  import { auth, db } from "../config/firebase";
  
  export const createUser = async (email, password, fname, lname, contactNo, navigate) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  
      const { user } = userCredential;
  
      // Update user profile
      await updateProfile(user, {
        displayName: `${fname}`,
      });
  
      // Send email verification
      await sendEmailVerification(user); //not yet implemented but will implement soon

      
      const docRef = doc(db, "users", user.uid);
      await setDoc(docRef, {
        fname: fname,
        lname: lname,
        email: email,
        role: "pending",
        contactNo: contactNo,
      });
  
      // Create request document
      const requestDocRef = doc(db, "requests", user.uid);
      await setDoc(requestDocRef, {
        firstName: fname,
        lastName: lname,
        email: email,
        createdAt: serverTimestamp(),
        status: "pending",
      });
  
      const message =
        "You have been registered. Your account is awaiting approval from the superadmin. A verification email has been sent to your email address.";
      alert(message);
      
    // Navigate to the login page after the alert is clicked
    navigate("/login");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert(
          "The email address is already registered. Please use a different email."
        );
      } else {
        console.error("Error during signup:", error);
      }
    }
  };
  