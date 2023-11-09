import {
  BrowserRouter as Router, 
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Signup from './pages/Signup/Signup.jsx'
import LogIn from './pages/Login/Login.jsx';

const App = () => {

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<Signup />} />

          
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes> 
      </div>
    </Router>
  )
}

export default App;