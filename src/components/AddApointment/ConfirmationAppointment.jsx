import React from 'react';
import Styles from "./AddAppointment.module.css";
import {createAppointment} from "../../api/createAppointment";

const ConfirmationAppointment = ({ prevStep, nextStep, values }) => {
  const Previous = e => {
    e.preventDefault();
    prevStep();
  };

  const Continue = async (e) => {
    e.preventDefault();

    try {
      const appointmentId = await createAppointment({
        ...values,
        dateOfAppointment: values.dateOfAppointment || "Default Date",
      });
      console.log("appointment ID:", appointmentId);
      
      window.location.href = '/appointment';
    } catch (error) {
      console.error('Error creating appointment:', error);
    }
  };

  const formatAppointmentDate = () => {
    const originalDate = new Date(values.apptDate);
    const formattedDate = `${originalDate.getMonth() + 1}/${originalDate.getDate()}/${originalDate.getFullYear()}`;
    return formattedDate;
  };

  const formatAppointmentTime = () => {
    // Assuming values.apptTime is in 24-hour format
    const originalTime = values.apptTime.split(":");
    const hours = parseInt(originalTime[0]);
    const minutes = parseInt(originalTime[1]);
    const period = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedTime = `${formattedHours}:${minutes < 10 ? "0" : ""}${minutes} ${period}`;
    return formattedTime;
  };

  return (
    <main>
      <h3 className={Styles["h3___styling"]}>Confirmation</h3>
      <div>
        <div>
          <h3>Appointment Details</h3>
          <p>Patient Name: {values.patientName}</p>
          <p>Date: {formatAppointmentDate()}</p>
          <p>Time: {formatAppointmentTime()}</p>
          {/* <p>Date: {values.apptDate}</p> */}
          {/* <p>Time: {values.apptTime}</p> */}
          <p>Status: {values.apptStatus}</p>

          {values.apptRemark && <p>Remarks: {values.apptRemark}</p>}
        </div>
      </div>

      <div className={Styles["doneBtn__container"]}>
        <button onClick={Previous} className={Styles["prevBtn__style"]}>
          Prev
        </button>
        <button onClick={Continue} className={Styles["doneBtn__style"]}>
          Confirm
        </button>
      </div>
    </main>
  );
};

export default ConfirmationAppointment;
