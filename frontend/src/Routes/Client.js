import React from "react";
import { useAuthContext } from "../Hooks/useAuthContext";
import { Navigate, Route, Routes } from "react-router-dom";
import FindWorker from "../Components/FindWorker/FindWorker";
import PostJob from "../Components/PostJob/PostJob";
import BrowseCategory from "../Components/BrowseCategory/BrowseCategory";

const ClientRoutes = () => {
  const { user } = useAuthContext();
  return (
    <Routes>
      <Route
        path="/find-worker"
        element={
          user && user.userType === "client" ? (
            <FindWorker />
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/find-worker-category"
        element={
          user && user.userType === "client" ? (
            <BrowseCategory />
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/post-job"
        element={
          user && user.userType === "worker" ? (
            <PostJob />
          ) : (
            <Navigate to="/login" />
          )
        }
      />
    </Routes>
  );
};

export default ClientRoutes;
