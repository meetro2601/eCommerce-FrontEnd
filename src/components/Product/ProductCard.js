import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({detail}) => {

  return (
    <div className="product text-center">
      <figure className="product-media">
        <Link to='/productDetails'>
          <img src={detail.images[0]} alt="Product" width="300" height="338"></img>
          <img src={detail.images[1]} alt="Product" width="300" height="338"></img>
        </Link>
        <div className="product-action-vertical">
          <button
            className="btn-product-icon btn-cart w-icon-cart"
            title="Add to cart"
          ></button>
          <button
            className="btn-product-icon btn-wishlist w-icon-heart"
            title="Add to wishlist"
          ></button>
          <button
            className="btn-product-icon btn-compare w-icon-compare"
            title="Add to Compare"
          ></button>
        </div>
      </figure>
      <div className="product-details">
        <h4 className="product-name">
          <Link to ='/productDetails'>{detail.name}</Link>
        </h4>
          <h5>Brand: {detail.brand}</h5>
          <h5 className="product-price">
          {detail.price}</h5>
      </div>
    </div>
  );
};

export default ProductCard;
