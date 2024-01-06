import React, { Component } from 'react';
import MedicalAppointmentForm from './MedicalAppointmentForm';
import ConfirmationAppointment from './ConfirmationAppointment';

export class AddAppointment extends Component {
  state = {
    step: 1,
    patientName: '',
    apptDate: '',
    apptTime: '',
    apptStatus: '',
    apptRemark: ''
  }

  // setup methods
  // go back to previous step
  prevStep = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page on component update
    const { step } = this.state;
    this.setState({ step: step - 1 });
  }

  nextStep = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page on component update
    const { step } = this.state;

    if (step === 1){
      if(
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
  }

  // handle field change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  }

  render() {
    const { step } = this.state;

    const {patientName, apptDate, apptTime, apptStatus, apptRemark } = this.state;

    const values = {patientName, apptDate, apptTime, apptStatus, apptRemark}

    switch (step){
      case 1:
        return (
          <MedicalAppointmentForm
            nextStep = {this.nextStep}
            handleChange = {this.handleChange}
            values = {values}
          />
        )
      case 2:
        return (
          <ConfirmationAppointment
            prevStep = {this.prevStep}
            nextStep = {this.nextStep}
            values = {values}
          />
        )
      default:
        // do nothing
    }
  }
}

export default AddAppointment
