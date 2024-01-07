// Import necessary libraries
import React, { useEffect, useState } from "react";
import Styles from "./Patient.module.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header.jsx";
import { getPatientById } from "../../api/getPatientById";
import { useParams } from "react-router-dom";
import Accordion from "../../components/Accordion/Accordion.jsx";

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

  const formatDateOfBirth = () => {
    const originalDate = new Date(patients.dateOfBirth);
    const formattedDate = `${originalDate.getMonth() + 1}/${originalDate.getDate()}/${originalDate.getFullYear()}`;
    return formattedDate;
  };

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
            <Accordion title="Patient Information" content={
            <span className={Styles["Patient__information__container"]}>
              <p>Name of Patient: {patients.patientName}</p>
              <p>Age: {patients.patientAge}</p>
              <p>Sex: {patients.patientSex}</p>
              <p>Date of Birth: {formatDateOfBirth()}</p>
              <p>Phone Number: {patients.phoneNumber}</p>
              <p>Civil Status: {patients.civilStatus} </p>
              <p>Address: {patients.patientAddress}</p>
              <p>Religion: {patients.patientReligion}</p>
              <p>Occupation: {patients.patientOccupation}</p>
              <p>Chief Complaint: {patients.chiefComplaint}</p>
              <p>Present Illness: {patients.presentIllness}</p>
            </span>
            }/>

            {/* Patient History */}
            <Accordion title="Patient History" content={
            <span className={Styles["Patient__history__container"]}>
              <div className={Styles["main_div__data"]}>
              <Accordion title="a. Physical Assessment Systems" content={
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
              }/>

              <Accordion title="b. Organ Systems" content={
              <div className={Styles["main_div__subdata"]}> 
                <p>Respiratory: {patients.reviewRespiratory}</p>
                <p>Cardiovascular: {patients.reviewCardiovascular}</p>
                <p>Gastrointestinal: {patients.reviewGastro}</p>
                <p>Urinary: {patients.reviewUrinary}</p>
                <p>Genital: {patients.reviewGenital}</p>
                <p>Peripheral Vascular: {patients.reviewPeripheral}</p>
                <p>Muscoskeletal: {patients.reviewMuscoskeletal}</p>

              </div>
              }/>

              <Accordion title="c. Medical Specialties" content={
              <div className={Styles["main_div__subdata"]}>
                <p>Psychiatric: {patients.reviewPsychiatrict}</p>
                <p>Neurologic: {patients.reviewNeurologic}</p>
                <p>Hematologic: {patients.reviewHematologic}</p>
                <p>Endocrine: {patients.reviewEndocrine}</p>
              </div>
              }/>
            </div>
            </span>
            }/>
            {/* Physical Examination */}
            <Accordion title="Physical Examination" content={
            <span className={Styles["Patient__physical__container"]}>
              <div className={Styles["main_div__data"]}>

                <Accordion title="a. General Assessment" content={
                <div className={Styles["main_div__subdata"]}>
                  <p>Vital Signs: {patients.physicalVital}</p>
                  <p>Skin: {patients.physicalSkin}</p>
                </div>
                }/>
                <Accordion title="b. Head, Eyes, Ears, Nose, Throat (HEENT)" content={
                <div className={Styles["main_div__subdata"]}>
                  <p>Head: {patients.HEENT_head}</p>
                  <p>Eyes: {patients.HEENT_eyes}</p>
                  <p>Ears: {patients.HEENT_ears}</p>
                  <p>Nose: {patients.HEENT_nose}</p>
                  <p>Throat: {patients.HEENT_throat}</p>
                </div>
                }/>

                <Accordion title="c. Neck" content={
                <div className={Styles["main_div__subdata"]}>
                  <p>Neck: {patients.physicalNeck}</p>
                </div>
                }/>

                <Accordion title="d. Thorax and Respiratory" content={
                <div className={Styles["main_div__subdata"]}>
                  <p>Thorax and Lungs: {patients.physicalThoraxLungs}</p>
                  <p>Cardiovascular: {patients.physicalCardio}</p>
                </div>
                }/>

                <Accordion title="e. Breasts" content={
                <div className={Styles["main_div__subdata"]}>
                  <p>Breasts: {patients.physicalBreast}</p>
                </div>
                }/>

                <Accordion title="f. Abdomen" content={
                <div className={Styles["main_div__subdata"]}>
                  <p>Abdomen: {patients.physicalAbdomen}</p>
                </div>
                }/>

                <Accordion title="g. Pelvic and Genitalia" content={
                <div className={Styles["main_div__subdata"]}>
                  <p>Genitalia: {patients.physicalGenitalia}</p>
                  <p>Rectal: {patients.physicalRectal}</p>
                </div>
                }/>

                <Accordion title="h. Extremities" content={
                <div className={Styles["main_div__subdata"]}> 
                  <p>Extremities: {patients.physicalExtremities}</p>
                  <p>Peripheral Vascular: {patients.physicalPeripheral}</p>
                  <p>Muscoskeletal: {patients.physicalMuscoskeletal}</p>
                </div>
                }/>

                <Accordion title="i. Neurologic" content={
                <div className={Styles["main_div__subdata"]}>
                  <p>Neurologic: {patients.physicalNeurologic}</p>
                  <p>Motor: {patients.physicalMotor}</p>
                  <p>Reflexes: {patients.physicalReflexes}</p>
                </div>
                }/>
              </div>
            </span>
            }/>

            {/* Impression */}
          <Accordion title="Impression" content={
            <span className={Styles["Patient__impression__container"]}>
              <div className={Styles["main_div__subdata"]}>
                <p>Impression: {patients.patientImpression}</p>
                <p>Assessment and Plan: {patients.patientAssessmentPlan}</p>
                <p>Uploaded Diagnostic Files: {patients.patientDiagnosticFiles}</p>
              </div>
            </span>
          }/>
          </div>
        )}
      </div>
    </main>
  );
};

export default Patient_View;
