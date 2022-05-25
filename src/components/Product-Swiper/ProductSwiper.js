import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductSwiper.scss";

const ProductSwiper = () => {
  return (
    <div
      class="swiper-container swiper-theme product-deals-wrapper appear-animate mb-7"
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
     <div class="swiper-wrapper row col-lg-5 col-md-4 col-2">
                        <div class="swiper-slide product-wrap">
                           <ProductCard></ProductCard>
                        </div>
                        
                        
                    </div> 
              
    </div>
  );
};

export default ProductSwiper;
