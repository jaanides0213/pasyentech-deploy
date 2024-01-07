import React, { useState, useEffect } from "react";
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
import { getPrescriptionData } from "../../api/getPrescriptionData";
import { getPrescriptionById } from "../../api/getPrescriptionById.js";
import { deletePrescriptionById } from "../../api/deletePrescriptionById.jsx";

const Prescription = () => {
  const [prescriptions, setPrescription] = useState([]);
  const [searchPrescription, setSearchPrescription] = useState(""); // State for Search prescription functionality
  const [searchResultMessage, setSearchResultMessage] = useState(""); // Message for search results
  const [sortBy, setSortBy] = useState("");

  const handleSort = (option) => {
    setSortBy(option);

    if (option === "mostRecent") {
      //--most recent not workin grr
      setPrescription((prevPrescription) =>
        [...prevPrescription].sort((a, b) => {
          const dateA = a.patientConsultationDate
            ? new Date(a.patientConsultationDate)
            : 0;
          const dateB = b.patientConsultationDate
            ? new Date(b.patientConsultationDate)
            : 0;

          return dateB - dateA;
        })
      );
    } else if (option === "name") {
      setPrescription((prevPrescription) =>
        [...prevPrescription].sort((a, b) =>
          a.patientName.localeCompare(b.patientName)
        )
      );
    }
  };

  useEffect(() => {
    // Fetch prescription data when the component mounts
    const fetchData = async () => {
      try {
        const prescriptionData = await getPrescriptionData();
        console.log("Prescription Data:", prescriptionData);
        setPrescription(prescriptionData);
      } catch (error) {
        console.error("Error fetching prescription data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = async () => {
    // Convert search input to lowercase for case-insensitive search
    const searchInput = searchPrescription.toLowerCase();

    try {
      // Call the getPatientData function from the API file to fetch the original data
      const prescriptionData = await getPrescriptionData();

      // Check if the search input is empty
      if (searchInput.trim() === "") {
        // If empty, reset to the original list of patients
        setPrescription(prescriptionData);
        setSearchResultMessage(""); // Clear the search result message
      } else {
        // Filter patients based on the search input in the patientName field
        const filteredPrescription = prescriptionData.filter(
          (prescription) =>
            prescription.patientName &&
            prescription.patientName.toLowerCase().includes(searchInput)
        );

        // Update the state with the filtered patients
        setPrescription(filteredPrescription);

        // Display search result message
        setSearchResultMessage(
          filteredPrescription.length > 0 ? `` : "No matching patients found."
        );
      }
    } catch (error) {
      console.error("Error fetching prescription:", error);
      // Handle error as needed
    }
  };

  const handleViewPrescription = async (prescriptionId) => {
    try {
      const prescriptionDetails = await getPrescriptionById(prescriptionId);

      // Construct the URL for the Patient_View page with the patient's ID
      const viewPatientUrl = `/prescription/view-prescription/${prescriptionId}`;

      // Redirect the user to the Patient_View page
      window.location.href = viewPatientUrl;

      // for debug
      console.log("Prescription Details:", prescriptionDetails);
    } catch (error) {
      console.error("Error fetching prescription details:", error);
    }
  };

  const handleDeletePrescription = async (prescriptionId, patientName) => {
    const userInput = window.prompt(
      `Are you sure you want to delete the prescription of ${patientName}? Enter the patient's name to confirm:`
    );
    if (!userInput || userInput.toLowerCase() !== patientName.toLowerCase()) {
      alert(`Deletion Canceled. Incorrect name or canceled action.`);
      return;
    }
    try {
      await deletePrescriptionById(prescriptionId);
      window.alert(`Prescription for ${patientName} has been deleted.`);
      setPrescription((prevPrescription) => {
        prevPrescription.filter(
          (prescription) => prescription.id !== prescriptionId
        );
      });
      console.log(
        `Prescription for ${patientName} has been deleted successfully.`
      );
      window.location.reload();
    } catch (error) {
      console.error(`Error deleting patient: `, error);
    }
  };

  return (
    <main className={Styles["Prescription__cont"]}>
      <Sidebar />
      <div className={Styles["Prescription__cont-main"]}>
        <div className={Styles["Prescription__cont-header"]}>
          <Header />
        </div>
        <div className={Styles["Prescription__cont-column-main"]}>
          <h2>Prescription</h2>
        </div>

        {/* for searchbar/add/sort */}
        <div className={Styles["Prescription_search_add_container"]}>
          {/*Prescription: Search patient*/}
          <div className={Styles["Prescription_search_bar"]}>
            <input
              className={Styles["Prescription_search_input"]}
              placeholder="Search patient"
              onChange={(e) => setSearchPrescription(e.target.value)}
              value={searchPrescription}
              type="text"
            />
          </div>
          <div>
            <button
              onClick={handleSearch}
              className={Styles["Prescription_search_button"]}
            >
              <HiSearch />
            </button>
          </div>

          {/*Prescription: Add Prescription*/}
          <div className={Styles["Prescription_add_bar"]}>
            <button className={Styles["Prescription_add_button"]}>
              <a
                href="/prescription/add-prescription-form"
                className={Styles["Patient_add_icon"]}
              >
                <IoMdAdd /> Add Prescription
              </a>
            </button>
          </div>

          {/*Prescription: Sort by*/}
          {/*Remark: No backend yet*/}
          <div className={Styles["Prescription_sort_by"]}>
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

        <div className={Styles["Prescription_list_cont"]}>
          {searchResultMessage && (
            <div className={Styles["Search_result_message"]}>
              {searchResultMessage}
            </div>
          )}

          {prescriptions.length > 0 && (
            <table className={Styles["Prescription_table"]}>
              <thead className={Styles["Prescription_table_main_head"]}>
                <tr>
                  <th className={Styles["Prescription_table_name"]}>Name</th>
                  <th>Age</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody className={Styles["Prescription_table_data"]}>
                {prescriptions.map((prescription) => {
                  return (
                    <tr key={prescription.id}>
                      <td className={Styles["Prescription_td"]}>
                        {prescription.patientName}
                      </td>
                      <td className={Styles["Prescription_td"]}>
                        {prescription.patientAge}
                      </td>
                      <td className={Styles["Prescription_td"]}>
                        {prescription.patientConsultationDate}
                      </td>
                      <td className={Styles["Prescription_td"]}>
                        <div className={Styles["Prescription_table_action"]}>
                          <div className={Styles["Action__Styling"]}>
                            <a
                              onClick={() =>
                                handleViewPrescription(prescription.id)
                              }
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
                                handleDeletePrescription(
                                  prescription.id,
                                  prescription.patientName
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

export default Prescription;
