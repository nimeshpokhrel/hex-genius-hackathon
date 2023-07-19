import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Homepage from "../Components/Homepage/Homepage";
import ClientLogin from "../Components/ClientLogin/ClientLogin";
import { useAuthContext } from "../Hooks/useAuthContext";
import ClientSignup from "../Components/ClientSignup/ClientSignup";

const AuthRoutes = () => {
  const { user } = useAuthContext();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/client/login"
          element={user ? <Navigate to="/" /> : <ClientLogin />}
        />
        <Route
          path="/client/signup"
          element={user ? <Navigate to="/" /> : <ClientSignup />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AuthRoutes;
