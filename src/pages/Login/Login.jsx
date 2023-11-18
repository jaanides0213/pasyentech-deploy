import Styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { TiUserOutline } from "react-icons/ti";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../config/firebase";
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const signUpHandler = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  const login = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage("Please fill in the fields");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        if (error.code === "auth/user-not-found") {
          alert("User not found. Please create an account.");
        } else if (error.code === "auth/wrong-password") {
          alert("Wrong password. Please try again.");
        } else {
          console.log(error);
        }
      });
  };

  useEffect(() => {
    // Clear email and password when component mounts
    setEmail("");
    setPassword("");

    const handleLogin = async (user) => {
      let userRef;
      if (user) {
        const uid = user.uid;
        const userRef = doc(db, "users", uid);
        const userDoc = await getDoc(userRef);
        const userDocData = userDoc.data();
        if (userDoc.exists()) {
          if (userDocData.role !== "admin") {
            alert(
              "Your account is awaiting approval from an admin. Please check back later."
            );
            await signOut(auth);
          } else {
            alert("Redirecting you to the home page..");
            navigate("/dashboard");
          }
        }
      }

      try {
        if (userRef) {
          const userDoc = await getDoc(userRef);

          if (userDoc.exists()) {
            const userData = userDoc.data();
            if (userData.role === "approved") {
              await signInWithEmailAndPassword(auth, email, password);
              navigate("/dashboard");
            }
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    const listen = onAuthStateChanged(auth, handleLogin);
    return () => {
      listen();
    };
  }, [email, password, navigate]);

  return (
    <main className={Styles["Login"]}>
      <div className={Styles["div-logo"]}>
        <a href="/login">
          <img src="/src/assets/logo-img/png-250px/white-complete-250px.png" />
        </a>
      </div>

      <span className={Styles["Login__span"]}>
        <TiUserOutline size="2.5rem" color="white" />
        <h2>Log In</h2>
      </span>

      <form
        className={Styles["Login-form"]}
        onSubmit={login}
        id="Login-form-id"
      >
        <span className={Styles["Login-form__input-span"]}>
          <label htmlFor="email" className={Styles["Login-Form__label"]}>
            Email
          </label>
          <input
            type="text"
            id="email"
            className={Styles["Login-Form__input"]}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </span>

        <span className={Styles["Login-form__input-span"]}>
          <label htmlFor="password" className={Styles["Login-Form__label"]}>
            Password
          </label>
          <input
            type="password"
            id="password"
            className={Styles["Login-Form__input"]}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </span>

        {errorMessage && <p>{errorMessage}</p>}

        <button
          className={`${Styles["Login_Form__button"]} ${Styles["login_btn"]}`}
          type="submit"
        >
          Log In
        </button>

        <h4> Dont have an account yet?</h4>

        <button
          className={`${Styles.Login_Form__button} ${Styles.signup_btn}`}
          onClick={signUpHandler}
        >
          Sign Up
        </button>
      </form>
    </main>
  );
};

export default Login;
