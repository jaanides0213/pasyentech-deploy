import React, { useState, useEffect } from "react";
import {
  HiSearch,
  HiOutlinePencilAlt,
  HiOutlineEye,
  HiOutlineTrash,
} from "react-icons/hi";
import { IoMdAdd } from "react-icons/io";
import Styles from "./Patient.module.css";
import Header from "../../components/Header/Header.jsx";
import { createPatient } from "../../api/createPatient";
import { getPatientData } from "./../../api/getPatientData"; // Import the new function
import { getPatientById } from "../../api/getPatientById.js";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";

const Patient = () => {
  const [patients, setPatients] = useState([]);
  const [sortBy, setSortBy] = useState(""); // State to track sorting option
  const [searchPatient, setSearchPatient] = useState(""); // State for Search patient functionality
  const [searchResultMessage, setSearchResultMessage] = useState(""); // Message for search results

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        // Call the getPatientData function from the API file
        const patientsData = await getPatientData();

        // Update the local state with the retrieved patients
        setPatients(patientsData);
      } catch (error) {
        console.error("Error fetching patients:", error);
        // Handle error as needed
      }
    };

    // Call the fetchPatients function when the component mounts
    fetchPatients();
  }, []); // Empty dependency array to run the effect only once

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

  const addPatient = async () => {
    try {
      if (!newPatient.name || !newPatient.age || !newPatient.sex) {
        alert("Please fill in all fields");
        return;
      }

      if (window.confirm("Are you sure you want to add this patient?")) {
        // Call the createPatient function from the API file
        await createPatient(newPatient);

        // Update the local state with the new patient
        setPatients((prevPatients) => [
          ...prevPatients,
          { ...newPatient, id: prevPatients.length + 1 }, // Assuming you generate an ID
        ]);

        // Clear the form after successful addition
        setNewPatient({
          name: "",
          age: "",
          sex: "",
        });

        window.alert("Patient added successfully!");
      }
    } catch (error) {
      console.error("Error adding patient:", error);
      window.alert("Error adding patient. Please try again.");
    }
  };

  const handleSort = (option) => {
    setSortBy(option);

    // Sort patients based on the selected option
    if (option === "mostRecent") {
      setPatients((prevPatients) =>
        [...prevPatients].sort((a, b) => {
          const dateA = a.createdAt ? a.createdAt.toMillis() : 0;
          const dateB = b.createdAt ? b.createdAt.toMillis() : 0;

          return dateB - dateA;
        })
      );
    } else if (option === "name") {
      setPatients((prevPatients) =>
        [...prevPatients].sort((a, b) => a.name.localeCompare(b.name))
      );
    }
  };

  const handleSearch = async () => {
    const searchTerm = searchPatient.toLowerCase();

    try {
      // Fetch patient data from the API
      const patientsData = await getPatientData();

      // Filter patients based on the search term
      const filteredPatients = patientsData.filter((patient) =>
        patient.name.toLowerCase().includes(searchTerm)
      );

      // Update the patients state with the filtered results
      setPatients(filteredPatients);

      // Display appropriate message based on the search result
      if (filteredPatients.length === 0) {
        setSearchResultMessage("No matching patients found.");
      } else {
        setSearchResultMessage("");
      }
    } catch (error) {
      console.error("Error fetching patients during search:", error);
    }
  };

  const handleViewPatient = async (patientId) => {
    try {
      // Call the new getPatientById function from the API file
      const patient = await getPatientById(patientId);

      // Construct the URL for the Patient_View page with the patient's ID
      const viewPatientUrl = `/patient/view-patient/${patientId}`;

      // Redirect the user to the Patient_View page
      window.location.href = viewPatientUrl;
  
      // Display the patient details (you can customize this part)
      console.log("Patient details:", patient);

    } catch (error) {
      console.error("Error viewing patient:", error);
      // Handle error as needed
    }
  };
  

  return (
    <main className={Styles["Patient__cont"]}>
      <Sidebar />
      <div className={Styles["Patient__cont-main"]}>
        <div className={Styles["Patient__cont-header"]}>
          <Header />
        </div>
        <div className={Styles["Patient__cont-column-main"]}>
          <h2>Patients</h2>
        </div>
        <div className={Styles["Patient_search_add_container"]}>
          <div className={Styles["Patient_search_bar"]}>
            <input
              className={Styles["Patient_search_input"]}
              placeholder="Search patient"
              type="text"
              onChange={(e) => setSearchPatient(e.target.value)}
              value={searchPatient}
            />
            <button className={Styles["Patient_search_button"]} onClick={handleSearch}>
              <HiSearch />
            </button>
          </div>

          <div className={Styles["Patient_add_bar"]}>
            {/* <link to="/patient_form" className={Styles[]} */}
            <button className={Styles["Patient_add_button"]}>
              <a href="/patient/add-patient-form" className={Styles["Patient_add_icon"]}>
                <IoMdAdd /> Add Patient
              </a>
            </button>
          </div>

          {/*backend must be updated*/}
          <div className={Styles["Patient_sort_by"]}>
            <select
              id="sortBy"
              name="sortBy"
              className={Styles["sorting_select__style"]}
              onChange={(e) => handleSort(e.target.value)}
              value={sortBy}
            >
              <option value="" className={Styles["sorting_option__style"]}>
                Sort by
              </option>
              <option
                value="mostRecent"
                className={Styles["sorting_option__style"]}
              >
                Most recent
              </option>
              <option value="name" className={Styles["sorting_option__style"]}>
                Name
              </option>
            </select>
          </div>
        </div>

        <div className={Styles["Patient_list_cont"]}>
          {searchResultMessage && (
            <div className={Styles["Search_result_message"]}>
              {searchResultMessage}
            </div>
          )}
          {patients.length > 0 && (
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
                {patients.map((patient) => (
                  <tr key={patient.id}>
                    <td>{patient.name}</td>
                    <td>{patient.age}</td>
                    <td>{patient.sex}</td>
                    <td>
                      <div className={Styles["Patient_table_action"]}>
                        <div className={Styles["Action__Styling"]}>
                          <a onClick={() => handleViewPatient(patient.id)} className={Styles["Action__link__Styling"]}>
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
          )}
        </div>
      </div>
    </main>
  );
};
export default Patient;
