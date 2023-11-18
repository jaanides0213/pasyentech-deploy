import React, { useState } from "react";
import {
  HiHome,
  HiUsers,
  HiPencil,
  HiCalendar,
  HiAdjustments,
} from "react-icons/hi";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import Styles from "./Sidebar.module.css"; // Adjust the import path
import { auth } from "../../config/firebase";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const signOutBtnHandler = async () => {
    if (window.confirm("Are you sure you want to logout?")) {
      try {
        await auth.signOut();
        navigate("/login");
      } catch {
        alert("There was an error logging out. Please try again.");
      }
    }
  };

  return (
    <div
      className={`${Styles["Sidebar"]} ${
        isSidebarOpen ? Styles["open"] : Styles["closed"]
      }`}
    >
      <a className={Styles["arrow-btn"]} onClick={toggleSidebar}>
        {isSidebarOpen ? (
          <MdKeyboardDoubleArrowLeft size="1.5rem" />
        ) : (
          <MdKeyboardDoubleArrowRight size="1.5rem" />
        )}
      </a>

      {isSidebarOpen && (
        <>
          <a href="/dashboard">
            <img
              src="/src/assets/logo-img/png-250px/white-complete-250px.png"
              alt="Logo"
              className={Styles["sidebar-logo"]}
            />
          </a>

          <span className={Styles["sidebar-content"]}>
            <a href="/dashboard">
              <b>
                <p>
                  <HiHome size="1rem" /> Dashboard
                </p>
              </b>
            </a>
            <a href="#">
              <p>
                <HiUsers size="1rem" /> Patients
              </p>
            </a>
            <a href="#">
              <p>
                <HiPencil size="1rem" /> Prescription
              </p>
            </a>
            <a href="#">
              <p>
                <HiCalendar size="1rem" /> Appointments
              </p>
            </a>
            <a href="#">
              <p>
                <HiAdjustments size="1rem" /> Account Details
              </p>
            </a>
          </span>

          <span className={Styles["sidebar-content-logout"]}>
            <a href="#" onClick={signOutBtnHandler}>
              <p>
                {" "}
                Log Out <IoLogOut size="1rem" />
              </p>
            </a>
          </span>
        </>
      )}

      {!isSidebarOpen && (
        <>
          <span className={Styles["sidebar-content-closed"]}>
            <a href="/dashboard">
              <p>
                <HiHome size="1rem" className={Styles["sidebar-icons"]} />
              </p>
            </a>
            <a href="#">
              <p>
                <HiUsers size="1rem" className={Styles["sidebar-icons"]} />
              </p>
            </a>
            <a href="#">
              <p>
                <HiPencil size="1rem" className={Styles["sidebar-icons"]} />
              </p>
            </a>
            <a href="#">
              <p>
                <HiCalendar size="1rem" className={Styles["sidebar-icons"]} />
              </p>
            </a>
            <a href="#">
              <p>
                <HiAdjustments
                  size="1rem"
                  className={Styles["sidebar-icons"]}
                />
              </p>
            </a>
          </span>

          <span className={Styles["sidebar-content-logout"]}>
            <a href="#" onClick={signOutBtnHandler}>
              <p>
                <IoLogOut size="1rem" />
              </p>
            </a>
          </span>
        </>
      )}
    </div>
  );
};

export default Sidebar;
