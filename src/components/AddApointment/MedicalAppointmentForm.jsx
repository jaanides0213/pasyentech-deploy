import React from 'react';
import Styles from "./AddAppointment.module.css";

const MedicalAppointmentForm = ({ prevStep, nextStep, handleChange, values }) => {
  const Continue = e => {
    e.preventDefault();
    nextStep();
  };

  const isRequired = true; // Set this based on the logic for determining required fields

  return (
    <form>
      <h3 className={Styles["h3___styling"]}>Medical Appointment Form</h3>
      <div className={Styles["Appointment__form__div_wrapper"]}>
        <div className={Styles["main_div"]}>
          {/*For Name input*/}
          <div className={Styles["input_box_name"]}>
            <label className={Styles["input_label"]}>
              Patient Name{isRequired && <span className={Styles["required_asterisk"]}> *</span>}
            </label>
            <input 
              type='text' 
              value={values.patientName} 
              onChange={handleChange('patientName')} required />
          </div>
        </div>

        <div className={Styles["main_div"]}>
          {/*For Date input*/}
          <div className={Styles["input_box_date"]}>
            <label className={Styles["input_label"]}>
              Date{isRequired && <span className={Styles["required_asterisk"]}> *</span>}
            </label>
            <input 
              type='date' 
              value={values.apptDate} 
              onChange={handleChange('apptDate')} 
              required 
            />
          </div>

          {/*For Time input*/}
          <div className={Styles["input_box_time"]}>
            <label className={Styles["input_label"]}>
              Time{isRequired && <span className={Styles["required_asterisk"]}> *</span>}
            </label>
            <input 
              type='time' 
              value={values.apptTime}
              onChange={handleChange('apptTime')} 
              required 
            />
          </div>
        </div>

        <div className={Styles["main_div"]}>
          {/* For Status input */}
          <div className={Styles["input_box_status"]}>
            <div className={Styles["status_label_container"]}>
              <label className={Styles["input_label"]}>
                Status{isRequired && <span className={Styles["required_asterisk"]}> *</span>}
              </label>
            </div>
            <div className={Styles["Appointment_table_status"]}>
              <select
                className={Styles["status_option__select"]}
                value={values.apptStatus}
                onChange={handleChange('apptStatus')}
              >
                <option value="" className={Styles["status_option__style"]}>
                  Choose an option
                </option>
                <option value="Scheduled" className={Styles["status_option__style"]}>
                  Scheduled
                </option>
                <option value="Ongoing" className={Styles["status_option__style"]}>
                  Ongoing
                </option>
                <option value="Done" className={Styles["status_option__style"]}>
                  Done
                </option>
                <option value="Cancelled" className={Styles["status_option__style"]}>
                  Cancelled
                </option>
              </select>
            </div>
          </div>
        </div>

        <div className={Styles["main_div"]}>
          <div className={Styles["input_box_remarks"]}>
            <label className={Styles["input_label"]}>Remarks</label>
            <div>
              <textarea
                type="text"
                value={values.apptRemark}
                onChange={handleChange('apptRemark')}
                className={Styles["textareaStyle"]}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={Styles["doneBtn__container"]}>
        <button onClick={Continue} className={Styles["doneBtn__style"]}>
          Next
        </button>
      </div>
    </form>
  );
};

export default MedicalAppointmentForm;
