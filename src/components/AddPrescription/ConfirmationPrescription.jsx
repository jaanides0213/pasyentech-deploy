import React from 'react';
import Styles from "./AddPrescription.module.css";
import { createPrescription } from '../../api/createPrescription';

const ConfirmationPrescription = ({prevStep, nextStep, values}) => {
  
  const Previous = e => {
    e.preventDefault();
    prevStep()
  }

  const Continue = async (e) => {
    e.preventDefault();

    try {
      const prescriptionId = await createPrescription({
        ...values,
        patientConsultationDate: values.patientConsultationDate || "Default Date",
      });
      console.log("Prescription ID:", prescriptionId);
      
      window.location.href = '/prescription';
    } catch (error) {
      console.error('Error creating prescription:', error);
    }
  };
  
  return (
    <main>
      <h3 className={Styles["h3___styling"]}>Confirmation</h3>
      <div> 
        <div>
          <h3>Patient Details</h3>
          <div>
            <p>Patient Name: {values.patientName}</p>
            <p>Age: {values.patientAge}</p>
            <p>Sex: {values.patientSex}</p>
            <p>Weight: {values.patientWeight} {values.patientWeightUnit}</p>
            <p>Address: {values.patientAddress}</p>
            <p>Date of Consultation: {values.patientConsultationDate}</p>
          </div>
        </div>

        <div>
          <h3>Medications</h3>
          {values.medications.map((medication, index) => (
            <div key={index} className={Styles["medication-details"]}>
              <p><strong>Medication {index + 1}</strong></p>
              <p>Generic Name: {medication.genericName}</p>
              <p>Brand Name: {medication.brandName}</p>
              <p>Number of Units: {medication.dosageUnit}</p>
              <p>Dosage: {medication.dosageNum} </p>
              <p>Direction of Use: {medication.directionOfUse}</p>
            </div>
          ))}
        </div>

        {/* Add a button to navigate to the next step */}
        <div className={Styles["nextBtn__container"]}>
          <button onClick={Previous} className={Styles["nextBtn__style"]}>Prev</button>
          <button onClick={Continue} className={Styles["nextBtn__style"]}>Confirm</button>
        </div>
      </div>
    </main>
  )
}

export default ConfirmationPrescription
