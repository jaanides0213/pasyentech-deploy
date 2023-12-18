import React from 'react';
import Styles from "./AddPatient.module.css";

const PhysicalExamination = ({prevStep, nextStep, handleChange, values}) => {
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
      <h3 className={Styles["h3___styling"]}>Physical Examination</h3>
        <div className={Styles["Patient__form__div_wrapper"]}>
          <h3>I. General Assessment</h3>
          <div className={Styles["main_div"]}>
            <div className={Styles["input_box_textarea"]}>
              <label className={Styles["input_label"]}>Vital Signs</label>
                <div>
                  <textarea
                    type="text"
                    value={values.physicalVital} 
                    onChange={handleChange('physicalVital')}
                    className={Styles["textareaStyle"]}
                    required
                  />
                </div>
            </div> 
          </div>

          <div className={Styles["main_div"]}>
            <div className={Styles["input_box_textarea"]}>
              <label className={Styles["input_label"]}>Skin</label>
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

          <div className={Styles["main_div"]}>
            <div className={Styles["input_box_textarea"]}>
              <h3>II. Head, Eyes, Ears, Nose, Throat (HEENT)</h3>
              <label className={Styles["input_label"]}>Head</label>
                <div>
                  <textarea
                    type="text"
                    value={values.HEENT_head} 
                    onChange={handleChange('HEENT_head')}
                    className={Styles["textareaStyle"]}
                    required
                  />
                </div>
            </div> 
          </div>

          <div className={Styles["main_div"]}>
            <div className={Styles["input_box_textarea"]}>
              <label className={Styles["input_label"]}>Eyes</label>
                <div>
                  <textarea
                    type="text"
                    value={values.HEENT_eyes} 
                    onChange={handleChange('HEENT_eyes')}
                    className={Styles["textareaStyle"]}
                    required
                  />
                </div>
            </div> 
          </div>

          <div className={Styles["main_div"]}>
            <div className={Styles["input_box_textarea"]}>
              <label className={Styles["input_label"]}>Ears</label>
                <div>
                  <textarea
                    type="text"
                    value={values.HEENT_ears} 
                    onChange={handleChange('HEENT_ears')}
                    className={Styles["textareaStyle"]}
                    required
                  />
                  </div>
              </div> 
           </div>

          <div className={Styles["main_div"]}>
            <div className={Styles["input_box_textarea"]}>
              <label className={Styles["input_label"]}>Nose</label>
                <div>
                  <textarea
                    type="text"
                    value={values.HEENT_nose} 
                    onChange={handleChange('HEENT_nose')}
                    className={Styles["textareaStyle"]}
                    required
                  />
                </div>
            </div> 
          </div>

          <div className={Styles["main_div"]}>
            <div className={Styles["input_box_textarea"]}>
              <label className={Styles["input_label"]}>Throat</label>
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

          <div className={Styles["main_div"]}>
            <div className={Styles["input_box_textarea"]}>
              <h3>III. Neck</h3>
              <label className={Styles["input_label"]}>Neck</label>
                <div>
                  <textarea
                    type="text"
                    value={values.physicalNeck} 
                    onChange={handleChange('physicalNeck')}
                    className={Styles["textareaStyle"]}
                    required
                  />
                </div>
            </div> 
          </div>

          <div className={Styles["main_div"]}>
            <div className={Styles["input_box_textarea"]}>
              <h3>IV. Thorax and Respiratory</h3>
              <label className={Styles["input_label"]}>Thorax and Lungs</label>
                <div>
                  <textarea
                    type="text"
                    value={values.physicalThoraxLungs} 
                    onChange={handleChange('physicalThoraxLungs')}
                    className={Styles["textareaStyle"]}
                    required
                  />
                </div>
            </div> 
          </div>

          <div className={Styles["main_div"]}>
            <div className={Styles["input_box_textarea"]}>
              <label className={Styles["input_label"]}>Cardiovascular</label>
                <div>
                  <textarea
                    type="text"
                    value={values.physicalCardio} 
                    onChange={handleChange('physicalCardio')}
                    className={Styles["textareaStyle"]}
                    required
                  />
                </div>
            </div> 
          </div>

          <div className={Styles["main_div"]}>
            <div className={Styles["input_box_textarea"]}>
              <h3>V. Breasts</h3>
              <label className={Styles["input_label"]}>Breasts</label>
                <div>
                  <textarea
                    type="text"
                    value={values.physicalBreast} 
                    onChange={handleChange('physicalBreast')}
                    className={Styles["textareaStyle"]}
                    required
                  />
                </div>
            </div> 
          </div>

          <div className={Styles["main_div"]}>
            <div className={Styles["input_box_textarea"]}>
              <h3>VI. Abdomen</h3>
              <label className={Styles["input_label"]}>Abdomen</label>
                <div>
                  <textarea
                    type="text"
                    value={values.physicalAbdomen} 
                    onChange={handleChange('physicalAbdomen')}
                    className={Styles["textareaStyle"]}
                    required
                  />
                </div>
            </div> 
          </div>

          <div className={Styles["main_div"]}>
            <div className={Styles["input_box_textarea"]}>
              <h3>VII. Pelvic and Genitalia</h3>
              <label className={Styles["input_label"]}>Genitalia</label>
                <div>
                  <textarea
                    type="text"
                    value={values.physicalGenitalia} 
                    onChange={handleChange('physicalGenitalia')}
                    className={Styles["textareaStyle"]}
                    required
                  />
                </div>
            </div> 
          </div>

          <div className={Styles["main_div"]}>
            <div className={Styles["input_box_textarea"]}>
              <label className={Styles["input_label"]}>Rectal</label>
                <div>
                  <textarea
                    type="text"
                    value={values.physicalRectal} 
                    onChange={handleChange('physicalRectal')}
                    className={Styles["textareaStyle"]}
                    required
                  />
                </div>
            </div> 
          </div>

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
                    required
                  />
                </div>
            </div> 
          </div>

          <div className={Styles["main_div"]}>
            <div className={Styles["input_box_textarea"]}>
              <label className={Styles["input_label"]}>Peripheral Vascular</label>
                <div>
                  <textarea
                    type="text"
                    value={values.physicalPeripheral} 
                    onChange={handleChange('physicalPeripheral')}
                    className={Styles["textareaStyle"]}
                    required
                  />
                </div>
            </div> 
          </div>

          <div className={Styles["main_div"]}>
            <div className={Styles["input_box_textarea"]}>
              <label className={Styles["input_label"]}>Muscoskeletal</label>
                <div>
                  <textarea
                    type="text"
                    value={values.physicalMuscoskeletal} 
                    onChange={handleChange('physicalMuscoskeletal')}
                    className={Styles["textareaStyle"]}
                    required
                  />
                </div>
            </div> 
          </div>

          <div className={Styles["main_div"]}>
            <div className={Styles["input_box_textarea"]}>
              <h3>IX. Neurological</h3>
              <label className={Styles["input_label"]}>Neurologic</label>
                <div>
                  <textarea
                    type="text"
                    value={values.physicalNeurologic} 
                    onChange={handleChange('physicalNeurologic')}
                    className={Styles["textareaStyle"]}
                    required
                  />
                </div>
            </div> 
          </div>

          <div className={Styles["main_div"]}>
            <div className={Styles["input_box_textarea"]}>
              <label className={Styles["input_label"]}>Motor</label>
                <div>
                  <textarea
                    type="text"
                    value={values.physicalMotor} 
                    onChange={handleChange('physicalMotor')}
                    className={Styles["textareaStyle"]}
                    required
                  />
                </div>
            </div> 
          </div>

          <div className={Styles["main_div"]}>
            <div className={Styles["input_box_textarea"]}>
              <label className={Styles["input_label"]}>Reflexes</label>
                <div>
                  <textarea
                    type="text"
                    value={values.physicalReflexes} 
                    onChange={handleChange('physicalReflexes')}
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

export default PhysicalExamination
