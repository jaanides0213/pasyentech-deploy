import React from 'react'

const PastHistory = ({prevStep, nextStep, handleChange, values}) => {

    const Previous = e => {
        e.preventDefault();
        prevStep();
    }
    
    const Continue = e => {
        e.preventDefault();
        nextStep();
    }

    // handle field change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }
    
    return (
        <form>
            <h3>Past History</h3>
                <span>
                <h3>Childhood Illnesses</h3>
                <label>Childhood Illnesses
                    <div>
                        <textarea
                            type="text"
                            value={values.childhoodIllness} 
                            onChange={handleChange('childhoodIllness')}
                            required
                        />
                    </div>
                </label>

                <h3>Adult Illnesses</h3>
                <label>Medical
                    <div>
                        <textarea
                            type="text"
                            value={values.adultMedical} 
                            onChange={handleChange('adultMedical')}
                            required
                        />
                    </div>
                </label>
                <label>Surgical
                    <div>
                        <textarea
                            type="text"
                            value={values.adultSurgical} 
                            onChange={handleChange('adultSurgical')}
                            required
                        />
                    </div>
                </label>
                <label>Ob/Gyn
                    <div>
                        <textarea
                            type="text"
                            value={values.adultObGyn} 
                            onChange={handleChange('adultObGyn')}
                            required
                        />
                    </div>
                </label>
                <label>Psychiatric
                    <div>
                        <textarea
                            type="text"
                            value={values.adultPsychiatric} 
                            onChange={handleChange('adultPsychiatric')}
                            required
                        />
                    </div>
                </label>
                <label>Health Maintenance
                    <div>
                        <textarea
                            type="text"
                            value={values.healthMaintenance} 
                            onChange={handleChange('healthMaintenance')}
                            required
                        />
                    </div>
                </label>

                <h3>Family History</h3>
                <label>Family History
                    <div>
                        <textarea
                            type="text"
                            value={values.familyHistory} 
                            onChange={handleChange('familyHistory')}
                            required
                        />
                    </div>
                </label>

                <h3>Medical History</h3>
                <label>Medical History
                    <div>
                        <textarea
                            type="text"
                            value={values.medicalHistory} 
                            onChange={handleChange('medicalHistory')}
                            required
                        />
                    </div>
                </label>

                <h3>Surgical History</h3>
                <label>Surgical History
                    <div>
                        <textarea
                            type="text"
                            value={values.surgicalHistory} 
                            onChange={handleChange('surgicalHistory')}
                            required
                        />
                    </div>
                </label>

                <h3>Personal and Social History</h3>
                <label>Personal and Social History
                    <div>
                        <textarea
                            type="text"
                            value={values.personalSocialHistory} 
                            onChange={handleChange('personalSocialHistory')}
                            required
                        />
                    </div>
                </label>

                <h3>Psychosocial History</h3>
                <label>Psychosocial History
                    <div>
                        <textarea
                            type="text"
                            value={values.psychosocialHistory} 
                            onChange={handleChange('psychosocialHistory')}
                            required
                        />
                    </div>
                </label>
                </span>

            <div>
                <button onClick={ Previous }>Prev</button>
                <button onClick={ Continue }>Next</button>
            </div>
        </form>
    )
}

export default PastHistory