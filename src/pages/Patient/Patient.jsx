import React, { useState } from "react";
import { HiSearch } from "react-icons/hi";
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
          <h2 className={Styles["Patient__title"]}>Patients</h2>
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
               <a href="/patient_form"><IoMdAdd /> Add Patient</a>
              </button>
            </div>
          </div>
          <div>
            {/* <Patient_Form /> */}
          </div>
          <div className={Styles["Patient_list_cont"]}>
            <table className={Styles["Patient_table"]}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Gender</th>
                </tr>
              </thead>
              <tbody>
                {patients.map((patient) => (
                  <tr key={patient.id}>
                    <td>{patient.name}</td>
                    <td>{patient.age}</td>
                    <td>{patient.gender}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Patient;
