import React from "react";
import Components from "./components/pages/Components";
import Demo from "./components/pages/Demo";
import Transition from "./components/pages/Transition";
import "./styles.scss";
import { Switch, Route } from "react-router-dom";

export const App = () => {
  return (
    <Switch>
      <Route exact path="/components">
        <Components />
      </Route>
      <Route path="/">
        <Demo />
      </Route>
      <Route exact path="/transition">
        <Transition />
      </Route>
    </Switch>
  );
};
