import React from "react";
import Helmet from "react-helmet";

import Container from "../../components/Container";

import InfDiv from "../../components/InfDiv";

import Spacer from "../../components/Spacer";

import "./index.css";

const Sobre = () => {
  return (
    <>
      <Helmet>
        <title>Sobre | Prime Automação</title>
      </Helmet>
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <InfDiv
          style={{
            width: "50vw",
          }}
        >
          <h1>Sobre nós</h1>
          <p></p>
        </InfDiv>
      </Container>
      <Spacer />
    </>
  );
};

export default Sobre;
