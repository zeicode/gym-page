import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

const HomeNavbar = ({ scroll }) => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Wrapper
      style={scroll === "scrolled" ? { backgroundColor: "black" } : null}
    >
      <div className="nav-center">
        <Link to={"/"} className="nav-logo">
          <img
            src="https://sportbox.com.ar/images/LogoSporBoxGris1.png"
            alt="logo"
          />
        </Link>
        <ul className="nav-links">
          <Link to={"./Error"}>
            <li>Gimnasio</li>
          </Link>
          <Link to={"./Error"}>
            <li>Membresia</li>
          </Link>
          <Link to={"./Error"}>
            <li>Sucursales</li>
          </Link>
        </ul>
        <button
          type="button"
          className="btn nav-btn"
          onClick={() => loginWithRedirect()}
        >
          iniciar sessión
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: fixed;
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  // border: 1px solid orange;

  .nav-center {
    width: 95vw;
    height: 5rem;
    max-width: 1170px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // border: 1px solid green;
  }
  .nav-logo {
    height: 3.3rem;
    width: 14rem;
    // border: 1px solid red;
    img {
      width: 100%;
    }
  }

  .nav-links {
    display: none;
    // border: 1px solid yellow;
  }

  @media screen and (min-width: 768px) {
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
    }
    .nav-links {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      li {
        text-decoration: none;
        text-transform: uppercase;
        font-weight: bold;
        color: var(--clr-white);
      }
    }
    .nav-links li:hover {
      color: var(--clr-grey-8);
    }
  }
`;

export default HomeNavbar;
