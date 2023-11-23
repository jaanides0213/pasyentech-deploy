import { useState } from "react";
import {
  HiHome,
  HiUsers,
  HiPencil,
  HiCalendar,
  HiAdjustments,
  HiLogout
} from "react-icons/hi";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import Styles from "./Sidebar.module.css"; // Adjust the import path
import { auth } from "../../config/firebase";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

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

  const isLinkActive = (pathname) => {
    return location.pathname === pathname;
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
            <a
              href="/dashboard"
              className={
                isLinkActive("/dashboard") ? Styles["active-link"] : ""
              }
            >
              <p>
                <HiHome size="1rem" /> Dashboard
              </p>
            </a>
            <a
              href="/patient"
              className={isLinkActive("/patient") ? Styles["active-link"] : ""}
            >
              <p>
                <HiUsers size="1rem" /> Patients
              </p>
            </a>
            <a
              href="#"
              className={isLinkActive("#") ? Styles["active-link"] : ""}
            >
              <p>
                <HiPencil size="1rem" /> Prescription
              </p>
            </a>
            <a
              href="#"
              className={isLinkActive("#") ? Styles["active-link"] : ""}
            >
              <p>
                <HiCalendar size="1rem" /> Appointments
              </p>
            </a>
            <a
              href="#"
              className={isLinkActive("#") ? Styles["active-link"] : ""}
            >
              <p>
                <HiAdjustments size="1rem" /> Account Details
              </p>
            </a>
            <a
              href="#" onClick={signOutBtnHandler}
              className={isLinkActive("#") ? Styles["active-link"] : ""}
            >
              <p>
              {" "}
                <HiLogout size="1rem" /> Log Out
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
            <a
              href="#"
              className={isLinkActive("#") ? Styles["active-link"] : ""}
            >
              <p>
                <HiUsers size="1rem" className={Styles["sidebar-icons"]} />
              </p>
            </a>
            <a
              href="#"
              className={isLinkActive("#") ? Styles["active-link"] : ""}
            >
              <p>
                <HiPencil size="1rem" className={Styles["sidebar-icons"]} />
              </p>
            </a>
            <a
              href="#"
              className={isLinkActive("#") ? Styles["active-link"] : ""}
            >
              <p>
                <HiCalendar size="1rem" className={Styles["sidebar-icons"]} />
              </p>
            </a>
            <a
              href="#"
              className={isLinkActive("#") ? Styles["active-link"] : ""}
            >
              <p>
                <HiAdjustments
                  size="1rem"
                  className={Styles["sidebar-icons"]}
                />
              </p>
            </a>
            <a
              href="#" onClick={signOutBtnHandler}
              className={isLinkActive("#") ? Styles["active-link"] : ""}
            >
              <p>
              {" "}
                <HiLogout 
                size="1rem" 
                className={Styles["sidebar-icons"]}
                />
              </p>
            </a>
          </span>
        </>
      )}
    </div>
  );
};

export default Sidebar;
