import React from "react";
import Styles from "./Sidebar.module.css";
import { HiChevronDoubleLeft, HiHome, HiUsers, HiPencil, HiCalendar, HiAdjustments} from "react-icons/hi";
import {IoLogOut} from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className={Styles["Sidebar"]}>
      <a href="/dashboard">
        <img src="/src/assets/logo-img/png-250px/white-complete-250px.png"/>
      </a>

      <span className={Styles["sidebar-content"]}>
         <a href="/dashboard">
          <b><p><HiHome size="1rem"/> Dashboard</p></b>
        </a>
        <a href="#">
          <p><HiUsers size="1rem"/> Patients</p>
        </a>
        <a href="#">
          <p><HiPencil size="1rem"/> Prescription</p>
        </a>
        <a href="#">
          <p><HiCalendar size="1rem"/> Appointments</p>
        </a>
        <a href="#">
          <p><HiAdjustments size="1rem"/> Account Details</p>
        </a>
      </span>

      <span className={Styles["sidebar-content-logout"]}>
        <a href="#">
          <p>Log Out <IoLogOut size="1rem"/></p>
        </a>
      </span>
    </div>
  );
};

export default Sidebar;
