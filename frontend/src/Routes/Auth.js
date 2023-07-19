import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Homepage from "../Components/Homepage/Homepage";
import { useAuthContext } from "../Hooks/useAuthContext";
import Signup from "../Components/Signup/Signup";
import Login from "../Components/Login/Login";

const AuthRoutes = () => {
  const { user } = useAuthContext();
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route
        path="/login"
        element={user ? <Navigate to="/" /> : <Login />}
      />
      <Route
        path="/signup"
        element={user ? <Navigate to="/" /> : <Signup />}
      />
    </Routes>
  );
};

export default AuthRoutes;