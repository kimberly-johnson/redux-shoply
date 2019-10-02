import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <Link to="/" className="navbar-brand"> Home</Link>
          <h1>Shoply all day</h1>
          <Link to="/cart">
            <button className="cart">
              <i className="fas fa-shopping-cart fa-2x"></i>
              Cart (amt)
            </button>
          </Link>
        </nav>
      </div>
    );
  }
}

export default Navbar;