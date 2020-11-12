import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import About from './pages/About';
import Products from './pages/Products';

const Routes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/products" component={Products} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
