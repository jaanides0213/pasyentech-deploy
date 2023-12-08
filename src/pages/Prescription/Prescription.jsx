import React, { Component } from 'react'
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import Styles from "./Prescription.module.css";



export class Prescription extends Component {
  render() {
    return (
      <main className={Styles["Patient__cont"]}>
        <Sidebar/>
      </main>
    )
  }
}

export default Prescription
