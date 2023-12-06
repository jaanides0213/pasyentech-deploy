import React from "react";
import Styles from "./Patient.module.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header.jsx";
import { getPatientData } from "../../api/getPatientData";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Patient_View = () => {
    const { id } = useParams(); // Get patient ID from the URL
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        const fetchPatients = async () => {
          try {
            // Call the getPatientData function from the API file
            const patientsData = await getPatientData();
    
            // Update the local state with the retrieved patients
            setPatients(patientsData);
          } catch (error) {
            console.error("Error fetching patients:", error);
            // Handle error as needed
          }
        };
    
        // Call the fetchPatients function when the component mounts
        fetchPatients();
      }, [id]); // Empty dependency array to run the effect only once
    
    return (
        <main className={Styles["Patient__cont"]}>
            <Sidebar />
            <div className={Styles["Patient__cont-main"]}>
                <div className={Styles["Patient__cont-header"]}>
                    <Header/>
                </div>
                <div className={Styles["Patient__cont-column-main"]}>
                    <h2 className={Styles["Patient__h2"]}>View Patient</h2>
                    <hr className={Styles["Patient__hr"]} />
                </div>

                {patients.map((patient) => (
                    <div key={patient.id} className={Styles["View__patient__container"]}>
                        <span className={Styles["Patient__information__container"]}>
                            <h3>Patient Information</h3>
                            <p>Name of Patient: {patient.name}</p>
                            <p>Age: {patient.age}</p>
                            <p>Sex: {patient.sex}</p>
                            <p>Date of Birth: {patient.dateofbirth}</p>
                            <p>Phone Number: {patient.contactdetails}</p>
                        </span>

                        <span className={Styles["Patient__history__container"]}>
                            <h3>Patient History</h3>
                            <p>Chief Complaint: {patient.chief_complaint}</p>
                            <p>History of Present Illness: {patient.history_present}</p>
                            <p>Review of Systems: {patient.review_system}</p>
                            <p>Past Medical Conditions: {patient.pastmedicalconditions}</p>
                            <p>Current Medications: {patient.currentmedications}</p>
                            <p>Medical History: {patient.medicalhistory}</p>
                            <p>Surgical History: {patient.surgicalhistory}</p>
                            <p>Family Medical History: {patient.familymedicalhistory}</p>
                            <p>Social History: {patient.socialhistory}</p>
                            <p>Psychosocial History: {patient.psychosocialhistory}</p>
                        </span>

                        <span className={Styles["Patient__physical__container"]}>
                            <h3>Physical Examination</h3>
                            <p>Physical Information Details: {patient.physical_information}</p>
                        </span>

                        <span className={Styles["Patient__impression__container"]}>
                            <h3>Impression</h3>
                            <p>Impression Details: {patient.impression}</p>
                        </span>

                        <span className={Styles["Patient__diagnosticFiles__container"]}>
                            <h3>Diagnostic Files</h3>
                        </span>
                    </div>
                ))}  
            </div>
         </main>
    );
};

export default Patient_View;