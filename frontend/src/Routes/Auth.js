import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Homepage from "../Components/Homepage/Homepage";
import ClientLogin from "../Components/ClientLogin/ClientLogin";

const AuthRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/client/login" element={<ClientLogin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AuthRoutes;
