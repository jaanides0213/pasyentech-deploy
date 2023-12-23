import React from 'react';
import Styles from "./AddPatient.module.css";

const AssessmentAndPlan = ({prevStep, nextStep, handleChange, values}) => {
    const Previous = e => {
        e.preventDefault();
        prevStep();
    }
    
    const Continue = e => {
        e.preventDefault();
        nextStep();
    }

    const isRequired = true; // Set this based on the logic for determining required fields
  
    return (
        <form>
            <h3 className={Styles["h3___styling"]}>Impression, Assessment, and Plan</h3>
            <div className={Styles["Patient__form__div_wrapper"]}>
                <h3>I. Impression</h3>
                    <div className={Styles["main_div"]}>
                        <div className={Styles["input_box_textarea"]}>
                            <label className={Styles["input_label"]}>
                                Impression{isRequired && <span className={Styles["required_asterisk"]}> *</span>}
                            </label>
                                <div>
                                    <textarea
                                        type="text"
                                        value={values.patientImpression} 
                                        onChange={handleChange('patientImpression')}
                                        className={Styles["textareaStyle"]}
                                        required
                                    />
                                </div>
                        </div> 
                    </div>

                    <div className={Styles["main_div"]}>
                        <div className={Styles["input_box_textarea"]}>
                            <h3>II. Assessment and Plan</h3>
                            <label className={Styles["input_label"]}>
                                Assessment and Plan{isRequired && <span className={Styles["required_asterisk"]}> *</span>}
                            </label>
                                <div>
                                    <textarea
                                        type="text"
                                        value={values.patientAssessmentPlan} 
                                        onChange={handleChange('patientAssessmentPlan')}
                                        className={Styles["textareaStyle"]}
                                        required
                                    />
                                </div>
                        </div> 
                    </div>

                    <div className={Styles["main_div"]}>
                        <div className={Styles["input_box_textarea"]}>
                            <h3>III. Diagnostic Files</h3>
                            <label className={Styles["input_label"]}>Upload Diagnostic Files</label>
                                <div className={Styles["input_box_diagnostic"]}>
                                    <input
                                        type="file"
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

export default AssessmentAndPlan
