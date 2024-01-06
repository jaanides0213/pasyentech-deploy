import React from 'react'
import Styles from "./Prescription.module.css";
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import { HiOutlinePrinter } from "react-icons/hi";
import { getPrescriptionById } from '../../api/getPrescriptionById';

const Prescription_View = () => {  
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

        <div className={Styles["Prescription__patientInfo__container"]}>
          <div className={Styles["Prescription__patientInfo__span"]}>
            <h3>Patient Information</h3>
            <p>Name of Patient: </p>
            <p>Age: </p>
            <p>Sex: </p>
            <p>Weight: </p>
            <p>Address: </p>
            <p>Consultation date: </p>
          </div> 

          <div className={Styles["Prescription__patientInfo__span1"]}>
            <h3>Medications</h3>
            <div>
              <p>Dosage: </p>
              <p>Unit: </p>
              <p>Generic Name: </p>
              <p>Brand Name: </p>
              <p>Direction of Use: </p>
            </div>
          </div> 
        </div>

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
