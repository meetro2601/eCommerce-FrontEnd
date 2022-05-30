import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import brand1 from "../../assets/images/brands/b1.jpg";
import brand2 from "../../assets/images/brands/b2.jpg";
import brand3 from "../../assets/images/brands/b3.jpg";
import { Link } from "react-router-dom";

const BrandsList = [
  {
    id: 1,
    image: brand1,
    name: "Art Lab",
  },
  {
    id: 2,
    image: brand2,
    name: "Nanochemazone",
  },
  {
    id: 3,
    image: brand3,
    name: "AIM Scientific",
  },
];

const BrandSwiper = () => {
  return (
    <Swiper
      className="swiper-theme nav-hide"
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={20}
      slidesPerView={2}
      breakpoints={{
        576: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 5,
        },
        992: {
          slidesPerView: 6,
        },
        1200: {
          slidesPerView: 7,
        },
      }}
    >
      {BrandsList.map((brand) => {
        return (
          <SwiperSlide key={brand.id}>
            <Link to="#">
              <div className="product text-center product-absolute">
                <figure className="product-media">
                    <img
                      src={brand.image}
                      alt="Brand"
                      style={{ backgroundColor: "#fff" }}
                    />
                </figure>
                <h5 className="product-name">{brand.name}</h5>
              </div>
            </Link>
          </SwiperSlide>
        );
      })}
      {BrandsList.map((brand) => {
        return (
          <SwiperSlide key={brand.id}>
            <Link to="#">
              <div className="product text-center product-absolute">
                <figure className="product-media">
                    <img
                      src={brand.image}
                      alt="Brand"
                      style={{ backgroundColor: "#fff" }}
                    />
                </figure>
                <h5 className="product-name">{brand.name}</h5>
              </div>
            </Link>
          </SwiperSlide>
        );
      })}
      {BrandsList.map((brand) => {
        return (
          <SwiperSlide key={brand.id}>
            <Link to="#">
              <div className="product text-center product-absolute">
                <figure className="product-media">
                    <img
                      src={brand.image}
                      alt="Brand"
                      style={{ backgroundColor: "#fff" }}
                    />
                </figure>
                <h5 className="product-name">{brand.name}</h5>
              </div>
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default BrandSwiper;
