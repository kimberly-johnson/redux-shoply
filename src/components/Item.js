import React, { Component } from "react";

class Item extends Component {
  render() {
    return (
      <div>
        <h2>{}</h2>

    
        <button onClick={this.props.add}> + </button>
        <button onClick={this.props.remove}> - </button>
      </div>
    );
  }
}

export default Item;