import {
  updateProfile,
  getAuth,
  reauthenticateWithCredential,
  updatePassword,
  updatePhoneNumber,
  updateEmail,
} from "firebase/auth";
import { doc, updateDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";

export const updatePersonalInformation = async (uid, userData) => {
  try {
    const userRef = collection(db, "users");
    const userDocRef = doc(userRef, uid);

    await updateDoc(userDocRef, {
      fname: userData.fname,
      lname: userData.lname,
    });

    console.log("Personal information updated successfully");
  } catch (error) {
    console.error("Error updating personal information:", error);
    throw error;
  }
};

export const updateContactInformation = async (uid, userData) => {
  try {
    const userRef = collection(db, "users");
    const userDocRef = doc(userRef, uid);

    const updateData = {
      contactNo: userData.contactNo,
    };

    // Check if email is defined before updating
    if (userData.email) {
      updateData.email = userData.email;
    }

    await updateDoc(userDocRef, updateData);

    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      updateEmail(auth.currentUser, userData.email);
    }

    console.log("Contact information updated successfully");
    console.log(userData);
  } catch (error) {
    console.error("Error updating contact information:", error);
    throw error;
  }
};

export const updatePasswordInformation = async (uid, updatedPasswordInfo) => {
  try {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      // Reauthenticate the user with their current password
      const credential = await reauthenticateWithCredential(
        user,
        updatedPasswordInfo.currentPassword
      );

      // Check if the entered current password is correct
      if (credential) {
        // Check if the new passwords match
        if (
          updatedPasswordInfo.newPassword ===
          updatedPasswordInfo.confirmPassword
        ) {
          // Update the user's password
          await updatePassword(user, updatedPasswordInfo.newPassword);

          console.log("Password updated successfully");
        } else {
          throw new Error("New passwords do not match");
        }
      } else {
        throw new Error("Incorrect current password");
      }
    }
  } catch (error) {
    console.error("Error updating password:", error);
    throw error;
  }
};
