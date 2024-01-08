import React, { useEffect, useState } from "react"; // Import useState from React
import { HiPencil, HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import Styles from "./AccountDetailsComponent.module.css"; // Adjust the import path
import { getUserData } from "../../api/getUserData";
import { getAuth, onAuthStateChanged, updateCurrentUser } from "firebase/auth";
import { db, auth } from "../../config/firebase";
//import { auth, db } from "../../../firebase"
// Firebase SDK to update the personal info fields in the Firestore
import { doc, getDoc, updateDoc } from "firebase/firestore";
import {
  updateEmail,
  reauthenticateWithCredential,
  updatePassword,
  EmailAuthProvider,
} from "firebase/auth";
// Firebase SDK to update to a new email
// Firebase SDK to re-authenticate user when changing password
import {
  updatePersonalInformation,
  updateContactInformation,
  updatePasswordInformation,
} from "../../api/editAccount";

const AccountDetailsComponent = ({ userData }) => {
  // State to track password visibility
  const [CurrentPasswordVisible, setCurrentPasswordVisible] = useState(false);
  const [NewPasswordVisible, setNewPasswordVisible] = useState(false);
  const [ConfirmNewPasswordVisible, setConfirmNewPasswordVisible] =
    useState(false);
  const [user, setUser] = useState(userData);
  const [editedUserData, setEditedUserData] = useState({});
  // const [editMode, setEditMode] = useState(false);
  const [userId, setUserId] = useState("");

  // Function to toggle password visibility
  const toggleCurrentPasswordVisibility = () => {
    setCurrentPasswordVisible(!CurrentPasswordVisible);
  };

  // Function to toggle password visibility for new password
  const toggleNewPasswordVisibility = () => {
    setNewPasswordVisible(!NewPasswordVisible);
  };

  // Function to toggle password visibility for confirm new password
  const toggleConfirmNewPasswordVisibility = () => {
    setConfirmNewPasswordVisible(!ConfirmNewPasswordVisible);
  };

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const userData = await getUserData(user.uid);
          console.log("User Data:", userData); //must be removed
          setUser(userData);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        setUser(null);
      }
      const fetchUserData = async () => {
        try {
          const user = auth.currentUser;
          if (user) {
            const uid = user.uid;
            const userRef = doc(db, "users", uid);
            const userSnapshot = await getDoc(userRef);
            if (userSnapshot.exists()) {
              const userData = userSnapshot.data();
              setEditedUserData({
                fname: userData.fname,
                lname: userData.lname,
                contactNo: userData.contactNo,
                email: userData.email,
              });
            }
          }
        } catch (err) {
          console.log(err);
        }
      };

      fetchUserData();
    });

    return () => {
      unsubscribe();
    };
  }, [userData]);

  const handleInputChange = (field, value) => {
    setEditedUserData((prev) => {
      return {
        ...prev,
        [field]: value,
      };
    });
  };

  const handlePersonalInformationUpdate = async () => {
    try {
      const testing = auth.currentUser;
      const testingId = testing.uid;
      console.log("Current user uid: ", testingId);
      const updatedPersonalInfo = {
        fname: editedUserData.fname,
        lname: editedUserData.lname,
      };
      /*
      if (!user.uid) {
        console.error("User ID is missing");
        return;
      }
*/
      await updatePersonalInformation(testingId, updatedPersonalInfo);
      alert("Personal information updated successfully!");
      console.log("Personal information updated successfully!");
    } catch (error) {
      console.error("Error updating personal information:", error);
    }
  };

  const handleContactInformationUpdate = async () => {
    try {
      const testing = auth.currentUser;
      const testingId = testing.uid;
      console.log("Current user uid: ", testingId);

      const updatedContactInfo = {
        contactNo: editedUserData.contactNo,
        email: editedUserData.email,
      };
      await updateContactInformation(testingId, updatedContactInfo);
      setUser(editedUserData);
      alert("Contact information updated successfully!");
      console.log("Contact information updated successfully!");
    } catch (error) {
      console.error("Error updating contact information:", error);
    }
  };

  const handlePasswordUpdate = async () => {
    try {
      if (editedUserData.newPassword !== editedUserData.confirmPassword) {
        setPasswordError("Passwords do not match");
        return;
      }
      const user = auth.currentUser;
      if (user) {
        const credential = EmailAuthProvider.credential(
          user.email,
          editedUserData.currentPassword
        );
        await reauthenticateWithCredential(user, credential);
        await updatePassword(user, editedUserData.newPassword);
        setEditedUserData({
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
        //setPasswordError(null);
        alert("Password updated!");
      }
    } catch (err) {
      if (err.code === "auth/wrong-password") {
        alert("Wrong password. Please try again.");
      }
      console.error(err);
      //setPasswordError("An error occurred while updating your password.");
    }
  };

  /*   
    try {
      const testing = auth.currentUser;
      const testingId = testing.uid;
      console.log("Current user uid: ", testingId);

      const updatedPasswordInfo = {
        currentPassword: editedUserData.currentPassword,
        newPassword: editedUserData.newPassword,
        confirmPassword: editedUserData.confirmPassword,
      };
      await updatePasswordInformation(testingId, updatedPasswordInfo);
      setUser(editedUserData);
      console.log("Password updated successfully");
    } catch (error) {
      console.error("Error updating password:", error.message);
    }
*/

  /*
  const userFName = user ? user.fname : "";
  const userLName = user ? user.lname : "";
  const usercontactNo = user ? user.contactNo : "";
  const userEmail = user ? user.email : "";
  const userPassword = user ? user.password : "";
*/
  return (
    <div className={Styles["AccountDetails__cont-column-main"]}>
      <h2>Account Details</h2>
      <div className={Styles["AccountDetails__section"]}>
        {/*SECTION 1: PERSONAL INFORMATION*/}
        <h3>Personal Information</h3>
        <div className={Styles["AccountDetails__subsection"]}>
          {/*FIRST NAME*/}
          <label>First Name</label>
          <div className={Styles["AccountDetails__input-wrapper"]}>
            <input
              type="text"
              className={Styles["AccountDetails__input"]}
              value={editedUserData.fname}
              //readOnly={!editMode}
              onChange={(e) => handleInputChange("fname", e.target.value)}
            ></input>
            <button className={Styles["AccountDetails__edit-detail"]}>
              <HiPencil />
            </button>
          </div>

          {/*LAST NAME*/}
          <label>Last Name</label>
          <div className={Styles["AccountDetails__input-wrapper"]}>
            <input
              type="text"
              className={Styles["AccountDetails__input"]}
              //value={userLName}
              value={editedUserData.lname}
              //readOnly={!editMode}
              onChange={(e) => handleInputChange("lname", e.target.value)}
            ></input>
            <button className={Styles["AccountDetails__edit-detail"]}>
              <HiPencil />
            </button>
          </div>
        </div>

        <div className={Styles["Btn-container__style"]}>
          <button
            className={Styles["Btn__style"]}
            onClick={() => handlePersonalInformationUpdate()}
          >
            Save
          </button>
        </div>
      </div>

      <div className={Styles["AccountDetails__section"]}>
        {/*SECTION 2: CONTACT INFORMATION*/}
        <h3>Contact Information</h3>
        <div className={Styles["AccountDetails__subsection"]}>
          {/*PHONE NUMBER*/}
          <label>Phone Number</label>
          <div className={Styles["AccountDetails__input-wrapper"]}>
            <input
              type="text"
              className={Styles["AccountDetails__input"]}
              value={editedUserData.contactNo}
              onChange={(e) => handleInputChange("contactNo", e.target.value)}
            ></input>
            <button className={Styles["AccountDetails__edit-detail"]}>
              <HiPencil />
            </button>
          </div>

          {/*E-MAIL ADDRESS*/}
          <label>E-mail Address</label>
          <div className={Styles["AccountDetails__input-wrapper"]}>
            <input
              type="email"
              className={Styles["AccountDetails__input"]}
              value={editedUserData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
            ></input>
            <button className={Styles["AccountDetails__edit-detail"]}>
              <HiPencil />
            </button>
          </div>
        </div>

        <div className={Styles["Btn-container__style"]}>
          <button
            className={Styles["Btn__style"]}
            onClick={() => handleContactInformationUpdate()}
          >
            Save
          </button>
        </div>
      </div>

      <div className={Styles["AccountDetails__section"]}>
        {/*SECTION 3: PASSWORD*/}
        <h3>Password</h3>
        <div className={Styles["AccountDetails__subsection"]}>
          {/*CURRENT PASSWORD*/}
          <label>Current Password</label>
          <div className={Styles["AccountDetails__input-wrapper"]}>
            <input
              type={CurrentPasswordVisible ? "text" : "password"}
              className={Styles["AccountDetails__input"]}
              onChange={(e) =>
                handleInputChange("currentPassword", e.target.value)
              }
            ></input>
            <button
              className={Styles["AccountDetails__edit-detail"]}
              onClick={toggleCurrentPasswordVisibility}
            >
              {CurrentPasswordVisible ? <HiOutlineEye /> : <HiOutlineEyeOff />}
            </button>
          </div>

          {/*INPUT NEW PASSWORD*/}
          <label>New Password</label>
          <div className={Styles["AccountDetails__input-wrapper"]}>
            <input
              type={NewPasswordVisible ? "text" : "password"}
              className={Styles["AccountDetails__input"]}
              onChange={(e) => handleInputChange("newPassword", e.target.value)}
            ></input>
            <button
              className={Styles["AccountDetails__edit-detail"]}
              onClick={toggleNewPasswordVisibility}
            >
              {NewPasswordVisible ? <HiOutlineEye /> : <HiOutlineEyeOff />}
            </button>
          </div>

          {/*CURRENT PASSWORD*/}
          <label>Confirm New Password</label>
          <div className={Styles["AccountDetails__input-wrapper"]}>
            <input
              type={ConfirmNewPasswordVisible ? "text" : "password"}
              className={Styles["AccountDetails__input"]}
              onChange={(e) =>
                handleInputChange("confirmPassword", e.target.value)
              }
            ></input>
            <button
              className={Styles["AccountDetails__edit-detail"]}
              onClick={toggleConfirmNewPasswordVisibility}
            >
              {ConfirmNewPasswordVisible ? (
                <HiOutlineEye />
              ) : (
                <HiOutlineEyeOff />
              )}
            </button>
          </div>
        </div>

        <div className={Styles["Btn-container__style"]}>
          <button
            className={Styles["Btn__style"]}
            onClick={() => handlePasswordUpdate()}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
export default AccountDetailsComponent;
