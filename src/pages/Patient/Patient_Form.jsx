import { useState } from "react";
import Styles from "./Patient.module.css"; // Update the import path as needed
import Header from "../../Components/Header/Header.jsx";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../../config/firebase";
const PatientTable = () => {
  const [patients, setPatients] = useState([
    { id: 1, name: "John Doe", age: 25, sex: "Male" },
    { id: 2, name: "Jane Doe", age: 30, sex: "Female" },
    { id: 3, name: "Bob Smith", age: 28, sex: "Male" },
    // Add more sample data as needed
  ]);
  //^^ const patients is a temporary value

  //add patient flow:
  /*
=> preventDefault() => to prevent page from loading TO BE REMOVED ONCE MAG NEXT PAGE
=> async => to give time for upload
=> if (!value etc) => form validation => cannot continue unless essential information is filled in
=> window confirm is to encourage users to double check information
*/
  const addPatient = async (e) => {
    //---------------------------------
    e.preventDefault();
    //getting currently logged in user
    const currentUser = auth.currentUser;
    //upload and edit logs for transparency as well as timestamps
    //so the actions of user can be traced
    setNewPatient((prevPatientData) => ({
      ...prevPatientData,
      uploadedBy: currentUser.uid,
      editedBy: currentUser.uid,
      addedAt: serverTimestamp(),
    }));
    console.log(newPatient);

    if (
      !newPatient.name ||
      !newPatient.age ||
      !newPatient.sex ||
      !newPatient.dateofbirth
    ) {
      alert("Please fill in all fields");
      return;
    }
    if (window.confirm("Are you sure you want to proceed?")) {
      try {
        window.alert("Uploading...");
        //creating a variable to hold "addDoc",
        //await function to give way for upload time, added to collection "patients"
        //"...newPatient" is to add the contents of "newpatient" sa useState
        const patientRef = await addDoc(collection(db, "patients"), {
          ...newPatient,
        });
        //adding consolelog with the id of the individual upload for double checking
        console.log("patient added successfully: ", patientRef.id);
      } catch (error) {
        console.error("error adding patient:", error);
      }
    }
  };

  //creating usestate to keep track of information entered inside the form, and for
  //consistency between entries
  const [newPatient, setNewPatient] = useState({
    name: "",
    age: "",
    sex: "",
    dateofbirth: "",
    contactDetails: "",
    medicalhistory: "",
    pastmedicalconditions: "",
    surgicalhistory: "",
    currentmedications: "",
    allergies: "",
    familymedicalhistory: "",
    socialhistory: "",
    psychosocialhistory: "",
    riskfactors: "",
  });

  //general function to take in input of user
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setNewPatient((prevPatientData) => ({
      ...prevPatientData,
      [name]: value,
    }));

    console.log(name, value);
  };
  //function to take in input from "select" type
  //to be optimized pra merged into one inputchange function
  const handleInputChangeSex = (e) => {
    const { name, value } = e.target;
    setNewPatient((prevPatientData) => ({
      ...prevPatientData,
      sex: value,
    }));
    console.log(name, value);
  };

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
      <div className={Styles["Patient__cont-main"]}>
        <div className={Styles["Patient__cont-header"]}>
          <Header />
        </div>
        <div className={Styles["Patient__cont-column-main"]}>
          <h2 className={Styles["Patient__h2"]}>Add Patient Form</h2>
          <hr className={Styles["Patient__hr"]} />
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
                <div>
                  <select
                    id="sex"
                    name="sex"
                    className={Styles["sex_select_style"]}
                    onChange={handleInputChangeSex}
                    value={newPatient.sex}
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
                name="medicalhistory"
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
                name="surgicalhistory"
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
                name="currentmedications"
                value={newPatient.currentmedications}
                onChange={handleInputChange}
                className={Styles["current"]}
              />
            </div>

            {/*7th Row*/}
            <div className={Styles["input_box"]}>
              <label className={Styles["input_label"]}>Allergies</label>
              <textarea
                name="allergies"
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
                name="familymedicalhistory"
                value={newPatient.familymedicalhistory}
                onChange={handleInputChange}
                className={Styles["family"]}
              />
            </div>

            {/*9th Row*/}
            <div className={Styles["input_box"]}>
              <label className={Styles["input_label"]}>Social History</label>
              <textarea
                name="socialhistory"
                value={newPatient.socialhistory}
                onChange={handleInputChange}
                className={Styles["social"]}
              />
            </div>

            {/*10th Row*/}
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
            <div className={Styles["input_box"]}>
              <label className={Styles["input_label"]}>Risk Factors</label>
              <textarea
                name="riskfactors"
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
