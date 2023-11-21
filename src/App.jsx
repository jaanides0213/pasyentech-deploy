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
import Patient_Form from "./pages/Patient/Patient_Form.jsx"
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/patient" element={<Patient />} />
          <Route path="/patient_form" element={<Patient_Form />} />
          <Route path="/prescription" element={<Patient />} />

          <Route
            path="/dashboard"
            element={<PrivateRoute element={<Dashboard />} />}
          />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;
