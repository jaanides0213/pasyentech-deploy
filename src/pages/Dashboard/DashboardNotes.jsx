import React from "react";
import Styles from "./Dashboard.module.css";

const DashboardNotes = () => {
  return (
    <div
      className={Styles["DashboardNotes_note"]}
      style={{ background: "rgba(255, 255, 255, 0)" }}
    >
      <div className={Styles["DashboardNotes_label"]}>Notepad:</div>
      <textarea
        cols="10"
        rows="5"
        placeholder="Type...."
        className={Styles["DashboardNotes_note__textarea"]}
      />
      <div className={Styles["DashboardNotes_note__footer"]}>
        {/* <button className={Styles["DashboardNotes_note__save"]}>Save</button> */}
      </div>
    </div>
  );
};

export default DashboardNotes;
