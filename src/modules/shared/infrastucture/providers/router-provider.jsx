import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../../../auth/infrastructure/hooks/useAuth";
import SignIn from "../../../auth/infrastructure/views/sign-in";
import PrivateRoute from "../components/private-route";
import PublicRoute from "../components/public-route";
import Admision from "../views/admision/admision";
import Home from "../views/home";
import Managment from "../views/managment";

export const AppRouter = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<PrivateRoute />}>
            <Route path="/managment" element={<Managment />} />
          </Route>
          <Route element={<PublicRoute />}>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/admision" element={<Admision />} />
          </Route>
          <Route element={<PublicRoute />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};
