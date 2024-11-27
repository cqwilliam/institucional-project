import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PrivateRoute = () => {
  const { usuario } = useAuth();

  return usuario ? <Outlet /> : <Navigate to="/" replace />;
};

export default PrivateRoute;
