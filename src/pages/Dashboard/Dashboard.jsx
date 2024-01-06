// Dashboard.jsx
import { useEffect, useState } from "react";
import Styles from "./Dashboard.module.css";
import Notes from "./DashboardNotes.jsx";
import ApptmentNotes from "./DashboardAppointment.jsx";
import { IoMdAdd } from "react-icons/io";
import Header from "../../components/Header/Header.jsx";
import { getUserData } from "../../api/getUserData";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";

const Dashboard = ({ userData }) => {
  const [user, setUser] = useState(userData);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const userData = await getUserData(user.uid);
          console.log("User Data:", userData); //must be removed
          setUser(userData);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [userData]);

  const getFormattedDate = () => {
    const currentDate = new Date();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
    const day = currentDate.getDate().toString().padStart(2, "0");
    const year = currentDate.getFullYear();
    return `${month}-${day}-${year}`;
  };

  const userFName = user ? user.fname : "";

  return (
    <main className={Styles["Dashboard__cont"]}>
      <Sidebar />
      <div className={Styles["Dashboard__cont-main"]}>
        <div className={Styles["Dashboard__cont-header"]}>
          <Header />
        </div>
        <div className={Styles["Dashboard__cont-column-main"]}>
          <div className={Styles["Dashboard__cont-column"]}>
            {user && (
              <div className={Styles["Dashboard__cont-helloUser"]}>
                <p className={Styles["Dashboard__cont-text"]}>Hello,</p>
                <h1>{userFName || " "}</h1>
                <p className={Styles["Dashboard__cont-text"]}>
                  Today is {getFormattedDate()}
                </p>
              </div>
            )}
            <ApptmentNotes />
          </div>
          <div className={Styles["Dashboard__cont-column"]}>
            <Notes />
          </div>
          <span className={Styles["Dashboard__shortcut-column"]}>
            <h3>Shortcuts:</h3>
            <button className={Styles["Dashboard__cont-add_patient"]}>
              <a href="/patient/add-patient-form" >
                <IoMdAdd />
                Add Patient
              </a>
            </button>
            <button className={Styles["Dashboard__cont-add_prescription"]}>
              <a href="/prescription/add-prescription-form">
                <IoMdAdd />
                Add Prescription
              </a>
            </button>
          </span>
        </div>
      </div>
    </main>
  );
};
export default Dashboard;
