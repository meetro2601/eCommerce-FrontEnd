import React, { useEffect } from "react";
import ProductSwiper from "../components/Product/ProductSwiper";
import pro11 from "../assets/images/demos/demo2/products/1-1-1.jpg";
import pro12 from "../assets/images/demos/demo2/products/1-1-2.jpg";
import pro411 from "../assets/images/demos/demo2/products/4-1-1.jpg";
import pro412 from "../assets/images/demos/demo2/products/4-1-2.jpg";
import categoryBanner11 from "../assets/images/demos/demo2/categories/1-1.jpg";
import categoryBanner12 from "../assets/images/demos/demo2/categories/1-2.jpg";
import AboutImg from '../assets/images/demos/demo2/about.jpg'
import IntroBanner from "../components/Banner/IntroBanner";
import Banner from "../components/Banner/Banner";
import BannerSwiper from "../components/Banner/BannerSwiper";
import BrandSwiper from "../components/Brands/BrandSwiper";
import CategorySwiper from "../components/Category/CategorySwiper";
import BlogPostSwiper from "../components/blog/BlogPostSwiper";
import Testimonials from "../components/Testimonials/Testimonials";

const productsList = [
  {
    id: 1,
    name: "Women's Comforter",
    brand: "XYZ",
    price: "$45.62",
    images: [pro11, pro12],
  },
  {
    id: 2,
    name: "White Schoolbag",
    brand: "ABC",
    price: "$56.48",
    images: [pro411, pro412],
  },
];

