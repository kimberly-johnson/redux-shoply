import React, { Component } from "react";
import { connect } from "react-redux";
import { add, remove } from "../actions";
import Item from "./Item";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
  }

  add() { this.props.add(); }
  remove() { this.props.remove(); }

  render() {
    console.log(this.state);

    return (
      <div>
        {this.state.products.map(product => (
          <Item
            add={this.add}
            remove={this.remove}
            name={product.name}
            price={product.price}
            description={product.description}
            image_url={product.image_url}
          />)
        )
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(
  mapStateToProps,
  { add, remove }
)(Counter);