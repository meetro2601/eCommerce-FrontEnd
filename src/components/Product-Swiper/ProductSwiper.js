import React from "react";
import ProductCard from "../ProductCard/ProductCard";
// import {Swiper,SwiperSlide} from 'swiper/react'
// import { Navigation, Pagination } from "swiper";
// import 'swiper/css'
// import 'swiper/css/navigation'
// import 'swiper/css/pagination'

const ProductSwiper = () => {
  return (
    <>
    <div
      className="swiper-container swiper-theme product-deals-wrapper appear-animate mb-7"
      data-swiper-options="{
      'spaceBetween': 20,
      'slidesPerView': 2,
      'breakpoints': {
          '576': {
              'slidesPerView': 3
          },
          '768': {
              'slidesPerView': 4
          },
          '992': {
              'slidesPerView': 5
          }
      }
  }"
    >
      <div className="swiper-wrapper row cols-lg-5 cols-md-4 cols-2" id='swiper-wrapper-c7d83abb0b4d1a95' >
        <div className="swiper-slide product-wrap">
          <ProductCard></ProductCard>
        </div>
        
        <div className="swiper-slide product-wrap">
          <ProductCard></ProductCard>
        </div>
        
        <div className="swiper-slide product-wrap">
          <ProductCard></ProductCard>
        </div>
        
        <div className="swiper-slide product-wrap">
          <ProductCard></ProductCard>
        </div>
        
        <div className="swiper-slide product-wrap">
          <ProductCard></ProductCard>
        </div>
        
        <div className="swiper-slide product-wrap">
          <ProductCard></ProductCard>
        </div>
        
      </div>
      <div className="swiper-pagination"></div>
    </div>
    {/* <Swiper className="mb-7 swiper-theme product-deals-wrapper" modules={[Navigation, Pagination]} navigation pagination={{clickable:true}} spaceBetween={20} slidesPerView={5} >
      <SwiperSlide className="product-wrap">
        <ProductCard></ProductCard>
      </SwiperSlide>
      <SwiperSlide className="product-wrap">
        <ProductCard></ProductCard>
      </SwiperSlide>
      <SwiperSlide className="product-wrap">
        <ProductCard></ProductCard>
      </SwiperSlide>
      <SwiperSlide className="product-wrap">
        <ProductCard></ProductCard>
      </SwiperSlide>
      <SwiperSlide className="product-wrap">
        <ProductCard></ProductCard>
      </SwiperSlide>
      <SwiperSlide className="product-wrap">
        <ProductCard></ProductCard>
      </SwiperSlide>
    </Swiper> */}
      </>
  );
};


export default ProductSwiper;
