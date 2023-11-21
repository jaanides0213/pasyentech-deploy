import React, { useState } from "react";
import {
  HiSearch,
  HiOutlinePencilAlt,
  HiOutlineEye,
  HiOutlineTrash,
} from "react-icons/hi";
import { IoMdAdd } from "react-icons/io";
import Styles from "./Patient.module.css"; // Update the import path as needed
import Header from "../../components/Header/Header.jsx";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
const Patient = () => {
  const [patients, setPatients] = useState([
    { id: 1, name: "John Doe", age: 25, gender: "Male" },
    { id: 2, name: "Jane Doe", age: 30, gender: "Female" },
    { id: 3, name: "Bob Smith", age: 28, genders: "Male" },
    // Add more sample data as needed
  ]);
  const [newPatient, setNewPatient] = useState({
    name: "",
    age: "",
    gender: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPatient((prevPatient) => ({
      ...prevPatient,
      [name]: value,
    }));
  };
  return (
    <main className={Styles["Patient__cont"]}>
      <Sidebar />
      <div className={Styles["Patient__cont-main"]}>
        <div className={Styles["Patient__cont-header"]}>
          <Header />
        </div>
        <div className={Styles["Patient__cont-column-main"]}>
          <h1>Patients</h1>
        </div>
        <div className={Styles["Patient_search_add_container"]}>
          <div className={Styles["Patient_search_bar"]}>
            <input
              className={Styles["Patient_search_input"]}
              placeholder="Search patient"
            />
            <button className={Styles["Patient_search_button"]}>
              <HiSearch />
            </button>
          </div>

          <div className={Styles["Patient_add_bar"]}>
            {/* <link to="/patient_form" className={Styles[]} */}
            <button className={Styles["Patient_add_button"]}>
              <a href="/patientform" className={Styles["Patient_add_icon"]}>
                <IoMdAdd /> Add Patient
              </a>
            </button>
          </div>
        </div>
        <div className={Styles["Patient_list_cont"]}>
          <table className={Styles["Patient_table"]}>
            <thead className={Styles["Patient_table_main_head"]}>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className={Styles["Patient_table_data"]}>
              {patients.map((patient) => (
                <tr key={patient.id}>
                  <td>{patient.name}</td>
                  <td>{patient.age}</td>
                  <td>{patient.gender}</td>
                  <td>
                    <div className={Styles["Patient_table_action"]}>
                      <div className={Styles["Action__Styling"]}>
                        <a href="#" className={Styles["Action__link__Styling"]}>
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
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};
export default Patient;
