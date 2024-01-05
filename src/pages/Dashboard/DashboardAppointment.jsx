import Styles from "./Dashboard.module.css";

const DashboardAppointment = () => {
  return (
    <div className={Styles["DashboardAppointment_note"]}>
      <div className={Styles["DashboardAppointment_label"]}>
        Appointments{" "}
      </div>
      {/*Static! To be replaced with dynamic ones once fetching of data is possible.*/}
      <div className={Styles["DashboardAppointment_note__textarea"]}>
        <div className={Styles["DashboardAppointment_sample1"]}>
          <div className={Styles["DashboardAppointment_row1"]}>
            <p className={Styles["DashboardAppointment_patientName"]}>Meekah Carballo</p>
            <p className={Styles["DashboardAppointment_status"]}>Scheduled</p>
          </div>
          <div className={Styles["DashboardAppointment_row2"]}>
            <p className={Styles["DashboardAppointment_schedule"]}>15:05 | 05/15/2003 </p>
          </div> 
        </div>

        <div className={Styles["DashboardAppointment_sample1"]}>
          <div className={Styles["DashboardAppointment_row1"]}>
            <p className={Styles["DashboardAppointment_patientName"]}>Meekah Carballo</p>
            <p className={Styles["DashboardAppointment_status"]}>Scheduled</p>
          </div>
          <div className={Styles["DashboardAppointment_row2"]}>
            <p className={Styles["DashboardAppointment_schedule"]}>15:05 | 05/15/2003 </p>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default DashboardAppointment;
