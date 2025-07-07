// src/routes/ProtectedRoute.tsx
import type { JSX } from "react";
import { useAuth } from "@/services/useAuth";
import { Navigate } from "react-router-dom";

interface Props {
  children: JSX.Element;
}

export const ProtectedRoute = ({ children }: Props) => {
  const { isAuthenticated } = useAuth();
  console.log(isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};
