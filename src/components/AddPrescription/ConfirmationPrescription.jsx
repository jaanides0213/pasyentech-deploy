import React from 'react';
import Styles from "./AddPrescription.module.css";

const ConfirmationPrescription = ({prevStep, nextStep, handleChange, values}) => {
  
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  return (
    <main>
      <h3>Confirmation</h3>
    </main>
  )
}

export default ConfirmationPrescription
