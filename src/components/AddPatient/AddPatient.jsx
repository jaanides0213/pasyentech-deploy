import React, { Component } from "react";
import PatientInformation from "./PatientInformation";
import PastHistory from "./PastHistory";
import ReviewOfSystems from "./ReviewOfSystems";
import PhysicalExamination from "./PhysicalExamination";
import AssessmentAndPlan from "./AssessmentAndPlan";
import Confirmation from "./Confirmation";
import { doc, getDoc } from "firebase/firestore";
import { ifEditing } from "../../api/ifEditing";
import { db } from "../../config/firebase";

export default class AddPatient extends Component {
  state = {
    // PAGE 1: Patient Information
    step: 1,
    patientName: "",
    patientAge: "",
    patientSex: "",
    dateOfBirth: "",
    phoneNumber: "",
    civilStatus: "",
    patientAddress: "",
    patientOccupation: "",
    patientReligion: "",
    chiefComplaint: "",
    presentIllness: "",

    // PAGE 2: Past History
    childhoodIllness: "",
    adultMedical: "",
    adultSurgical: "",
    adultObGyn: "",
    adultPsychiatric: "",
    healthMaintenance: "",
    familyHistory: "",
    medicalHistory: "",
    surgicalHistory: "",
    personalSocialHistory: "",
    psychosocialHistory: "",

    // PAGE 3: Review of Systems
    reviewGeneral: "",
    reviewSkin: "",
    review_HEENT_head: "",
    review_HEENT_eyes: "",
    review_HEENT_ears: "",
    review_HEENT_nose: "",
    review_HEENT_throat: "",
    reviewNeck: "",
    reviewBreasts: "",
    reviewRespiratory: "",
    reviewCardiovascular: "",
    reviewGastro: "",
    reviewUrinary: "",
    reviewGenital: "",
    reviewPeripheral: "",
    reviewMuscoskeletal: "",
    reviewPsychiatrict: "",
    reviewNeurologic: "",
    reviewHematologic: "",
    reviewEndocrine: "",

    // PAGE 4: Physical Examination
    physicalVital: "",
    physicalSkin: "",
    HEENT_head: "",
    HEENT_eyes: "",
    HEENT_ears: "",
    HEENT_nose: "",
    HEENT_throat: "",
    physicalNeck: "",
    physicalThoraxLungs: "",
    physicalCardio: "",
    physicalBreast: "",
    physicalAbdomen: "",
    physicalGenitalia: "",
    physicalRectal: "",
    physicalExtremities: "",
    physicalPeripheral: "",
    physicalMuscoskeletal: "",
    physicalNeurologic: "",
    physicalMotor: "",
    physicalReflexes: "",

    // PAGE 5: Physical Examination: Impression, Assessment, and Plan
    patientImpression: "",
    patientAssessmentPlan: "",
    patientDiagnosticFiles: [],
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

  // proceed to the next step
  nextStep = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page on component update
    const { step } = this.state;

    // Validate fields based on the current step
    if (step === 1) {
      // Check if all required fields on Page 1 are filled
      if (
        !this.state.patientName ||
        !this.state.patientAge ||
        !this.state.patientSex ||
        !this.state.dateOfBirth ||
        !this.state.phoneNumber ||
        !this.state.civilStatus ||
        !this.state.patientAddress ||
        !this.state.patientReligion ||
        !this.state.patientOccupation ||
        !this.state.chiefComplaint ||
        !this.state.presentIllness
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
    const editId = await ifEditing();
    if (editId) {
      const patientRef = doc(db, "patients", editId);
      const patientSnapshot = await getDoc(patientRef);
      if (patientSnapshot.exists()) {
        const patientData = patientSnapshot.data();
        console.log("patientdata: ", patientData);

        this.setState(
          {
            patientName: patientData.patientName,
            patientAge: patientData.patientAge,
            patientSex: patientData.patientSex,
            dateOfBirth: patientData.dateOfBirth,
            phoneNumber: patientData.phoneNumber,
            civilStatus: patientData.civilStatus,
            patientAddress: patientData.patientAddress,
            patientOccupation: patientData.patientOccupation,
            patientReligion: patientData.patientReligion,
            chiefComplaint: patientData.chiefComplaint,
            presentIllness: patientData.presentIllness,

            // PAGE 2: Past History
            childhoodIllness: patientData.childhoodIllness,
            adultMedical: patientData.adultMedical,
            adultSurgical: patientData.adultSurgical,
            adultObGyn: patientData.adultObGyn,
            adultPsychiatric: patientData.adultPsychiatric,
            healthMaintenance: patientData.healthMaintenance,
            familyHistory: patientData.familyHistory,
            medicalHistory: patientData.medicalHistory,
            surgicalHistory: patientData.surgicalHistory,
            personalSocialHistory: patientData.personalSocialHistory,
            psychosocialHistory: patientData.psychosocialHistory,

            // PAGE 3: Review of Systems
            reviewGeneral: patientData.reviewGeneral,
            reviewSkin: patientData.reviewSkin,
            review_HEENT_head: patientData.review_HEENT_head,
            review_HEENT_eyes: patientData.review_HEENT_eyes,
            review_HEENT_ears: patientData.review_HEENT_ears,
            review_HEENT_nose: patientData.review_HEENT_nose,
            review_HEENT_throat: patientData.review_HEENT_throat,
            reviewNeck: patientData.reviewNeck,
            reviewBreasts: patientData.reviewBreasts,
            reviewRespiratory: patientData.reviewRespiratory,
            reviewCardiovascular: patientData.reviewCardiovascular,
            reviewGastro: patientData.reviewGastro,
            reviewUrinary: patientData.reviewUrinary,
            reviewGenital: patientData.reviewGenital,
            reviewPeripheral: patientData.reviewPeripheral,
            reviewMuscoskeletal: patientData.reviewMuscoskeletal,
            reviewPsychiatrict: patientData.reviewPsychiatrict,
            reviewNeurologic: patientData.reviewNeurologic,
            reviewHematologic: patientData.reviewHematologic,
            reviewEndocrine: patientData.reviewEndocrine,

            // PAGE 4: Physical Examination
            physicalVital: patientData.physicalVital,
            physicalSkin: patientData.physicalSkin,
            HEENT_head: patientData.HEENT_head,
            HEENT_eyes: patientData.HEENT_eyes,
            HEENT_ears: patientData.HEENT_ears,
            HEENT_nose: patientData.HEENT_nose,
            HEENT_throat: patientData.HEENT_throat,
            physicalNeck: patientData.physicalNeck,
            physicalThoraxLungs: patientData.physicalThoraxLungs,
            physicalCardio: patientData.physicalCardio,
            physicalBreast: patientData.physicalBreast,
            physicalAbdomen: patientData.physicalAbdomen,
            physicalGenitalia: patientData.physicalGenitalia,
            physicalRectal: patientData.physicalRectal,
            physicalExtremities: patientData.physicalExtremities,
            physicalPeripheral: patientData.physicalPeripheral,
            physicalMuscoskeletal: patientData.physicalMuscoskeletal,
            physicalNeurologic: patientData.physicalNeurologic,
            physicalMotor: patientData.physicalMotor,
            physicalReflexes: patientData.physicalReflexes,

            // PAGE 5: Physical Examination: Impression, Assessment, and Plan
            patientImpression: patientData.patientImpression,
            patientAssessmentPlan: patientData.patientAssessmentPlan,
            patientId: editId,
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
    const {
      patientName,
      patientAge,
      patientSex,
      dateOfBirth,
      phoneNumber,
      civilStatus,
      patientAddress,
      patientReligion,
      patientOccupation,
      chiefComplaint,
      presentIllness,
      childhoodIllness,
      adultMedical,
      adultSurgical,
      adultObGyn,
      adultPsychiatric,
      healthMaintenance,
      familyHistory,
      medicalHistory,
      surgicalHistory,
      personalSocialHistory,
      psychosocialHistory,
      reviewGeneral,
      reviewSkin,
      review_HEENT_head,
      review_HEENT_eyes,
      review_HEENT_ears,
      review_HEENT_nose,
      review_HEENT_throat,
      reviewNeck,
      reviewBreasts,
      reviewRespiratory,
      reviewCardiovascular,
      reviewGastro,
      reviewUrinary,
      reviewGenital,
      reviewPeripheral,
      reviewMuscoskeletal,
      reviewPsychiatrict,
      reviewNeurologic,
      reviewHematologic,
      reviewEndocrine,
      physicalVital,
      physicalSkin,
      HEENT_head,
      HEENT_eyes,
      HEENT_ears,
      HEENT_nose,
      HEENT_throat,
      physicalNeck,
      physicalThoraxLungs,
      physicalCardio,
      physicalBreast,
      physicalAbdomen,
      physicalGenitalia,
      physicalRectal,
      physicalExtremities,
      physicalPeripheral,
      physicalMuscoskeletal,
      physicalNeurologic,
      physicalMotor,
      physicalReflexes,
      patientImpression,
      patientAssessmentPlan,
      patientDiagnosticFiles,
      patientId,
    } = this.state;
    const values = {
      patientName,
      patientAge,
      patientSex,
      dateOfBirth,
      phoneNumber,
      civilStatus,
      patientAddress,
      patientReligion,
      patientOccupation,
      chiefComplaint,
      presentIllness,
      childhoodIllness,
      adultMedical,
      adultSurgical,
      adultObGyn,
      adultPsychiatric,
      healthMaintenance,
      familyHistory,
      medicalHistory,
      surgicalHistory,
      personalSocialHistory,
      psychosocialHistory,
      reviewGeneral,
      reviewSkin,
      review_HEENT_head,
      review_HEENT_eyes,
      review_HEENT_ears,
      review_HEENT_nose,
      review_HEENT_throat,
      reviewNeck,
      reviewBreasts,
      reviewRespiratory,
      reviewCardiovascular,
      reviewGastro,
      reviewUrinary,
      reviewGenital,
      reviewPeripheral,
      reviewMuscoskeletal,
      reviewPsychiatrict,
      reviewNeurologic,
      reviewHematologic,
      reviewEndocrine,
      physicalVital,
      physicalSkin,
      HEENT_head,
      HEENT_eyes,
      HEENT_ears,
      HEENT_nose,
      HEENT_throat,
      physicalNeck,
      physicalThoraxLungs,
      physicalCardio,
      physicalBreast,
      physicalAbdomen,
      physicalGenitalia,
      physicalRectal,
      physicalExtremities,
      physicalPeripheral,
      physicalMuscoskeletal,
      physicalNeurologic,
      physicalMotor,
      physicalReflexes,
      patientImpression,
      patientAssessmentPlan,
      patientDiagnosticFiles,
      patientId,
    };

    switch (step) {
      case 1:
        return (
          <PatientInformation
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <PastHistory
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <ReviewOfSystems
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <PhysicalExamination
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 5:
        return (
          <AssessmentAndPlan
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 6:
        return (
          <Confirmation
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
