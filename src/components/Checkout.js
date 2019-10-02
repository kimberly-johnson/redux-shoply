import React, { Component } from "react";

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "",
      discount: 1.1
    }

    this.getTotal = this.getTotal.bind(this);
    this.getItemInfo = this.getItemInfo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    let discount = 1;

    if (this.state.code === "REMOVE10") {
      discount = .9;
    } else if (this.state.code === "REMOVE20") {
      discount = .8;
    } else if (this.state.code === "REMOVE30") {
      discount = .7;
    }

    this.setState({ ...this.state, discount: discount });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
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

    return inCart;
  }


  render() {
    let itemsInCart = this.getItemInfo(this.props).map(item => {
      return (
        <li className="list-group-item" >{item.name} X {item.count} </li>
      );
    });

    let total;
    this.state.discount < 1 
      ? total = (this.getTotal(this.props) * this.state.discount).toFixed(2)
      : total = this.getTotal(this.props);
    
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
            <h2>Total: ${total}</h2>
            <div>
              <form onSubmit={this.handleSubmit}>
                <input
                  onChange={this.handleChange}
                  placeholder="enter code"
                  type="text"
                  name="code">
                </input>
                <button className="btn btn-secondary">Apply</button>
              </form>
              {this.state.discount === 1
                ? <div className="alert alert-danger" role="alert">
                  INVALID CODE
                  </div>
                : null}
            </div>
            <button className="btn btn-info">Purchase</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;