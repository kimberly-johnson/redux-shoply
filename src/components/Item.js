import React, { Component } from "react";
import "./Item.css";

class Item extends Component {
  render() {
    const item = {
      id: this.props.id,
      name: this.props.name,
      price: this.props.price,
      description: this.props.description,
      image_url: this.props.image_url,
      count: this.props.count
    };
    return (
      <li className='mt-3'>
        <img className='mr-3 w-25' src={this.props.image_url} alt='a product' />
        <div className='media-body'>
          <h5 className='mt-0 mb-1'>{this.props.name}</h5>
          <p>${this.props.price}</p>
          <p>{this.props.description}</p>
        </div>
        <div className='buttons'>
          <button
            className='btn btn-success btn-sm'
            onClick={() => {
              this.props.add(item);
            }}
          >
            Add to cart
          </button>
          <button
            className='btn btn-warning btn-sm'
            onClick={() => {
              this.props.remove(this.props.id);
            }}
          >
            Remove from cart
          </button>
        </div>
      </li>
    );
  }
}

export default Item;
