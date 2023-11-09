import {BrowserRouter as Router, 
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
          <LogIn/>
          <Signup/>
      </div>
    </Router>
  )
}

export default App;