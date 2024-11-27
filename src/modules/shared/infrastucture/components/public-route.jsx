import { Navigate, Outlet } from "react-router-dom";
import { useIsLoggedIn } from "../../../auth/infrastructure/hooks/use-is-logged-in";

const PublicRoute = () => {
  const { isLoggedIn, isLoading } = useIsLoggedIn();

  if (isLoading) return null;

  return isLoggedIn ? <Navigate to="/managment" replace /> : <Outlet />;
};

export default PublicRoute;
