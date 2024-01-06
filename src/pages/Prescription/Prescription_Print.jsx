import React, { useEffect, useState } from 'react';
import Styles from './Prescription.module.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import { getPrescriptionById } from '../../api/getPrescriptionById';
import { useParams } from 'react-router-dom';

const Prescription_Print = () => {
  const { id } = useParams();
  const [prescription, setPrescription] = useState(null);

  useEffect(() => {
    const fetchPrescription = async () => {
      try {
        const fetchedPrescription = await getPrescriptionById(id);
        setPrescription(fetchedPrescription);
        console.log('Fetched Prescription:', fetchedPrescription);

        // Delay the print call to ensure data is displayed before printing
        setTimeout(() => {
          window.print();
        }, 1000); // Adjust the delay as needed
      } catch (error) {
        console.error('Error fetching prescription:', error);
      }
    };

    fetchPrescription();
  }, [id]);

  return (
    <main className={Styles['Print__Prescription__cont']}>
      {prescription && (
        <div className={Styles['Print__Prescription__content__wrapper']}> 
            <div className={Styles['Print__Prescription__header']}>
                <h2>Clinic Name</h2>
                <h3>Clinic Address</h3>
            </div>

            <div className={Styles['Print__Prescription__consultationDate']}>
                <p>Consultation Date: {prescription.patientConsultationDate}</p>
            </div>

            <div className={Styles['Print__Prescription__patientDetails__cont']}>
                <b>Patient Details</b>
                <div className={Styles['Print__Prescription__patientDetails']}>
                    <p>Name: {prescription.patientName}</p>
                    <p>Age: {prescription.patientAge}</p>
                    <p>Sex: {prescription.patientSex}</p>
                    <p>Weight: {prescription.patientWeight} {prescription.patientWeightUnit}</p>
                </div>
                <div className={Styles['Print__Prescription__patientDetails__Address']}>
                    <p>Address: {prescription.patientAddress}</p>
                </div>
            </div>

            <div>
                <div className={Styles['Print__Prescription__medication__rxStyle']}>
                    <h1>Rx</h1>
                </div>
                
                <div className={Styles['Print__Prescription__medicationList']}>
                    {prescription.medications.map((medication, index) => (
                    <div key={index}>
                        <div className={Styles['Print__Prescription__medicationList__row1']}>
                            <p>{medication.genericName}</p>
                            <p>{medication.brandName}</p>
                            <p>{medication.dosageNum} </p>
                            <p># {medication.dosageUnit}</p>
                        </div>
                        <div className={Styles['Print__Prescription__medicationList__row2']}>
                            <p>Direction of Use: {medication.directionOfUse}</p>
                        </div>
                    </div>
                    ))}
                </div>

                <div className={Styles['Print__Prescription__footer']}>
                    <p>Doctor's Name</p>
                    <p>LIC Number</p>
                    <p>PTR Number</p>
                </div>
            </div>
        
          {/* <div>
            <h3>Medications</h3>
            {prescription.medications.map((medication, index) => (
              <div key={index}>
                <p>Number of Units: {medication.dosageUnit}</p>
                <p>Dosage: {medication.dosageNum} </p>
                <p>Generic Name: {medication.genericName}</p>
                <p>Brand Name: {medication.brandName}</p>
                <p>Direction of Use: {medication.directionOfUse}</p>
              </div>
            ))}
          </div> */}
        </div>
      )}
    </main>
  );
};

export default Prescription_Print;
