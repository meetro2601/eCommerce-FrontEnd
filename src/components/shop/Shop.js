import React from "react";
import Shop0 from "../../assets/images/shop/1.jpg";
import Shop1 from "../../assets/images/shop/2-1.jpg";
import Shop2 from "../../assets/images/shop/2-2.jpg";
import Shop3 from "../../assets/images/shop/3.jpg";
import Shop4 from "../../assets/images/shop/4.jpg";
import Shop5 from "../../assets/images/shop/5.jpg";
import Shop6 from "../../assets/images/shop/6.jpg";
import Shop7 from "../../assets/images/shop/7-1.jpg";
import Shop71 from "../../assets/images/shop/7-2.jpg";
import Shop8 from "../../assets/images/shop/8.jpg";
import Shop9 from "../../assets/images/shop/9.jpg";
import Shop10 from "../../assets/images/shop/10.jpg";
import Shop11 from "../../assets/images/shop/11-1.jpg";
import Shop111 from "../../assets/images/shop/11-2.jpg";
import Shop12 from "../../assets/images/shop/12.jpg";
import { Link } from "react-router-dom";

const Shop = () => {
  return (
    <>
      <nav className="breadcrumb-nav">
        <div className="container">
          <ul className="breadcrumb bb-no">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>Shop</li>
          </ul>
        </div>
      </nav>
      <div className="page-content pt-5">
        <div className="container">
          <div className="shop-content row gutter-lg mb-10">
            <aside className="sidebar shop-sidebar sticky-sidebar-wrapper sidebar-fixed">
              <div className="sidebar-overlay"></div>
              <a className="sidebar-close" href="/">
                <i className="close-icon"></i>{" "}
              </a>

              <div className="sidebar-content scrollable">
                <div className="sticky-sidebar">
                  <div className="search-input panel">
                    <h4>Search Within</h4>
                    <form
                      id="search-brand"
                      className="form-group"
                      method="post"
                      action="https://www.biomall.in/searchBrand/advent"
                    >
                      <input
                        type="text"
                        className="form-control"
                        id="brandtags"
                        name="resbrand"
                        placeholder="Search by Keywords"
                      />
                    </form>
                  </div>

                  <div className="widget">
                    <h5 className="widget_title">Category</h5>
                    <div className="form-group">
                      <input
                        type="text"
                        id="searchCategory"
                        className="form-control"
                        placeholder="Search Category"
                        onkeyup="searchCategory()"
                      />
                    </div>
                    <ul className="list-style-none">
                      <li>
                        <div className="custome-checkbox customcheckbox">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="Category-Fine Chemicals"
                            filtertype="checkBox"
                            filtervalue="Fine+Chemicals"
                            value="Fine+Chemicals"
                            filtername="Category"
                            name="Category"
                            filterdisplayname="Category"
                          />
                          <label
                            className="form-check-label"
                            for="Category-Fine Chemicals"
                          >
                            Fine Chemicals
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custome-checkbox customcheckbox">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="Category-Stains, Reagents & Indicators"
                            filtertype="checkBox"
                            filtervalue="Stains%2C+Reagents+%26+Indicators"
                            value="Stains%2C+Reagents+%26+Indicators"
                            filtername="Category"
                            name="Category"
                            filterdisplayname="Category"
                          />
                          <label
                            className="form-check-label"
                            for="Category-Stains, Reagents & Indicators"
                          >
                            Stains, Reagents & Indicators
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="widget">
                    <h5 className="widget_title">Packsize</h5>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="searchPacksize"
                        placeholder="Search Packsize"
                        onkeyup="searchPacksize()"
                      />
                    </div>
                    <ul className="list-style-none">
                      <li>
                        <div className="custome-checkbox customcheckbox">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="Packsize-1 L/Pack"
                            filtertype="checkBox"
                            filtervalue="1+L%2FPack"
                            value="1+L%2FPack"
                            filtername="Packsize"
                            name="Packsize"
                            filterdisplayname="Packsize"
                          />
                          <label
                            className="form-check-label"
                            for="Packsize-1 L/Pack"
                          >
                            1 L/Pack
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custome-checkbox customcheckbox">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="Packsize-500 ML/Pack"
                            filtertype="checkBox"
                            filtervalue="500+ML%2FPack"
                            value="500+ML%2FPack"
                            filtername="Packsize"
                            name="Packsize"
                            filterdisplayname="Packsize"
                          />
                          <label
                            className="form-check-label"
                            for="Packsize-500 ML/Pack"
                          >
                            500 ML/Pack
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custome-checkbox customcheckbox">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="Packsize-250 ML/Pack"
                            filtertype="checkBox"
                            filtervalue="250+ML%2FPack"
                            value="250+ML%2FPack"
                            filtername="Packsize"
                            name="Packsize"
                            filterdisplayname="Packsize"
                          />
                          <label
                            className="form-check-label"
                            for="Packsize-250 ML/Pack"
                          >
                            250 ML/Pack
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custome-checkbox customcheckbox">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="Packsize-2.5 L/Pack"
                            filtertype="checkBox"
                            filtervalue="2.5+L%2FPack"
                            value="2.5+L%2FPack"
                            filtername="Packsize"
                            name="Packsize"
                            filterdisplayname="Packsize"
                          />
                          <label
                            className="form-check-label"
                            for="Packsize-2.5 L/Pack"
                          >
                            2.5 L/Pack
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custome-checkbox customcheckbox">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="Packsize-100 G/Pack"
                            filtertype="checkBox"
                            filtervalue="100+G%2FPack"
                            value="100+G%2FPack"
                            filtername="Packsize"
                            name="Packsize"
                            filterdisplayname="Packsize"
                          />
                          <label
                            className="form-check-label"
                            for="Packsize-100 G/Pack"
                          >
                            100 G/Pack
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custome-checkbox customcheckbox">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="Packsize-25 G/Pack"
                            filtertype="checkBox"
                            filtervalue="25+G%2FPack"
                            value="25+G%2FPack"
                            filtername="Packsize"
                            name="Packsize"
                            filterdisplayname="Packsize"
                          />
                          <label
                            className="form-check-label"
                            for="Packsize-25 G/Pack"
                          >
                            25 G/Pack
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custome-checkbox customcheckbox">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="Packsize-500 G/Pack"
                            filtertype="checkBox"
                            filtervalue="500+G%2FPack"
                            value="500+G%2FPack"
                            filtername="Packsize"
                            name="Packsize"
                            filterdisplayname="Packsize"
                          />
                          <label
                            className="form-check-label"
                            for="Packsize-500 G/Pack"
                          >
                            500 G/Pack
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custome-checkbox customcheckbox">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="Packsize-100 ML/Pack"
                            filtertype="checkBox"
                            filtervalue="100+ML%2FPack"
                            value="100+ML%2FPack"
                            filtername="Packsize"
                            name="Packsize"
                            filterdisplayname="Packsize"
                          />
                          <label
                            className="form-check-label"
                            for="Packsize-100 ML/Pack"
                          >
                            100 ML/Pack
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custome-checkbox customcheckbox">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="Packsize-200 ML/Pack"
                            filtertype="checkBox"
                            filtervalue="200+ML%2FPack"
                            value="200+ML%2FPack"
                            filtername="Packsize"
                            name="Packsize"
                            filterdisplayname="Packsize"
                          />
                          <label
                            className="form-check-label"
                            for="Packsize-200 ML/Pack"
                          >
                            200 ML/Pack
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custome-checkbox customcheckbox">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="Packsize-4 L/Pack"
                            filtertype="checkBox"
                            filtervalue="4+L%2FPack"
                            value="4+L%2FPack"
                            filtername="Packsize"
                            name="Packsize"
                            filterdisplayname="Packsize"
                          />
                          <label
                            className="form-check-label"
                            for="Packsize-4 L/Pack"
                          >
                            4 L/Pack
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custome-checkbox customcheckbox">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="Packsize-1 L /Pack"
                            filtertype="checkBox"
                            filtervalue="1+L+%2FPack"
                            value="1+L+%2FPack"
                            filtername="Packsize"
                            name="Packsize"
                            filterdisplayname="Packsize"
                          />
                          <label
                            className="form-check-label"
                            for="Packsize-1 L /Pack"
                          >
                            1 L /Pack
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custome-checkbox customcheckbox">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="Packsize-1L/Pack"
                            filtertype="checkBox"
                            filtervalue="1L%2FPack"
                            value="1L%2FPack"
                            filtername="Packsize"
                            name="Packsize"
                            filterdisplayname="Packsize"
                          />
                          <label
                            className="form-check-label"
                            for="Packsize-1L/Pack"
                          >
                            1L/Pack
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custome-checkbox customcheckbox">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="Packsize-2.5 L /Pack"
                            filtertype="checkBox"
                            filtervalue="2.5+L+%2FPack"
                            value="2.5+L+%2FPack"
                            filtername="Packsize"
                            name="Packsize"
                            filterdisplayname="Packsize"
                          />
                          <label
                            className="form-check-label"
                            for="Packsize-2.5 L /Pack"
                          >
                            2.5 L /Pack
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custome-checkbox customcheckbox">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="Packsize-2.5 ML/Pack"
                            filtertype="checkBox"
                            filtervalue="2.5+ML%2FPack"
                            value="2.5+ML%2FPack"
                            filtername="Packsize"
                            name="Packsize"
                            filterdisplayname="Packsize"
                          />
                          <label
                            className="form-check-label"
                            for="Packsize-2.5 ML/Pack"
                          >
                            2.5 ML/Pack
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custome-checkbox customcheckbox">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="Packsize-250  ML/Pack"
                            filtertype="checkBox"
                            filtervalue="250++ML%2FPack"
                            value="250++ML%2FPack"
                            filtername="Packsize"
                            name="Packsize"
                            filterdisplayname="Packsize"
                          />
                          <label
                            className="form-check-label"
                            for="Packsize-250  ML/Pack"
                          >
                            250 ML/Pack
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custome-checkbox customcheckbox">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="Packsize-500  ML/Pack"
                            filtertype="checkBox"
                            filtervalue="500++ML%2FPack"
                            value="500++ML%2FPack"
                            filtername="Packsize"
                            name="Packsize"
                            filterdisplayname="Packsize"
                          />
                          <label
                            className="form-check-label"
                            for="Packsize-500  ML/Pack"
                          >
                            500 ML/Pack
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="widget">
                    <h5 className="widget_title">Brand</h5>
                    <div className="form-group">
                      <input
                        type="text"
                        id="searchBrand"
                        className="form-control"
                        placeholder="Search Brand"
                        onkeyup="searchBrand()"
                      />
                    </div>
                    <ul className="list-style-none">
                      <li>
                        <div className="custome-checkbox customcheckbox">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="Brand-CAPP"
                            filtertype="checkBox"
                            filtervalue="CAPP"
                            value="CAPP"
                            filtername="Brand"
                            name="brand"
                            filterdisplayname="Brand"
                          />
                          <label className="form-check-label" for="Brand-CAPP">
                            CAPP
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custome-checkbox customcheckbox">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="Brand-Reagecon"
                            filtertype="checkBox"
                            filtervalue="Reagecon"
                            value="Reagecon"
                            filtername="Brand"
                            name="brand"
                            filterdisplayname="Brand"
                          />
                          <label
                            className="form-check-label"
                            for="Brand-Reagecon"
                          >
                            Reagecon
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custome-checkbox customcheckbox">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="Brand-Chargen Life Sciences"
                            filtertype="checkBox"
                            filtervalue="Chargen+Life+Sciences"
                            value="Chargen+Life+Sciences"
                            filtername="Brand"
                            name="brand"
                            filterdisplayname="Brand"
                          />
                          <label
                            className="form-check-label"
                            for="Brand-Chargen Life Sciences"
                          >
                            Chargen Life Sciences
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custome-checkbox customcheckbox">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="Brand-BioPointe Scientific"
                            filtertype="checkBox"
                            filtervalue="BioPointe+Scientific"
                            value="BioPointe+Scientific"
                            filtername="Brand"
                            name="brand"
                            filterdisplayname="Brand"
                          />
                          <label
                            className="form-check-label"
                            for="Brand-BioPointe Scientific"
                          >
                            BioPointe Scientific
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custome-checkbox customcheckbox">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="Brand-Sigma-Aldrich"
                            filtertype="checkBox"
                            filtervalue="Sigma-Aldrich"
                            value="Sigma-Aldrich"
                            filtername="Brand"
                            name="brand"
                            filterdisplayname="Brand"
                          />
                          <label
                            className="form-check-label"
                            for="Brand-Sigma-Aldrich"
                          >
                            Sigma-Aldrich
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custome-checkbox customcheckbox">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="Brand-MB LAB CONSUMABLES"
                            filtertype="checkBox"
                            filtervalue="MB+LAB+CONSUMABLES"
                            value="MB+LAB+CONSUMABLES"
                            filtername="Brand"
                            name="brand"
                            filterdisplayname="Brand"
                          />
                          <label
                            className="form-check-label"
                            for="Brand-MB LAB CONSUMABLES"
                          >
                            MB LAB CONSUMABLES
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="widget">
                    <h5 className="widget_title">Discounts</h5>
                    <ul className="list-style-none">
                      <li>
                        <div className="custome-checkbox customcheckbox">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="stock"
                            filtervalue="1"
                            value="1"
                            filtername="Stock"
                            name="stock"
                            filterdisplayname="Stock"
                          />
                          <label className="form-check-label" for="stock">
                            {" "}
                            Show Products In Offer
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="filter-buttons hide-md hidden-desktop">
                    <button
                      className="btn btn-fill-out apply close-filter"
                      type="button"
                    >
                      Apply Filters{" "}
                    </button>
                    <button
                      className="btn btn-fill btn-cancel-filter bg_gray"
                      type="button"
                    >
                      {" "}
                      Cancel{" "}
                    </button>
                    <a href="/" className="close-filter hidden-desktop">
                      <i className="ion-ios-close-empty"></i>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </aside>

            <div className="main-content">
              <nav className="toolbox sticky-toolbox sticky-content fix-top">
                <div className="toolbox-left">
                  <a
                    href="/"
                    className="btn btn-primary btn-outline btn-rounded left-sidebar-toggle 
                                        btn-icon-left d-block d-lg-none"
                  >
                    <i className="w-icon-category"></i>
                    <span>Filters</span>{" "}
                  </a>
                  <div className="toolbox-item toolbox-sort select-box text-dark">
                    <label>Sort By :</label>
                    <select name="orderby" className="form-control">
                      <option value="default" selected="selected">
                        Default sorting
                      </option>
                      <option value="popularity">Sort by popularity</option>
                      <option value="rating">Sort by average rating</option>
                      <option value="date">Sort by latest</option>
                      <option value="price-low">
                        Sort by pric: low to high
                      </option>
                      <option value="price-high">
                        Sort by price: high to low
                      </option>
                    </select>
                  </div>
                </div>
              </nav>
              <div className="product-wrapper row cols-lg-4 cols-md-3 cols-sm-2 cols-2">
                <div className="product-wrap">
                  <div className="product">
                    <div className="product-img-action-wrap">
                      <div className="product-media">
                      <Link to="/productDetails">
                          <img
                            src={Shop0}
                            alt="Product"
                            width="300"
                            height="338"
                          />
                        </Link>
                      </div>
                      <div className="product-label">
                        <span className="label-discount">10%</span>
                      </div>
                      <div className="product-action-horizontal">
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
                      <Link to="/productDetails">3D Television</Link>
                      </h4>
                      <div className="product-price-wrap">
                        <div className="product-price">
                          <ins className="new-price">$220.00</ins>
                        </div>
                        <button className="add-cart">
                          <i className="fa fa-cart-arrow-down mr-1"></i>Add{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-wrap">
                  <div className="product">
                    <div className="product-img-action-wrap">
                      <div className="product-media">
                      <Link to="/productDetails">
                          <img
                            src={Shop1}
                            alt="Product"
                            width="300"
                            height="338"
                          />
                        </Link>
                      </div>
                      <div className="product-label">
                        <span className="label-discount">10%</span>
                      </div>
                      <div className="product-action-horizontal">
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
                      <Link to="/productDetails">3D Television</Link>
                      </h4>
                      <div className="product-price-wrap">
                        <div className="product-price">
                          <ins className="new-price">$220.00</ins>
                        </div>
                        <button className="add-cart">
                          <i className="fa fa-cart-arrow-down mr-1"></i>Add{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-wrap">
                  <div className="product">
                    <div className="product-img-action-wrap">
                      <div className="product-media">
                      <Link to="/productDetails">
                          <img
                            src={Shop2}
                            alt="Product"
                            width="300"
                            height="338"
                          />
                        </Link>
                      </div>
                      <div className="product-label">
                        <span className="label-discount">10%</span>
                      </div>
                      <div className="product-action-horizontal">
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
                      <Link to="/productDetails">3D Television</Link>
                      </h4>
                      <div className="product-price-wrap">
                        <div className="product-price">
                          <ins className="new-price">$220.00</ins>
                        </div>
                        <button className="add-cart">
                          <i className="fa fa-cart-arrow-down mr-1"></i>Add{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-wrap">
                  <div className="product">
                    <div className="product-img-action-wrap">
                      <div className="product-media">
                      <Link to="/productDetails">
                          <img
                            src={Shop3}
                            alt="Product"
                            width="300"
                            height="338"
                          />
                        </Link>
                      </div>
                      <div className="product-label">
                        <span className="label-discount">10%</span>
                      </div>
                      <div className="product-action-horizontal">
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
                      <Link to="/productDetails">3D Television</Link>
                      </h4>
                      <div className="product-price-wrap">
                        <div className="product-price">
                          <ins className="new-price">$220.00</ins>
                        </div>
                        <button className="add-cart">
                          <i className="fa fa-cart-arrow-down mr-1"></i>Add{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-wrap">
                  <div className="product">
                    <div className="product-img-action-wrap">
                      <div className="product-media">
                      <Link to="/productDetails">
                          <img
                            src={Shop5}
                            alt="Product"
                            width="300"
                            height="338"
                          />
                        </Link>
                      </div>
                      <div className="product-label">
                        <span className="label-discount">10%</span>
                      </div>
                      <div className="product-action-horizontal">
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
                      <Link to="/productDetails">3D Television</Link>
                      </h4>
                      <div className="product-price-wrap">
                        <div className="product-price">
                          <ins className="new-price">$220.00</ins>
                        </div>
                        <button className="add-cart">
                          <i className="fa fa-cart-arrow-down mr-1"></i>Add{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-wrap">
                  <div className="product">
                    <div className="product-img-action-wrap">
                      <div className="product-media">
                      <Link to="/productDetails">
                          <img
                            src={Shop6}
                            alt="Product"
                            width="300"
                            height="338"
                          />
                        </Link>
                      </div>
                      <div className="product-label">
                        <span className="label-discount">10%</span>
                      </div>
                      <div className="product-action-horizontal">
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
                      <Link to="/productDetails">3D Television</Link>
                      </h4>
                      <div className="product-price-wrap">
                        <div className="product-price">
                          <ins className="new-price">$220.00</ins>
                        </div>
                        <button className="add-cart">
                          <i className="fa fa-cart-arrow-down mr-1"></i>Add{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-wrap">
                  <div className="product">
                    <div className="product-img-action-wrap">
                      <div className="product-media">
                      <Link to="/productDetails">
                          <img
                            src={Shop7}
                            alt="Product"
                            width="300"
                            height="338"
                          />
                          <img
                            src={Shop71}
                            alt="Product"
                            width="300"
                            height="338"
                          />
                        </Link>
                      </div>
                      <div className="product-label">
                        <span className="label-discount">10%</span>
                      </div>
                      <div className="product-action-horizontal">
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
                      <Link to="/productDetails">3D Television</Link>
                      </h4>
                      <div className="product-price-wrap">
                        <div className="product-price">
                          <ins className="new-price">$220.00</ins>
                        </div>
                        <button className="add-cart">
                          <i className="fa fa-cart-arrow-down mr-1"></i>Add{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-wrap">
                  <div className="product">
                    <div className="product-img-action-wrap">
                      <div className="product-media">
                      <Link to="/productDetails">
                          <img
                            src={Shop8}
                            alt="Product"
                            width="300"
                            height="338"
                          />
                        </Link>
                      </div>
                      <div className="product-label">
                        <span className="label-discount">10%</span>
                      </div>
                      <div className="product-action-horizontal">
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
                      <Link to="/productDetails">3D Television</Link>
                      </h4>
                      <div className="product-price-wrap">
                        <div className="product-price">
                          <ins className="new-price">$220.00</ins>
                        </div>
                        <button className="add-cart">
                          <i className="fa fa-cart-arrow-down mr-1"></i>Add{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="toolbox toolbox-pagination justify-content-between">
                <p className="showing-info mb-2 mb-sm-0">
                  Showing<span>1-12 of 60</span>Products
                </p>
                <ul className="pagination">
                  <li className="prev disabled">
                    <a
                      href="/"
                      aria-label="Previous"
                      tabindex="-1"
                      aria-disabled="true"
                    >
                      <i className="w-icon-long-arrow-left"></i>Prev
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="/">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="/">
                      2
                    </a>
                  </li>
                  <li className="next">
                    <a href="/" aria-label="Next">
                      Next<i className="w-icon-long-arrow-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
