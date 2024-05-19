import React, { Component } from "react";
import MedicalPrescriptionForm from "./MedicalPrescriptionForm";
import ConfirmationPrescription from "./ConfirmationPrescription";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { ifEditing } from "../../api/ifEditing";

export class AddPrescription extends Component {
  state = {
    step: 1,
    // PART 1: Patient Information
    patientName: "",
    patientAge: "",
    patientSex: "",
    patientWeight: "",
    patientWeightUnit: "",
    patientAddress: "",
    patientConsultationDate: "",

    // PART 2: Prescription Proper
    genericName: "",
    brandName: "",
    dosageNum: "",
    dosageUnit: "",
    unitsNumber: "",
    directionOfUse: "",
    medications: [
      {
        dosageNum: "",
        dosageUnit: "",
        genericName: "",
        brandName: "",
        directionOfUse: "",
      },
    ],
    prescriptionId: "",
  };

  componentDidMount() {
    console.log("na call");
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
  };

  // handle field change
  handleChange = (input) => (e) => {
    if (input === "medications") {
      this.setState({ medications: e.target.value });
    } else {
      this.setState({ [input]: e.target.value });
    }
  };

  fetchUserData = async () => {
    const editId = await ifEditing();
    console.log("oi", this.state, "haha", editId);
    if (editId) {
      const prescriptionRef = doc(db, "prescription", editId);
      const prescriptionSnapshot = await getDoc(prescriptionRef);
      if (prescriptionSnapshot.exists()) {
        const prescriptionData = prescriptionSnapshot.data();
        console.log("prescriptiondata: ", prescriptionData);
        this.setState({
          patientName: prescriptionData.patientName,
          patientAge: prescriptionData.patientAge,
          patientSex: prescriptionData.patientSex,
          patientWeight: prescriptionData.patientWeight,
          patientWeightUnit: prescriptionData.patientWeightUnit,
          patientAddress: prescriptionData.patientAddress,
          patientConsultationDate: prescriptionData.patientConsultationDate,
          genericName: prescriptionData.genericName,
          brandName: prescriptionData.brandName,
          dosageNum: prescriptionData.dosageNum,
          dosageUnit: prescriptionData.dosageUnit,
          unitsNumber: prescriptionData.unitsNumber,
          directionOfUse: prescriptionData.directionOfUse,
          medications: prescriptionData.medications,
          prescriptionId: editId,
        });
      }
    }
  };

  render() {
    const { step } = this.state;

    const {
      patientName,
      patientAge,
      patientSex,
      patientWeight,
      patientWeightUnit,
      patientAddress,
      patientConsultationDate,
      genericName,
      brandName,
      dosageNum,
      dosageUnit,
      unitsNumber,
      directionOfUse,
      medications,
      prescriptionId,
    } = this.state;

    const values = {
      patientName,
      patientAge,
      patientSex,
      patientWeight,
      patientWeightUnit,
      patientAddress,
      patientConsultationDate,
      genericName,
      brandName,
      dosageNum,
      dosageUnit,
      unitsNumber,
      directionOfUse,
      medications,
      prescriptionId,
    };

    switch (step) {
      case 1:
        return (
          <MedicalPrescriptionForm
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
            medications={this.state.medications}
            setMedications={(medications) => this.setState({ medications })}
          />
        );
      case 2:
        return (
          <ConfirmationPrescription
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

export default AddPrescription;
