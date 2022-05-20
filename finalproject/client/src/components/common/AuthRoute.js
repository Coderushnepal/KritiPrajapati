import React from "react";
import { Navigate, Outlet } from "react-router";

export function PublicRoute({ isLoggedIn }) {
  const loggedIn = isLoggedIn || localStorage.getItem('userToken');
  return !loggedIn ? <Outlet /> : <Navigate to="/feed" />;
}

export function ProtectedRoute({ isLoggedIn }) {
  const loggedIn = isLoggedIn || localStorage.getItem('userToken');
  return loggedIn ? <Outlet /> : <Navigate to="/" />;
}