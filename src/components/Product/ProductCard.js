import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ detail }) => {
  return (
    <div className="product">
      <div className="product-img-action-wrap">
        <div className="product-media">
          <Link to="/productDetails">
            <img
              src={detail.images[0]}
              alt="Product"
              width="300"
              height="338"
            ></img>
            <img
              src={detail.images[1]}
              alt="Product"
              width="300"
              height="338"
            ></img>
          </Link>
        </div>
        <div className="product-label">
          <span className="label-hot">Hot</span>
        </div>
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
      </div>
      <div className="product-details">
        <p className="product-cat">
          <Link to="#">Category</Link>
        </p>
        <h4 className="product-name">
          <Link to="/productDetails">{detail.name}</Link>
        </h4>
        <div className="product-price-wrap">
          <div className="product-price">
            <ins className="new-price">{detail.price}</ins>
            <del className="old-price">$183.47</del>
          </div>
          <button className="add-cart">
            <i className="fa fa-cart-arrow-down mr-1"></i>Add{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
