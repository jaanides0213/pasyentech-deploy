import React, { useEffect, useState } from "react";
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

  return isLoggedIn
    ? React.cloneElement(element, { user: auth.currentUser })
    : element;
};

PrivateRoute.propTypes = {
  element: PropTypes.node,
};

export default PrivateRoute;
