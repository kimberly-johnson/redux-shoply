import React, { Component } from "react";

class ItemDetail extends Component {
  constructor(props) {
    super(props);

    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
  }

  add(item) { this.props.add(item) }

  remove(id) { this.props.remove(id) }

  render() {
    let { id, name, price, description, image_url, count } = this.props.location.state;

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
          <h5 className='mt-0 mb-1'>{name}</h5>
          <p>${price}</p>
          <p>{description}</p>
        </div>
        <div className='buttons'>
          <button
            className='btn btn-success btn-sm'
            onClick={() => {
              this.add(item);
            }}
          >
            Add to cart
            </button>
          <button
            className='btn btn-warning btn-sm'
            onClick={() => {
              this.remove(id);
            }}
          >
            Remove from cart
            </button>
        </div>
      </li>
    );
  }
}

export default ItemDetail;