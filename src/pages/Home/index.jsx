import React from "react";
import Helmet from "react-helmet";

import Container from "../../components/Container";

import "./index.css";

const Home = () => {
  return (
    <Container>
      <Helmet>
        <title>Home | Prime Automação</title>
      </Helmet>
      <h1>Home</h1>
    </Container>
  );
};

export default Home;
