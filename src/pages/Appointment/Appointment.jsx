import React, { Component } from 'react'
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import Styles from "./Appointment.module.css";

export class Appointment extends Component {
  render() {
    return (
      <main className={Styles["Patient__cont"]}>
        <Sidebar/>
      </main>
    )
  }
}

export default Appointment
