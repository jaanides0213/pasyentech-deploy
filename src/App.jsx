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
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Header from "./Components/Header/Header.jsx";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/dashboard"
            element={<PrivateRoute element={<Dashboard />} />}
          />
          <Route
            path="/patient"
            element={<PrivateRoute element={<Patient />} />}
          />
          <Route
            path="/prescription"
            element={<PrivateRoute element={<Patient />} />}
          />
          <Route
            path="/patientform"
            element={<PrivateRoute element={<PatientForm />} />}
          />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
