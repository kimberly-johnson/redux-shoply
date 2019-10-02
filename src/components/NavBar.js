import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <Link to="/" className="navbar-brand"> Shoply</Link>
          <Link to="/cart"><button><i className="fas fa-shopping-cart"></i></button></Link>
        </nav>
      </div>
    );
  }
}

export default Navbar;