const Home = () => {

  // useEffect(() => {
  //   const script1 = document.createElement('script')
  //   const script2 = document.createElement('script')
  //   script1.async = true
  //   // script2.async = true
  //   // script2.src = "./js/jquery.min.js"
  //   script1.src = "./js/main.min.js"
  //   // document.body.appendChild(script2)
  //   document.body.appendChild(script1)

  //   return ()=>{
  //     document.body.removeChild(script1)
  //     // document.body.removeChild(script2)
  //   }
  // }, [])

  return (
    <>
      <div className="intro-section mb-7">
        <IntroBanner></IntroBanner>
      </div>
      {/* ====================================================== */}
      <div className="container">
        <div className="title-link-wrapper mb-3 appear-animate">
          <h2 className="title title-deals mb-1">Best Selling Products</h2>

          <a href="shop-boxed-banner.html" className="font-weight-bold ls-25">
            More Products<i className="w-icon-long-arrow-right"></i>
          </a>
        </div>
        <ProductSwiper productsList={productsList}></ProductSwiper>
        {/* ====================================================== */}
        <div className="row category-wrapper electronics-cosmetics appear-animate mb-7">
          <div className="col-md-6">
            <div className="banner banner-fixed br-sm">
              <figure>
                <img
                  src={categoryBanner11}
                  alt="Category Banner"
                  width="640"
                  height="200"
                  style={{ backgroundColor: "#25282D" }}
                />
              </figure>
              <div className="banner-content y-50">
                <h3 className="banner-title text-white ls-25 mb-0">
                  Electronics
                </h3>
                <div className="banner-price-info text-white font-weight-bold text-uppercase mb-1">
                  Starting At
                  <strong className="text-secondary">$125.00</strong>
                </div>
                <hr className="banner-divider bg-white" />
                <a
                  href="shop-banner-sidebar.html"
                  className="btn btn-white btn-link btn-underline btn-icon-right"
                >
                  Shop Now<i className="w-icon-long-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="banner banner-fixed br-sm">
              <figure>
                <img
                  src={categoryBanner12}
                  alt="Category Banner"
                  width="640"
                  height="200"
                  style={{ backgroundColor: "#eeedec" }}
                />
              </figure>
              <div className="banner-content y-50">
                <h3 className="banner-title ls-25 text-capitalize mb-0">
                  Cosmetics Sets
                </h3>
                <div className="banner-price-info font-weight-bold text-uppercase mb-1">
                  Sale Up To
                  <strong className="text-secondary">30% Off</strong>
                </div>
                <hr className="banner-divider bg-dark" />
                <a
                  href="shop-banner-sidebar.html"
                  className="btn btn-dark btn-link btn-underline btn-icon-right"
                >
                  Shop Now<i className="w-icon-long-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* ====================================================== */}
        <div className="banner-product-wrapper appear-animate">
          <Banner></Banner>
          <div className="title-link-wrapper mb-3 appear-animate">
            <h2 className="title title-deals mb-1">Ready Stock</h2>

            <a href="shop-boxed-banner.html" className="font-weight-bold ls-25">
              More Products<i className="w-icon-long-arrow-right"></i>
            </a>
          </div>
          <ProductSwiper productsList={productsList}></ProductSwiper>
          <BannerSwiper></BannerSwiper>
        </div>
        {/* ====================================================== */}
        <div className="mb-7">
          <div className="title-link-wrapper mb-3 appear-animate">
            <h2 className="title title-deals mb-1">Top Brands</h2>
            <a href="shop-boxed-banner.html" className="font-weight-bold ls-25">
              More Brands<i className="w-icon-long-arrow-right"></i>
            </a>
          </div>
          <BrandSwiper></BrandSwiper>
        </div>
        {/* ====================================================== */}
        <div className="banner-product-wrapper appear-animate">
          <div className="title-link-wrapper mb-3 appear-animate">
            <h2 className="title title-deals mb-1">Latest Products</h2>

            <a href="shop-boxed-banner.html" className="font-weight-bold ls-25">
              More Products<i className="w-icon-long-arrow-right"></i>
            </a>
          </div>
          <ProductSwiper productsList={productsList}></ProductSwiper>
        </div>
        {/* ====================================================== */}
        <div className="banner-product-wrapper appear-animate">
          <div className="title-link-wrapper mb-3 appear-animate">
            <h2 className="title title-deals mb-1">Offer on Products</h2>

            <a href="shop-boxed-banner.html" className="font-weight-bold ls-25">
              More Products<i className="w-icon-long-arrow-right"></i>
            </a>
          </div>
          <ProductSwiper productsList={productsList}></ProductSwiper>
        </div>
        {/* ====================================================== */}
        <div className="mb-7">
          <div className="title-link-wrapper mb-3 appear-animate">
            <h2 className="title title-deals mb-1">Top Categories</h2>
            {/* <a href="shop-boxed-banner.html" className="font-weight-bold ls-25">
            More Categories<i className="w-icon-long-arrow-right"></i>
          </a> */}
          </div>
          <CategorySwiper></CategorySwiper>
        </div>
      </div>
      {/* ====================================================== */}
      <Testimonials></Testimonials>
      {/* ====================================================== */}
      <div className="container">
        <div className="mb-7">
          <div className="title-link-wrapper mb-3 appear-animate">
            <h2 className="title title-deals mb-1">News & Updates</h2>
            {/* <a href="shop-boxed-banner.html" className="font-weight-bold ls-25">
            More Categories<i className="w-icon-long-arrow-right"></i>
          </a> */}
          </div>
          <BlogPostSwiper></BlogPostSwiper>
        </div>
        {/* ====================================================== */}
        <div className="about-us customer-service row align-items-center">
          <div className="col-md-6 pr-lg-8 mb-8">
            <h2 className="title text-left">
              We Provide Continuous &amp; Kind Service for Customers
            </h2>
            <div className="accordion accordion-simple accordion-plus">
              <div className="card border-no">
                <div className="card-header">
                  <a href="#collapse3-1" className="collapse">
                    Customer Service
                  </a>
                </div>
                <div className="card-body expanded" id="collapse3-1">
                  <p className="mb-0">
                    Lorem ipsum dolor sit eiusamet, consectetur adipiscing elit,
                    sed do eius mod tempor incididunt ut labore et dolore magna
                    aliqua. Venenatis tell us in metus vulputate eu scelerisque
                    felis. Vel pretium vulp.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <a href="#collapse3-2" className="expand">
                    Online Consultation
                  </a>
                </div>
                <div className="card-body collapsed" id="collapse3-2">
                  <p className="mb-0">
                    Lorem ipsum dolor sit eiusamet, consectetur adipiscing elit,
                    sed do eius mod tempor incididunt ut labore et dolore magna
                    aliqua. Venenatis tell us in metus vulputate eu scelerisque
                    felis. Vel pretium vulp.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <a href="#collapse3-3" className="expand">
                    Sales Management
                  </a>
                </div>
                <div className="card-body collapsed" id="collapse3-3">
                  <p className="mb-0">
                    Lorem ipsum dolor sit eiusamet, consectetur adipiscing elit,
                    sed do eius mod tempor incididunt ut labore et dolore magna
                    aliqua. Venenatis tell us in metus vulputate eu scelerisque
                    felis. Vel pretium vulp.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-8">
            <figure className="br-lg">
              <img
                src={AboutImg}
                alt="about-us"
                width="610"
                height="500"
                style={{ backgroundColor: "#CECECC" }}
              ></img>
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
