import Styles from './Signup.module.css';
import SignupForm from "./SignupForm";
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const navigate = useNavigate();

    const logInHandler = (e) => {
        e.preventDefault();
        navigate("/login");
    }

    return (
        <main className={Styles["Signup"]}>
            <div className={Styles["Signup-Text"]}>
                <img/>
                <h2>Sign Up</h2>
            </div>

            <form
                className={Styles["Signup_Form"]}
                id="Signup-Form"
            >
                <SignupForm/> {/*gicall ko agad; di pa maka fetch ng data*/}
                
                <button
                    className={`${Styles["Signup_Form__button"]} ${Styles["signup_btn"]}`}
                    // onClick={signUpHandler}
                    >
                    Sign-up
                </button>

                <h3>Already have an account?</h3>

                <button 
                    className={`${Styles.Signup_Form__button} ${Styles.login_btn}`}
                    onClick={logInHandler}
                >
                    Login
                </button>

            </form>
        </main>
  )
}

export default Signup


