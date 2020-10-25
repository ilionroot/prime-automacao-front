import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import Sobre from './pages/Sobre';

const Routes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={Sobre} />
        <Route path="/produtos" render={() => <h1>Produtos</h1>} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
