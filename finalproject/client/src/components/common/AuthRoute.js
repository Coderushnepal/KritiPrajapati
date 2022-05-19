import React from "react";
import { Navigate, Outlet } from "react-router";

export function PublicRoute({ isLoggedIn }) {
  return !isLoggedIn ? <Outlet /> : <Navigate to="/feed" />;
}

export function ProtectedRoute({ isLoggedIn }) {
  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
}