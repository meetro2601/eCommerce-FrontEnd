import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import category1 from "../../assets/images/categories/category-b1.jpg";
import category2 from "../../assets/images/categories/category-b2.png";
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    category: "Autoclave",
    img: category1,
  },
  {
    id: 2,
    category: "Steroids",
    img: category2,
  },
];

const CategorySwiper = () => {
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
      {categories.map((item) => {
        return (
          <SwiperSlide key={item.id}>
            <Link to="#">
              <div className="product text-center product-absolute">
                <figure className="product-media">
                  <img
                    src={item.img}
                    alt="Brand"
                    style={{ backgroundColor: "#fff" }}
                  />
                </figure>
                <h5 className="product-name">{item.category}</h5>
              </div>
            </Link>
          </SwiperSlide>
        );
      })}
      {categories.map((item) => {
        return (
          <SwiperSlide key={item.id}>
            <Link to="#">
              <div className="product text-center product-absolute">
                <figure className="product-media">
                  <img
                    src={item.img}
                    alt="Brand"
                    style={{ backgroundColor: "#fff" }}
                  />
                </figure>
                <h5 className="product-name">{item.category}</h5>
              </div>
            </Link>
          </SwiperSlide>
        );
      })}
      {categories.map((item) => {
        return (
          <SwiperSlide key={item.id}>
            <Link to="#">
              <div className="product text-center product-absolute">
                <figure className="product-media">
                  <img
                    src={item.img}
                    alt="Brand"
                    style={{ backgroundColor: "#fff" }}
                  />
                </figure>
                <h5 className="product-name">{item.category}</h5>
              </div>
            </Link>
          </SwiperSlide>
        );
      })}
      {categories.map((item) => {
        return (
          <SwiperSlide key={item.id}>
            <Link to="#">
              <div className="product text-center product-absolute">
                <figure className="product-media">
                  <img
                    src={item.img}
                    alt="Brand"
                    style={{ backgroundColor: "#fff" }}
                  />
                </figure>
                <h5 className="product-name">{item.category}</h5>
              </div>
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CategorySwiper;
