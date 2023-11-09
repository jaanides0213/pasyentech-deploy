import Styles from './Signup.module.css';
import SignupForm from "./SignupForm";
import { useNavigate } from 'react-router-dom';
import { TiUserAddOutline } from 'react-icons/ti';

const Signup = () => {

    const navigate = useNavigate();

    const logInHandler = (e) => {
        e.preventDefault();
        navigate("/login");
    }

    return (
        <main className={Styles["Signup"]}>
            <a href=''> {/*indicate appropriate routing here (to itself) */}
                <img className='logo-class' src='/src/assets/logo-img/png-250px/white-complete-250px.png'/>
            </a>
            <div className={Styles["Signup-Text"]}>
                <TiUserAddOutline size="2.5rem" color="white"/>
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

                <h4>Already have an account?</h4>

                <button 
                    className={`${Styles.Signup_Form__button} ${Styles.login_btn}`}
                    onClick={logInHandler}
                >
                    Login
                </button>
            </form>
            <br/>
            <br/>
        </main>
  )
}

export default Signup


