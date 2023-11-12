import Styles from "./Signup.module.css";
import SignupForm from "./SignupForm";
import { useNavigate } from "react-router-dom";
import { TiUserAddOutline } from "react-icons/ti";
import { useEffect, useState } from "react";
import { createUser } from "../../api/createUser";

const Signup = () => {
  const navigate = useNavigate();

  const logInHandler = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const [userInfo, setUserInfo] = useState({
    fname: "",
    lname: "",
    email: "",
    contactNo: "",
    uname: "",
    password: "",
  });

  const signUpHandler = async (e) => {
    e.preventDefault();

    if (
      !userInfo.fname ||
      !userInfo.lname ||
      !userInfo.email ||
      !userInfo.contactNo ||
      !userInfo.uname
    ) {
      console.error("Please fill in all required fields"); //for debugging
      return;
    }

    try {
      await createUser(userInfo.email, userInfo.password, {
        fname: userInfo.fname,
        lname: userInfo.lname,
        email: userInfo.email,
        contactNo: userInfo.contactNo,
        uname: userInfo.uname,
      });
    } catch (error) {
      console.error("Error signing up:", error.message); //for debugging
    }
  };

  return (
    <main className={Styles["Signup"]}>
      <a href="">
        <img
          className="logo-class"
          src="/src/assets/logo-img/png-250px/white-complete-250px.png"
        />
      </a>
      <div className={Styles["Signup-Text"]}>
        <TiUserAddOutline size="2.5rem" color="white" />
        <h2>Sign Up</h2>
      </div>

      <form className={Styles["Signup_Form"]} id="Signup-Form">
        <SignupForm userInfo={userInfo} setUserInfo={setUserInfo} />
        <button
          className={`${Styles["Signup_Form__button"]} ${Styles["signup_btn"]}`}
          onClick={signUpHandler}
        >
          Sign-up
        </button>
        <h4>Already have an account?</h4>
        <button
          className={`${Styles.Signup_Form__button} ${Styles.login_btn}`}
          onClick={logInHandler}
        >
          Login
        </button>
      </form>
      <br />
      <br />
    </main>
  );
};

export default Signup;
