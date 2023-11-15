import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { auth } from "../src/config/firebase";

const PrivateRoute = ({ element }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user);
    });

    return () => unsubscribe();
  }, []);

  return isLoggedIn ? <Navigate to="/dashboard" /> : element;
};

PrivateRoute.propTypes = {
  element: PropTypes.node,
};

export default PrivateRoute;
