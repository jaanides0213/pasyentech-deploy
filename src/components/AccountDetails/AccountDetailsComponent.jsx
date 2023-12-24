import React, { useState  } from "react"; // Import useState from React
import { HiPencil, HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import Styles from "./AccountDetailsComponent.module.css"; // Adjust the import path

const AccountDetailsComponent = () => {
    // State to track password visibility
    const [CurrentPasswordVisible, setCurrentPasswordVisible] = useState(false);
    const [NewPasswordVisible, setNewPasswordVisible] = useState(false);
    const [ConfirmNewPasswordVisible, setConfirmNewPasswordVisible] = useState(false);

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
                        className={Styles["AccountDetails__input"]}>
                    </input>
                    <button
                        className={Styles["AccountDetails__edit-detail"]}>
                        <HiPencil/>
                    </button>
                </div>

                {/*LAST NAME*/}
                <label>Last Name</label>
                <div className={Styles["AccountDetails__input-wrapper"]}>
                    <input
                        type="text"
                        className={Styles["AccountDetails__input"]}>
                    </input>
                    <button
                        className={Styles["AccountDetails__edit-detail"]}>
                        <HiPencil/>
                    </button>
                </div>
                </div>
            
                <div className={Styles["Btn-container__style"]}>
                    <button className={Styles["Btn__style"]}>
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
                        className={Styles["AccountDetails__input"]}>
                    </input>
                    <button
                        className={Styles["AccountDetails__edit-detail"]}>
                        <HiPencil/>
                    </button>
                </div>

                {/*E-MAIL ADDRESS*/}
                <label>E-mail Address</label>
                <div className={Styles["AccountDetails__input-wrapper"]}>
                    <input
                        type="email"
                        className={Styles["AccountDetails__input"]}>
                    </input>
                    <button
                        className={Styles["AccountDetails__edit-detail"]}>
                        <HiPencil/>
                    </button>
                </div>
                </div>

                <div className={Styles["Btn-container__style"]}>
                <button className={Styles["Btn__style"]}>
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
                        className={Styles["AccountDetails__input"]}>
                    </input>
                    <button
                        className={Styles["AccountDetails__edit-detail"]}
                        onClick={toggleCurrentPasswordVisibility}>
                        {CurrentPasswordVisible ? <HiOutlineEye /> : <HiOutlineEyeOff />}
                    </button>
                </div>

                {/*INPUT NEW PASSWORD*/}
                <label>New Password</label>
                <div className={Styles["AccountDetails__input-wrapper"]}>
                    <input
                        type={NewPasswordVisible ? "text" : "password"}
                        className={Styles["AccountDetails__input"]}>
                    </input>
                    <button
                        className={Styles["AccountDetails__edit-detail"]}
                        onClick={toggleNewPasswordVisibility}>
                        {NewPasswordVisible ? <HiOutlineEye /> : <HiOutlineEyeOff />}
                    </button>
                </div>

                {/*CURRENT PASSWORD*/}
                <label>Confirm New Password</label>
                <div className={Styles["AccountDetails__input-wrapper"]}>
                    <input
                        type={ConfirmNewPasswordVisible  ? "text" : "password"}
                        className={Styles["AccountDetails__input"]}>
                    </input>
                    <button
                        className={Styles["AccountDetails__edit-detail"]}
                        onClick={toggleConfirmNewPasswordVisibility}>
                        {ConfirmNewPasswordVisible  ? <HiOutlineEye /> : <HiOutlineEyeOff />}
                    </button>
                </div>
            </div>

            <div className={Styles["Btn-container__style"]}>
                <button className={Styles["Btn__style"]}>
                    Save
                </button>
            </div>
        </div>
    </div>
    )
}

export default AccountDetailsComponent
