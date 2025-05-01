import { useAuthStore } from "@/store/auth";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
  const token = useAuthStore((s) => s.token);
  return token ? <Outlet /> : <Navigate to="/login" replace />;
};
