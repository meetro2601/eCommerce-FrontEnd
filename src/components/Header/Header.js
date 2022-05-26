import React from "react";
import "./Header.scss";
import headerLogo from "../../assets/images/logo/header-logo.png";
import shop from "../../assets/images/header-icon/shop.png";
import deal from "../../assets/images/header-icon/deal.png";
import blog from "../../assets/images/header-icon/blog.png";
import sell from "../../assets/images/header-icon/delivery-box.png";
import flagIndia from "../../assets/images/flags/Flag_of_India.png";
import flagUSA from "../../assets/images/flags/Flag_of_Usa.png";
import flagAus from "../../assets/images/flags/Flag_of_Australia.png";
import flagCanada from "../../assets/images/flags/Flag_of_Canada.png";
import flagEur from "../../assets/images/flags/Flag_of_Europe.png";
import flagChina from "../../assets/images/flags/Flag_of_China.png";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="top-header-text">
            FREE SHIPPING on orders over ₹10000
          </div>
        </div>
      </div>
      {/*-- End of Header Top --*/}

      <div className="header-middle">
        <div className="container">
          <div className="header-left">
            <a
              href="#"
              className="mobile-menu-toggle w-icon-hamburger"
              aria-label="menu-toggle"
            >Mobile</a>
            <Link to='/' className="logo ml-lg-0">
              <img src={headerLogo} alt="logo" width="180" />
            </Link>
            <nav className="main-nav header-icon-menu">
              <ul className="menu">
                <li className="active">
                  <a href="Shop.html">
                    <img src={shop} alt='shop'></img>
                    <p>
                      {" "}
                      Shop <span>By Brand</span>{" "}
                    </p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={deal} alt='deal'></img>
                    <p>
                      {" "}
                      Ready <span>Stock</span>{" "}
                    </p>
                  </a>
                </li>
                <li>
                  <a href="blog.html">
                    <img src={blog} alt='blog'></img>
                    <p>
                      {" "}
                      Blogs <span>Latest News</span>{" "}
                    </p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={sell} alt='sell'></img>
                    <p>
                      {" "}
                      Sell<span>On Biomall</span>{" "}
                    </p>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div
            className="header-right ml-4"
          >
            <div className="header-sign-in">
              <div className="dropdown">
                <a href="#Sign in ">Sign in </a>
                <div className="dropdown-box">
                  <Link to='/user/login'> Sign In</Link>
                  <Link to='/compare'> Compare</Link>
                  <hr />
                  <Link to='/user/register' className="Register">
                    {" "}
                    Register
                  </Link>
                </div>
              </div>
            </div>
            <div className="selected-country">
              <div className="dropdown">
                <a href="#language">
                  <img
                    src={flagIndia}
                    alt="IND Flag"
                    width="25"
                    className="dropdown-image"
                  ></img>{" "}
                  IND
                </a>
                <div className="dropdown-box">
                  <a href="#USA">
                    <img
                      src={flagUSA}
                      alt="USA Flag"
                      width="25"
                      className="dropdown-image"
                    ></img>
                    USA
                  </a>
                  <a href="#AUD">
                    <img
                      src={flagAus}
                      alt="AUD Flag"
                      width="25"
                      className="dropdown-image"
                    ></img>
                    Australia
                  </a>
                  <a href="#IND">
                    <img
                      src={flagIndia}
                      alt="IND Flag"
                      width="25"
                      className="dropdown-image"
                    ></img>
                    India
                  </a>
                  <a href="#CAD">
                    <img
                      src={flagCanada}
                      alt="CAD Flag"
                      width="25"
                      className="dropdown-image"
                    ></img>
                    Canada
                  </a>
                  <a href="#EUR">
                    <img
                      src={flagEur}
                      alt="EUR Flag"
                      width="25"
                      className="dropdown-image"
                    ></img>
                    European Union
                  </a>
                  <a href="#CNY">
                    <img
                      src={flagChina}
                      alt="CNY Flag"
                      width="25"
                      className="dropdown-image"
                    ></img>
                    China
                  </a>
                </div>
              </div>
            </div>
            <div className="mr-0 mr-lg-2">

              <i className="w-icon-cart">
                <span className="cart-count">2</span>
              </i>

            </div>
          </div>
        </div>
      </div>
      {/*-- End of Header Middle --*/}

      <div className="header-bottom sticky-content fix-top sticky-header">
        <div className="container">
          <div className="inner-wrap">
            <div className="header-left flex-1">
              <div className="dropdown category-dropdown has-border"
                data-visible="true"
              >
                <a
                  href="#"
                  className="category-toggle"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="true"
                  data-display="static"
                  title="All Categories"
                >
                  <i className="w-icon-category"></i>
                  <span>All Categories</span>
                </a>

                <div className="dropdown-box">
                  <ul
                    className="menu vertical-menu category-menu"
                  >
                    <li className="has-submenu">
                      <a href="shop-fullwidth-banner.html">
                        <i className="w-icon-tshirt2"></i>Fashion
                      </a>
                      <ul className="megamenu">
                        <li>
                          <h4 className="menu-title">Women</h4>
                          <hr className="divider" />
                          <ul>
                            <li>
                              <a href="shop-fullwidth-banner.html">
                                New Arrivals
                              </a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-banner.html">
                                Best Sellers
                              </a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-banner.html">Trending</a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-banner.html">Clothing</a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-banner.html">Shoes</a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-banner.html">Bags</a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-banner.html">
                                Accessories
                              </a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-banner.html">
                                Jewlery & Watches
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <h4 className="menu-title">Men</h4>
                          <hr className="divider" />
                          <ul>
                            <li>
                              <a href="shop-fullwidth-banner.html">
                                New Arrivals
                              </a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-banner.html">
                                Best Sellers
                              </a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-banner.html">Trending</a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-banner.html">Clothing</a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-banner.html">Shoes</a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-banner.html">Bags</a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-banner.html">
                                Accessories
                              </a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-banner.html">
                                Jewlery & Watches
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">
                        <i className="w-icon-heartbeat"></i>Healthy & Beauty
                      </a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">
                        <i className="w-icon-gift"></i>Gift Ideas
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <form method="get" action="#"
                className="header-search hs-expanded hs-round d-none d-md-flex input-wrapper mr-4 ml-4">
                <input type="text" className="form-control" name="search" id="search"
                  placeholder="Search by Keyword, Catalog No. or CAS No." required />
                <button className="btn btn-search" type="submit"><i className="w-icon-search"></i>
                </button>
              </form>
            </div>
            <div className="header-right pr-0 ml-4">
              <button className="Enquiry-btn btn btn-primary"><i className="w-icon-map-marker mr-1"></i>Post Your Enquiry</button>

            </div>
          </div>
        </div>
      </div>
      {/*-- End of Header Bottom --*/}
    </header>
  );
};

export default Header;
