import React from 'react';
import Styles from "./Appointment.module.css";
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';

const Appointment_View = () => {
  return (
    <main className={Styles["Appointment__cont"]}>
      <Sidebar/>
        <div className={Styles["Appointment__cont-main"]}>

          <div className={Styles["Appointment__cont-header"]}>
            <Header/>
          </div>

          <div className={Styles["Appointment__cont-column-main"]}>
            <h2 className={Styles["Appointment__h2"]}>View Appointment</h2>
            <hr className={Styles["Appointment__hr"]}/>
          </div>

          <div className={Styles["Appointment__info__container"]}>
            <h3>Appointment Details</h3>
            <p>Name of Patient: </p>
            <p>Age: </p>
            <p>Date: </p>
            <p>Status: </p>
            <p>Remarks (if any): </p>
          </div>
        </div>
    </main>
  )
}

export default Appointment_View
