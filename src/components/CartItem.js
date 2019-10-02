import React, { Component } from "react";
import { Link } from "react-router-dom";

class CartItem extends Component {
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
            <h5 className='mt-0 mb-1'>{name}</h5>
          </Link>
          <p>${price}</p>
          <p>{description}</p>
        </div>
        <div className='buttons'> Quantity:
          <button onClick={() => { add(item) }}> + </button>
          <h3>{count}</h3>
          <button onClick={() => { remove(id) }}> - </button>
        </div>
      </li>
    )
  }
}

export default CartItem;