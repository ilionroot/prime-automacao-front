import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";

import Home from "./pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" render={() => <h1>Sobre</h1>} />
        <Route path="/produtos" render={() => <h1>Produtos</h1>} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
