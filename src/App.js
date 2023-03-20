import "./index.css";
import {
  PrivateRoute,
  Home,
  Error,
  MemberHome,
  AdministratorHome,
  Gimnasio,
  Membresia,
  Sucursales,
  AuthWrapper,
} from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated, user } = useAuth0();
  const isUserAdmin =
    isAuthenticated && user.name === "administrator@administrator.com";
  const isUser =
    isAuthenticated && user.name != "administrator@administrator.com";
  return (
    <AuthWrapper>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                {(isUserAdmin && <AdministratorHome />) ||
                  (isUser && <MemberHome />)}
              </PrivateRoute>
            }
          />
          <Route path="home" element={<Home />} />
          <Route path="gimnasio" element={<Gimnasio />} />
          <Route path="membresia" element={<Membresia />} />
          <Route path="sucursales" element={<Sucursales />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </AuthWrapper>
  );
}

export default App;
