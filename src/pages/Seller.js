import React from "react";
import logo from "../assets/images/logo/header-logo.png";
import map from "../assets/images/seller/map.png";
import worldwide from "../assets/images/seller/we_worldwide.png";
import b4dot from "../assets/images/seller/b4-dot-6.png";
import SellerTestimonials from "../components/Seller/SellerTestimonials";
import SellerNews from "../components/Seller/SellerNews";
import { Link } from "react-router-dom";

const Seller = () => {
  return (
    <div className="seller-module">
      <div className="full-width-header">
        <header
          id="rs-header"
          className="rs-header style3 modify1 header-transparent"
        >
          <div className="menu-area menu-sticky">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="sellers-col-2">
                  <div className="logo-part">
                    <Link to='/'>
                      <img src={logo} alt="logo" />
                    </Link>
                  </div>
                </div>
                <div className="sellers-col-10 text-right login-desktop">
                  <div className="rs-menu-area">
                    <form id="login-form" method="post" action="">
                      <div className="login-form-row">
                        <div className="form-group">
                          <input
                            className="from-control"
                            type="email"
                            id="LoginEmail"
                            name="Email address"
                            required=""
                          />
                          <label className="placeholder">Email address*</label>
                        </div>
                        <div className="form-group">
                          <input
                            className="from-control"
                            type="Password"
                            id="LoginPassword"
                            name="Password"
                            required=""
                          />
                          <label className="placeholder">Password*</label>
                          <span>Forgot Password?</span>
                        </div>
                        <div className="form-group mb-0">
                          <button type="submit" className="btn readon started">
                            LOGIN
                          </button>
                        </div>
                      </div>
                    </form>

                  </div>
                </div>
                <ul className="nav m_scroll_nav pull-right login-mobile">
                  <li>
                    <a href="#mSignin" className="btn btn-green lightgreen smc">
                      Sign in
                    </a>
                  </li>
                  <li>
                    <a
                      href="#seller_signup"
                      className="btn btn-orange lightorange smc is-selected"
                    >
                      Register
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
      </div>
      {/* Banner Section Start */}
      <div
        className="rs-banner style3 modify2"
        style={{ backgroundImage: `url(${map})` }}
      >
        <div className="container pt-10">
          <div className="row align-items-center">
            <div className="rs-banner-left col-md-6 mb-7">
              <div className="banner-content text-center">
                <img src={worldwide} alt='worldwide' />
                <h1 className="title">
                  World’s Leading Portal for Laboratory, Life Science &
                  Diagnostic Products
                </h1>

                <div className="btn-box lightgreen">
                  <strong>100,000+</strong>
                  <span>Products</span>
                </div>
                <div className="btn-box lightblue">
                  <strong>100+</strong>
                  <span>Brands</span>
                </div>
                <div className="btn-box lightorange">
                  <strong>100+</strong>
                  <span>Categories</span>
                </div>
              </div>
            </div>
            <div className="rs-banner-right md-mb-50 col-md-6 order-last">
              <div className="seller_details">
                <form
                  className="seller_details-form"
                  id="seller_signup"
                  action=""
                  method="post"
                  noValidate="novalidate"
                  siq_id="autopick_9791"
                >
                  <h3 className="m_padding">Enter Your Details</h3>
                  <span className="page-heading"></span>
                  <div className="register-form-box">
                    <div className="form-group w-48">
                      <input
                        className="from-control"
                        type="text"
                        id="Full Name"
                        name="Full Name"
                        required=""
                      />
                      <label className="placeholder">Full Name*</label>
                    </div>
                    <div className="form-group w-48">
                      <input
                        className="from-control"
                        type="text"
                        id="Mobile Number"
                        name="Mobile Number"
                        required=""
                      />
                      <label className="placeholder">Mobile Number*</label>
                    </div>
                    <div className="form-group w-48">
                      <input
                        className="from-control"
                        type="Email"
                        id="Email"
                        name="Email address"
                        required=""
                      />
                      <label className="placeholder">Email address*</label>
                    </div>
                    <div className="form-group w-48">
                      <input
                        className="from-control"
                        type="Password"
                        id="Password"
                        name="Password"
                        required=""
                      />
                      <label className="placeholder">Password*</label>
                    </div>
                    <div className="form-group w-48">
                      <input
                        className="from-control"
                        type="text"
                        id="Company"
                        name="Company Name"
                        required=""
                      />
                      <label className="placeholder">Company Name*</label>
                    </div>
                    <div className="form-group w-48">
                      <input
                        className="from-control"
                        type="text"
                        id="Designation"
                        name="Designation"
                        required=""
                      />
                      <label className="placeholder">Designation*</label>
                    </div>
                    <div className="form-group w-48">
                      <input
                        className="from-control"
                        type="text"
                        id="pin"
                        name="pin"
                        required=""
                      />
                      <label className="placeholder">Pin/zipcode*</label>
                    </div>
                    <div className="form-group w-48">
                      <input
                        className="from-control"
                        type="text"
                        id="Country"
                        name="Country"
                        required=""
                      />
                      <label className="placeholder">Country</label>
                    </div>
                    <div className="form-group w-48">
                      <input
                        className="from-control"
                        type="text"
                        id="State"
                        name="State"
                        required=""
                      />
                      <label className="placeholder">State</label>
                    </div>
                    <div className="form-group w-48">
                      <input
                        className="from-control"
                        type="text"
                        id="City"
                        name="City"
                        required=""
                      />
                      <label className="placeholder">City</label>
                    </div>
                    <div className="form-group w-48">
                      <select
                        id="business"
                        name="business"
                        className="formRow--input error"
                        placeholder=""
                      >
                        <option value="">Business Type*</option>
                        <option value="Manufacturer">Manufacturer</option>
                        <option value="Trader">Trader</option>
                        <option value="distributor">Distributor</option>
                        <option value="Exporter">Exporter</option>
                      </select>
                    </div>
                    <div className="form-group w-48">
                      <input
                        className="from-control"
                        type="text"
                        id="Tax"
                        name="Tax"
                        required=""
                      />
                      <label className="placeholder">
                        Tax No. (Eg. GST, VAT etc.)*
                      </label>
                    </div>
                    <div className="form-group w-100 register-btn">
                      <button type="submit" className="btn readon started">
                        REGISTER
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="rs-animation">
          <img className="dance3" src={b4dot} alt="images" />
        </div>
      </div>
      {/* Banner Section End */}
      {/* Services Section Start */}
      <div className="rs-services style2 modify1 How-it-Works">
        <div className="container">
          <div className="sec-title2 text-center mb-45">
            <h2 className="">How it Works?</h2>
          </div>
          <div className=" landingpage_icon xxl-icon text-center">
            <div className="howitswork-box">
              <span className="store"></span>
              <div className="howitswork-content">
                <h3 className="s-title">Seller Opens Store</h3>
              </div>
            </div>
            <div className="howitswork-box">
              <span className="inventory"></span>
              <div className="howitswork-content">
                <h3 className="s-title">Adds Inventory</h3>
              </div>
            </div>
            <div className="howitswork-box">
              <span className="recvs-order"></span>
              <div className="howitswork-content">
                <h3 className="s-title">Receives Order from Buyer</h3>
              </div>
            </div>
            <div className="howitswork-box">
              <span className="seller-ships"></span>
              <div className="howitswork-content">
                <h3 className="s-title">Seller Ships Products</h3>
              </div>
            </div>
            <div className="howitswork-box">
              <span className="bank-to-bank"></span>
              <div className="howitswork-content">
                <h3 className="s-title">Recevies Money from Biomall</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Services Section End */}
      {/* About Section Start */}
      <div id="rs-about" className="rs-about style2 modify2 gray-color Why-Us">
        <div className="container">
          <div className="sec-title text-center">
            <h2 className="">Why Us?</h2>
            <div className="landingpage_icon xl-icon text-center">
              <div className="whyus-box text-center">
                <span className="customers"></span>
                <div className="whyus-content">
                  <h3 className="s-title">Diverse Customer Base</h3>
                  <p>
                    Researchers from academic institutes, industries, hospitals
                    &amp; diagnostic centers
                  </p>
                </div>
              </div>
              <div className="whyus-box">
                <span className="cities"></span>
                <div className="whyus-content">
                  <h3 className="s-title">India Cities Served</h3>
                  <p>
                    Reach out to customers across the length and breadth of the
                    country
                  </p>
                </div>
              </div>
              <div className="whyus-box">
                <span className="countries"></span>
                <div className="whyus-content">
                  <h3 className="s-title">Countries Served</h3>
                  <p>
                    Promote your products to the global scientific community
                  </p>
                </div>
              </div>
              <div className="whyus-box">
                <span className="keywords"></span>
                <div className="whyus-content">
                  <h3 className="s-title">High Ranking Keywords</h3>
                  <p>
                    Get high visibility for your products on popular search
                    engines
                  </p>
                </div>
              </div>
              <div className="whyus-box">
                <span className="growth"></span>
                <div className="whyus-content">
                  <h3 className="s-title">Growth Partners</h3>
                  <p>Promote and grow your business exponentially with us</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  About Section End */}
      {/* Industry Section Start */}
      <div className="rs-industry Buyers-Profile">
        <div className="container">
          <div className="sec-title2 text-center mb-45">
            <h2 className="">Buyers Profile</h2>
          </div>
          <div className="landingpage_icon xl-icon text-center">
            <div className="profile-box">
              <span className="pharma"></span>
              <div className="profile-content">
                <h3 className="s-title">Pharma/Biotech</h3>
              </div>
            </div>
            <div className="profile-box">
              <span className="institutes"></span>
              <div className="profile-content">
                <h3 className="s-title">Research Institutes</h3>
              </div>
            </div>
            <div className="profile-box">
              <span className="healthcare"></span>
              <div className="profile-content">
                <h3 className="s-title">Healthcare</h3>
              </div>
            </div>
            <div className="profile-box">
              <span className="industries"></span>
              <div className="profile-content">
                <h3 className="s-title">Industries</h3>
              </div>
            </div>
            <div className="profile-box">
              <span className="dealers"></span>
              <div className="profile-content">
                <h3 className="s-title">Dealers</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Industry Section End */}
      {/* Technology Section Start */}
      <SellerTestimonials></SellerTestimonials>
      {/* Technology Section End */}
      {/* News Section Start */}
      <SellerNews></SellerNews>
      {/* News Section End */}
      {/* Footer Start */}
      <footer id="rs-footer" className="rs-footer">
        <div className="footer-bottom text-center">
          <div className="copyright">
            <p>
              {" "}
              Copyrights © 2020 <a href="http://rstheme.com/">Biomall.in</a>.
              All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
      {/* Footer End */}
    </div>
  );
};

export default Seller;
