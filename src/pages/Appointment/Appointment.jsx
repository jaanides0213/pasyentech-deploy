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
                <IoMdAdd /> Add appointment
              </button>
            </div>
          </div>

          {/* for table */}
          <div className={Styles["Appointment_list_cont"]}>
            <table className={Styles["Appointment_table"]}>
              <thead className={Styles["Appointment_table_main_head"]}>
                <tr>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Remarks</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className={Styles["Appointment_table_data"]}>
                <tr>
                  <th> 12-21-2012</th>
                  <th>00:00nn</th>
                  <th>lorem ipsum dolor</th>
                  <th>
                    <div className={Styles["Appointment_table_action"]}>
                      <div className={Styles["Action__Styling"]}>
                        <a className={Styles["Action__link__Styling"]}>
                          <HiOutlineEye size="15px" /> View
                        </a>
                      </div>
                      <div className={Styles["Action__Styling"]}>
                        <a className={Styles["Action__link__Styling"]}>
                          <HiOutlinePencilAlt size="15px" /> Edit
                        </a>
                      </div>
                      <div className={Styles["Action__Styling"]}>
                        <a className={Styles["Action__link__Styling"]}>
                          <HiOutlineTrash size="15px" /> Delete
                        </a>
                      </div>
                    </div>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    );
  }
}

export default Appointment;
