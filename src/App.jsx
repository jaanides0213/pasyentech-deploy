import {
  BrowserRouter as Router, 
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Signup from './pages/Signup/Signup.jsx'
import LogIn from './pages/Login/Login.jsx';
import Sidebar from './Components/Sidebar/Sidebar.jsx';
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import './App.css';

const App = () => {

  return (
    <Router>
      <div className="App">
        <Routes>
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="*" element={<Navigate to="/login" />} />
        </Routes> 
      </div>
    </Router>
  )
}

export default App;