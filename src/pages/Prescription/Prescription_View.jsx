import React, {useEffect,useState} from 'react';
import Styles from "./Prescription.module.css";
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import { HiOutlinePrinter } from "react-icons/hi";
import { getPrescriptionById } from '../../api/getPrescriptionById';
import { useParams } from "react-router-dom";

const Prescription_View = () => {  

  const { id } = useParams();
  const [prescription, setPrescription] = useState(null);

  useEffect(() => {
    const fetchPrescription = async () => {
      try {
        const fetchedPrescription = await getPrescriptionById(id);
        setPrescription(fetchedPrescription);
        console.log("Fetched Prescription:", fetchedPrescription);
      } catch (error) {
        console.error("Error fetching prescription:", error);
      }
    };

    fetchPrescription();
  }, [id]);

  const handlePrintPrescription = async (prescriptionId) => {
    try {
      const prescriptionDetails = await getPrescriptionById(prescriptionId);

      // Construct the URL for the Patient_View page with the patient's ID
      const viewPatientUrl = `/prescription/view-prescription/print/${prescriptionId}`;

      // Redirect the user to the Patient_View page
      window.location.href = viewPatientUrl;

      // for debug
      console.log("Prescription Details:", prescriptionDetails);
    } catch (error) {
      console.error("Error fetching prescription details:", error);
    }
  };

  const formatConsultationDate = () => {
    const originalDate = new Date(prescription.patientConsultationDate);
    const formattedDate = `${originalDate.getMonth() + 1}/${originalDate.getDate()}/${originalDate.getFullYear()}`;
    return formattedDate;
  };

  return (
    <main className={Styles["Prescription__cont"]}>
      <Sidebar/>
      <div className={Styles["Prescription__cont-main"]}>
        
        <div className={Styles["Prescription__cont-header"]}>
          <Header/>
        </div>

        <div className={Styles["Prescription__cont-column-main"]}>
          <h2 className={Styles["Prescription__h2"]}>View Prescription</h2>
          <hr className={Styles["Prescription__hr"]}/>
        </div>

        {prescription && (
        <div className={Styles["Prescription__patientInfo__container"]}>
          <div className={Styles["Prescription__patientInfo__span"]}>
            <h3>Patient Information</h3>
            <p>Name of Patient: {prescription.patientName}</p>
            <p>Age: {prescription.patientAge}</p>
            <p>Sex: {prescription.patientSex}</p>
            <p>Weight: {prescription.patientWeight} {prescription.patientWeightUnit}</p>
            <p>Address: {prescription.patientAddress}</p>
            <p>Consultation date: {formatConsultationDate()}</p>
          </div> 

          <div className={Styles["Prescription__patientInfo__span1"]}>
            <h3>Medications</h3>
            {prescription.medications.map((medication, index) => (
              <div key={index}>
                <p><strong>Medication {index + 1}</strong></p>
                <p>Number of Units: {medication.dosageUnit}</p>
                <p>Dosage: {medication.dosageNum} </p>
                <p>Generic Name: {medication.genericName}</p>
                <p>Brand Name: {medication.brandName}</p>
                <p>Direction of Use: {medication.directionOfUse}</p>
              </div>
            ))}
          </div>
        </div>
        )}

        <div className={Styles["Prescription__print__container"]}>
          <button onClick={() => handlePrintPrescription(prescription.id)} className={Styles["printBtn__style"]}> 
            <HiOutlinePrinter size="1.1rem"/> Print
          </button>          
        </div>
      </div>     
    </main>
  )
}

export default Prescription_View
