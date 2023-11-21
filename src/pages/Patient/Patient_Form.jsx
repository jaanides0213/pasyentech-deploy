import { useState } from "react";
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
        <div className={Styles["Patient__cont-column-main"]}>
          <h1>Add Patient Form</h1>
        </div>
        <form className={Styles["Patient__form__container"]}>
          <div className={Styles["Patient__form__div_wrapper"]}>
            <div className={Styles["main_div"]}>
              <div className={Styles["input_box"]}>
                <label className={Styles["input_label"]}>Name of Patient</label>
                <input
                  type="text"
                  name="name"
                  value={newPatient.name}
                  onChange={handleInputChange}
                  className={Styles["name"]}
                />
              </div>
              <div className={Styles["input_box"]}>
                <label className={Styles["input_label"]}>Age</label>
                <input
                  type="number"
                  min="1"
                  max="100"
                  name="age"
                  value={newPatient.age}
                  onChange={handleInputChange}
                  className={Styles["age"]}
                />
              </div>

              <div className={Styles["input_box"]}>
                <label for="sex" className={Styles["input_label"]}>
                  Sex
                </label>
                <select
                  id="sex"
                  name="sex"
                  className={Styles["sex_select_style"]}
                >
                  <option value="none" className={Styles["sex_option_style"]}>
                    Choose an option
                  </option>
                  <option value="Male" className={Styles["sex_option_style"]}>
                    Male
                  </option>
                  <option value="Female" className={Styles["sex_option_style"]}>
                    Female
                  </option>
                </select>
              </div>
            </div>

            {/*2nd Row*/}
            <div className={Styles["main_div"]}>
              <div className={Styles["input_box"]}>
                <label className={Styles["input_label"]}>Date of Birth</label>
                <input
                  type="date"
                  name="dateofbirth"
                  value={newPatient.dateofbirth}
                  onChange={handleInputChange}
                  className="birthdate"
                />
              </div>
              <div className={Styles["input_box"]}>
                <label className={Styles["input_label"]}>Contact Details</label>
                <input
                  type="number"
                  name="contact details"
                  value={newPatient.contactdetails}
                  onChange={handleInputChange}
                  className={Styles["contact"]}
                />
              </div>
            </div>
            {/*3rd Row*/}
            <div className={Styles["input_box"]}>
              <label className={Styles["input_label"]}>Medical History</label>
              <textarea
                name="medical history"
                value={newPatient.medicalhistory}
                onChange={handleInputChange}
                className={Styles["medical"]}
              />
            </div>
            {/*4th Row*/}
            <div className={Styles["input_box"]}>
              <label className={Styles["input_label"]}>
                Past Medical Conditions
              </label>
              <textarea
                name="pastmedicalconditions"
                value={newPatient.pastmedicalconditions}
                onChange={handleInputChange}
                className={Styles["past"]}
              />
            </div>
            {/*5th Row*/}
            <div className={Styles["input_box"]}>
              <label className={Styles["input_label"]}>Surgical History</label>
              <textarea
                name="Surgical History"
                value={newPatient.surgicalhistory}
                onChange={handleInputChange}
                className={Styles["surgical"]}
              />
            </div>
            {/*6th Row*/}
            <div className={Styles["input_box"]}>
              <label className={Styles["input_label"]}>
                Current Medications
              </label>
              <textarea
                name="Current Medications"
                value={newPatient.currentmedications}
                onChange={handleInputChange}
                className={Styles["current"]}
              />
            </div>
            {/*7th Row*/}
            <div className={Styles["input_box"]}>
              <label className={Styles["input_label"]}>Allergies</label>
              <textarea
                name="Allergies"
                value={newPatient.allergies}
                onChange={handleInputChange}
                className={Styles["allergies"]}
              />
            </div>
            {/*8th Row*/}
            <div className={Styles["input_box"]}>
              <label className={Styles["input_label"]}>
                Family Medical History
              </label>
              <textarea
                name="Family Medical History"
                value={newPatient.familymedicalhistory}
                onChange={handleInputChange}
                className={Styles["family"]}
              />
            </div>
            {/*9th Row*/}
            <div className={Styles["input_box"]}>
              <label className={Styles["input_label"]}>Social History</label>
              <textarea
                name="Social History"
                value={newPatient.socialhistory}
                onChange={handleInputChange}
                className={Styles["social"]}
              />
            </div>

            {/*10th Row*/}
            <div className={Styles["input_box"]}>
              <label className={Styles["input_label"]}>
                Psychosocial History:
              </label>
              <textarea
                name="Psychosocial History"
                value={newPatient.psychosocialhistory}
                onChange={handleInputChange}
                className={Styles["psychosocial"]}
              />
            </div>
            <div className={Styles["input_box"]}>
              <label className={Styles["input_label"]}>Risk Factors</label>
              <textarea
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
        </form>
      </div>
    </main>
  );
};
export default PatientTable;
