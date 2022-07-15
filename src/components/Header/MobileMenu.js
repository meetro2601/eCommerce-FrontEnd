import React from "react";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  return (
    <div className="mobile-menu-wrapper">
      <div className="mobile-menu-overlay"></div>

      <button className="mobile-menu-close">
        <i className="close-icon"></i>
      </button>
      <div className="mobile-menu-container scrollable">
        <form action="#" method="get" className="input-wrapper">
          <input
            type="text"
            className="form-control"
            name="search"
            autoComplete="off"
            placeholder="Search"
            required
          />
          <button className="btn btn-search" type="submit">
            <i className="w-icon-search"></i>
          </button>
        </form>
        {/* End of Search Form */}
        <div className="tab">
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item">
              <a href="#main-menu" className="nav-link active">
                Main Menu
              </a>
            </li>
            <li className="nav-item">
              <a href="#categories" className="nav-link">
                Categories
              </a>
            </li>
          </ul>
        </div>
        {/* End of Tabs */}
        <div className="tab-content">
          <div className="tab-pane active" id="main-menu">
            <ul className="mobile-menu">
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/brands'>Shop by Brands</Link>
              </li>
              <li>
                <Link to='/shop'>Ready Stocks</Link>
              </li>
              <li>
                <Link to='/blogs'>Blog</Link>
              </li>
              <li>
                <Link to='/seller'>Sell</Link>
              </li>
            </ul>
          </div>
          {/* End of Main menu  */}
          <div className="tab-pane" id="categories">
            <ul className="mobile-menu">
              <li>
                <a href="shop-fullwidth-banner.html">
                  <i className="w-icon-tshirt2"></i>Fashion
                </a>
                <ul>
                  <li>
                    <a href="/">Women</a>
                    <ul>
                      <li>
                        <a href="shop-fullwidth-banner.html">New Arrivals</a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-banner.html">Best Sellers</a>
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
                        <a href="shop-fullwidth-banner.html">Accessories</a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-banner.html">
                          Jewlery & Watches
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/">Men</a>
                    <ul>
                      <li>
                        <a href="shop-fullwidth-banner.html">New Arrivals</a>
                      </li>
                      <li>
                        <a href="shop-fullwidth-banner.html">Best Sellers</a>
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
                        <a href="shop-fullwidth-banner.html">Accessories</a>
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
          {/* End of Category menu */}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
