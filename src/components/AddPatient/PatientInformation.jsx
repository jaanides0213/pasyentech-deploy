import React from 'react';
import Styles from "./AddPatient.module.css";

const PatientInformation = ({prevStep, nextStep, handleChange, values}) => {
    
    const Continue = e => {
        e.preventDefault();
        nextStep();
    }

    return (
        <form>
            <h3 className={Styles["h3___styling"]}>Patient Information</h3>
                <div className={Styles["Patient__form__div_wrapper"]}>
                    <div className={Styles["main_div"]}>
                        <div className={Styles["input_box_name"]}>
                            <label className={Styles["input_label"]}>Patient Name</label> 
                                <input 
                                    type="text"  
                                    value={values.patientName} 
                                    onChange={handleChange('patientName')}
                                    required
                                />
                        </div>

                        <div className={Styles["input_box_age"]}>
                            <label className={Styles["input_label"]}>Age</label>
                                <input
                                    type="number"
                                    min="1"
                                    max="100"
                                    value={values.patientAge} 
                                    onChange={handleChange('patientAge')}
                                    required
                                />
                        </div>
                    </div>
                    
                    <div className={Styles["main_div"]}>
                        <div className={Styles["input_box_calendar"]}>
                            <label className={Styles["input_label"]}>Date of Birth</label>
                                <input
                                    type="date"
                                    value={values.dateOfBirth} 
                                    onChange={handleChange('dateOfBirth')}
                                    required
                                />
                        </div>
                        <div className={Styles["input_box_sex"]}>
                            <label className={Styles["input_label"]}>Sex </label> 
                                <div>
                                    <select 
                                        value={values.patientSex}
                                        onChange={handleChange('patientSex')} 
                                        className={Styles["sex_select_style"]}
                                        required
                                    >
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
                       
                        <div className={Styles["input_box_phone"]}>
                            <label className={Styles["input_label"]}>Phone Number</label>
                                <input
                                    type="number"
                                    value={values.phoneNumber} 
                                    onChange={handleChange('phoneNumber')}
                                    required
                                />
                        </div> 
                    </div>

                    <div className={Styles["main_div"]}>
                        <div className={Styles["input_box_textarea"]}>
                            <label className={Styles["input_label"]}>Chief Complaint</label>
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
                            <label className={Styles["input_label"]}>Present Illness </label>
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