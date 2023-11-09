import Styles from './Login.module.css'
//import {logInUser} from "../../api/loginUser";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const Login = () => {

    const navigate = useNavigate();
    
    const [uname, setUname] = useState("");
    const [password, setPassword] = useState("");

    const signUpHandler = (e) => {
        e.preventDefault();
        navigate("/signup");
    };

    const submitHandler = (e) => {
        e.preventDefault();
    };

    return (
        <main className={Styles["Login"]}>
            <span className={Styles["Login__span"]}>
                <img/>
                <h2>Log In</h2>
            </span>
                
            <form 
                className={Styles["Login-form"]}
                onSubmit={submitHandler}
                id="Login-form-id"
            >
                <span className={Styles["Login-form__input-span"]}>
                    <label htmlFor="uname" className={Styles["Login-Form__label"]}>
                        Username
                    </label>
                    <input
                        type="text"
                        id="uname"
                        className={Styles["Login-Form__input"]}
                        value={uname}
                        onChange={(e) => setUname(e.target.value)}
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

                <button
                    className={`${Styles["Login_Form__button"]} ${Styles["login_btn"]}`}
                    //onClick={loginHandler}
                    >
                    Login
                </button>

                <h3> Dont have an account yet?</h3>

                <button 
                    className={`${Styles.Login_Form__button} ${Styles.signup_btn}`}
                    onClick={signUpHandler}
                >
                    Sign-Up
                </button>
            </form>
        </main>
    )
    }

export default Login
