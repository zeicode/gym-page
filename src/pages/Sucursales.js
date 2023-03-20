import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Sucursales = () => {
  const { logout } = useAuth0();
  return (
    <div>
      <h1>Sucursales</h1>
      <button
        className="btn nav-btn"
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      >
        Log Out
      </button>
    </div>
  );
};

export default Sucursales;
