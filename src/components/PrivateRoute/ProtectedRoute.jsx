import React, { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../../context/Authcontext";

export const ProtectedRoute = ({ children }) => {
  const { isAuth } = useContext(AuthContext);

  if (!isAuth) {
    return <Navigate to="/login" replace={false} />;
  }

  return children;
};