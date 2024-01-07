import { useEffect, useState } from "react";
import Styles from "./Dashboard.module.css";
import { getAppointmentData } from "../../api/getAppointmentData";
import { getAppointmentById } from "../../api/getAppointmentById";

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

  const formatDateTime = (date, time) => {
    const appointmentDate = new Date(`${date} ${time}`);
    const formattedDate = appointmentDate.toLocaleDateString();
    const formattedTime = appointmentDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    return `${formattedTime} | ${formattedDate}`;
  };

  const handleAppointmentClick = async (id) => {
    try {
      const appointmentDetails = await getAppointmentById(id);
  
      // Construct the URL for the Patient_View page with the patient's ID
      const viewPatientUrl = `/appointment/view-appointment/${id}`;
  
      // Redirect the user to the Patient_View page
      window.location.href = viewPatientUrl;
  
      // for debug
      console.log("Appointment Details:", appointmentDetails);
    } catch (error) {
      console.error("Error fetching prescription details:", error);
    }
  };
  
  return (
    <div className={Styles["DashboardAppointment_note"]}>
      <div className={Styles["DashboardAppointment_label"]}>Appointments</div>
      <div className={Styles["DashboardAppointment_note__textarea"]}>
        {appointments.map((appointment) => (
          <div 
            key={appointment.id} 
            className={Styles["DashboardAppointment_sample1"]}
            onClick={() => handleAppointmentClick(appointment.id)}
          >
            <div className={Styles["DashboardAppointment_row1"]}>
              <p className={Styles["DashboardAppointment_patientName"]}>{appointment.patientName}</p>
              {/* <p className={Styles["DashboardAppointment_status"]}>{appointment.apptStatus}</p> */}
            </div>
            <div className={Styles["DashboardAppointment_row2"]}>
              <p className={Styles["DashboardAppointment_schedule"]}>
                {formatDateTime(appointment.apptDate, appointment.apptTime)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardAppointment;
