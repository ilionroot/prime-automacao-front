import React from "react";
import Helmet from "react-helmet";

import containerBackground from "../../assets/images/firstContainerBackground.jpg";

import Container from "../../components/Container";

import "./index.css";

const Home = () => {
  return (
    <>
      <Container
        style={{
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundImage: "url(" + containerBackground + ")",
        }}
      >
        <Helmet>
          <title>Home | Prime Automação</title>
        </Helmet>
      </Container>
    </>
  );
};

export default Home;
