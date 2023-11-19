import React, { useState } from "react";
import Styles from "./Patient.module.css"; // Update the import path as needed
import Header from "../../Components/Header/Header.jsx";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";

const PatientTable = () => {
  const [patients, setPatients] = useState([
    { id: 1, name: "John Doe", age: 25, gender: "Male" },
    { id: 2, name: "Jane Doe", age: 30, gender: "Female" },
    { id: 3, name: "Bob Smith", age: 28, gender: "Male" },
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

  const addPatient = () => {
    // Validate input fields before adding a patient
    if (!newPatient.name || !newPatient.age || !newPatient.gender) {
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

    // Reset the form fields
    setNewPatient({ name: "", age: "", gender: "" });
  };

  return (
    <main className={Styles["Dashboard__cont"]}>
    <Sidebar/> 
    <div>
      <Header/>
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

{/* Add Patient Form */}
<div className={Styles["add-patient-form"]}>
  <h2>Add Patient</h2>
  <label>
    Name:
    <input
      type="text"
      name="name"
      value={newPatient.name}
      onChange={handleInputChange}
    />
  </label>
  <label>
    Age:
    <input
      type="text"
      name="age"
      value={newPatient.age}
      onChange={handleInputChange}
    />
  </label>
  <label>
    Gender:
    <input
      type="text"
      name="gender"
      value={newPatient.gender}
      onChange={handleInputChange}
    />
  </label>
  <button onClick={addPatient}>Add Patient</button>
</div>
</div>
    </div>
   
    </main>
  );
};

export default PatientTable;

