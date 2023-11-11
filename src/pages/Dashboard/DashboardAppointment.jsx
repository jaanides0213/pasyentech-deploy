import React from "react";
import Styles from "./Dashboard.module.css";

const DashboardAppointment = () => {
  return (
    <div
      className={Styles["DashboardAppointment_note"]}
      style={{ background: "rgba(255, 255, 255, 0)" }}
    >
      <div className={Styles["DashboardAppointment_label"]}>
        Appointments for today:{" "}
      </div>
      <textarea
        cols="10"
        rows="5"
        placeholder="Type...."
        maxLength="100"
        className={Styles["DashboardAppointment_note__textarea"]}
      />
      <div className={Styles["DashboardAppointment_note__footer"]}>
        {/* <button className={Styles["DashboardNotes_note__save"]}>Save</button> */}
      </div>
    </div>
  );
};

export default DashboardAppointment;
