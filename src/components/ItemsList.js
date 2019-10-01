import React, { Component } from "react";
import { connect } from "react-redux";
import { add, remove } from "../actions";
import Item from "./Item";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
    this.displayProducts = this.displayProducts.bind(this);
  }

  add(item) {
    this.props.add(item);
  }
  remove(id) {
    this.props.remove(id);
  }

  displayProducts(products) {
    let allProducts = [];
    for (let key in products) {
      allProducts.push(
        <Item
          key={key}
          id={key}
          add={this.add}
          remove={this.remove}
          name={products[key].name}
          price={products[key].price}
          description={products[key].description}
          image_url={products[key].image_url}
          count={products[key].count}
        />
      );
    }
    return allProducts;
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Shoply all day</h1>
        <ul className='list-unstyled w-75 mt-5' style={{ margin: 'auto' }}>
          {this.displayProducts(this.props.products)}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products,
    cart: state.cart
  };
}

export default connect(
  mapStateToProps,
  { add, remove }
)(Counter);
