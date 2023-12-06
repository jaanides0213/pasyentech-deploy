import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { createPatient } from "../../api/createPatient";
import { useNavigate } from "react-router";
import Styles from "./Patient.module.css";
import Header from "../../components/Header/Header.jsx";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";

const PatientTable = () => {
  const navigate = useNavigate();
  const [newPatient, setNewPatient] = useState({
    name: "",
    age: "",
    sex: "",
    dateofbirth: "",
    diagnosticFiles: [], // Add a new field for diagnostic files
    // Add more fields as needed
  });

  const addPatient = async (e) => {
    try {
      e.preventDefault();

      if (
        !newPatient.name ||
        !newPatient.age ||
        !newPatient.sex ||
        !newPatient.dateofbirth
      ) {
        alert("Please fill in all required fields!");
        return;
      }

      if (window.confirm("Are you sure you want to proceed?")) {
        window.alert("Uploading...");
        navigate("/patient");

        // Call the createPatient function from the API file
        await createPatient(newPatient);

        window.alert("Patient uploaded successfully!");

        // You might want to update the state with the new patient data if needed
        // For example:
        // setPatients((prevPatients) => [...prevPatients, newPatient]);

        // Clear the form after successful upload
        setNewPatient({
          name: "",
          age: "",
          sex: "",
          dateofbirth: "",
          // Clear other fields as needed
        });
      }
    } catch (error) {
      console.error("Error adding patient:", error);
      window.alert("Error adding patient. Please try again.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setNewPatient((prevPatientData) => ({
      ...prevPatientData,
      [name]: value,
    }));
  };

  const handleInputChangeSex = (e) => {
    const { value } = e.target;
    setNewPatient((prevPatientData) => ({
      ...prevPatientData,
      sex: value,
    }));
  };

  const isRequired = true; // Set this based on your logic for determining required fields

  /*
 general format to be able to use functions is
 <input
    type="text"
    name="name"
    value={newPatient.name}
    onChange={handleInputChange}
    className={Styles["name"]}
   />
  => where type indicates input type
  => name is what indicates label in firebase/newPatients usestate
  => value to update newPatients
  => calling onchange function for taking in input
  => classname for styling
 */

  return (
    <main className={Styles["Patient__cont"]}>
      <Sidebar />
      <div className={Styles["Patient__cont-main"]}>
        <div className={Styles["Patient__cont-header"]}>
          <Header />
        </div>
        <div className={Styles["Patient__cont-column-main"]}>
          <h2 className={Styles["Patient__h2"]}>Add Patient Form</h2>
          <hr className={Styles["Patient__hr"]} />
        </div>
        <form className={Styles["Patient__form__container"]}>
          {/*PATIENT INFORMATION*/}
          <span>
            <h3>Patient Information</h3>
          </span>
          <div className={Styles["Patient__form__div_wrapper"]}>
            <div className={Styles["main_div"]}>
              <div className={Styles["input_box"]}>
                <label className={Styles["input_label"]}>
                  Name of Patient{isRequired && <span className={Styles["required_asterisk"]}> *</span>}
                </label>
                <input
                  type="text"
                  name="name"
                  value={newPatient.name}
                  onChange={handleInputChange}
                  className={Styles["name"]}
                  required
                />
              </div>

              <div className={Styles["input_box"]}>
                <label className={Styles["input_label"]}>
                  Age{isRequired && <span className={Styles["required_asterisk"]}> *</span>}
                </label>
                <input
                  type="number"
                  min="1"
                  max="100"
                  name="age"
                  value={newPatient.age}
                  onChange={handleInputChange}
                  className={Styles["age"]}
                  required
                />
              </div>

              <div className={Styles["input_box"]}>
                <label className={Styles["input_label"]}>
                  Sex{isRequired && <span className={Styles["required_asterisk"]}> *</span>}
                </label>
                <div>
                  <select
                    id="sex"
                    name="sex"
                    className={Styles["sex_select_style"]}
                    onChange={handleInputChangeSex} // Corrected onChange handler
                    value={newPatient.sex}
                    required
                  >
                    <option value="none" className={Styles["sex_option_style"]}>
                      Choose an option
                    </option>
                    <option value="Male" className={Styles["sex_option_style"]}>
                      Male
                    </option>

                    <option
                      value="Female"
                      className={Styles["sex_option_style"]}
                    >
                      Female
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <div className={Styles["main_div"]}>
              <div className={Styles["input_box"]}>
                <label className={Styles["input_label"]}>
                  Date of Birth{isRequired && <span className={Styles["required_asterisk"]}> *</span>}
                </label>
                <input
                  type="date"
                  name="dateofbirth"
                  value={newPatient.dateofbirth}
                  onChange={handleInputChange}
                  className="birthdate"
                  required
                />
              </div>

              <div className={Styles["input_box"]}>
                <label className={Styles["input_label"]}>
                  Phone Number{isRequired && <span className={Styles["required_asterisk"]}> *</span>}
                </label>
                <input
                  type="number"
                  name="contactdetails"
                  value={newPatient.contactdetails}
                  onChange={handleInputChange}
                  className={Styles["contact"]}
                  required
                />
              </div>
            </div>

            <br />

            {/*PATIENT HISTORY*/}
            <span>
              <h3>Patient History</h3>
            </span>

            <div className={Styles["input_box"]}>
              <label className={Styles["input_label"]}>Chief Complaint</label>
              <textarea
                name="chief_complaint"
                value={newPatient.chief_complaint}
                onChange={handleInputChange}
                className={Styles["chief_complaint"]}
              />
            </div>

            <div className={Styles["input_box"]}>
              <label className={Styles["input_label"]}>
                History of Present Illness
              </label>
              <textarea
                name="history_present"
                value={newPatient.history_present}
                onChange={handleInputChange}
                className={Styles["history_present"]}
              />
            </div>

            <div className={Styles["input_box"]}>
              <label className={Styles["input_label"]}>Review of Systems</label>
              <textarea
                name="review_system"
                value={newPatient.review_system}
                onChange={handleInputChange}
                className={Styles["review_system"]}
              />
            </div>

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

            <div className={Styles["input_box"]}>
              <label className={Styles["input_label"]}>
                Current Medications
              </label>
              <textarea
                name="currentmedications"
                value={newPatient.currentmedications}
                onChange={handleInputChange}
                className={Styles["current"]}
              />
            </div>

            <div className={Styles["input_box"]}>
              <label className={Styles["input_label"]}>Medical History</label>
              <textarea
                name="medicalhistory"
                value={newPatient.medicalhistory}
                onChange={handleInputChange}
                className={Styles["medical"]}
              />
            </div>

            <div className={Styles["input_box"]}>
              <label className={Styles["input_label"]}>Surgical History</label>
              <textarea
                name="surgicalhistory"
                value={newPatient.surgicalhistory}
                onChange={handleInputChange}
                className={Styles["surgical"]}
              />
            </div>

            <div className={Styles["input_box"]}>
              <label className={Styles["input_label"]}>
                Family Medical History
              </label>
              <textarea
                name="familymedicalhistory"
                value={newPatient.familymedicalhistory}
                onChange={handleInputChange}
                className={Styles["family"]}
              />
            </div>

            <div className={Styles["input_box"]}>
              <label className={Styles["input_label"]}>Social History</label>
              <textarea
                name="socialhistory"
                value={newPatient.socialhistory}
                onChange={handleInputChange}
                className={Styles["social"]}
              />
            </div>

            <div className={Styles["input_box"]}>
              <label className={Styles["input_label"]}>
                Psychosocial History
              </label>
              <textarea
                name="psychosocialhistory"
                value={newPatient.psychosocialhistory}
                onChange={handleInputChange}
                className={Styles["psychosocial"]}
              />
            </div>

            <br />

            {/*PHYSICAL EXAMINATION SECTION*/}
            <span>
              <h3>Physical Examination</h3>
            </span>

            {/*backend must be updated*/}
            <div className={Styles["input_box"]}>
              <label className={Styles["input_label"]}>
                Physical Information Details
              </label>
              <textarea
                name="physical_information"
                value={newPatient.physical_information}
                onChange={handleInputChange}
                className={Styles["physical_information"]}
              />
            </div>

            <br />

            <span>
              <h3>Impression</h3>
            </span>

            {/*backend must be updated*/}
            <div className={Styles["input_box"]}>
              <label className={Styles["input_label"]}>
                Impression Details
              </label>
              <textarea
                name="impression"
                value={newPatient.impression}
                onChange={handleInputChange}
                className={Styles["impression"]}
              />
            </div>

            <br />

            <span>
              <h3>Upload Diagnostic Files</h3>
            </span>

            {/*backend must be updated*/}
            <div className={Styles["input_box_diagnostic"]}>
              <input
                type="file"
                id="diagnosticFile"
                name="diagnosticFile"
              />
            </div>
            
            <br />
            <br />
            <button
              onClick={addPatient}
              className={Styles["Patient_add_button"]}
            >
              <IoMdAdd/> Add Patient
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};
export default PatientTable;
