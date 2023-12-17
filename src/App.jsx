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
import PatientForm from "./pages/Patient/Patient_Form.jsx";
import PatientForm_Parent from "./pages/Patient/Patient_Form_Parent.jsx";
import Patient_View from "./pages/Patient/Patient_View.jsx";
import Prescription from "./pages/Prescription/Prescription.jsx";
import Appointment from "./pages/Appointment/Appointment.jsx";
import AccountDetails from "./pages/AccountDetails/AccountDetails.jsx";
import "./App.css";


const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/patient" element={<Patient />} />
          <Route path="/patient/view-patient/:id" element={<Patient_View/>}/>
          <Route path="/prescription" element={<Prescription />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/accountdetails" element={<AccountDetails />} />
          {/*<Route path="/patientform" element={<PatientForm />} />{" "}*/}
          <Route path="/patient/add-patient-form" element={<PatientForm_Parent/>}/>
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
