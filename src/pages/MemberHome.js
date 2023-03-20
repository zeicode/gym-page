import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const MemberHome = () => {
  const { logout } = useAuth0();
  return (
    <>
      <h1>MemberHome</h1>
      <button
        className="btn nav-btn"
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      >
        Log Out
      </button>
    </>
  );
};

export default MemberHome;
