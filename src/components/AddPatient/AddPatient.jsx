import React, { Component } from 'react';
import PatientInformation from './PatientInformation';
import PastHistory from './PastHistory';
import ReviewOfSystems from "./ReviewOfSystems";
import PhysicalExamination from "./PhysicalExamination";
import AssessmentAndPlan from './AssessmentAndPlan';
import Confirmation from './Confirmation';



export default class AddPatient extends Component {
    state = {
        // PAGE 1: Patient Information
        step: 1,
        patientName: '',
        patientAge: '',
        patientSex: '',
        dateOfBirth: '',
        phoneNumber: '',
        civilStatus: '',
        patientAddress: '',
        patientOccupation: '',
        patientReligion: '',
        chiefComplaint: '',
        presentIllness: '',

        // PAGE 2: Past History
        childhoodIllness: '',
        adultMedical: '',
        adultSurgical: '',
        adultObGyn: '',
        adultPsychiatric: '',
        healthMaintenance: '',
        familyHistory: '',
        medicalHistory: '',
        surgicalHistory: '',
        personalSocialHistory: '',
        psychosocialHistory: '',

        // PAGE 3: Review of Systems
        reviewGeneral: '',
        reviewSkin: '',
        review_HEENT_head: '',
        review_HEENT_eyes: '',
        review_HEENT_ears: '',
        review_HEENT_nose: '',
        review_HEENT_throat: '',
        reviewNeck: '',
        reviewBreasts: '',
        reviewRespiratory: '',
        reviewCardiovascular: '',
        reviewGastro: '',
        reviewUrinary: '',
        reviewGenital: '',
        reviewPeripheral: '',
        reviewMuscoskeletal: '',
        reviewPsychiatrict: '',
        reviewNeurologic: '',
        reviewHematologic: '',
        reviewEndocrine: '',

        // PAGE 4: Physical Examination
        physicalVital: '',
        physicalSkin: '',
        HEENT_head: '',
        HEENT_eyes: '',
        HEENT_ears: '',
        HEENT_nose: '',
        HEENT_throat: '',
        physicalNeck: '',
        physicalThoraxLungs: '',
        physicalCardio: '',
        physicalBreast: '',
        physicalAbdomen: '',
        physicalGenitalia: '',
        physicalRectal: '',
        physicalExtremities: '',
        physicalPeripheral: '',
        physicalMuscoskeletal: '',
        physicalNeurologic: '',
        physicalMotor: '',
        physicalReflexes: '',

        // PAGE 5: Physical Examination: Impression, Assessment, and Plan
        patientImpression: '',
        patientAssessmentPlan: '',
        patientDiagnosticFiles: []
    }

    // setup methods
    // go back to previous step
    prevStep = () => {
        window.scrollTo(0, 0); // Scroll to the top of the page on component update
        const { step } = this.state;
        this.setState({ step: step - 1 });
    }

