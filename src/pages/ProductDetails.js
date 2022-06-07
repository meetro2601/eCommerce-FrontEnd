import { Link } from "react-router-dom";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Images from "../config/image";

const ProductDetails = () => {
  return (
    <div className="mb-10 pb-1">
      <nav className="breadcrumb-nav container">
        <ul className="breadcrumb bb-no">
          <li>
            <a href="demo1.html">Home</a>
          </li>
          <li>
            <a href="product-default.html">Products</a>
          </li>
          <li>Vertical Thumbs</li>
        </ul>
      </nav>
      <div className="page-content">
        <div className="container">
          <div className="row gutter-lg">
            <div className="main-content">
              <div className="product product-single row">
                <div className="col-md-6 mb-6">
                  <div className="product-gallery product-gallery-sticky product-gallery-vertical">
                          <figure className="product-image">
                            <img
                              src={Images.ProductDetailImage}
                              data-zoom-image={Images.ProductDetailImage}
                              alt="Electronics Black Wrist Watch"
                              width="800"
                              height="900"
                            />
                          </figure>
                  </div>
                </div>
                <div className="col-md-6 sticky-sidebar-wrapper mb-4 mb-md-6">
                  <div
                    className="product-details sticky-sidebar"
                    data-sticky-options="{'minWidth': 767}"
                  >
                    <h1 className="product-title">Professsional Camera Set</h1>
                    <div className="product-bm-wrapper">
                      <figure className="brand">
                        <img
                          src={Images.Brand2}
                          alt="Brand"
                          width="105"
                          height="48"
                        />
                      </figure>
                      <div className="product-meta">
                        <div className="product-categories">
                          Category:
                          <span className="product-category">
                            <a href="/">Electronics</a>
                          </span>
                        </div>
                        <div className="product-sku">
                          SKU: <span>MS46891374</span>
                        </div>
                      </div>
                    </div>

                    <hr className="product-divider" />

                    <div className="product-price">
                      <ins className="new-price">$780.00</ins>
                    </div>

                    <div className="ratings-container">
                      <div className="ratings-full">
                        <span
                          className="ratings"
                          style={{ width: "80%" }}
                        ></span>
                        <span className="tooltiptext tooltip-top"></span>
                      </div>
                      <a href="#product-tab-reviews" className="rating-reviews">
                        (3 Reviews)
                      </a>
                    </div>

                    <div className="product-short-desc lh-2">
                      Ultrices eros in cursus turpis massa cursus mattis.
                      Volutpat ac tincidunt vitae semper quis lectus aliquam id.
                    </div>

                    <hr className="product-divider" />

                    <div className="product-form container">
                      <div className="product-qty-form">
                        <div className="input-group">
                          <input
                            className="quantity form-control"
                            type="number"
                            min="1"
                            max="10000000"
                          />
                          <button className="quantity-plus w-icon-plus"></button>
                          <button className="quantity-minus w-icon-minus"></button>
                        </div>
                      </div>
                      <button className="btn btn-primary btn-cart">
                        <i className="w-icon-cart"></i>
                        <span>Add to Cart</span>
                      </button>
                    </div>

                    <div className="social-links-wrapper">
                      <div className="social-links">
                        <div className="social-icons social-no-color border-thin">
                          <a
                            href="/"
                            className="social-icon social-facebook w-icon-facebook"
                          >F</a>
                          <a
                            href="/"
                            className="social-icon social-twitter w-icon-twitter"
                          >T</a>
                          <a
                            href="/"
                            className="social-icon social-pinterest fab fa-pinterest-p"
                          >P</a>
                          <a
                            href="/"
                            className="social-icon social-whatsapp fab fa-whatsapp"
                          >W</a>
                          <a
                            href="/"
                            className="social-icon social-youtube fab fa-linkedin-in"
                          >L</a>
                        </div>
                      </div>
                      <span className="divider d-xs-show"></span>
                      <div className="product-link-wrapper d-flex">
                        <a
                          href="/"
                          className="btn-product-icon btn-wishlist w-icon-heart"
                        >
                          <span></span>
                        </a>
                        <a
                          href="/"
                          className="btn-product-icon btn-compare btn-icon-left w-icon-compare"
                        >
                          <span></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tab tab-nav-boxed tab-nav-underline product-tabs mt-3">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      href="#product-tab-description"
                      className="nav-link active"
                    >
                      Description
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#product-tab-reviews" className="nav-link">
                      Reviews
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane active" id="product-tab-description">
                    <div>
                      <h4 className="title tab-pane-title font-weight-bold mb-2">
                        Detail
                      </h4>
                      <p className="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt arcu cursus vitae
                        congue mauris. Sagittis id consectetur purus ut. Tellus
                        rutrum tellus pelle Vel pretium lectus quam id leo in
                        vitae turpis massa.
                      </p>
                      <ul className="list-type-check">
                        <li>
                          Nunc nec porttitor turpis. In eu risus enim. In vitae
                          mollis elit.
                        </li>
                        <li>Vivamus finibus vel mauris ut vehicula.</li>
                        <li>
                          Nullam a magna porttitor, dictum risus nec, faucibus
                          sapien.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="tab-pane" id="product-tab-reviews">
                    <div className="tab tab-nav-boxed tab-nav-outline tab-nav-center">
                      <div className="tab-content">
                        <div className="tab-pane active" id="show-all">
                          <ul className="comments list-style-none">
                            <li className="comment">
                              <div className="comment-body">
                                <div className="comment-content">
                                  <h4 className="comment-author">
                                    <a href="/">John Doe</a>
                                    <span className="comment-date">
                                      March 22, 2021 at 1:54 pm
                                    </span>
                                  </h4>
                                  <div className="ratings-container comment-rating">
                                    <div className="ratings-full">
                                      <span
                                        className="ratings"
                                        style={{ width: "60%" }}
                                      ></span>
                                      <span className="tooltiptext tooltip-top"></span>
                                    </div>
                                  </div>
                                  <p>
                                    pellentesque habitant morbi tristique
                                    senectus et. In dictum non consectetur a
                                    erat. Nunc ultrices eros in cursus turpis
                                    massa tincidunt ante in nibh mauris cursus
                                    mattis. Cras ornare arcu dui vivamus arcu
                                    felis bibendum ut tristique.
                                  </p>
                                </div>
                              </div>
                            </li>
                            <li className="comment">
                              <div className="comment-body">
                                <div className="comment-content">
                                  <h4 className="comment-author">
                                    <a href="/">John Doe</a>
                                    <span className="comment-date">
                                      March 22, 2021 at 1:52 pm
                                    </span>
                                  </h4>
                                  <div className="ratings-container comment-rating">
                                    <div className="ratings-full">
                                      <span
                                        className="ratings"
                                        style={{ width: "80%" }}
                                      ></span>
                                      <span className="tooltiptext tooltip-top"></span>
                                    </div>
                                  </div>
                                  <p>
                                    Nullam a magna porttitor, dictum risus nec,
                                    faucibus sapien. Ultrices eros in cursus
                                    turpis massa tincidunt ante in nibh mauris
                                    cursus mattis. Cras ornare arcu dui vivamus
                                    arcu felis bibendum ut tristique.
                                  </p>
                                </div>
                              </div>
                            </li>
                            <li className="comment">
                              <div className="comment-body">
                                <div className="comment-content">
                                  <h4 className="comment-author">
                                    <a href="/">John Doe</a>
                                    <span className="comment-date">
                                      March 22, 2021 at 1:21 pm
                                    </span>
                                  </h4>
                                  <div className="ratings-container comment-rating">
                                    <div className="ratings-full">
                                      <span
                                        className="ratings"
                                        style={{ width: "60%" }}
                                      ></span>
                                      <span className="tooltiptext tooltip-top"></span>
                                    </div>
                                  </div>
                                  <p>
                                    In fermentum et sollicitudin ac orci
                                    phasellus. A condimentum vitae sapien
                                    pellentesque habitant morbi tristique
                                    senectus et. In dictum non consectetur a
                                    erat. Nunc scelerisque viverra mauris in
                                    aliquam sem fringilla.
                                  </p>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <section className="related-product-section">
                <div className="title-link-wrapper mb-4">
                  <h4 className="title">Related Products</h4>
                  <a
                    href="/"
                    className="btn btn-dark btn-link btn-slide-right btn-icon-right"
                  >
                    More Products<i className="w-icon-long-arrow-right"></i>
                  </a>
                </div>
                <Swiper
                  className="swiper-theme"
                  modules={[Pagination]}
                  pagination={{clickable:true}}
                  spaceBetween={20}
                  slidesPerView={2}
                  breakpoints={{
                    576: {
                      slidesPerView: 3,
                    },
                    768: {
                      slidesPerView: 4,
                    },
                  }}
                >
                  <SwiperSlide>
                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="product-default.html">
                          <img
                            src={Images.ProductImage5}
                            alt="Product"
                            width="300"
                            height="338"
                          />
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
                          <Link to="/productDetails">Drone</Link>
                        </h4>
                        <h5>Brand: PQRS</h5>
                        <h5 className="product-price">$632.00</h5>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="product-default.html">
                          <img
                            src={Images.ProductImage6}
                            alt="Product"
                            width="300"
                            height="338"
                          />
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
                          <Link to="/productDetails">Official Camera</Link>
                        </h4>
                        <h5>Brand: PQRS</h5>
                        <h5 className="product-price">
                          <ins class="new-price">$263.00</ins>
                          <del class="old-price">$300.00</del>
                        </h5>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="product-default.html">
                          <img
                            src={Images.ProductImage71}
                            alt="Product"
                            width="300"
                            height="338"
                          />
                          <img
                            src={Images.ProductImage72}
                            alt="Product"
                            width="300"
                            height="338"
                          />
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
                          <Link to="/productDetails">Phone Charge Pad</Link>
                        </h4>
                        <h5>Brand: PQRS</h5>
                        <h5 className="product-price">$23.00</h5>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="product-default.html">
                          <img
                            src={Images.ProductImage2}
                            alt="Product"
                            width="300"
                            height="338"
                          />
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
                          <Link to="/productDetails">Fashionalble Pencil</Link>
                        </h4>
                        <h5>Brand: PQRS</h5>
                        <h5 className="product-price">$50.00</h5>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </section>
            </div>
            <aside className="sidebar product-sidebar sidebar-fixed right-sidebar sticky-sidebar-wrapper">
              <div className="sidebar-overlay"></div>
              <a className="sidebar-close" href="/">
                <i className="close-icon"></i>
              </a>
              <a href="/" className="sidebar-toggle d-flex d-lg-none">
                <i className="fas fa-chevron-left"></i>
              </a>
              <div className="sidebar-content scrollable">
                <div className="sticky-sidebar">
                  <div className="widget widget-icon-box mb-6">
                    <div className="icon-box icon-box-side">
                      <span className="icon-box-icon text-dark">
                        <i className="w-icon-truck"></i>
                      </span>
                      <div className="icon-box-content">
                        <h4 className="icon-box-title">
                          Free Shipping & Returns
                        </h4>
                        <p>For all orders over $99</p>
                      </div>
                    </div>
                    <div className="icon-box icon-box-side">
                      <span className="icon-box-icon text-dark">
                        <i className="w-icon-bag"></i>
                      </span>
                      <div className="icon-box-content">
                        <h4 className="icon-box-title">Secure Payment</h4>
                        <p>We ensure secure payment</p>
                      </div>
                    </div>
                    <div className="icon-box icon-box-side">
                      <span className="icon-box-icon text-dark">
                        <i className="w-icon-money"></i>
                      </span>
                      <div className="icon-box-content">
                        <h4 className="icon-box-title">Money Back Guarantee</h4>
                        <p>Any back within 30 days</p>
                      </div>
                    </div>
                  </div>

                  <div className="widget widget-banner mb-9">
                    <div className="banner banner-fixed br-sm">
                      <figure>
                        <img
                          src={Images.Banner3}
                          alt="Banner"
                          width="266"
                          height="220"
                          style={{ backgroundColor: "#1D2D44" }}
                        />
                      </figure>
                      <div className="banner-content">
                        <div className="banner-price-info font-weight-bolder text-white lh-1 ls-25">
                          40<sup className="font-weight-bold">%</sup>
                          <sub className="font-weight-bold text-uppercase ls-25">
                            Off
                          </sub>
                        </div>
                        <h4 className="banner-subtitle text-white font-weight-bolder text-uppercase mb-0">
                          Ultimate Sale
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;