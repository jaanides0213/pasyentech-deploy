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

          <div className={Styles["Appointment_list_cont"]}> 
              <table className={Styles["Appointment_table"]}>
                <thead className={Styles["Appointment_table_main_head"]}>
                  <tr>
                    <th className={Styles["Appointment_table_name"]}>Name</th>
                    <th className={Styles["Appointment_table_date"]}>Date</th>
                    <th className={Styles["Appointment_table_time"]}>Time</th>
                    <th className={Styles["Appointment_table_status"]}>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody className={Styles["Appointment_table_data"]}>
                  <tr>
                    <td>Name</td>
                    <td>Date</td>
                    <td>Time</td>
                    <td>
                      <div className={Styles["Appointment_table_status"]}>
                        <select className={Styles["status_option__select"]}>
                          <option value="Scheduled" className={Styles["status_option__style"]}>
                            Scheduled
                          </option>
                          <option value="Ongoing" className={Styles["status_option__style"]}>
                            Ongoing
                          </option>
                          <option value="Done" className={Styles["status_option__style"]}>
                            Done
                          </option>
                          <option value="Cancelled" className={Styles["status_option__style"]}>
                            Cancelled
                          </option>
                        </select>
                      </div>
                    </td>
                    <td>
                      <div className={Styles["Appointment_table_action"]}>
                        <div className={Styles["Action__Styling"]}>
                          <a className={Styles["Action__link__Styling"]}>
                            <HiOutlineEye size="15px" /> View
                          </a>
                        </div>
                        <div className={Styles["Action__Styling"]}>
                          <a href="#" className={Styles["Action__link__Styling"]}>
                            <HiOutlinePencilAlt size="15px" /> Edit
                          </a>
                        </div>
                        <div className={Styles["Action__Styling"]}>
                          <a href="#" className={Styles["Action__link__Styling"]}>
                            <HiOutlineTrash size="15px" /> Delete
                          </a>
                        </div>
                      </div>
                    </td>
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
