import React, { useEffect, useState } from "react";
import Styles from "./Dashboard.module.css";
import Notes from "./DashboardNotes.jsx";
import ApptmentNotes from "./DashboardAppointment.jsx";
import { IoMdAdd } from "react-icons/io";
import Sidebar from "../../Components/Sidebar/Sidebar.jsx";
import Header from "../../Components/Header/Header.jsx";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);
  console.log("Rendering Dashboard");

  const getFormattedDate = () => {
    const currentDate = new Date();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
    const day = currentDate.getDate().toString().padStart(2, "0");
    const year = currentDate.getFullYear();
    return `${month}-${day}-${year}`;
  };

  return (
    <main className={Styles["Dashboard__cont"]}>
      <Sidebar />
      <div className={Styles["Dashboard__cont-main"]}>
        <div className={Styles["Dashboard__cont-header"]}>
          <Header />
        </div>
        <div className={Styles["Dashboard__cont-column-main"]}>
          <div className={Styles["Dashboard__cont-column"]}>
            <div className={Styles["Dashboard__cont-helloUser"]}>
              <p className={Styles["Dashboard__cont-text"]}>Hello,</p>
              <h1>{user ? `${user.displayName}` : " "}</h1>
              <p className={Styles["Dashboard__cont-text"]}>
                Today is {getFormattedDate()}
              </p>
            </div>
            <ApptmentNotes />
          </div>
          <div className={Styles["Dashboard__cont-column"]}>
            <Notes />
            <span className={Styles["Dashboard__cont-text"]}>Shortcuts:</span>
            <button className={Styles["Dashboard__cont-add_patient"]}>
              <IoMdAdd />
              Add Patient
            </button>
            <button className={Styles["Dashboard__cont-add_prescription"]}>
              <IoMdAdd />
              Add Prescription
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
