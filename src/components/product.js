import React from 'react'

const Product = (props) => {
  return (
    <li className="product">
      <div className="product-details">
        <span className="category">
          {props.product.category}
        </span>
        <span className="product-price">
          ${props.product.price}
        </span>
      </div>
      <div className="product-img">
        <img src={props.product.image} alt={props.product.name}/>
      </div>
      <div className="product-name">
        {props.product.name}
      </div>
    </li>
  )
}

export default Product
