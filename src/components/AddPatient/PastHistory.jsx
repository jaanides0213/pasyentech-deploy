import React from 'react';
import Styles from "./AddPatient.module.css";
import Accordion from '../Accordion/Accordion';
import { RiArrowDownSFill } from "react-icons/ri";

const PastHistory = ({prevStep, nextStep, handleChange, values}) => {

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
            <h3 className={Styles["h3___styling"]}>Patient History</h3>
                <div className={Styles["Patient__form__div_wrapper"]}>
                
                <Accordion title="I. Childhood Illness History" content={
                    <div className={Styles["main_div"]}>
                        <div className={Styles["input_box_textarea"]}>
                            <label className={Styles["input_label"]}>
                                Childhood Illnesses
                            </label>
                            <div>
                                <textarea
                                    type="text"
                                    value={values.childhoodIllness} 
                                    onChange={handleChange('childhoodIllness')}
                                    className={Styles["textareaStyle"]}
                                />
                            </div>
                        </div>
                    </div>
                }/> 
            
                <Accordion title="II. Adult Illness History" content={
                    <div className={Styles["main_div"]}>
                        <div className={Styles["input_box_textarea"]}>         
                            <label className={Styles["input_label"]}>
                                Medical
                            </label>
                            <div>
                            <textarea
                                type="text"
                                value={values.adultMedical} 
                                onChange={handleChange('adultMedical')}
                                className={Styles["textareaStyle"]}
                            />
                            </div>
                            
                            <label className={Styles["input_label"]}>
                                Surgical
                            </label>
                                <div>
                                <textarea
                                    type="text"
                                    value={values.adultSurgical} 
                                    onChange={handleChange('adultSurgical')}
                                    className={Styles["textareaStyle"]}
                                />
                                </div>
                                <label className={Styles["input_label"]}>Ob/Gyn</label>
                                <div>
                                    <textarea
                                        type="text"
                                        value={values.adultObGyn} 
                                        onChange={handleChange('adultObGyn')}
                                        className={Styles["textareaStyle"]}
                                    />
                                </div>

                                <label className={Styles["input_label"]}>Psychiatric</label>
                                <div>
                                    <textarea
                                        type="text"
                                        value={values.adultPsychiatric} 
                                        onChange={handleChange('adultPsychiatric')}
                                        className={Styles["textareaStyle"]}
                                    />
                                </div>
                        </div>
                    </div>
                }/>

                <Accordion title="III. Health Maintenance" content={
                    <div className={Styles["main_div"]}>
                        <div className={Styles["input_box_textarea"]}>       
                            <label className={Styles["input_label"]}>
                                Health Maintenance
                            </label>
                            <div>
                                <textarea
                                    type="text"
                                    value={values.healthMaintenance} 
                                    onChange={handleChange('healthMaintenance')}
                                    className={Styles["textareaStyle"]}
                                />
                            </div>
                        </div>
                    </div>
                }/>

                <Accordion title="IV. Family History" content={
                    <div className={Styles["main_div"]}>
                        <div className={Styles["input_box_textarea"]}>        
                            <label className={Styles["input_label"]}>
                                Family History
                            </label>
                            <div>
                                <textarea
                                    type="text"
                                    value={values.familyHistory} 
                                    onChange={handleChange('familyHistory')}
                                    className={Styles["textareaStyle"]}
                                />
                            </div>
                        </div>
                    </div>
                }/>
                <Accordion title="V. Personal History" content={
                    <div className={Styles["main_div"]}>
                        <div className={Styles["input_box_textarea"]}>      
                            <label className={Styles["input_label"]}>
                                Medical History
                            </label>
                            <div>
                                <textarea
                                    type="text"
                                    value={values.medicalHistory} 
                                    onChange={handleChange('medicalHistory')}
                                    className={Styles["textareaStyle"]}
                                />
                            </div>
                            <label className={Styles["input_label"]}>
                                Surgical History
                            </label>
                             <div>
                                <textarea
                                    type="text"
                                    value={values.surgicalHistory} 
                                    onChange={handleChange('surgicalHistory')}
                                    className={Styles["textareaStyle"]}
                                />
                                </div>
                                <label className={Styles["input_label"]}>Personal and Social History</label>
                                <div>
                                    <textarea
                                        type="text"
                                        value={values.personalSocialHistory} 
                                        onChange={handleChange('personalSocialHistory')}
                                        className={Styles["textareaStyle"]}
                                    />
                                </div>
                        </div>
                    </div>
                }/>
                <Accordion title="VI. Psychosocial History" content={
                    <div className={Styles["main_div"]}>
                        <div className={Styles["input_box_textarea"]}>      
                            
                            <label className={Styles["input_label"]}>Psychosocial History</label>
                                <div>
                                    <textarea
                                        type="text"
                                        value={values.psychosocialHistory} 
                                        onChange={handleChange('psychosocialHistory')}
                                        className={Styles["textareaStyle"]}
                                    />
                                </div>
                        </div>
                    </div>
                }/>
                </div>
                

            <div className={Styles["nextBtn__container"]}>
                <button onClick={ Previous } className={Styles["nextBtn__style"]}>Prev</button>
                <button onClick={ Continue } className={Styles["nextBtn__style"]}>Next</button>
            </div>
        </form>
    )
}

export default PastHistory