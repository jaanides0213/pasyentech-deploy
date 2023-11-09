import Styles from './Signup.module.css'

const SignupForm = () => {

    return (
        <>
            <span className={Styles["Signup_Form__span"]}>
                <label 
                    htmlFor="fname" 
                    className={Styles["Signup_Form__span-label"]}
                    name="fname"
                >
                    First Name
                </label>
                
                <input 
                    type='text'
                    className={Styles["Signup_Form__span-input"]}
                    name="fname"
                />
            </span>

            <span className={Styles["Signup_Form__span"]}>
                <label 
                    htmlFor="lname" 
                    className={Styles["Signup_Form__span-label"]}
                >
                    Last Name
                </label>
                <input 
                    type='text'
                    className={Styles["Signup_Form__span-input"]}
                    name="lname"
                />
            </span>

            <span className={Styles["Signup_Form__span"]}>
                <label
                    htmlFor="email" 
                    className={Styles["Signup_Form__span-label"]}
                >
                    E-mail Address
                </label>
                <input 
                    type='email'
                    className={Styles["Signup_Form__span-input"]}
                    name="email"
                />
            </span>

            <span className={Styles["Signup_Form__span"]}> {/*make sure to accept the valid 11-digit phone number (PH)*/}
                <label
                    htmlFor="contact" 
                    className={Styles["Signup_Form__span-label"]}
                >
                    Contact Number
                </label>
                <input 
                    type='text'
                    className={Styles["Signup_Form__span-input"]}
                    name="contactNo"
                    pattern="[0-9]*"
                />
            </span>

            <span className={Styles["Signup_Form__span"]}>
                <label 
                    htmlFor="uname" 
                    className={Styles["Signup_Form__span-label"]}
                >
                    Username
                </label>
                <input 
                    type='text'
                    className={Styles["Signup_Form__span-input"]}
                    name="uname"
                />
            </span>

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
                />
            </span>
        </>
    );
    }

export default SignupForm
