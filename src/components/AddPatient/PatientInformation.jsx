import React from 'react';
import Styles from "./AddPatient.module.css";

const PatientInformation = ({prevStep, nextStep, handleChange, values}) => {
    
    const Continue = e => {
        e.preventDefault();
        nextStep();
    }

    const isRequired = true; // Set this based on the logic for determining required fields

    const handleAgeChange = e => {
        // Validate that the input is a valid number
        const value = e.target.value;
        if (!isNaN(value) && value >= 0) {
            handleChange('patientAge')(e);
        } else {
            console.log("ERROR: Invalid input.");
        }
    };

    const handlePhoneChange = e => {
        // Validate that the input is a valid 11-digit Philippine cellphone number
        const value = e.target.value;

        // to be updated: valid 11-digit philippine number only
        if (!isNaN(value) && value >= 0) {
            handleChange('phoneNumber')(e);
        } else {
            console.log("ERROR: Invalid input.");
        }
    };

    return (
        <form>
            <h3 className={Styles["h3___styling"]}>Patient Information</h3>
                <div className={Styles["Patient__form__div_wrapper"]}>
                    <div className={Styles["main_div"]}>
                        <div className={Styles["input_box_name"]}>
                            <label className={Styles["input_label"]}>
                                Patient Name{isRequired && <span className={Styles["required_asterisk"]}> *</span>}
                            </label> 
                            <input 
                                type="text"  
                                value={values.patientName} 
                                onChange={handleChange('patientName')}
                                required
                            />
                        </div>
                        <div className={Styles["input_box_sex"]}>
                            <label className={Styles["input_label"]}>
                                Sex{isRequired && <span className={Styles["required_asterisk"]}> *</span>} 
                            </label> 
                            <div>
                                <select 
                                    value={values.patientSex}
                                    onChange={handleChange('patientSex')} 
                                    className={Styles["sex_select_style"]}
                                    required>
                                    <option value=""  className={Styles["sex_select_option"]}>
                                        Choose an option
                                    </option>
                                    <option value="Female"  className={Styles["sex_select_option"]}>
                                        Female
                                    </option>
                                    <option value="Male"  className={Styles["sex_select_option"]}>
                                        Male
                                    </option>
                                    </select>
                            </div>
                        </div>
                    </div>
                    
                    <div className={Styles["main_div"]}>
                        <div className={Styles["input_box_calendar"]}>
                            <label className={Styles["input_label"]}>
                                Date of Birth{isRequired && <span className={Styles["required_asterisk"]}> *</span>}
                            </label>
                            <input
                                type="date"
                                value={values.dateOfBirth} 
                                onChange={handleChange('dateOfBirth')}
                                required
                            />
                        </div>

                        <div className={Styles["input_box_age"]}>
                            <label className={Styles["input_label"]}>
                                Age{isRequired && <span className={Styles["required_asterisk"]}> *</span>}
                            </label>
                            <input
                                type="text"
                                value={values.patientAge} 
                                onChange={handleAgeChange}
                                required
                            />
                        </div>

                        <div className={Styles["input_box_phone"]}>
                            <label className={Styles["input_label"]}>
                                Phone Number{isRequired && <span className={Styles["required_asterisk"]}> *</span>}
                            </label>
                            <input
                                type="text"
                                value={values.phoneNumber} 
                                onChange={handlePhoneChange}
                                required
                            />
                        </div> 
                    </div>

                    <div className={Styles["main_div"]}>
                        <div className={Styles["input_box_textarea"]}>
                            <label className={Styles["input_label"]}>
                                Chief Complaint{isRequired && <span className={Styles["required_asterisk"]}> *</span>}
                            </label>    
                            <div>
                                <textarea
                                    type="text"
                                    value={values.chiefComplaint} 
                                    onChange={handleChange('chiefComplaint')}
                                    className={Styles["textareaStyle"]}
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    <div className={Styles["main_div"]}>
                        <div className={Styles["input_box"]}>
                            <label className={Styles["input_label"]}>
                                Present Illness{isRequired && <span className={Styles["required_asterisk"]}> *</span>}
                            </label>
                            <div>
                                <textarea
                                    type="text"
                                    value={values.presentIllness} 
                                    onChange={handleChange('presentIllness')}
                                    className={Styles["textareaStyle"]}
                                    required
                                />
                            </div>
                            </div>
                        </div>         
                    </div>
                          
            <div className={Styles["nextBtn__container"]}>
                <button 
                    onClick={ Continue }
                    className={Styles["nextBtn__style"]}
                >
                    Next
                </button>
            </div>
        </form>
    )
}

export default PatientInformation