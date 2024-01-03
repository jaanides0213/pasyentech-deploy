import React, { useEffect, useState } from "react";
import Styles from "./Patient.module.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header.jsx";
import { getPatientById } from "../../api/getPatientById"; // Import the API for fetching individual data based on ID
import { useParams } from "react-router-dom";

const Patient_View = () => {
  const { id } = useParams(); // Get patient ID from the URL
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
    // Call the fetchPatient function when the component mounts
    fetchPatient();
  }, [id]); // Dependency array with the id parameter

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
            <span className={Styles["Patient__information__container"]}>
              <h3>Patient Information</h3>
              <p>Name of Patient: {patients.patientName}</p>
              <p>Age: {patients.patientAge}</p>
              <p>Sex: {patients.patientSex}</p>
              <p>Date of Birth: {patients.dateOfBirth}</p>
              <p>Phone Number: {patients.phoneNumber}</p>
            </span>

            <span className={Styles["Patient__history__container"]}>
              <h3 className={Styles["Patient__information__h3"]}>Patient History</h3>
              <p>Chief Complaint: {patients.chiefComplaint}</p>
              <p>History of Present Illness: {patients.presentIllness}</p>
              <p>Review of Systems: {patients.review_system} </p>

              <p>Past Medical Conditions: {patients.childhoodIllness}</p>
              <p>Current Medications: {patients.healthMaintenance}</p>
              <p>Medical History: {patients.medicalHistory}</p>
              <p>Surgical History: {patients.surgicalHistory}</p>
              <p>Family Medical History: {patients.familyHistory}</p>
              <p>Social History: {patients.PersonalSocialHistory}</p>
              <p>Psychosocial History: {patients.psychosocialHistory}</p>
            </span>

            <span className={Styles["Patient__physical__container"]}>
              <h3 className={Styles["Patient__physical__h3"]}>Physical Examination</h3>
              <p>Physical Information Details: {patients.physical_information}</p>
            </span>

            <span className={Styles["Patient__impression__container"]}>
              <h3 className={Styles["Patient__impression__h3"]}>Impression</h3>
              <p>Impression Details: {patients.patientImpression}</p>
            </span>

            <span className={Styles["Patient__diagnosticFiles__container"]}>
              <h3 className={Styles["Patient__diagnosticFiles__h3"]}>Diagnostic Files</h3>
              {/* To be followed: Include diagnostic files rendering logic */}
            </span>
          </div>
        )}
      </div>
    </main>
  );
};

export default Patient_View;
