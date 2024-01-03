// Import necessary libraries
import React, { useEffect, useState } from "react";
import Styles from "./Patient.module.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header.jsx";
import { getPatientById } from "../../api/getPatientById";
import { useParams } from "react-router-dom";

const Patient_View = () => {
  const { id } = useParams();
  const [patients, setPatient] = useState(null);

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const fetchedPatient = await getPatientById(id);
        setPatient(fetchedPatient);
        console.log("Fetched Patient:", fetchedPatient);
      } catch (error) {
        console.error("Error fetching patient:", error);
      }
    };

    fetchPatient();
  }, [id]);

  return (
    <main className={Styles["Patient__cont"]}>
      <Sidebar />
      <div className={Styles["Patient__cont-main"]}>
        <div className={Styles["Patient__cont-header"]}>
          <Header />
        </div>
        <div className={Styles["Patient__cont-column-main"]}>
          <h2 className={Styles["Patient__h2"]}>View Patient</h2>
          <hr className={Styles["Patient__hr"]} />
        </div>

        {patients && (
          <div className={Styles["View__patient__container"]}>
            {/* Patient Information */}
            <span className={Styles["Patient__information__container"]}>
              <h3>Patient Information</h3>
              <p>Name of Patient: {patients.patientName}</p>
              <p>Age: {patients.patientAge}</p>
              <p>Sex: {patients.patientSex}</p>
              <p>Date of Birth: {patients.dateOfBirth}</p>
              <p>Phone Number: {patients.phoneNumber}</p>
              <p>Civil Status: {patients.civilStatus} </p>
              <p>Address: {patients.patientAddress}</p>
              <p>Religion: {patients.patientReligion}</p>
              <p>Occupation: {patients.patientOccupation}</p>
              <p>Chief Complaint: {patients.chiefComplaint}</p>
              <p>Present Illness: {patients.presentIllness}</p>
            </span>

            {/* Patient History */}
            <span className={Styles["Patient__history__container"]}>
              <h3 className={Styles["Patient__information__h3"]}>Patient History</h3>
              <div className={Styles["main_div__data"]}>

              <h3>a. Physical Assessment Systems</h3>
              <div className={Styles["main_div__subdata"]}>
                <p>General: {patients.reviewGeneral}</p>
                <p>Skin: {patients.reviewSkin}</p>
                <p>Head, Eyes, Ears, Nose, Throat (HEENT):</p>
                <div className={Styles["main_div__subsubdata"]}>
                  <p><li>Head: {patients.review_HEENT_head}</li></p>
                  <p><li>Eyes: {patients.review_HEENT_eyes}</li></p>
                  <p><li>Ears: {patients.review_HEENT_ears}</li></p>
                  <p><li>Nose: {patients.review_HEENT_nose}</li></p>
                  <p><li>Throat: {patients.review_HEENT_throat}</li></p>
                </div>
                <p>Neck: {patients.reviewNeck}</p>
                <p>Breasts: {patients.reviewBreasts}</p>
              </div>

              <h3>b. Organ Systems</h3>
              <div className={Styles["main_div__subdata"]}> 
                <p>Respiratory: {patients.reviewRespiratory}</p>
                <p>Cardiovascular: {patients.reviewCardiovascular}</p>
                <p>Gastrointestinal: {patients.reviewGastro}</p>
                <p>Urinary: {patients.reviewUrinary}</p>
                <p>Genital: {patients.reviewGenital}</p>
                <p>Peripheral Vascular: {patients.reviewPeripheral}</p>
                <p>Muscoskeletal: {patients.reviewMuscoskeletal}</p>

              </div>

              <h3>c. Medical Specialties</h3>
              <div className={Styles["main_div__subdata"]}>
                <p>Psychiatric: {patients.reviewPsychiatrict}</p>
                <p>Neurologic: {patients.reviewNeurologic}</p>
                <p>Hematologic: {patients.reviewHematologic}</p>
                <p>Endocrine: {patients.reviewEndocrine}</p>
              </div>
            </div>
            </span>

            {/* Physical Examination */}
            <span className={Styles["Patient__physical__container"]}>
              <h3 className={Styles["Patient__physical__h3"]}>Physical Examination</h3>
              <div className={Styles["main_div__data"]}>

                <h3>a. General Assessment</h3>
                <div className={Styles["main_div__subdata"]}>
                  <p>Vital Signs: {patients.physicalVital}</p>
                  <p>Skin: {patients.physicalSkin}</p>
                </div>

                <h3>b. Head, Eyes, Ears, Nose, Throat (HEENT)</h3>
                <div className={Styles["main_div__subdata"]}>
                  <p>Head: {patients.HEENT_head}</p>
                  <p>Eyes: {patients.HEENT_eyes}</p>
                  <p>Ears: {patients.HEENT_ears}</p>
                  <p>Nose: {patients.HEENT_nose}</p>
                  <p>Throat: {patients.HEENT_throat}</p>
                </div>

                <h3>c. Neck</h3>
                <div className={Styles["main_div__subdata"]}>
                  <p>Neck: {patients.physicalNeck}</p>
                </div>

                <h3>d. Thorax and Respiratory</h3>
                <div className={Styles["main_div__subdata"]}>
                  <p>Thorax and Lungs: {patients.physicalThoraxLungs}</p>
                  <p>Cardiovascular: {patients.physicalCardio}</p>
                </div>

                <h3>e. Breasts</h3>
                <div className={Styles["main_div__subdata"]}>
                  <p>Breasts: {patients.physicalBreast}</p>
                </div>

                <h3>f. Abdomen</h3>
                <div className={Styles["main_div__subdata"]}>
                  <p>Abdomen: {patients.physicalAbdomen}</p>
                </div>

                <h3>g. Pelvic and Genitalia</h3>
                <div className={Styles["main_div__subdata"]}>
                  <p>Genitalia: {patients.physicalGenitalia}</p>
                  <p>Rectal: {patients.physicalRectal}</p>
                </div>

                <h3>h. Extremities</h3>
                <div className={Styles["main_div__subdata"]}> 
                  <p>Extremities: {patients.physicalExtremities}</p>
                  <p>Peripheral Vascular: {patients.physicalPeripheral}</p>
                  <p>Muscoskeletal: {patients.physicalMuscoskeletal}</p>
                </div>

                <h3>i. Neurologic</h3>
                <div className={Styles["main_div__subdata"]}>
                  <p>Neurologic: {patients.physicalNeurologic}</p>
                  <p>Motor: {patients.physicalMotor}</p>
                  <p>Reflexes: {patients.physicalReflexes}</p>
                </div>
              </div>
            </span>

            {/* Impression */}
            <span className={Styles["Patient__impression__container"]}>
              <h3 className={Styles["Patient__impression__h3"]}>Impression</h3>
              <div className={Styles["main_div__subdata"]}>
                <p>Impression: {patients.patientImpression}</p>
                <p>Assessment and Plan: {patients.patientAssessmentPlan}</p>
                <p>Uploaded Diagnostic Files: {patients.patientDiagnosticFiles}</p>
              </div>
            </span>
          </div>
        )}
      </div>
    </main>
  );
};

export default Patient_View;
