import React from "react";
import Styles from "./Patient.module.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header.jsx";

const Patient_View = () => {
    return (
        <main className={Styles["Patient__cont"]}>
            <Sidebar />
            <div className={Styles["Patient__cont-main"]}>
                <div className={Styles["Patient__cont-header"]}>
                    <Header/>
                </div>
                <div className={Styles["Patient__cont-column-main"]}>
                    <h2 className={Styles["Patient__h2"]}>View Patient</h2>
                    <hr className={Styles["Patient__hr"]} />
                </div>

            </div>
         </main>
    );
};

export default Patient_View;