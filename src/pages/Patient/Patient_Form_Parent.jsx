import React from 'react';
import AddPatient from '../../components/AddPatient/AddPatient';
import Styles from "./Patient.module.css";
import Header from "../../components/Header/Header.jsx";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";

const Patient_Form_Parent = () => {
  return (
    <main className={Styles["Patient__cont"]}>
      <Sidebar/>
      <div className={Styles["Patient__cont-main"]}>
        <div className={Styles["Patient__cont-header"]}>
          <Header/>
          <h2>Add Patient Form</h2>
          <AddPatient/>
        </div>
      </div>
    </main>
  )
}

export default Patient_Form_Parent;