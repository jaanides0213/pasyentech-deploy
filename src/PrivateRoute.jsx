import React, { useEffect, useState } from "react";
import { Route, Navigate } from "react-router-dom";
import { auth, db } from "../src/config/firebase";

const PrivateRoute = ({ element }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user);
    });

    return () => unsubscribe();
  }, []);

  return isLoggedIn ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
