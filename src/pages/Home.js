import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { HomeNavbar, Footer } from "../components";
import HomeImg from "./../images/home-img.jpg";
// import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const [scrollState, setScrollState] = useState("top");
  // const { loginWithRedirect } = useAuth0();

  useEffect(() => {
    const listener = document.addEventListener("scroll", (e) => {
      const scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 120) {
        if (scrollState !== "scrolled") setScrollState("scrolled");
      } else {
        if (scrollState !== "top") setScrollState("top");
      }
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [scrollState]);
  return (
    <Wrapper>
      <HomeNavbar scroll={scrollState} />
      <section className="intro-section">
        <article className="intro-text">
          <h6>entrenar ante todo</h6>
          <h1>SportBox</h1>
          <h3>Bienvenidxs al sitio oficial de Sportbox</h3>
          <Link to="/Login" className="btn btn-red">
            registrarse
          </Link>
        </article>
      </section>
      <section className="gimnasio-section">
        <article className="gimnasio-text">
          <h5>primera calidad</h5>
          <h2>entrenando con sportbox</h2>
          <p>
            Contamos con maquinas de ultima tecnologia. Si estás buscando
            sentirte bien, cuidar tu salud, mejorar tu calidad de vida y lograr
            el cuerpo que realmente querés tener dentro de un ambiente agradable{" "}
          </p>
          <Link to="/Login" className="btn btn-white">
            vernos
          </Link>
        </article>
      </section>
      <section className="membresia"></section>
      <section className="sucursales"></section>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .intro-section {
    display: grid;
    place-content: center;
    background-image: url(${HomeImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 100vh;
    width: 100%;
    .intro-text {
      // border: 1px solid yellow;
      height: 100%;
      color: var(--clr-white);
      text-align: center;
    }
    h1,
    h3,
    h6 {
      text-transform: uppercase;
    }
    h1 {
      padding-bottom: 2rem;
    }
    h3 {
      padding-bottom: 3.5rem;
    }
    h6 {
      padding-bottom: 2.5rem;
    }
  }
  .gimnasio-section {
    display: grid;
    justify-content: center;
    align-content: center;
    background-color: var(--clr-white);
    height: 60vh;
    width: 100%;
    .gimnasio-text {
      // border: 1px solid yellow;
      height: 100%;
      color: var(--clr-white);
      text-align: center;
    }
    h2,
    h5 {
      text-transform: uppercase;
      color: var(--clr-black);
    }
    h2 {
      padding-bottom: 2rem;
    }
    h5 {
      padding-bottom: 3.5rem;
    }
    p {
      padding-bottom: 2.5rem;
    }
  }
  .third-section {
    background-color: var(--clr-black);
    height: 80vh;
    width: 100%;
  }
  .fourth-section {
    background-color: var(--clr-white);
    height: 50vh;
    width: 100%;
  }
`;

export default Home;
