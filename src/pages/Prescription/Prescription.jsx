import React, { Component } from "react";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import Styles from "./Prescription.module.css";
import Header from "../../components/Header/Header.jsx";
import { IoMdAdd } from "react-icons/io";
import {
  HiSearch,
  HiOutlinePencilAlt,
  HiOutlineEye,
  HiOutlineTrash,
} from "react-icons/hi";

export class Prescription extends Component {
  render() {
    return (
      <main className={Styles["Prescription__cont"]}>
        <Sidebar />
        <div className={Styles["Prescription__cont-main"]}>
          <div className={Styles["Prescription__cont-header"]}>
            <Header />
          </div>
          <div className={Styles["Prescription__cont-column-main"]}>
            <h2>Prescription</h2>
          </div>

          {/* for searchbar/add/sort */}
          <div className={Styles["Prescription_search_add_container"]}>
            <div className={Styles["Prescription_search_bar"]}>
              <input
                className={Styles["Prescription_search_input"]}
                placeholder="Search prescription"
                type="text"
              />
            </div>
            <div>
              <button className={Styles["Prescription_search_button"]}>
                <HiSearch />
              </button>
            </div>
            <div className={Styles["Prescription_add_bar"]}>
              <button className={Styles["Prescription_add_button"]}>
                <a href="/prescription/add-prescription-form" className={Styles["Patient_add_icon"]}>
                  <IoMdAdd /> Add prescription
                </a>
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Prescription;
