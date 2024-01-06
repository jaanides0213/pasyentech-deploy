import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Signup from "./pages/Signup/Signup.jsx";
import LogIn from "./pages/Login/Login.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Patient from "./pages/Patient/Patient.jsx";
import PatientForm_Parent from "./pages/Patient/Patient_Form_Parent.jsx";
import Patient_View from "./pages/Patient/Patient_View.jsx";
import Prescription from "./pages/Prescription/Prescription.jsx";
import Prescription_Form_Parent from "./pages/Prescription/Prescription_Form_Parent.jsx";
import Prescription_View from "./pages/Prescription/Prescription_View.jsx";
import Appointment from "./pages/Appointment/Appointment.jsx";
import Appointment_Form_Parent from "./pages/Appointment/Appointment_Form_Parent.jsx";
import Appointment_View from "./pages/Appointment/Appointment_View.jsx";
import AccountDetails from "./pages/AccountDetails/AccountDetails.jsx";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<Signup />} />

          {/*Patient-related routing*/}
          <Route path="/patient" element={<Patient />} />
          <Route path="/patient/add-patient-form" element={<PatientForm_Parent/>}/>
          <Route path="/patient/view-patient/:id" element={<Patient_View/>}/>

          {/*Prescription-related routing*/}
          <Route path="/prescription" element={<Prescription />} />
          <Route path="/prescription/add-prescription-form" element={<Prescription_Form_Parent/>}/>
          <Route path="/prescription/view-prescription/:id" element={<Prescription_View/>}/>
          
          {/*Appointment-related routing*/}
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/appointment/add-appointment-form" element={<Appointment_Form_Parent/>}/>
          <Route path="/appointment/view-appointment/:id" element={<Appointment_View/>}/>

          {/*Account details-related routing*/}
          <Route path="/account-details" element={<AccountDetails />} />
          {/* Add the closing parenthesis here */}
          <Route
            path="/dashboard"
            element={<PrivateRoute element={<Dashboard/>} />}
          />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;
