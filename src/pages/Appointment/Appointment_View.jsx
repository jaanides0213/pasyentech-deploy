import React, {useState,useEffect} from 'react';
import Styles from "./Appointment.module.css";
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import { useParams } from 'react-router';
import {getAppointmentById} from "../../api/getAppointmentById";

const Appointment_View = () => {
  const { id } = useParams();
  const [appointment, setAppointment] = useState(null);

  useEffect(() => {
    const fetchAppointment = async () => {
      try {
        const fetchedAppointment = await getAppointmentById(id);
        setAppointment(fetchedAppointment);
        console.log("Fetched Appointment:", fetchedAppointment);
      } catch (error) {
        console.error("Error fetching Appointment:", error);
      }
    };

    fetchAppointment();
  }, [id]);

  const formatAppointmentDate = () => {
    const originalDate = new Date(appointment.apptDate);
    const formattedDate = `${originalDate.getMonth() + 1}/${originalDate.getDate()}/${originalDate.getFullYear()}`;
    return formattedDate;
  };

  const formatAppointmentTime = () => {
    const options = { hour: 'numeric', minute: '2-digit', hour12: true };
    const formattedTime = new Date(`1970-01-01T${appointment.apptTime}`).toLocaleTimeString(
      undefined,
      options
    );
    return formattedTime;
  };

  return (
    <main className={Styles["Appointment__cont"]}>
      <Sidebar />
      <div className={Styles["Appointment__cont-main"]}>

        <div className={Styles["Appointment__cont-header"]}>
          <Header />
        </div>

        <div className={Styles["Appointment__cont-column-main"]}>
          <h2 className={Styles["Appointment__h2"]}>View Appointment</h2>
          <hr className={Styles["Appointment__hr"]} />
        </div>

        {appointment && (
          <div className={Styles["Appointment__info__container"]}>
            <h3>Appointment Details</h3>
            <p>Name of Patient: {appointment.patientName}</p>
            <p>Date: {formatAppointmentDate()}</p>
            <p>Time: {formatAppointmentTime()}</p>
            <p>Status: {appointment.apptStatus}</p>
            
            {/* Conditionally render Remarks section only when there are remarks */}
            {appointment.apptRemark && (
              <p>Remarks (if any): {appointment.apptRemark}</p>
            )}
          </div>
        )}
      </div>
    </main>
  );
};

export default Appointment_View;