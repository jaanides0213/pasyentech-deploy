import React, { Component } from "react";
import { auth, db } from "../../config/firebase";
import { ifEditing } from "../../api/ifEditing";
import MedicalAppointmentForm from "./MedicalAppointmentForm";
import ConfirmationAppointment from "./ConfirmationAppointment";
import { doc, getDoc } from "firebase/firestore";
//import { ifEditing } from "../../api/ifEditing";

export class AddAppointment extends Component {
  state = {
    step: 1,
    patientName: "",
    apptDate: "",
    apptTime: "",
    apptStatus: "",
    apptRemark: "",
    apptId: "",
  };

  componentDidMount() {
    console.log(`na call`);
    this.fetchUserData();
  }

  // setup methods
  // go back to previous step
  prevStep = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page on component update
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  nextStep = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page on component update
    const { step } = this.state;

    if (step === 1) {
      if (
        !this.state.patientName ||
        !this.state.apptDate ||
        !this.state.apptTime ||
        !this.state.apptStatus
      ) {
        alert("Please fill in all required fields before proceeding.");
        return;
      }
    }
    this.setState({ step: step + 1 });
  };

  // handle field change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  fetchUserData = async () => {
    //console.log(`works`);
    const editId = await ifEditing();
    console.log(`oi`, this.state, `haha`, editId);
    if (editId) {
      const appointmentRef = doc(db, "appointment", editId);
      const appointmentSnapshot = await getDoc(appointmentRef);
      if (appointmentSnapshot.exists()) {
        const appointmentData = appointmentSnapshot.data();
        console.log("appointmentdata: ", appointmentData);

        // Use the callback function to log the state after it has been updated
        this.setState(
          {
            patientName: appointmentData.patientName,
            apptDate: appointmentData.apptDate,
            apptTime: appointmentData.apptTime,
            apptStatus: appointmentData.apptStatus,
            apptRemark: appointmentData.apptRemark,
            apptId: editId,
          },
          () => {
            console.log("testing", this.state);
          }
        );
      }
      console.log("testing", this.state);
    }
  };

  render() {
    const { step } = this.state;

    const { patientName, apptDate, apptTime, apptStatus, apptRemark, apptId } =
      this.state;

    const values = { patientName, apptDate, apptTime, apptStatus, apptRemark, apptId };

    switch (step) {
      case 1:
        return (
          <MedicalAppointmentForm
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <ConfirmationAppointment
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            values={values}
          />
        );
      default:
      // do nothing
    }
  }
}

export default AddAppointment;
