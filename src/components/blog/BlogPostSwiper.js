import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import BlogPostCard from "./BlogPostCard";

const BlogPostSwiper = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
      }}
    >
      <SwiperSlide>
          <BlogPostCard></BlogPostCard>
      </SwiperSlide>
      <SwiperSlide>
          <BlogPostCard></BlogPostCard>
      </SwiperSlide>
      <SwiperSlide>
          <BlogPostCard></BlogPostCard>
      </SwiperSlide>
      <SwiperSlide>
          <BlogPostCard></BlogPostCard>
      </SwiperSlide>
    </Swiper>
  );
};

export default BlogPostSwiper;
