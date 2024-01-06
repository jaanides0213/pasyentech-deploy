import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import Styles from "./Appointment.module.css";
import Header from "../../components/Header/Header.jsx";
import { IoMdAdd } from "react-icons/io";
import {
  HiSearch,
  HiOutlinePencilAlt,
  HiOutlineEye,
  HiOutlineTrash,
} from "react-icons/hi";
import {getAppointmentData} from "../../api/getAppointmentData";
import {getAppointmentById} from "../../api/getAppointmentById.js";

const Appointment = () => {
  const [appointment, setAppointment] = useState([]);
  const [searchAppointment, setSearchAppointment] = useState(""); // State for Search appointment functionality
  const [searchResultMessage, setSearchResultMessage] = useState(""); // Message for search results

  useEffect(() => {
    const fetchData = async () => {
      try {
        const appointmentData = await getAppointmentData();
        console.log("Appointment Data:", appointmentData);
        setAppointment(appointmentData);
      } catch (error) {
        console.error("Error fetching appointment data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = async () => {
    // Convert search input to lowercase for case-insensitive search
    const searchInput = searchAppointment.toLowerCase();
  
    try {
      // Call the getPatientData function from the API file to fetch the original data
      const appointmentData = await getAppointmentData();
  
      // Check if the search input is empty
      if (searchInput.trim() === "") {
        // If empty, reset to the original list of appointments
        setAppointment(appointmentData);
        setSearchResultMessage(""); // Clear the search result message
      } else {
        // Filter patients based on the search input in the patientName field
        const filteredAppointment = appointmentData.filter(
          (appointment) =>
            appointment.patientName &&
            appointment.patientName.toLowerCase().includes(searchInput)
        );
  
        // Update the state with the filtered patients
        setAppointment(filteredAppointment);
  
        // Display search result message
        setSearchResultMessage(
          filteredAppointment.length > 0
            ? ``
            : "No matching patients found."
        );
      }
    } catch (error) {
      console.error("Error fetching appointment:", error);
      // Handle error as needed
    }
  };

  const handleViewAppointment = async (appointmentId) => {
    try {
      const appointmentDetails = await getAppointmentById(appointmentId);

      // Construct the URL for the Patient_View page with the patient's ID
      const viewPatientUrl = `/appointment/view-appointment/${appointmentId}`;

      // Redirect the user to the Patient_View page
      window.location.href = viewPatientUrl;

      // for debug
      console.log("Appointment Details:", appointmentDetails);
    } catch (error) {
      console.error("Error fetching prescription details:", error);
    }
  };

    return (
      <main className={Styles["Appointment__cont"]}>
        <Sidebar />
        <div className={Styles["Appointment__cont-main"]}>
          <div className={Styles["Appointment__cont-header"]}>
            <Header />
          </div>
          <div className={Styles["Appointment__cont-column-main"]}>
            <h2>Appointments</h2>
          </div>

          {/* for searchbar/add/sort */}
          <div className={Styles["Appointment_search_add_container"]}>
            <div className={Styles["Appointment_search_bar"]}>
              <input
                className={Styles["Appointment_search_input"]}
                placeholder="Search patient"
                onChange={(e) => setSearchAppointment(e.target.value)}
                value={searchAppointment}
                type="text"
              />
            </div>

            <div>
              <button  onClick={handleSearch} className={Styles["Appointment_search_button"]}>
                <HiSearch />
              </button>
            </div>

            <div className={Styles["Appointment_add_bar"]}>
              <button className={Styles["Appointment_add_button"]}>
                <a href="/appointment/add-appointment-form">
                  <IoMdAdd /> Add Appointment
                </a>
              </button>
            </div>

            <div className={Styles["Appointment_sort_by"]}>
              <select
                id="sortBy"
                name="sortBy"
                className={Styles["sorting_select__style"]}
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

          <div className={Styles["Appointment_list_cont"]}> 
            {searchResultMessage && (
              <div className={Styles["Search_result_message"]}>
                {searchResultMessage}
              </div>
            )}

            {appointment.length > 0 && (
              <table className={Styles["Appointment_table"]}>
                <thead className={Styles["Appointment_table_main_head"]}>
                  <tr>
                    <th className={Styles["Appointment_table_name"]}>Name</th>
                    <th className={Styles["Appointment_table_date"]}>Date</th>
                    <th className={Styles["Appointment_table_time"]}>Time</th>
                    <th className={Styles["Appointment_table_status"]}>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody className={Styles["Appointment_table_data"]}>
                  {appointment.map((appointment) => {
                  return (
                  <tr key={appointment.id}> 
                    <td>{appointment.patientName}</td>
                    <td>{appointment.apptDate}</td>
                    <td>{appointment.apptTime}</td>
                    <td>{appointment.apptStatus}
                      {/* <div className={Styles["Appointment_table_status"]}>
                        <select className={Styles["status_option__select"]}>
                          <option value="Scheduled" className={Styles["status_option__style"]}>
                            Scheduled
                          </option>
                          <option value="Ongoing" className={Styles["status_option__style"]}>
                            Ongoing
                          </option>
                          <option value="Done" className={Styles["status_option__style"]}>
                            Done
                          </option>
                          <option value="Cancelled" className={Styles["status_option__style"]}>
                            Cancelled
                          </option>
                        </select>
                      </div> */}
                    </td>
                    <td>
                      <div className={Styles["Appointment_table_action"]}>
                        <div className={Styles["Action__Styling"]}>
                          <a onClick={() => handleViewAppointment(appointment.id)}  className={Styles["Action__link__Styling"]}>
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
                  );
                  })}
                </tbody>
              </table>
            )}
            </div>
        </div>
      </main>
    );
}

export default Appointment;
