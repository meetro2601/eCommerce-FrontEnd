import React from "react";

const ProductCard = ({detail}) => {

  return (
    <div className="product text-center">
      <figure className="product-media">
        <a href="product-default.html">
          <img src={detail.images[0]} alt="Product" width="300" height="338"></img>
          <img src={detail.images[1]} alt="Product" width="300" height="338"></img>
        </a>
        <div className="product-action-vertical">
          <a
            href="/"
            className="btn-product-icon btn-cart w-icon-cart"
            title="Add to cart"
          >C</a>
          <a
            href="/"
            className="btn-product-icon btn-wishlist w-icon-heart"
            title="Add to wishlist"
          >W</a>
          <a
            href="/"
            className="btn-product-icon btn-compare w-icon-compare"
            title="Add to Compare"
          >A</a>
        </div>
      </figure>
      <div className="product-details">
        <h4 className="product-name">
          <a href="product-default.html">{detail.name}</a>
        </h4>
          <h5>Brand: {detail.brand}</h5>
          <h5 className="product-price">
          {detail.price}</h5>
      </div>
    </div>
  );
};

export default ProductCard;
