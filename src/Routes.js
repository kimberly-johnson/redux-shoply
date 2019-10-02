import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import Cart from "./components/Cart";
import App from "./App";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <App />} />
        <Route exact path="/products/:id" render={(rtProps) => <ItemDetailContainer  {...rtProps} />} />
        <Route exact path="/cart" render={(rtProps) => <Cart {...rtProps}/>} />
      </Switch>
    );
  }
}

export default Routes;
