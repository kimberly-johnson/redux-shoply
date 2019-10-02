import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import App from "./App";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <App />} />
        <Route exact path="/products/:id" render={(rtProps) => <ItemDetailContainer  {...rtProps} />} />
      </Switch>
    );
  }
}

export default Routes;
