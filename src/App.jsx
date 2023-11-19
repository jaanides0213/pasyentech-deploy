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
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/patient" element={<Patient />} />
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
