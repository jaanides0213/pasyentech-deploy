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
      <main className={Styles["Patient__cont"]}>
        <Sidebar />
        <div className={Styles["Patient__cont-main"]}>
          <div className={Styles["Patient__cont-header"]}>
            <Header />
          </div>
          <div className={Styles["Patient__cont-column-main"]}>
            <h2>Prescription</h2>
          </div>

          {/* for searchbar/add/sort */}
          <div className={Styles["Patient_search_add_container"]}>
            <div className={Styles["Patient_search_bar"]}>
              <input
                className={Styles["Patient_search_input"]}
                placeholder="Search patient"
                type="text"
              />
            </div>
            <div>
              <button className={Styles["Patient_search_button"]}>
                <HiSearch />
              </button>
            </div>
            <div className={Styles["Patient_add_bar"]}>
              <button className={Styles["Patient_add_button"]}>
                <IoMdAdd /> Add prescription
              </button>
            </div>
          </div>

          {/* for table */}
          <div>
            <table className={Styles["Patient_table"]}>
              <thead className={Styles["Patient_table_main_head"]}>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Sex</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className={Styles["Patient_table_data"]}>
                <tr>
                  <th>john doe</th>
                  <th>12</th>
                  <th>male</th>
                  <th>
                    <div className={Styles["Patient_table_action"]}>
                      <div className={Styles["Action__Styling"]}>
                        <a  className={Styles["Action__link__Styling"]} >
                        <HiOutlineEye size="15px" /> View
                        </a>
                      </div>
                      <div className={Styles["Action__Styling"]}>
                        <a  className={Styles["Action__link__Styling"]} >
                        <HiOutlinePencilAlt size="15px" /> Edit
                        </a>
                      </div>
                      <div className={Styles["Action__Styling"]}>
                        <a  className={Styles["Action__link__Styling"]} >
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

export default Prescription;
