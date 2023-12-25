import React from 'react';
import Styles from "./Prescription.module.css";
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import AddPrescription from '../../components/AddPrescription/AddPrescription';

const Prescription_Form_Parent = () => {
  return (
    <main className={Styles["Prescription__cont"]}>
      <Sidebar/>
      <div className={Styles["Prescription__cont-main"]}>
        <div className={Styles["Prescription__cont-header"]}>
          <Header/>
          <h2>Medical Prescription Form</h2>
          <AddPrescription/>
        </div>
      </div>
    </main>
  )
}

export default Prescription_Form_Parent
