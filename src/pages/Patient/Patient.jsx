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
import { getPatientData } from "./../../api/getPatientData"; // Import the new function
import { getPatientById } from "../../api/getPatientById.js";
import { deletePatientById } from "../../api/deletePatientById.js";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";

const Patient = () => {
  const [patients, setPatients] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [searchPatient, setSearchPatient] = useState("");
  const [searchResultMessage, setSearchResultMessage] = useState("");

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const patientsData = await getPatientData();
        setPatients(patientsData);
      } catch (error) {
        console.error("Error fetching patients:", error);
      }
    };

    fetchPatients();
  }, []);

  const handleSort = (option) => {
    setSortBy(option);

    // Sort patients based on the selected option---most recent not working grr
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
        [...prevPatients].sort((a, b) =>
          a.patientName.localeCompare(b.patientName)
        )
      );
    }
  };

  const handleSearch = async () => {
    // Convert search input to lowercase for case-insensitive search
    const searchInput = searchPatient.toLowerCase();

    try {
      // Call the getPatientData function from the API file to fetch the original data
      const patientsData = await getPatientData();

      // Check if the search input is empty
      if (searchInput.trim() === "") {
        // If empty, reset to the original list of patients
        setPatients(patientsData);
        setSearchResultMessage(""); // Clear the search result message
      } else {
        // Filter patients based on the search input in the patientName field
        const filteredPatients = patientsData.filter(
          (patient) =>
            patient.patientName &&
            patient.patientName.toLowerCase().includes(searchInput)
        );

        // Update the state with the filtered patients
        setPatients(filteredPatients);

        // Display search result message
        setSearchResultMessage(
          filteredPatients.length > 0 ? `` : "No matching patients found."
        );
      }
    } catch (error) {
      console.error("Error fetching patients:", error);
      // Handle error as needed
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

  const handleDeletePatient = async (patientId, patientName) => {
    const userInput = window.prompt(
      `Are you sure you want to delete ${patientName}? Enter the patient's name to confirm:`
    );
    if (!userInput || userInput.toLowerCase() !== patientName.toLowerCase()) {
      alert(`Deletion Canceled. Incorrect name or canceled action.`);
      return;
    }

    try {
      await deletePatientById(patientId);
      window.alert(`${patientName} has been deleted.`);
      setPatients((prevPatients) => {
        prevPatients.filter((patient) => patient.id !== patientId);
      });
      console.log("Patient deleted successfully.");
      window.location.reload();
    } catch (error) {
      console.error("Error deleting patient:", error);
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
            <button
              className={Styles["Patient_search_button"]}
              onClick={handleSearch}
            >
              <HiSearch />
            </button>
          </div>

          <div className={Styles["Patient_add_bar"]}>
            {/* <link to="/patient_form" className={Styles[]} */}
            <button className={Styles["Patient_add_button"]}>
              <a
                href="/patient/add-patient-form"
                className={Styles["Patient_add_icon"]}
              >
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
                  <th className={Styles["Patient_table_name"]}>Name</th>
                  <th className={Styles["Patient_table_age"]}>Age</th>
                  <th>Sex</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody className={Styles["Patient_table_data"]}>
                {patients.map((patients) => {
                  return (
                    <tr key={patients.id}>
                      <td>{patients.patientName}</td>
                      <td>{patients.patientAge}</td>
                      <td>{patients.patientSex}</td>
                      <td>
                        <div className={Styles["Patient_table_action"]}>
                          <div className={Styles["Action__Styling"]}>
                            <a
                              onClick={() => handleViewPatient(patients.id)}
                              className={Styles["Action__link__Styling"]}
                            >
                              <HiOutlineEye size="15px" /> View
                            </a>
                          </div>
                          <div className={Styles["Action__Styling"]}>
                            <a
                              href="#"
                              className={Styles["Action__link__Styling"]}
                            >
                              <HiOutlinePencilAlt size="15px" /> Edit
                            </a>
                          </div>
                          <div className={Styles["Action__Styling"]}>
                            <a
                              onClick={() =>
                                handleDeletePatient(
                                  patients.id,
                                  patients.patientName
                                )
                              }
                              className={Styles["Action__link__Styling"]}
                            >
                              <HiOutlineTrash size="15px" /> Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </main>
  );
};
export default Patient;
