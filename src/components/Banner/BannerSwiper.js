import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import banner2 from "../../assets/images/demos/demo2/banners/2.jpg";
import banner3 from "../../assets/images/demos/demo2/banners/3.jpg";
import Banner from "./Banner";

const BannerSwiper = () => {
  return (
    <Swiper
      className="nav-inner pg-inner pg-xxl-hide pg-show nav-xxl-show nav-hide"
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
    >
      <SwiperSlide>
        <div
          className="banner br-sm pt-9"
          style={{
            backgroundImage: `url(${banner2})`,
            backgroundColor: "#E0E1E5",
          }}
        >
          <div className="banner-content">
            <h5 className="banner-subtitle font-weight-normal text-capitalize texyt-dark ls-25 mb-0">
              From Onlin Store
            </h5>
            <h3 className="banner-title text-capitalize ls-25 mb-4">
              Xbox One's <span className="text-primary">Limited</span> Edition
            </h3>
            <a
              href="shop-boxed-banner.html"
              className="btn btn-dark btn-link btn-underline btn-icon-right"
            >
              View Detail<i className="w-icon-long-arrow-right"></i>
            </a>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="banner br-sm banner-electronics" style={{backgroundImage: `url(${banner3})`,
                    backgroundColor: "#333"}}>
                    <div className="banner-content mr-10 pr-1">
                        <div className="banner-price-info text-white font-weight-normal ls-25">
                            Save Big on <span className="font-weight-bolder text-secondary text-uppercase">50% Off</span>
                        </div>
                        <h3 className="banner-title text-white mb-0 ls-25">Cameras and Leans Sale</h3>
                    </div>
                    <a href="shop-banner-sidebar.html" className="btn btn-white btn-rounded btn-icon-right mt-1">Shop Now<i
                            className="w-icon-long-arrow-right"></i></a>
                </div>
      </SwiperSlide>
      <SwiperSlide>
        <Banner></Banner>
      </SwiperSlide>
    </Swiper>
  );
};

export default BannerSwiper;
