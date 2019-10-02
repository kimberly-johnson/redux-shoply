import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Item.css";

class Item extends Component {
  render() {
    const { id, name, price, description, image_url, count, add, remove } = this.props;
    const item = {
      id: id,
      name: name,
      price: price,
      description: description,
      image_url: image_url,
      count: count
    };

    return (
      <li className='mt-3'>
        <img className='mr-3 w-25' src={image_url} alt='a product' />
        <div className='media-body'>
          <Link
            to={{
              pathname: `/products/${id}`,
              state: item
            }}>
            <h3 className='mt-0 mb-1'>{name}</h3>
          </Link>
          <h5>${price}</h5>
          <p>{description}</p>
        </div>
        <div className='buttons'>
          <button
            className='btn btn-success btn-sm'
            onClick={() => { add(item) }}
          >
            Add to cart
          </button>
          <button
            className='btn btn-warning btn-sm'
            onClick={() => { remove(id) }}
          >
            Remove from cart
          </button>
        </div>
      </li>
    );
  }
}

export default Item;
