import React from 'react';
import Styles from "./AddPatient.module.css";

const PastHistory = ({prevStep, nextStep, handleChange, values}) => {

    const Previous = e => {
        e.preventDefault();
        prevStep();
    }
    
    const Continue = e => {
        e.preventDefault();
        nextStep();
    }
    
    return (
        <form>
            <h3 className={Styles["h3___styling"]}>Patient History</h3>
                <div className={Styles["Patient__form__div_wrapper"]}>
                    <h3>I. Childhood Illness History</h3>
                    <div className={Styles["main_div"]}>
                        <div className={Styles["input_box_textarea"]}>
                            <label className={Styles["input_label"]}>Childhood Illnesses</label>
                                <div>
                                    <textarea
                                        type="text"
                                        value={values.childhoodIllness} 
                                        onChange={handleChange('childhoodIllness')}
                                        className={Styles["textareaStyle"]}
                                        required
                                    />
                                </div>
                        </div>
                    </div>

                    <div className={Styles["main_div"]}>
                        <div className={Styles["input_box_textarea"]}>         
                            <h3>II. Adult Illness History</h3>
                            <label className={Styles["input_label"]}>Medical</label>
                                <div>
                                    <textarea
                                        type="text"
                                        value={values.adultMedical} 
                                        onChange={handleChange('adultMedical')}
                                        className={Styles["textareaStyle"]}
                                        required
                                    />
                                </div>
                        </div>
                    </div>

                    <div className={Styles["main_div"]}>
                        <div className={Styles["input_box_textarea"]}>         
                            <label className={Styles["input_label"]}>Surgical</label>
                                <div>
                                    <textarea
                                        type="text"
                                        value={values.adultSurgical} 
                                        onChange={handleChange('adultSurgical')}
                                        className={Styles["textareaStyle"]}
                                        required
                                    />
                                </div>
                        </div>
                    </div>

                    <div className={Styles["main_div"]}>
                        <div className={Styles["input_box_textarea"]}>         
                            <label className={Styles["input_label"]}>Ob/Gyn</label>
                                <div>
                                    <textarea
                                        type="text"
                                        value={values.adultObGyn} 
                                        onChange={handleChange('adultObGyn')}
                                        className={Styles["textareaStyle"]}
                                        required
                                    />
                                </div>
                        </div>
                    </div>

                    <div className={Styles["main_div"]}>
                        <div className={Styles["input_box_textarea"]}>         
                            <label className={Styles["input_label"]}>Psychiatric</label>
                                <div>
                                    <textarea
                                        type="text"
                                        value={values.adultPsychiatric} 
                                        onChange={handleChange('adultPsychiatric')}
                                        className={Styles["textareaStyle"]}
                                        required
                                    />
                                </div>
                        </div>
                    </div>

                    <div className={Styles["main_div"]}>
                        <div className={Styles["input_box_textarea"]}>    
                            <h3>III. Health Maintenance</h3>     
                            <label className={Styles["input_label"]}>Health Maintenance</label>
                                <div>
                                    <textarea
                                        type="text"
                                        value={values.healthMaintenance} 
                                        onChange={handleChange('healthMaintenance')}
                                        className={Styles["textareaStyle"]}
                                        required
                                    />
                                </div>
                        </div>
                    </div>

                    <div className={Styles["main_div"]}>
                        <div className={Styles["input_box_textarea"]}>      
                            <h3>IV. Family History</h3>   
                            <label className={Styles["input_label"]}>Family History</label>
                                <div>
                                    <textarea
                                        type="text"
                                        value={values.familyHistory} 
                                        onChange={handleChange('familyHistory')}
                                        className={Styles["textareaStyle"]}
                                        required
                                    />
                                </div>
                        </div>
                    </div>

                    <div className={Styles["main_div"]}>
                        <div className={Styles["input_box_textarea"]}>      
                            <h3>V. Personal History</h3>
                            <label className={Styles["input_label"]}>Medical History</label>
                                <div>
                                    <textarea
                                        type="text"
                                        value={values.medicalHistory} 
                                        onChange={handleChange('medicalHistory')}
                                        className={Styles["textareaStyle"]}
                                        required
                                    />
                                </div>
                        </div>
                    </div>

                    <div className={Styles["main_div"]}>
                        <div className={Styles["input_box_textarea"]}>      
                            <label className={Styles["input_label"]}>Surgical History</label>
                                <div>
                                    <textarea
                                        type="text"
                                        value={values.surgicalHistory} 
                                        onChange={handleChange('surgicalHistory')}
                                        className={Styles["textareaStyle"]}
                                        required
                                    />
                                </div>
                        </div>
                    </div>

                    <div className={Styles["main_div"]}>
                        <div className={Styles["input_box_textarea"]}>      
                            <label className={Styles["input_label"]}>Personal and Social History</label>
                                <div>
                                    <textarea
                                        type="text"
                                        value={values.personalSocialHistory} 
                                        onChange={handleChange('personalSocialHistory')}
                                        className={Styles["textareaStyle"]}
                                        required
                                    />
                                </div>
                        </div>
                    </div>

                    <div className={Styles["main_div"]}>
                        <div className={Styles["input_box_textarea"]}>      
                            <h3>VI. Psychosocial History</h3>
                            <label className={Styles["input_label"]}>Psychosocial History</label>
                                <div>
                                    <textarea
                                        type="text"
                                        value={values.psychosocialHistory} 
                                        onChange={handleChange('psychosocialHistory')}
                                        className={Styles["textareaStyle"]}
                                        required
                                    />
                                </div>
                        </div>
                    </div>
                </div>

            <div className={Styles["nextBtn__container"]}>
                <button onClick={ Previous } className={Styles["nextBtn__style"]}>Prev</button>
                <button onClick={ Continue } className={Styles["nextBtn__style"]}>Next</button>
            </div>
        </form>
    )
}

export default PastHistory