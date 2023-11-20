import React, { useState } from "react";
import { HiSearch } from "react-icons/hi";
import { IoMdAdd } from "react-icons/io";
import Styles from "./Patient.module.css"; // Update the import path as needed
import Header from "../../components/Header/Header.jsx";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";

const PatientTable = () => {
  const [patients, setPatients] = useState([
    { id: 1, name: "John Doe", age: 25, sex: "Male" },
    { id: 2, name: "Jane Doe", age: 30, sex: "Female" },
    { id: 3, name: "Bob Smith", age: 28, sex: "Male" },
    // Add more sample data as needed
  ]);

  const [newPatient, setNewPatient] = useState({
    name: "",
    age: "",
    sex: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPatient((prevPatient) => ({
      ...prevPatient,
      [name]: value,
    }));
  };

  const addPatient = () => {
    //---------------------------------
    if (
      !newPatient.name ||
      !newPatient.age ||
      !newPatient.sex ||
      !newPatient.dateofbirth
    ) {
      alert("Please fill in all fields");
      return;
    }

    // Generate a unique ID for the new patient
    const newId = patients.length + 1;

    // Add the new patient to the list
    setPatients((prevPatients) => [
      ...prevPatients,
      { id: newId, ...newPatient },
    ]);

    //------------------------
    setNewPatient({ name: "", age: "", sex: "", dateofbirth: "" });
  };

  return (
    <main className={Styles["Patient__cont"]}>
      <Sidebar />
      <div className={Styles["Patient__cont-main"]}>
        <div className={Styles["Patient__cont-header"]}>
          <Header />
        </div>
        <div className={Styles["Patient_header_title"]}>
        <h2>Add Patient Form</h2>
        </div>
        <form>
          <div className={Styles["Patient__cont-column-main"]}>
            
            {/* Add Patient Form */}
            <div className={Styles["add-patient-form"]}>
              <div className={Styles["main_div"]}>
                <span className={Styles["input_box"]}>
                  <label className={Styles["input_label"]}>
                    Name of Patient:
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={newPatient.name}
                    onChange={handleInputChange}
                    className={Styles["name"]}
                  />
                </span>
                <span className={Styles["input_box"]}>
                  <label>Age: </label>
                  <input
                    type="text"
                    name="age"
                    value={newPatient.age}
                    onChange={handleInputChange}
                    className={Styles["age"]}
                  />
                </span>
                <span className={Styles["input_box"]}>
                  <label>Sex:</label>
                  <input
                    type="text"
                    name="sex"
                    value={newPatient.sex}
                    onChange={handleInputChange}
                    className={Styles["sex"]}
                  />
                </span>
              </div>
              {/*--------*/}
              <div className={Styles["main_div"]}>
                <span className={Styles["input_box"]}>
                  <label className={Styles["input_label"]}>
                    Date of Birth:
                  </label>
                  <input
                    type="text"
                    name="dateofbirth"
                    value={newPatient.dateofbirth}
                    onChange={handleInputChange}
                    className="input_box"
                  />
                </span>

                <span className={Styles["input_box"]}>
                  <label className={Styles["input_label"]}>
                    Contact Details:
                  </label>
                  <input
                    type="text"
                    name="contact details"
                    value={newPatient.contactdetails}
                    onChange={handleInputChange}
                    className={Styles["contact"]}
                  />
                </span>
              </div>

              <div className={Styles["input_box"]}>
                <label className={Styles["input_label"]}>
                  Medical History:
                </label>
                <input
                  type="text"
                  name="medical history"
                  value={newPatient.medicalhistory}
                  onChange={handleInputChange}
                  className={Styles["medical"]}
                />
              </div>

              <div className={Styles["input_box"]}>
                <label className={Styles["input_label"]}>
                  Past Medical Conditions:
                </label>
                <input
                  type="text"
                  name="pastmedicalconditions"
                  value={newPatient.pastmedicalconditions}
                  onChange={handleInputChange}
                  className={Styles["past"]}
                />
              </div>

              <div className={Styles["input_box"]}>
                <label className={Styles["input_label"]}>
                  Surgical History:
                </label>

                <input
                  type="text"
                  name="Surgical History"
                  value={newPatient.surgicalhistory}
                  onChange={handleInputChange}
                  className={Styles["surgical"]}
                />
              </div>

              <div className={Styles["input_box"]}>
                <label className={Styles["input_label"]}>
                  Current Medications:
                </label>
                <input
                  type="text"
                  name="Current Medications"
                  value={newPatient.currentmedications}
                  onChange={handleInputChange}
                  className={Styles["current"]}
                />
              </div>

              <div className={Styles["input_box"]}>
                <label className={Styles["input_label"]}>Allergies:</label>
                <input
                  type="text"
                  name="Allergies"
                  value={newPatient.allergies}
                  onChange={handleInputChange}
                  className={Styles["allergies"]}
                />
              </div>

              <div className={Styles["input_box"]}>
                <label className={Styles["input_label"]}>
                  Family Medical History:
                </label>
                <input
                  type="text"
                  name="Family Medical History"
                  value={newPatient.familymedicalhistory}
                  onChange={handleInputChange}
                  className={Styles["family"]}
                />
              </div>

              <div className={Styles["input_box"]}>
                <label className={Styles["input_label"]}>Social History:</label>

                <input
                  type="text"
                  name="Social History"
                  value={newPatient.socialhistory}
                  onChange={handleInputChange}
                  className={Styles["social"]}

                />
              </div>

              <div className={Styles["input_box"]}>
                <label className={Styles["input_label"]}>
                  Psychosocial History:
                </label>
                <input
                  type="text"
                  name="Psychosocial History"
                  value={newPatient.psychosocialhistory}
                  onChange={handleInputChange}
                  className={Styles["psychosocial"]}
                />
              </div>

              <div className={Styles["input_box"]}>
                <label className={Styles["input_label"]}>Risk Factors:</label>

                <input
                  type="text"
                  name="Risk Factors"
                  value={newPatient.riskfactors}
                  onChange={handleInputChange}
                  className={Styles["risk"]}
                  />
              </div>

              <br />
              <button
                onClick={addPatient}
                className={Styles["Patient_add_button"]}
              >
                Add Patient
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default PatientTable;
