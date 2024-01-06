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
    patientWeightUnit: '',
    patientAddress: '',
    patientConsultationDate: '',

    // PART 2: Prescription Proper
    genericName: '',
    brandName: '',
    dosageNum: '',
    dosageUnit: '',
    unitsNumber: '',
    directionOfUse: '',
    medications: [{ dosageNum: '', dosageUnit: '', genericName: '', brandName: '', directionOfUse: '' }]
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
        !this.state.patientWeightUnit ||
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
    if (input === 'medications') {
      this.setState({ medications: e.target.value });
  } else {
      this.setState({ [input]: e.target.value });
  }
  }

  render() {
    const { step } = this.state;

    const {dateOfConsultation, patientName, patientAge, patientSex, patientWeight, patientWeightUnit, patientAddress, patientConsultationDate,
      genericName, brandName, dosageNum, dosageUnit, unitsNumber, directionOfUse, medications} = this.state;
    
    const values = {dateOfConsultation, patientName, patientAge, patientSex, patientWeight, patientWeightUnit, patientAddress, patientConsultationDate,
      genericName, brandName, dosageNum, dosageUnit, unitsNumber, directionOfUse, medications}
    
    switch (step) {
      case 1: 
        return (
          <MedicalPrescriptionForm
            nextStep = {this.nextStep}
            handleChange = {this.handleChange}
            values = {values}
            medications={this.state.medications}
            setMedications={(medications) => this.setState({ medications })}
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
