import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthData } from "../auth/auth/AuthWrapper";

const auth = () => {
  const { user }: any = AuthData();
  return user.isAuthenticated;
};

const ProtectedRoute = () => {
  const isAuthenticated = auth();
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
