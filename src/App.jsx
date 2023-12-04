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
import Patient_View from "./pages/Patient/Patient_View.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/patient" element={<Patient />} />
          <Route path="/patient/view-patient" element={<Patient_View/>}/>
          <Route path="/prescription" element={<Patient />} />
          <Route path="/patientform" element={<PatientForm />} />{" "}
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
