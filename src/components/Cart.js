import React, { Component } from "react";
import { connect } from "react-redux";
import { add, remove } from "../actions";
import Checkout from "./Checkout";
import CartItem from "./CartItem";

class Cart extends Component {
  constructor(props) {
    super(props);

    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
    this.cartProducts = this.cartProducts.bind(this);
  }

  add(item) { this.props.add(item) }

  remove(id) { this.props.remove(id) }

  cartProducts(products) {
    let allProducts = [];
    for (let key in products) {
      allProducts.push(
        <CartItem
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
    console.log(this.props.cart)
    return (
      <div className="container">
        <div className="row">
          <div className="col-9">
            <ul className='list-unstyled w-75 mt-5' style={{ margin: "auto" }}>
              {this.cartProducts(this.props.cart)}
            </ul>
          </div>
          <div className="col-3">
            <Checkout cart={this.props.cart} />
          </div>
        </div>
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
)(Cart);