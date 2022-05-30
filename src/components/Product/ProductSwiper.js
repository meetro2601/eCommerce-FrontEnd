import React from "react";
import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

const ProductSwiper = ({ productsList }) => {
  return (
    <>
      <Swiper
        className="mb-7 swiper-theme product-deals-wrapper"
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
            slidesPerView: 4,
          },
          992: {
            slidesPerView: 5,
          },
        }}
      >
        {productsList.map((product) => {
          return (
            <SwiperSlide key={product.id} >
              <ProductCard detail={product}></ProductCard>
            </SwiperSlide>
          );
        })}
        {productsList.map((product) => {
          return (
            <SwiperSlide key={product.id} >
              <ProductCard detail={product}></ProductCard>
            </SwiperSlide>
          );
        })}
        {productsList.map((product) => {
          return (
            <SwiperSlide key={product.id} >
              <ProductCard detail={product}></ProductCard>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default ProductSwiper;
