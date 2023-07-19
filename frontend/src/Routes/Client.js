import React from "react";
import { useAuthContext } from "../Hooks/useAuthContext";
import { Navigate, Route, Routes } from "react-router-dom";
import FindWorker from "../Components/FindWorker/FindWorker";

const ClientRoutes = () => {
  const { user } = useAuthContext();
  return (
    <Routes>
      <Route
        path="/find-worker"
        element={user ? <FindWorker /> : <Navigate to="/login" />}
      />
    </Routes>
  );
};

export default ClientRoutes;
