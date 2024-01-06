import { useEffect, useState } from "react";
import Styles from "./Dashboard.module.css";
import { getAppointmentData } from "../../api/getAppointmentData";

const DashboardAppointment = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const appointmentData = await getAppointmentData();

        // Sort appointments by date and time in ascending order
        const sortedAppointments = appointmentData.sort((a, b) => {
          const dateA = new Date(`${a.apptDate} ${a.apptTime}`);
          const dateB = new Date(`${b.apptDate} ${b.apptTime}`);
          return dateA - dateB;
        });

        // Select the first two appointments
        const earliestAppointments = sortedAppointments.slice(0, 2);
        setAppointments(earliestAppointments);
      } catch (error) {
        // Handle error appropriately
        console.error("Error fetching appointments:", error);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div className={Styles["DashboardAppointment_note"]}>
      <div className={Styles["DashboardAppointment_label"]}>Appointments</div>
      <div className={Styles["DashboardAppointment_note__textarea"]}>
        {appointments.map((appointment) => (
          <div key={appointment.id} className={Styles["DashboardAppointment_sample1"]}>
            <div className={Styles["DashboardAppointment_row1"]}>
              <p className={Styles["DashboardAppointment_patientName"]}>{appointment.patientName}</p>
              {/* <p className={Styles["DashboardAppointment_status"]}>{appointment.apptStatus}</p> */}
            </div>
            <div className={Styles["DashboardAppointment_row2"]}>
              <p className={Styles["DashboardAppointment_schedule"]}>
                {`${appointment.apptTime} | ${appointment.apptDate}`}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardAppointment;
