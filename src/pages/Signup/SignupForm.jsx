import Styles from "./Signup.module.css";
import { useState } from "react";

const SignupForm = ({ userInfo, setUserInfo }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <>
      <span className={Styles["Signup_Form__span"]}>
        <label htmlFor="fname" className={Styles["Signup_Form__span-label"]}>
          First Name
        </label>

        <input
          type="text"
          className={Styles["Signup_Form__span-input"]}
          name="fname"
          value={userInfo.fname}
          onChange={handleInputChange}
          required
        />
      </span>

      <span className={Styles["Signup_Form__span"]}>
        <label htmlFor="lname" className={Styles["Signup_Form__span-label"]}>
          Last Name
        </label>
        <input
          type="text"
          className={Styles["Signup_Form__span-input"]}
          name="lname"
          value={userInfo.lname}
          onChange={handleInputChange}
          required
        />
      </span>

      <span className={Styles["Signup_Form__span"]}>
        <label htmlFor="email" className={Styles["Signup_Form__span-label"]}>
          E-mail Address
        </label>
        <input
          type="email"
          className={Styles["Signup_Form__span-input"]}
          name="email"
          value={userInfo.email}
          onChange={handleInputChange}
          required
        />
      </span>

      <span className={Styles["Signup_Form__span"]}>
        {" "}
        {/*make sure to accept the valid 11-digit phone number (PH)*/}
        <label htmlFor="contact" className={Styles["Signup_Form__span-label"]}>
          Contact Number
        </label>
        <input
          type="text"
          className={Styles["Signup_Form__span-input"]}
          name="contactNo"
          pattern="[0-9]*"
          value={userInfo.contactNo}
          onChange={handleInputChange}
          required
        />
      </span>

      <span className={Styles["Signup_Form__span"]}>
        <label htmlFor="uname" className={Styles["Signup_Form__span-label"]}>
          Username
        </label>
        <input
          type="text"
          className={Styles["Signup_Form__span-input"]}
          name="uname"
          value={userInfo.uname}
          onChange={handleInputChange}
          required
        />
      </span>

      <span className={Styles["Signup_Form__span"]}>
        <label htmlFor="password" className={Styles["Signup_Form__span-label"]}>
          Password
        </label>

        <input
          type="password"
          className={Styles["Signup_Form__span-input"]}
          name="password"
          minLength={8}
          value={userInfo.password}
          onChange={handleInputChange}
          required
        />
      </span>
    </>
  );
};

export default SignupForm;
