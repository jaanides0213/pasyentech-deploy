import React from 'react';
import Styles from "./AddPatient.module.css";

const Confirmation = ({ prevStep, nextStep, values }) => {

  const Previous = e => {
    e.preventDefault();
    prevStep();
  }

  return (
    <div>
      <h3 className={Styles["h3___styling"]}>Confirmation</h3>

      <div className={Styles["Patient__form__div_wrapper"]}>
        <div className={Styles["main_div__confirmation"]}>

          <div className={Styles["main_div__partition"]}>
            <h3>I. Patient Information</h3>
              <div className={Styles["main_div__data"]}>
                <p>Patient Name: {values.patientName} </p>
                <p>Age: {values.patientAge}</p>
                <p>Sex: {values.patientSex}</p>
                <p>Date of Birth: {values.dateOfBirth}</p>
                <p>Phone Number: {values.phoneNumber}</p>
                <p>Chief Complaint: {values.chiefComplaint}</p>
                <p>Present Illness: {values.presentIllness}</p>
              </div>
          </div>
          
          <div className={Styles["main_div__partition"]}>
            <h3>II. Patient History</h3>
            <div className={Styles["main_div__data"]}>

              <h3>a. Childhood Illnesses History</h3>
              <div className={Styles["main_div__subdata"]}>
                <p>Childhood Illness: {values.childhoodIllness} </p>
              </div>

              <h3>b. Adult Illnesses History</h3>
              <div className={Styles["main_div__subdata"]}>
                <ul>
                  <li><p>Medical: {values.adultMedical}</p></li>
                  <li><p>Surgical: {values.adultSurgical}</p></li>
                  <li><p>Ob/Gyn: {values.adultObGyn}</p></li>
                  <li><p>Psychiatric: {values.adultPsychiatric}</p></li>
                </ul>
              </div>

              <h3>c. Health Maintenance</h3>
              <div className={Styles["main_div__subdata"]}>
                <p>Health Maintenance: {values.healthMaintenance}</p>
              </div>

              <h3>d. Family History</h3>
              <div className={Styles["main_div__subdata"]}>
                <p>Family History: {values.familyHistory}</p>
              </div>

              <h3>e. Personal History</h3>
              <div className={Styles["main_div__subdata"]}>
                <ul>
                  <li><p>Medical History: {values.medicalHistory}</p></li>
                  <li><p>Surgical History: {values.surgicalHistory}</p></li>
                  <li><p>Personal and Social History: {values.personalSocialHistory}</p></li>
                </ul>
              </div>

              <h3>f. Psychosocial History</h3>
              <div className={Styles["main_div__subdata"]}>
                <p>Psychosocial History: {values.psychosocialHistory}</p>
              </div>
            </div>
          </div>

          <div className={Styles["main_div__partition"]}>
            <h3>III. Review of Systems</h3>
            <div className={Styles["main_div__data"]}>
              <h3>a. Physical Assessment Systems</h3>
              <div className={Styles["main_div__subdata"]}>
                <p>General: {values.reviewGeneral}</p>
                <p>Skin: {values.reviewSkin}</p>
                <p>Head, Eyes, Ears, Nose, Throat (HEENT):</p>
                <div className={Styles["main_div__subsubdata"]}>
                  <p><li>Head: {values.review_HEENT_head}</li></p>
                  <p><li>Eyes: {values.review_HEENT_eyes}</li></p>
                  <p><li>Ears: {values.review_HEENT_ears}</li></p>
                  <p><li>Nose: {values.review_HEENT_nose}</li></p>
                  <p><li>Throat: {values.review_HEENT_throat}</li></p>
                </div>
                <p>Neck: {values.reviewNeck}</p>
                <p>Breasts: {values.reviewBreasts}</p>
                
              </div>

              <h3>b. Organ Systems</h3>
              <h3>c. Medical Specialties</h3>
            </div>

          </div>

          <div className={Styles["main_div__partition"]}>
            <h3>IV. Physical Examination</h3>

          </div>

          <div className={Styles["main_div__partition"]}>
            <h3>V. Impression, Assessment, and Plan</h3>

          </div>
          
           
        
        </div>
        
      </div>

     

      <div className={Styles["nextBtn__container"]}>
        <button onClick={Previous} className={Styles["nextBtn__style"]}>Prev</button>
        <button onClick={nextStep} className={Styles["nextBtn__style"]}>Confirm</button>
      </div>
    </div>
  );
}

export default Confirmation;
