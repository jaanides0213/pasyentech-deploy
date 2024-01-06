import React, {useEffect,useState} from 'react'
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
            <p>Weight: {prescription.patientWeight}</p>
            <p>Address: {prescription.patientAddress}</p>
            <p>Consultation date: {prescription.patientConsultationDate}</p>
          </div> 

          <div className={Styles["Prescription__patientInfo__span1"]}>
            <h3>Medications</h3>
            {prescription.medications.map((medication, index) => (
              <div key={index}>
                <p>Dosage: {medication.dosageNum} {medication.dosageUnit}</p>
                <p>Generic Name: {medication.genericName}</p>
                <p>Brand Name: {medication.brandName}</p>
                <p>Direction of Use: {medication.directionOfUse}</p>
              </div>
            ))}
          </div>
        </div>
        )}

        <div className={Styles["Prescription__print__container"]}>
            <a href='#'>
              <HiOutlinePrinter size="1.1rem"/> Print
            </a>            
          </div>
          
      </div>     
    </main>
  )
}

export default Prescription_View
