//import React from 'react'
import Styles from './Signup.module.css'

const Signup = () => {

    return (
        <div className={Styles["Signup_Form"]}>
            <span className={Styles["Signup_Form__span"]}>
                <img/>
                <h2>Sign Up</h2>
            </span>

            <span className={Styles["Signup_Form__span"]}>
                <label 
                    htmlFor="fname" 
                    className={Styles["Signup_Form__span-label"]}
                >
                    First Name
                </label>
                
                <input 
                    type='text'
                    className={Styles["Signup_Form__span-input"]}
                    name="fname"
                    required
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
                    required
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
                    
                    required
                />
            </span>

            <span className={Styles["Signup_Form__span"]}>
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
                    required
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
                    required
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
                    required
                />
            </span>

            <span className={Styles["Signup_Form__span"]}>
                <button
                    className={`${Styles["Signup_Form__button"]} ${Styles["submitBtn"]}`}
                    //onClick={}
                >
                    Sign Up
                </button>
            </span>

            <span className={Styles["Signup_Form__span"]}>
                <p> Already Have an account? </p>
                <p className={Styles["Signup_Form__span-text"]}>Log In</p>    
            </span>
            
        </div>
    );
    }

export default Signup
