import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./containers/App";
import HomePage from "./containers/HomePage";
import CounterPage from "./containers/CounterPage";
import ShipItPage from "./containers/shipit";

export default (
  <Route path="/" component={ App }>
    <IndexRoute component={ HomePage } />
    <Route path="/repo/:id/shipit" component={ ShipItPage } />
  </Route>
);
