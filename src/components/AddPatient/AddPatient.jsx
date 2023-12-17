import React, { Component } from 'react'
import Styles from "./AddPatient.module.css";
import PatientInformation from './PatientInformation';
import PastHistory from './PastHistory';
import ReviewOfSystems from "./ReviewOfSystems";
import PhysicalExamination from "./PhysicalExamination";

export default class AddPatient extends Component {
    state = {
        // PAGE 1: Patient Information
        step: 1,
        patientName: '',
        patientAge: '',
        patientSex: '',
        dateOfBirth: '',
        phoneNumber: '',
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
        physicalReflexes: ''
    }

    // setup methods
    // go back to previous step
    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    }

    // proceed to the next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    }

    // handle field change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }

    render() {
        const { step } = this.state;
        const { patientName, patientAge, patientSex, dateOfBirth, phoneNumber, chiefComplaint, presentIllness } = this.state;
        const values = {  patientName, patientAge, patientSex, dateOfBirth, phoneNumber, chiefComplaint, presentIllness }
        
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
            default:
                // do nothing
        }
    }
}
