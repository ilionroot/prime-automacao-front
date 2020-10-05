import React from "react";
import Helmet from "react-helmet";
import $ from "jquery";

import containerBackground from "../../assets/images/firstContainerBackground.jpg";
import logoWithOutText from "../../assets/images/logo-without-text.png";

import Container from "../../components/Container";

import "./index.css";

const Home = () => {
  const handleGoAheadClick = () => {
    $("html, body").animate(
      {
        scrollTop: $("#second-container").offset().top,
      },
      1000
    );

    setTimeout(() => {
      // $("#second-container").append("<h1>Eae</h1>");
    }, 2000);
  };

  return (
    <>
      <Container
        style={{
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundImage: "url(" + containerBackground + ")",
          display: "flex",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Helmet>
          <title>Home | Prime Automação</title>
        </Helmet>
        <div className="title">
          <h1>Bem-vindo a Prime Automação</h1>
        </div>
        <div className="goAhead" onClick={handleGoAheadClick}>
          Veja mais...
        </div>
      </Container>
      <Container
        id="second-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="grid">
          <img src={logoWithOutText} alt="Ícone do logo" />
          <p id="t1">
            A Prime Automação é uma revendedora NCR certificada para implantação
            dos pacotes de soluções Colibri
          </p>
          <p id="t2">Venha e conheça nossos produtos...</p>
          <p id="t3">Você não vai se arrepender</p>
          <p id="t4">Garanta já o seu!</p>
          <span id="continue">Continue</span>
        </div>
      </Container>
    </>
  );
};

export default Home;
