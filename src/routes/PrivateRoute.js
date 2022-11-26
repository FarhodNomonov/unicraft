import React from "react";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const auth = localStorage.getItem("token") ? true : false;
  return auth ? children : <Navigate to="/auth/login" />;
};
