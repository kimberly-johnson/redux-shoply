import React, { Component } from "react";

class Checkout extends Component {
  constructor(props) {
    super(props);

    this.getTotal = this.getTotal.bind(this);
    this.getItemInfo = this.getItemInfo.bind(this);
  }

  getTotal(cart) {
    let total = 0;

    for (let product in cart) {
      for (let item in cart[product]) {
        total += (cart[product][item].price) * (cart[product][item].count);
      }
    }

    return total;
  }

  getItemInfo(cart) {
    let inCart = [];

    for (let product in cart) {
      for (let item in cart[product]) {
        inCart.push(
          {
            name: cart[product][item].name,
            count: cart[product][item].count,
            price: cart[product][item].price
          }
        );
      }
    }

    console.log("in cart", inCart)
    return inCart;
  }

  render() {
    let itemsInCart = this.getItemInfo(this.props).map(item => {
      return (
        < li className="list-group-item" >{item.name} X {item.count} </li >
      );
    });

    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Items in cart</h5>
          </div>
          <ul className="list-group list-group-flush">
            {itemsInCart}
          </ul>
          <div className="card-body">
            <h2>Total: ${this.getTotal(this.props)}</h2>
            <button>Purchase</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;