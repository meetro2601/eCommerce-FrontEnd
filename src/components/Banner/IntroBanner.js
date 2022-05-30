import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import ski from "../../assets/images/slides/ski.png";
import woman from "../../assets/images/slides/woman.png";
import man from "../../assets/images/slides/man.png";
import slide1 from "../../assets/images/slides/slide-1.jpg";
import slide2 from "../../assets/images/slides/slide-2.jpg";
import slide3 from "../../assets/images/slides/slide-3.jpg";

const IntroBanner = () => {
  return (
    <Swiper
      className="swiper-theme nav-inner pg-inner animation-slider pg-xxl-hide pg-show nav-xxl-show nav-hide"
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      autoplay={{delay:4000, disableOnInteraction:false}}
    >
      <SwiperSlide
        className="banner banner-fixed intro-slide intro-slide1"
        style={{
          backgroundImage: `url(${slide1})`,
          backgroundColor: ` #f1f0f0`,
        }}
      >
        <div className="container">
          <figure
            className="slide-image floating-item slide-animate"
            data-animation-options="{
                                    'name': 'fadeInDownShorter', 'duration': '1s'
                                }"
            data-options="{'relativeInput':true,'clipRelativeInput':true,'invertX':true,'invertY':true}"
            data-child-depth="0.2"
          >
            <img src={ski} alt="Ski" width="729" height="570" />
          </figure>
          <div className="banner-content text-right y-50 ml-auto">
            <h5
              className="banner-subtitle text-uppercase font-weight-bold mb-2 slide-animate"
              data-animation-options="{
                                        'name': 'fadeInUpShorter', 'duration': '1s'
                                    }"
            >
              Deals And Promotions
            </h5>
            <h3
              className="banner-title ls-25 mb-6 slide-animate"
              data-animation-options="{
                                        'name': 'fadeInUpShorter', 'duration': '1s'
                                    }"
            >
              Fashion <span className="text-primary">Skiwears</span> for the
              ardent Sports devotees
            </h3>
            <a
              href="shop-banner-sidebar.html"
              className="btn btn-dark btn-outline btn-rounded btn-icon-right slide-animate"
              data-animation-options="{
                                        'name': 'fadeInUpShorter', 'duration': '1s'
                                    }"
            >
              Shop Now<i className="w-icon-long-arrow-right"></i>
            </a>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide
        className="banner banner-fixed intro-slide intro-slide2"
        style={{
          backgroundImage: `url(${slide2})`,
          backgroundColor: `#d9ddd9`,
        }}
      >
        <div className="container">
          <figure
            className="slide-image floating-item slide-animate"
            data-animation-options="{
                                    'name': 'fadeInUpShorter', 'duration': '1s'
                                }"
            data-options="{'relativeInput':true,'clipRelativeInput':true,'invertX':true,'invertY':true}"
            data-child-depth="0.2"
          >
            <img src={woman} alt="woman" width="865" height="732" />
          </figure>
          <div className="banner-content y-50">
            <h5
              className="banner-subtitle text-uppercase font-weight-bold mb-2 slide-animate"
              data-animation-options="{
                                        'name': 'fadeInRightShorter', 'duration': '1s', 'delay': '.5s'
                                    }"
            >
              News And Inspiration
            </h5>
            <h3
              className="banner-title ls-25 mb-2 text-uppercase lh-1 slide-animate"
              data-animation-options="{
                                        'name': 'fadeInRightShorter', 'duration': '1s', 'delay': '.7s'
                                    }"
            >
              Natural Sound
            </h3>
            <div
              className="banner-price-info font-weight-bold text-dark ls-25 slide-animate"
              data-animation-options="{
                                        'name': 'fadeInRightShorter', 'duration': '1s', 'delay': '.9s'
                                    }"
            >
              Sale up to
              <span className="text-primary font-weight-bolder text-uppercase ls-normal">
                30% Off
              </span>
            </div>
            <p
              className="font-weight-normal text-default ls-25 slide-animate"
              data-animation-options="{
                                        'name': 'fadeInRightShorter', 'duration': '1s', 'delay': '1.1s'
                                    }"
            >
              Free returns extended to 30 days after delivery
            </p>
            <a
              href="shop-banner-sidebar.html"
              className="btn btn-dark btn-outline btn-rounded btn-icon-right slide-animate"
              data-animation-options="{
                                        'name': 'fadeInRightShorter', 'duration': '1s', 'delay': '1.3s'
                                    }"
            >
              Shop Now<i className="w-icon-long-arrow-right"></i>
            </a>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide
        className="banner banner-fixed intro-slide intro-slide2"
        style={{
          backgroundImage: `url(${slide3})`,
          backgroundColor: `#d0cfcb`,
        }}
      >
        <div className="container">
          <figure
            className="slide-image floating-item slide-animate"
            data-animation-options="{
                                    'name': 'fadeInRightShorter', 'duration': '1s'
                                }"
            data-options="{'relativeInput':true,'clipRelativeInput':true,'invertX':true,'invertY':true}"
            data-child-depth="0.2"
          >
            <img
              src={man}
              alt="Ski"
              width="527"
              height="481"
            />
          </figure>
          <div className="banner-content y-50">
            <h5
              className="banner-subtitle text-uppercase font-weight-bold slide-animate"
              data-animation-options="{
                                        'name': 'fadeInRightShorter', 'duration': '1s'
                                    }"
            >
              Top Monthly Seller
            </h5>
            <h4
              className="banner-title ls-25 slide-animate"
              data-animation-options="{
                                        'name': 'fadeInRightShorter', 'duration': '1s'
                                    }"
            >
              Sumsung 52 Inches Full HD{" "}
              <span className="text-primary">Smart LED</span> TV
            </h4>
            <p
              className="font-weight-normal text-dark slide-animate"
              data-animation-options="{
                                        'name': 'fadeInRightShorter', 'duration': '1s'
                                    }"
            >
              Only until the end of this week.
            </p>
            <a
              href="shop-banner-sidebar.html"
              className="btn btn-dark btn-outline btn-rounded btn-icon-right slide-animate"
              data-animation-options="{
                                        'name': 'fadeInRightShorter', 'duration': '1s'
                                    }"
            >
              Shop Now<i className="w-icon-long-arrow-right"></i>
            </a>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default IntroBanner;
