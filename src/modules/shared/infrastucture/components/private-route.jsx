import { Navigate, Outlet } from "react-router-dom";
import { useIsLoggedIn } from "../../../auth/infrastructure/hooks/use-is-logged-in";

const PrivateRoute = () => {
  const { isLoggedIn, isLoading } = useIsLoggedIn();

  if (isLoading) return null;

  return isLoggedIn ? <Outlet /> : <Navigate to="/sign-in" replace />;
};

export default PrivateRoute;
