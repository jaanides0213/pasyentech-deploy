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
import {getPrescriptionData} from "../../api/getPrescriptionData";
import {getPrescriptionById} from "../../api/getPrescriptionById.js";

const Prescription = () => {
  const [prescriptions, setPrescription] = useState([]);

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

  console.log("Prescription Data:", prescriptions);

  const handleViewPatient = async (prescriptionId) => {
    try {
      const prescriptionDetails = await getPrescriptionById(prescriptionId);
      // Display the prescription details as needed
      console.log("Prescription Details:", prescriptionDetails);
      // You can set the details in the state or navigate to a new component to display the details
    } catch (error) {
      console.error("Error fetching prescription details:", error);
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
            <div className={Styles["Prescription_search_bar"]}>
              <input
                className={Styles["Prescription_search_input"]}
                placeholder="Search prescription"
                type="text"
              />
            </div>
            <div>
              <button className={Styles["Prescription_search_button"]}>
                <HiSearch />
              </button>
            </div>

            <div className={Styles["Prescription_add_bar"]}>
              <button className={Styles["Prescription_add_button"]}>
                <a href="/prescription/add-prescription-form" className={Styles["Patient_add_icon"]}>
                  <IoMdAdd /> Add prescription
                </a>
              </button>
            </div>
          </div>

          <div className={Styles["Prescription_list_cont"]}>
            <table className={Styles["Prescription_table"]}>
              <thead className={Styles["Prescription_table_main_head"]}>
                <tr>
                  <th className={Styles["Prescription_table_name"]}>Name</th>
                  <th>Age</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className={Styles["Prescription_table_data"]}>
              {prescriptions.map((prescription) => {
              return (
                <tr key={prescription.id}>
                  <td>{prescription.patientName}</td>
                  <td>{prescription.patientAge}</td>
                  <td>
                    <div className={Styles["Prescription_table_action"]}>
                      
                      <div className={Styles["Action__Styling"]}>
                        <a onClick={() => handleViewPatient(prescription.id)} className={Styles["Action__link__Styling"]}>
                          <HiOutlineEye size="15px"/> View
                        </a>
                      </div>

                      <div className={Styles["Action__Styling"]}>
                        <a  href="#" className={Styles["Action__link__Styling"]}>
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
          </div>
          
        
        </div>
      </main>
    );
  }

export default Prescription;
