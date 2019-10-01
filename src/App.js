import React, { Component } from 'react';
import ItemsListContainer from "./containers/ItemsListContainer";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ItemsListContainer />
      </div>
    );
  }
}

export default App;