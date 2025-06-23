import { ROUTES } from "@/constants/router";
import { getAccessToken } from "@/utils/token";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
  const token = getAccessToken();
  console.log(token);
  return token ? <Outlet /> : <Navigate to={ROUTES.LOGIN} replace />;
};
