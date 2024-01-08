import React from 'react';
import Styles from "./AddPatient.module.css";
import { createPatient } from '../../api/createPatient.js';
import Accordion from '../Accordion/Accordion.jsx';
import { notEditing } from '../../api/notEditing.js';


const Confirmation = ({ prevStep, nextStep, values }) => {

  const Previous = e => {
    e.preventDefault();
    prevStep();
  }

  const Continue = async e => {
    e.preventDefault();

    try {
      const patientId = await createPatient(values);
      console.log('Patient created successfully with ID:', patientId);
      await notEditing();

      window.location.href = '/patient'; // temp only
    } catch (error) {
      console.error('Error creating patient:', error);
    }
  }

  const formatDateOfBirth = () => {
    const originalDate = new Date(values.dateOfBirth);
    const formattedDate = `${originalDate.getMonth() + 1}/${originalDate.getDate()}/${originalDate.getFullYear()}`;
    return formattedDate;
  };

  return (
    <div>
      <h3 className={Styles["h3___styling"]}>Confirmation</h3>
      <div className={Styles["Patient__form__div_wrapper"]}>
        <div className={Styles["main_div__confirmation"]}>
        <Accordion title="I. Patient Information" content={
          <div className={Styles["main_div__partition"]}>
              <div className={Styles["main_div__data"]}>
                <p>Patient Name: {values.patientName} </p>
                <p>Age: {values.patientAge}</p>
                <p>Sex: {values.patientSex}</p>
                <p>Date of Birth: {formatDateOfBirth()}</p>
                <p>Phone Number: {values.phoneNumber}</p>
                <p>Civil Status: {values.civilStatus}</p>
                <p>Address: {values.patientAddress}</p>
                <p>Religion: {values.patientReligion}</p>
                <p>Occupation: {values.patientOccupation}</p>
                <p>Chief Complaint: {values.chiefComplaint}</p>
                <p>Present Illness: {values.presentIllness}</p>
              </div>
          </div>
        }/>

        <Accordion title="II. Patient History" content={
          <div className={Styles["main_div__partition"]}>
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
           }/>

       <Accordion title="III. Review of Systems" content={
          <div className={Styles["main_div__partition"]}>
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
              <div className={Styles["main_div__subdata"]}> 
                <p>Respiratory: {values.reviewRespiratory}</p>
                <p>Cardiovascular: {values.reviewCardiovascular}</p>
                <p>Gastrointestinal: {values.reviewGastro}</p>
                <p>Urinary: {values.reviewUrinary}</p>
                <p>Genital: {values.reviewGenital}</p>
                <p>Peripheral Vascular: {values.reviewPeripheral}</p>
                <p>Muscoskeletal: {values.reviewMuscoskeletal}</p>

              </div>

              <h3>c. Medical Specialties</h3>
              <div className={Styles["main_div__subdata"]}>
                <p>Psychiatric: {values.reviewPsychiatrict}</p>
                <p>Neurologic: {values.reviewNeurologic}</p>
                <p>Hematologic: {values.reviewHematologic}</p>
                <p>Endocrine: {values.reviewEndocrine}</p>
              </div>
            </div>
          </div>

        }/>
        
        <Accordion title="IV. Physical Examination" content={
          <div className={Styles["main_div__partition"]}>
            <div className={Styles["main_div__data"]}>

              <h3>a. General Assessment</h3>
              <div className={Styles["main_div__subdata"]}>
                <p>Vital Signs: {values.physicalVital}</p>
                <p>Skin: {values.physicalSkin}</p>
              </div>

              <h3>b. Head, Eyes, Ears, Nose, Throat (HEENT)</h3>
              <div className={Styles["main_div__subdata"]}>
                <p>Head: {values.HEENT_head}</p>
                <p>Eyes: {values.HEENT_eyes}</p>
                <p>Ears: {values.HEENT_ears}</p>
                <p>Nose: {values.HEENT_nose}</p>
                <p>Throat: {values.HEENT_throat}</p>
              </div>

              <h3>c. Neck</h3>
              <div className={Styles["main_div__subdata"]}>
                <p>Neck: {values.physicalNeck}</p>
              </div>

              <h3>d. Thorax and Respiratory</h3>
              <div className={Styles["main_div__subdata"]}>
                <p>Thorax and Lungs: {values.physicalThoraxLungs}</p>
                <p>Cardiovascular: {values.physicalCardio}</p>
              </div>

              <h3>e. Breasts</h3>
              <div className={Styles["main_div__subdata"]}>
                <p>Breasts: {values.physicalBreast}</p>
              </div>

              <h3>f. Abdomen</h3>
              <div className={Styles["main_div__subdata"]}>
                <p>Abdomen: {values.physicalAbdomen}</p>
              </div>

              <h3>g. Pelvic and Genitalia</h3>
              <div className={Styles["main_div__subdata"]}>
                <p>Genitalia: {values.physicalGenitalia}</p>
                <p>Rectal: {values.physicalRectal}</p>
              </div>

              <h3>h. Extremities</h3>
              <div className={Styles["main_div__subdata"]}> 
                <p>Extremities: {values.physicalExtremities}</p>
                <p>Peripheral Vascular: {values.physicalPeripheral}</p>
                <p>Muscoskeletal: {values.physicalMuscoskeletal}</p>
              </div>

              <h3>i. Neurologic</h3>
              <div className={Styles["main_div__subdata"]}>
                <p>Neurologic: {values.physicalNeurologic}</p>
                <p>Motor: {values.physicalMotor}</p>
                <p>Reflexes: {values.physicalReflexes}</p>
              </div>
            </div>
          </div>

        }/>

        <Accordion title="V. Impression, Assessment, and Plan" content={
          <div className={Styles["main_div__partition"]}>
            <div className={Styles["main_div__subdata"]}>
              <p>Impression: {values.patientImpression}</p>
              <p>Assessment and Plan: {values.patientAssessmentPlan}</p>
              <p>Uploaded Diagnostic Files: {values.patientDiagnosticFiles}</p>
            </div>
          </div>

        }/>
        </div>
      </div>

      <div className={Styles["nextBtn__container"]}>
        <button onClick={Previous} className={Styles["nextBtn__style"]}>Prev</button>
        <button onClick={Continue} className={Styles["nextBtn__style"]}>Confirm</button>
      </div>
    </div>
  );
}

export default Confirmation;
