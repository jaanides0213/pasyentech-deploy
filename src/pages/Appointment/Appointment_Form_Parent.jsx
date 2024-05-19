import React from 'react';
import Styles from "./Appointment.module.css";
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import AddAppointment from '../../components/AddApointment/AddAppointment';

const Appointment_Form_Parent = () => {
  return (
    <main className={Styles["Appointment__cont"]}>
      <Sidebar/>
      <div className={Styles["Appointment__cont-main"]}>
        <div className={Styles["Appointment__cont-header"]}>
          <Header/>
          <h2>Add Appointment</h2>
          <AddAppointment/>
        </div>
      </div>
    </main>
  )
}

export default Appointment_Form_Parent