    // proceed to the next step
    nextStep = () => {
        window.scrollTo(0, 0); // Scroll to the top of the page on component update
        const { step } = this.state;
        
        // Validate fields based on the current step
        if (step === 1){
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
        } else if (step === 2) {
            // Check if all required fields on Page 2 are filled
            if (
                !this.state.childhoodIllness ||
                !this.state.adultMedical ||
                !this.state.adultSurgical ||
                !this.state.healthMaintenance ||
                !this.state.familyHistory ||
                !this.state.medicalHistory ||
                !this.state.surgicalHistory
            ) {
                alert("Please fill in all required fields before proceeding.");
                return;
            }
        } else if (step === 3) {
            // Check if all required fields on Page 3 are filled
            if (
                !this.state.reviewGeneral ||
                !this.state.reviewSkin ||
                !this.state.reviewNeck ||
                !this.state.review_HEENT_head ||
                !this.state.review_HEENT_eyes ||
                !this.state.review_HEENT_ears ||
                !this.state.review_HEENT_nose ||
                !this.state.review_HEENT_throat
            ) {
                alert("Please fill in all required fields before proceeding.");
                return;
            }
        } else if (step === 4) {
            // Check if all required fields on Page 4 are filled
            if (
                !this.state.physicalVital ||
                !this.state.physicalSkin ||
                !this.state.HEENT_head ||
                !this.state.HEENT_eyes ||
                !this.state.HEENT_ears ||
                !this.state.HEENT_nose ||
                !this.state.HEENT_throat
            ) {
                alert("Please fill in all required fields before proceeding.");
                return;
            }
        } else if (step === 5) {
            // Check if all required fields on Page 5 are filled
            if (
                !this.state.patientImpression ||
                !this.state.patientAssessmentPlan 
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
        const { patientName, patientAge, patientSex, dateOfBirth, phoneNumber, civilStatus, patientAddress, patientReligion, patientOccupation, chiefComplaint, presentIllness, 
            childhoodIllness, adultMedical, adultSurgical, adultObGyn, adultPsychiatric, healthMaintenance, familyHistory, medicalHistory, surgicalHistory, personalSocialHistory, psychosocialHistory,
            reviewGeneral, reviewSkin, review_HEENT_head, review_HEENT_eyes, review_HEENT_ears, review_HEENT_nose, review_HEENT_throat, reviewNeck, reviewBreasts, reviewRespiratory, reviewCardiovascular, reviewGastro, reviewUrinary, reviewGenital, reviewPeripheral, reviewMuscoskeletal, reviewPsychiatrict, reviewNeurologic, reviewHematologic, reviewEndocrine,
            physicalVital, physicalSkin, HEENT_head, HEENT_eyes, HEENT_ears, HEENT_nose, HEENT_throat, physicalNeck, physicalThoraxLungs, physicalCardio, physicalBreast, physicalAbdomen, physicalGenitalia, physicalRectal, physicalExtremities, physicalPeripheral, physicalMuscoskeletal, physicalNeurologic, physicalMotor, physicalReflexes,
            patientImpression, patientAssessmentPlan, patientDiagnosticFiles} = this.state;
        const values = {  patientName, patientAge, patientSex, dateOfBirth, phoneNumber, civilStatus, patientAddress, patientReligion, patientOccupation, chiefComplaint, presentIllness,
            childhoodIllness, adultMedical, adultSurgical, adultObGyn, adultPsychiatric, healthMaintenance, familyHistory, medicalHistory, surgicalHistory, personalSocialHistory, psychosocialHistory,
            reviewGeneral, reviewSkin, review_HEENT_head, review_HEENT_eyes, review_HEENT_ears, review_HEENT_nose, review_HEENT_throat, reviewNeck, reviewBreasts, reviewRespiratory, reviewCardiovascular, reviewGastro, reviewUrinary, reviewGenital, reviewPeripheral, reviewMuscoskeletal, reviewPsychiatrict, reviewNeurologic, reviewHematologic, reviewEndocrine,
            physicalVital, physicalSkin, HEENT_head, HEENT_eyes, HEENT_ears, HEENT_nose, HEENT_throat, physicalNeck, physicalThoraxLungs, physicalCardio, physicalBreast, physicalAbdomen, physicalGenitalia, physicalRectal, physicalExtremities, physicalPeripheral, physicalMuscoskeletal, physicalNeurologic, physicalMotor, physicalReflexes,
            patientImpression, patientAssessmentPlan, patientDiagnosticFiles}
        
        switch (step) {
            case 1:
                return (
                    <PatientInformation
                        nextStep = {this.nextStep}
                        handleChange = {this.handleChange}
                        values = {values}
                    />
                )
            case 2:
                return(
                    <PastHistory
                        prevStep = {this.prevStep}
                        nextStep = {this.nextStep}
                        handleChange = {this.handleChange}
                        values = {values}
                    />
                )
            case 3:
                return(
                    <ReviewOfSystems
                        prevStep = {this.prevStep}
                        nextStep = {this.nextStep}
                        handleChange = {this.handleChange}
                        values = {values}
                    />
                )
            case 4:
                return(
                    <PhysicalExamination
                        prevStep = {this.prevStep}
                        nextStep = {this.nextStep}
                        handleChange = {this.handleChange}
                        values = {values}
                    />
                )
            case 5:
                return(
                    <AssessmentAndPlan
                        prevStep = {this.prevStep}
                        nextStep = {this.nextStep}
                        handleChange = {this.handleChange}
                        values = {values}
                    />
                )
            case 6:
                return(
                    <Confirmation
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
