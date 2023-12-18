import React from 'react';
import Styles from "./AddPatient.module.css";

const ReviewOfSystems = ({prevStep, nextStep, handleChange, values}) => {

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
      <h3 className={Styles["h3___styling"]}>Review of Systems</h3>
        <div className={Styles["Patient__form__div_wrapper"]}>
          <h3>I. Physical Assessment Systems</h3>
          <div className={Styles["main_div"]}>
            <div className={Styles["input_box_textarea"]}>
              <label className={Styles["input_label"]}>General</label>
                <div>
                  <textarea
                    type="text"
                    value={values.reviewGeneral} 
                    onChange={handleChange('reviewGeneral')}
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
                    value={values.reviewSkin} 
                    onChange={handleChange('reviewSkin')}
                    className={Styles["textareaStyle"]}
                    required
                  />
                </div>
            </div> 
          </div>

          <div className={Styles["main_div"]}>
            <div className={Styles["input_box_textarea"]}>
              <label className={Styles["input_label"]}>Neck</label>
                <div>
                  <textarea
                    type="text"
                    value={values.reviewNeck} 
                    onChange={handleChange('reviewNeck')}
                    className={Styles["textareaStyle"]}
                    required
                  />
                </div>
            </div> 
          </div>

          <div className={Styles["main_div"]}>
            <div className={Styles["input_box_textarea"]}>
              <label className={Styles["input_label"]}>Breasts</label>
                <div>
                  <textarea
                    type="text"
                    value={values.reviewBreasts} 
                    onChange={handleChange('reviewBreasts')}
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
                    value={values.review_HEENT_head} 
                    onChange={handleChange('review_HEENT_head')}
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
                    value={values.review_HEENT_eyes} 
                    onChange={handleChange('review_HEENT_eyes')}
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
                    value={values.review_HEENT_ears} 
                    onChange={handleChange('review_HEENT_ears')}
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
                    value={values.review_HEENT_nose} 
                    onChange={handleChange('review_HEENT_nose')}
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
                    value={values.review_HEENT_throat} 
                    onChange={handleChange('review_HEENT_throat')}
                    className={Styles["textareaStyle"]}
                    required
                  />
                </div>
            </div> 
          </div>

          <div className={Styles["main_div"]}>
            <div className={Styles["input_box_textarea"]}>
              <h3>III. Organ Systems</h3>
              <label className={Styles["input_label"]}>Respiratory</label>
                <div>
                  <textarea
                    type="text"
                    value={values.reviewRespiratory} 
                    onChange={handleChange('reviewRespiratory')}
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
                    value={values.reviewCardiovascular} 
                    onChange={handleChange('reviewCardiovascular')}
                    className={Styles["textareaStyle"]}
                    required
                  />
                </div>
            </div> 
          </div>

          <div className={Styles["main_div"]}>
            <div className={Styles["input_box_textarea"]}>
              <label className={Styles["input_label"]}>Gastrointestinal</label>
                <div>
                  <textarea
                    type="text"
                    value={values.reviewGastro} 
                    onChange={handleChange('reviewGastro')}
                    className={Styles["textareaStyle"]}
                    required
                  />
                </div>
            </div> 
          </div>

          <div className={Styles["main_div"]}>
            <div className={Styles["input_box_textarea"]}>
              <label className={Styles["input_label"]}>Urinary</label>
                <div>
                  <textarea
                    type="text"
                    value={values.reviewUrinary} 
                    onChange={handleChange('reviewUrinary')}
                    className={Styles["textareaStyle"]}
                    required
                  />
                </div>
            </div> 
          </div>

          <div className={Styles["main_div"]}>
            <div className={Styles["input_box_textarea"]}>
              <label className={Styles["input_label"]}>Genital</label>
                <div>
                  <textarea
                    type="text"
                    value={values.reviewGenital} 
                    onChange={handleChange('reviewGenital')}
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
                    value={values.reviewPeripheral} 
                    onChange={handleChange('reviewPeripheral')}
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
                    value={values.reviewMuscoskeletal} 
                    onChange={handleChange('reviewMuscoskeletal')}
                    className={Styles["textareaStyle"]}
                    required
                  />
                </div>
            </div> 
          </div>

          <div className={Styles["main_div"]}>
            <div className={Styles["input_box_textarea"]}>
              <h3>IV. Medical Specialties</h3>
              <label className={Styles["input_label"]}>Psychiatric</label>
                <div>
                  <textarea
                    type="text"
                    value={values.reviewPsychiatrict} 
                    onChange={handleChange('reviewPsychiatrict')}
                    className={Styles["textareaStyle"]}
                    required
                  />
                </div>
            </div> 
          </div>

          <div className={Styles["main_div"]}>
            <div className={Styles["input_box_textarea"]}>
              <label className={Styles["input_label"]}>Neurologic</label>
                <div>
                  <textarea
                    type="text"
                    value={values.reviewNeurologic} 
                    onChange={handleChange('reviewNeurologic')}
                    className={Styles["textareaStyle"]}
                    required
                  />
                </div>
            </div> 
          </div>

          <div className={Styles["main_div"]}>
            <div className={Styles["input_box_textarea"]}>
              <label className={Styles["input_label"]}>Hematologic</label>
                <div>
                  <textarea
                    type="text"
                    value={values.reviewHematologic} 
                    onChange={handleChange('reviewHematologic')}
                    className={Styles["textareaStyle"]}
                    required
                  />
                </div>
            </div> 
          </div>

          <div className={Styles["main_div"]}>
            <div className={Styles["input_box_textarea"]}>
              <label className={Styles["input_label"]}>Endocrine</label>
                <div>
                  <textarea
                    type="text"
                    value={values.reviewEndocrine} 
                    onChange={handleChange('reviewEndocrine')}
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

export default ReviewOfSystems