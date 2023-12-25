import React, { Component } from 'react';
import MedicalPrescriptionForm from './MedicalPrescriptionForm';
import ConfirmationPrescription from './ConfirmationPrescription';

export class AddPrescription extends Component {
  state = {
    step: 1,
    // PART 1: Patient Information
    patientName: '',
    patientAge: '',
    patientSex: '',
    patientWeight: '',
    patientAddress: '',
    patientConsultationDate: '',

    // PART 2: Prescription Proper
    genericName: '',
    brandName: '',
    dosageNum: '',
    dosageUnit: '',
    unitsNumber: '',
    directionOfUse: ''
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
        !this.state.patientAge ||
        !this.state.patientSex ||
        !this.state.patientWeight ||
        !this.state.patientAddress ||
        !this.state.patientConsultationDate 
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

    const {dateOfConsultation, patientName, patientAge, patientSex, patientWeight,
      genericName, brandName, dosageNum, dosageUnit, unitsNumber, directionOfUse} = this.state;
    
    const values = {dateOfConsultation, patientName, patientAge, patientSex, patientWeight,
      genericName, brandName, dosageNum, dosageUnit, unitsNumber, directionOfUse}
    
    switch (step) {
      case 1: 
        return (
          <MedicalPrescriptionForm
            nextStep = {this.nextStep}
            handleChange = {this.handleChange}
            values = {values}
          />
        )
      case 2:
        return (
          <ConfirmationPrescription
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

export default AddPrescription
