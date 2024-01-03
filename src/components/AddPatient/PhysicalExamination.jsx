import React from 'react';
import Styles from "./AddPatient.module.css";
import Accordion from '../Accordion/Accordion';

const PhysicalExamination = ({prevStep, nextStep, handleChange, values}) => {
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
      <h3 className={Styles["h3___styling"]}>Physical Examination</h3>
        <div className={Styles["Patient__form__div_wrapper"]}>
        <Accordion title="I. General Assessment" content={
          <div className={Styles["main_div"]}>
            <div className={Styles["input_box_textarea"]}>
              <label className={Styles["input_label"]}>
                Vital Signs{isRequired && <span className={Styles["required_asterisk"]}> *</span>}
              </label>
                <div>
                  <textarea
                    type="text"
                    value={values.physicalVital} 
                    onChange={handleChange('physicalVital')}
                    className={Styles["textareaStyle"]}
                    required
                  />
                </div>
                <label className={Styles["input_label"]}>
                Skin{isRequired && <span className={Styles["required_asterisk"]}> *</span>}
              </label>
                <div>
                  <textarea
                    type="text"
                    value={values.physicalSkin} 
                    onChange={handleChange('physicalSkin')}
                    className={Styles["textareaStyle"]}
                    required
                  />
                </div>
            </div> 
          </div>
        }/>

        <Accordion title="II. Head, Eyes, Ears, Nose, Throat (HEENT)" content={
          <div className={Styles["main_div"]}>
            <div className={Styles["input_box_textarea"]}>
              <label className={Styles["input_label"]}>
                Head{isRequired && <span className={Styles["required_asterisk"]}> *</span>}
              </label>
                <div>
                  <textarea
                    type="text"
                    value={values.HEENT_head} 
                    onChange={handleChange('HEENT_head')}
                    className={Styles["textareaStyle"]}
                    required
                  />
                </div>

                <label className={Styles["input_label"]}>
                Eyes{isRequired && <span className={Styles["required_asterisk"]}> *</span>}
              </label>
                <div>
                  <textarea
                    type="text"
                    value={values.HEENT_eyes} 
                    onChange={handleChange('HEENT_eyes')}
                    className={Styles["textareaStyle"]}
                    required
                  />
                </div>

                <label className={Styles["input_label"]}>
                Ears{isRequired && <span className={Styles["required_asterisk"]}> *</span>}
              </label>
                <div>
                  <textarea
                    type="text"
                    value={values.HEENT_ears} 
                    onChange={handleChange('HEENT_ears')}
                    className={Styles["textareaStyle"]}
                    required
                  />
                  </div>
              <label className={Styles["input_label"]}>
                Nose{isRequired && <span className={Styles["required_asterisk"]}> *</span>}
              </label>
                <div>
                  <textarea
                    type="text"
                    value={values.HEENT_nose} 
                    onChange={handleChange('HEENT_nose')}
                    className={Styles["textareaStyle"]}
                    required
                  />
                </div>
                <label className={Styles["input_label"]}>
                Throat{isRequired && <span className={Styles["required_asterisk"]}> *</span>}
              </label>
                <div>
                  <textarea
                    type="text"
                    value={values.HEENT_throat} 
                    onChange={handleChange('HEENT_throat')}
                    className={Styles["textareaStyle"]}
                    required
                  />
                </div>
            </div> 
          </div>
        }/>

        <Accordion title="III. Neck" content={
          <div className={Styles["main_div"]}>
            <div className={Styles["input_box_textarea"]}>
              <label className={Styles["input_label"]}>Neck</label>
                <div>
                  <textarea
                    type="text"
                    value={values.physicalNeck} 
                    onChange={handleChange('physicalNeck')}
                    className={Styles["textareaStyle"]}
                  />
                </div>
            </div> 
          </div>
        }/>

        <Accordion title="IV. Thorax and Respiratory" content={
          <div className={Styles["main_div"]}>
            <div className={Styles["input_box_textarea"]}>
              <label className={Styles["input_label"]}>Thorax and Lungs</label>
                <div>
                  <textarea
                    type="text"
                    value={values.physicalThoraxLungs} 
                    onChange={handleChange('physicalThoraxLungs')}
                    className={Styles["textareaStyle"]}
                  />
                </div>
                <label className={Styles["input_label"]}>Cardiovascular</label>
                <div>
                  <textarea
                    type="text"
                    value={values.physicalCardio} 
                    onChange={handleChange('physicalCardio')}
                    className={Styles["textareaStyle"]}
                  />
                </div>
            </div> 
          </div>
        }/>

        <Accordion title="V. Breasts" content={
          <div className={Styles["main_div"]}>
            <div className={Styles["input_box_textarea"]}>
              <label className={Styles["input_label"]}>Breasts</label>
                <div>
                  <textarea
                    type="text"
                    value={values.physicalBreast} 
                    onChange={handleChange('physicalBreast')}
                    className={Styles["textareaStyle"]}
                  />
                </div>
            </div> 
          </div>
        }/>
         <Accordion title="VI. Abdomen" content={
          <div className={Styles["main_div"]}>
            <div className={Styles["input_box_textarea"]}>
              <label className={Styles["input_label"]}>Abdomen</label>
                <div>
                  <textarea
                    type="text"
                    value={values.physicalAbdomen} 
                    onChange={handleChange('physicalAbdomen')}
                    className={Styles["textareaStyle"]}
                  />
                </div>
            </div> 
          </div>
         }/>

        <Accordion title="VII. Pelvic and Genitalia" content=   {
          <div className={Styles["main_div"]}>
            <div className={Styles["input_box_textarea"]}>
              <label className={Styles["input_label"]}>Genitalia</label>
                <div>
                  <textarea
                    type="text"
                    value={values.physicalGenitalia} 
                    onChange={handleChange('physicalGenitalia')}
                    className={Styles["textareaStyle"]}
                  />
                </div>
                <label className={Styles["input_label"]}>Rectal</label>
                <div>
                  <textarea
                    type="text"
                    value={values.physicalRectal} 
                    onChange={handleChange('physicalRectal')}
                    className={Styles["textareaStyle"]}
                  />
                </div>
            </div> 
          </div>
        }/>
        
        <Accordion title="VIII. Extremities" content={
          <div className={Styles["main_div"]}>
            <div className={Styles["input_box_textarea"]}>
              <h3>VIII. Extremities</h3>
              <label className={Styles["input_label"]}>Extremities</label>
                <div>
                  <textarea
                    type="text"
                    value={values.physicalExtremities} 
                    onChange={handleChange('physicalExtremities')}
                    className={Styles["textareaStyle"]}
                  />
                </div>
                <label className={Styles["input_label"]}>Peripheral Vascular</label>
                <div>
                  <textarea
                    type="text"
                    value={values.physicalPeripheral} 
                    onChange={handleChange('physicalPeripheral')}
                    className={Styles["textareaStyle"]}
                  />
                </div>
                <label className={Styles["input_label"]}>Muscoskeletal</label>
                <div>
                  <textarea
                    type="text"
                    value={values.physicalMuscoskeletal} 
                    onChange={handleChange('physicalMuscoskeletal')}
                    className={Styles["textareaStyle"]}
                  />
                </div>
            </div> 
          </div>
        }/>

         
<Accordion title="IX. Neurological" content={
          <div className={Styles["main_div"]}>
            <div className={Styles["input_box_textarea"]}>
              <label className={Styles["input_label"]}>Neurologic</label>
                <div>
                  <textarea
                    type="text"
                    value={values.physicalNeurologic} 
                    onChange={handleChange('physicalNeurologic')}
                    className={Styles["textareaStyle"]}
                  />
                </div>
                <label className={Styles["input_label"]}>Motor</label>
                <div>
                  <textarea
                    type="text"
                    value={values.physicalMotor} 
                    onChange={handleChange('physicalMotor')}
                    className={Styles["textareaStyle"]}
                  />
                </div>
                <label className={Styles["input_label"]}>Reflexes</label>
                <div>
                  <textarea
                    type="text"
                    value={values.physicalReflexes} 
                    onChange={handleChange('physicalReflexes')}
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

export default PhysicalExamination
