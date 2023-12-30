import React, { Component } from "react";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import Styles from "./Appointment.module.css";
import Header from "../../components/Header/Header.jsx";
import { IoMdAdd } from "react-icons/io";
import {
  HiSearch,
  HiOutlinePencilAlt,
  HiOutlineEye,
  HiOutlineTrash,
} from "react-icons/hi";

export class Appointment extends Component {
  render() {
    return (
      <main className={Styles["Appointment__cont"]}>
        <Sidebar />
        <div className={Styles["Appointment__cont-main"]}>
          <div className={Styles["Appointment__cont-header"]}>
            <Header />
          </div>
          <div className={Styles["Appointment__cont-column-main"]}>
            <h2>Appointments</h2>
          </div>

          {/* for searchbar/add/sort */}
          <div className={Styles["Appointment_search_add_container"]}>
            <div className={Styles["Appointment_search_bar"]}>
              <input
                className={Styles["Appointment_search_input"]}
                placeholder="Search"
                type="text"
              />
            </div>
            <div>
              <button className={Styles["Appointment_search_button"]}>
                <HiSearch />
              </button>
            </div>
            <div className={Styles["Appointment_add_bar"]}>
              <button className={Styles["Appointment_add_button"]}>
                <a href="/appointment/add-appointment-form">
                  <IoMdAdd /> Add appointment
                </a>
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Appointment;
