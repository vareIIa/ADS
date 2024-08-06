import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../authProvider/authProvider.jsx";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
