import React from "react";
import './ProductCard.scss'
import pro11 from "../../assets/images/demos/demo2/products/1-1-1.jpg";
import pro12 from "../../assets/images/demos/demo2/products/1-1-2.jpg";

const ProductCard = () => {
  return (
    <div className="product text-center">
      <figure className="product-media">
        <a href="product-default.html">
          <img src={pro11} alt="Product" width="300" height="338"></img>
          <img src={pro12} alt="Product" width="300" height="338"></img>
        </a>
        <div className="product-action-vertical">
          <a
            href="#"
            className="btn-product-icon btn-cart w-icon-cart"
            title="Add to cart"
          ></a>
          <a
            href="#"
            className="btn-product-icon btn-wishlist w-icon-heart"
            title="Add to wishlist"
          ></a>

          <a
            href="#"
            className="btn-product-icon btn-compare w-icon-compare"
            title="Add to Compare"
          ></a>
        </div>
      </figure>
      <div className="product-details">
        <h4>
          <a href="product-default.html">Women's Comforter</a>
        </h4>
        <div className="ratings-container">
          <h5>Brand: Micromaster</h5>
        </div>
        <div className="product-price">
          <h5>$45.62 - $58.28</h5>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
