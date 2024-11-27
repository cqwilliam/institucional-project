import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PublicRoute = () => {
  const { usuario } = useAuth();

  return usuario ? <Navigate to="/home" replace /> : <Outlet />;
};

export default PublicRoute;
