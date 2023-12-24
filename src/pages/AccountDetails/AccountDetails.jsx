import React, { useState } from "react"; // Import useState from React
import Styles from "./AccountDetails.module.css"; // Adjust the import path
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import AccountDetailsComponent from "../../components/AccountDetails/AccountDetailsComponent";

const AccountDetails = () => {
  return (
    <main className={Styles["AccountDetails__cont"]}>
      <Sidebar/>
      <div className={Styles["AccountDetails__cont-main"]}>
        <div className={Styles["AccountDetails__cont-header"]}>
          <Header/>
        </div>
        <AccountDetailsComponent/> {/*Call the Component*/}
      </div>
    </main>
  );
};

export default AccountDetails;
