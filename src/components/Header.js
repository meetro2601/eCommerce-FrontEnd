import React from "react";
import styles from "./Header.module.scss";
import headerLogo from "../assets/images/logo/header-logo.png";
import shop from "../assets/images/header-icon/shop.png";
import deal from "../assets/images/header-icon/deal.png";
import blog from "../assets/images/header-icon/blog.png";
import sell from "../assets/images/header-icon/delivery-box.png";
import flagIndia from "../assets/images/flags/Flag_of_India.png";
import flagUSA from "../assets/images/flags/Flag_of_Usa.png";
import flagAus from "../assets/images/flags/Flag_of_Australia.png";
import flagCanada from "../assets/images/flags/Flag_of_Canada.png";
import flagEur from "../assets/images/flags/Flag_of_Europe.png";
import flagChina from "../assets/images/flags/Flag_of_China.png";


const Header = () => {
  return (
    <header class={styles["header"]}>
      <div class={styles["header-top"]}>
        <div class={styles["container"]}>
          <div class={styles["top-header-text"]}>
            FREE SHIPPING on orders over ₹10000
          </div>
        </div>
      </div>
      {/*-- End of Header Top --*/}

      <div class={styles["header-middle"]}>
        <div class={styles["container"]}>
          <div class={`${styles["header-left"]} mr-md-4`}>
            <a
              href="#"
              class={`${styles["mobile-menu-toggle"]} ${styles["w-icon-hamburger"]}`}
              aria-label="menu-toggle"
            ></a>
            <a href="index.html" class={`${styles["logo"]} ml-lg-0`}>
              <img src={headerLogo} alt="logo" width="180" />
            </a>
            <nav class={`${styles["main-nav"]} ${styles["header-icon-menu"]}`}>
              <ul class={styles["menu"]}>
                <li class={styles["active"]}>
                  <a href="Shop.html">
                    <img src={shop}></img>
                    <p>
                      {" "}
                      Shop <span>By Brand</span>{" "}
                    </p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={deal}></img>
                    <p>
                      {" "}
                      Ready <span>Stock</span>{" "}
                    </p>
                  </a>
                </li>
                <li>
                  <a href="blog.html">
                    <img src={blog}></img>
                    <p>
                      {" "}
                      Blogs <span>Latest News</span>{" "}
                    </p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={sell}></img>
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
            class={`${styles["header-right"]} ml-4`}
          >
            <div class={styles["header-sign-in"]}>
              <div class={styles["dropdown"]}>
                <a href="#Sign in ">Sign in </a>
                <div class={styles["dropdown-box"]}>
                  <a href="#"> Sign In</a>
                  <a href="#"> Compare</a>
                  <hr />
                  <a class={styles["Register"]} href="#">
                    {" "}
                    Register
                  </a>
                </div>
              </div>
            </div>
            <div class={styles["selected-country"]}>
              <div class={styles["dropdown"]}>
                <a href="#language">
                  <img
                    src={flagIndia}
                    alt="IND Flag"
                    width="25"
                    class={styles["dropdown-image"]}
                  ></img>{" "}
                  IND
                </a>
                <div class={styles["dropdown-box"]}>
                  <a href="#USA">
                    <img
                      src={flagUSA}
                      alt="USA Flag"
                      width="25"
                      class={styles["dropdown-image"]}
                    ></img>
                    USA
                  </a>
                  <a href="#AUD">
                    <img
                      src={flagAus}
                      alt="AUD Flag"
                      width="25"
                      class={styles["dropdown-image"]}
                    ></img>
                    Australia
                  </a>
                  <a href="#IND">
                    <img
                      src={flagIndia}
                      alt="IND Flag"
                      width="25"
                      class={styles["dropdown-image"]}
                    ></img>
                    India
                  </a>
                  <a href="#CAD">
                    <img
                      src={flagCanada}
                      alt="CAD Flag"
                      width="25"
                      class={styles["dropdown-image"]}
                    ></img>
                    Canada
                  </a>
                  <a href="#EUR">
                    <img
                      src={flagEur}
                      alt="EUR Flag"
                      width="25"
                      class={styles["dropdown-image"]}
                    ></img>
                    European Union
                  </a>
                  <a href="#CNY">
                    <img
                      src={flagChina}
                      alt="CNY Flag"
                      width="25"
                      class={styles["dropdown-image"]}
                    ></img>
                    China
                  </a>
                </div>
              </div>
            </div>
            <div class={`me-0 me-lg-2`}>
              <a href="#" class="cart-toggle label-down link">
                <i class={styles["w-icon-cart"]}>
                  <span class={styles["cart-count"]}>2</span>
                </i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*-- End of Header Middle --*/}

      <div class={`${styles["header-bottom"]}`}>
        <div class="container-fluid px-4">
          <div class={styles["inner-wrap"]}>
            <div class={`${styles["header-left"]} ${styles["flex-1"]}`}>
              <div class={`${styles["dropdown"]} ${styles["category-dropdown"]} ${styles["has-border"]}`}
                data-visible="true"
              >
                <a
                  href="#"
                  class={styles["category-toggle"]}
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="true"
                  data-display="static"
                  title="All Categories"
                >
                  <i class="w-icon-category"></i>
                  <span>All Categories</span>
                </a>

                <div class={styles["dropdown-box"]}>
                  <ul
                    class={`${styles["menu"]} ${styles["vertical-menu"]} ${styles["category-menu"]}`}
                  >
                    <li class={styles["has-submenu"]}>
                      <a href="shop-fullwidth-banner.html">
                        <i class="w-icon-tshirt2"></i>Fashion
                      </a>
                      <ul class={styles["megamenu"]}>
                        <li>
                          <h4 class={styles["menu-title"]}>Women</h4>
                          <hr class={styles["divider"]} />
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
                          <h4 class={styles["menu-title"]}>Men</h4>
                          <hr class={styles["divider"]} />
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
                        <i class="w-icon-heartbeat"></i>Healthy & Beauty
                      </a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">
                        <i class="w-icon-gift"></i>Gift Ideas
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <form method="get" action="#"
                                class={`${styles["header-search"]} ${styles["hs-expanded"]} ${styles["hs-round"]} d-none d-md-flex input-wrapper mr-4 ml-4`}>
                                <input type="text" class={styles["form-control"]} name="search" id="search"
                                    placeholder="Search by Keyword, Catalog No. or CAS No." required />
                                <button class={`${styles["btn"]} ${styles["btn-search"]}`} type="submit"><i class="w-icon-search"></i>
                                </button>
                            </form>
            </div>
            <div class={`${styles["header-right"]} pr-0 ml-4`}>
                            <button class={`${styles["Enquiry-btn"]} ${styles["btn"]} ${styles["btn-primary"]}`}><i class="w-icon-map-marker mr-1"></i>Post Your Enquiry</button>
                            
                        </div>
          </div>
        </div>
      </div>
      {/*-- End of Header Bottom --*/}
    </header>
  );
};

export default Header;
