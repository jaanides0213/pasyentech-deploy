import Styles from "./Signup.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TiUserAddOutline } from "react-icons/ti";
import { createUser } from "../../api/createUser";

const Signup = () => {
  const navigate = useNavigate();

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [fnameError, setFnameError] = useState("");
  const [lnameError, setLnameError] = useState("");

  const logInHandler = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const validateFirstName = (value) => {
    const regex = /^[a-zA-Z]+$/;
    const isValid = regex.test(value);

    if (isValid) {
      setFnameError("");
      setFname(value);
    } else {
      setFnameError("First name should only contain letters.");
    }
  };

  const validateLastName = (value) => {
    const regex = /^[a-zA-Z]+$/;
    const isValid = regex.test(value);

    if (isValid) {
      setLnameError("");
      setLname(value);
    } else {
      setLnameError("Last name should only contain letters.");
    }
  };

  const signUp = async (e) => {
    e.preventDefault();

    const isContactNoValid =
      /^[0-9]*$/.test(contactNo) && contactNo.length === 11;

    if (!isContactNoValid) {
      alert("Please enter a valid 11-digit contact number.");
      setContactNo("");
      return;
    }
    await createUser(email, password, fname, lname, contactNo, navigate);
  };

  return (
    <main className={Styles["Signup"]}>
      <div className="div-logo">
        <a href="signup">
          <img
            className="logo-class"
            src="/src/assets/logo-img/png-250px/white-complete-250px.png"
          />
        </a>
      </div>

      <div className={Styles["Signup-Text"]}>
        <TiUserAddOutline size="2.5rem" color="white" />
        <h2>Sign Up</h2>
      </div>

      <form
        className={Styles["Signup_Form"]}
        id="Signup-Form"
        onSubmit={signUp}
      >
        <span className={Styles["Signup_Form__span"]}>
          <label htmlFor="fname" className={Styles["Signup_Form__span-label"]}>
            First Name
          </label>
          <input
            type="text"
            className={Styles["Signup_Form__span-input"]}
            name="fname"
            value={fname}
            onChange={(e) => validateFirstName(e.target.value)}
            required
          />
          {fnameError && <div className="error-message">{fnameError}</div>}
        </span>

        <span className={Styles["Signup_Form__span"]}>
          <label htmlFor="lname" className={Styles["Signup_Form__span-label"]}>
            Last Name
          </label>
          <input
            type="text"
            className={Styles["Signup_Form__span-input"]}
            name="lname"
            value={lname}
            onChange={(e) => validateLastName(e.target.value)}
            required
          />
          {lnameError && <div className="error-message">{lnameError}</div>}
        </span>

        <span className={Styles["Signup_Form__span"]}>
          <label htmlFor="email" className={Styles["Signup_Form__span-label"]}>
            E-mail Address
          </label>
          <input
            type="email"
            className={Styles["Signup_Form__span-input"]}
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </span>

        <span className={Styles["Signup_Form__span"]}>
          {" "}
          <label
            htmlFor="contact"
            className={Styles["Signup_Form__span-label"]}
          >
            Phone Number
          </label>
          <input
            type="text"
            className={Styles["Signup_Form__span-input"]}
            name="contactNo"
            pattern="[0-9]*"
            value={contactNo}
            onChange={(e) => setContactNo(e.target.value)}
            required
          />
        </span>

        {/* <span className={Styles["Signup_Form__span"]}>
          <label htmlFor="uname" className={Styles["Signup_Form__span-label"]}>
            Username
          </label>
          <input
            type="text"
            className={Styles["Signup_Form__span-input"]}
            name="uname"
            value={uname}
            onChange={(e) => setUname(e.target.value)}
            required
          />
        </span> */}

        <span className={Styles["Signup_Form__span"]}>
          <label
            htmlFor="password"
            className={Styles["Signup_Form__span-label"]}
          >
            Password
          </label>
          <input
            type="password"
            className={Styles["Signup_Form__span-input"]}
            name="password"
            minLength={8}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </span>

        <button
          className={`${Styles["Signup_Form__button"]} ${Styles["signup_btn"]}`}
          type="submit"
        >
          Sign Up
        </button>
        <h4>Already have an account?</h4>
        <button
          className={`${Styles.Signup_Form__button} ${Styles.login_btn}`}
          onClick={logInHandler}
        >
          Log In
        </button>
      </form>
      <br />
      <br />
    </main>
  );
};

export default Signup;
