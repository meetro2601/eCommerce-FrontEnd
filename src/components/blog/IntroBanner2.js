import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import Contest from "../../assets/images/blog/sllideshow/contest.jpg"
import Fridge from "../../assets/images/blog/sllideshow/fridge.jpg"


const IntroBanner2 = () => {
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
          backgroundColor: ` #f1f0f0`,
        }}
      >
        <div className="container">
          <figure
            className="floating-item slide-animate"
            data-animation-options="{
                                    'name': 'fadeInDownShorter', 'duration': '1s'
                                }"
            data-options="{'relativeInput':true,'clipRelativeInput':true,'invertX':true,'invertY':true}"
            data-child-depth="0.2"
          >
            
            <img src={Contest} alt="Ski" width="729" height="570"/>
            <div class="slider-caption mb-6">
                                            <span class="cat-wrap"><span class="cat-links" style={{backgroundcolor:'#1e73be'}}><a href="https://blog.biomall.in/category/main-slider/" class="cat-19" rel="category tag">Featured</a></span><span class="cat-links" style={{backgroundcolor:'#d69848'}}><a href="https://blog.biomall.in/category/genomics/" class="cat-9" rel="category tag">Genomics</a></span><span class="cat-links" style={{backgroundcolor:'#7806e2'}}><a href="https://blog.biomall.in/category/lab-techniques/" class="cat-138" rel="category tag">Lab techniques</a></span></span>                                  <h3 class="featured-large-font"><a href="https://blog.biomall.in/automating-dna-extraction-for-high-throughput-bacterial-plasmid-purification/">Automating DNA Extraction for High-Throughput Bacterial Plasmid Purification</a></h3>
                                            <div class="post-meta">
                                                <span class="post-author"><span class="author vcard"><a href="https://blog.biomall.in/author/admin/">admin</a></span></span><span class="posted-on"><a href="https://blog.biomall.in/automating-dna-extraction-for-high-throughput-bacterial-plasmid-purification/" rel="bookmark">May 25, 2022</a></span>                                  </div>
                                        </div>
          </figure>
          
        </div>
      </SwiperSlide>
      <SwiperSlide
        className="banner banner-fixed intro-slide intro-slide2"
        style={{
          backgroundColor: `#d9ddd9`,
        }}
      >
        <div className="container">
          <figure
            className="floating-item slide-animate"
            data-animation-options="{
                                    'name': 'fadeInUpShorter', 'duration': '1s'
                                }"
            data-options="{'relativeInput':true,'clipRelativeInput':true,'invertX':true,'invertY':true}"
            data-child-depth="0.2"
          >
            <img src={Fridge} alt="fridge" width="865" height="732" />
            <div class="slider-caption mb-6">
                                            <span class="cat-wrap"><span class="cat-links" style={{backgroundcolor:'#1e73be'}}><a href="https://blog.biomall.in/category/main-slider/" class="cat-19" rel="category tag">Featured</a></span><span class="cat-links" style={{backgroundcolor:'#d69848'}}><a href="https://blog.biomall.in/category/genomics/" class="cat-9" rel="category tag">Genomics</a></span><span class="cat-links" style={{backgroundcolor:'#7806e2'}}><a href="https://blog.biomall.in/category/lab-techniques/" class="cat-138" rel="category tag">Lab techniques</a></span></span>                                  <h3 class="featured-large-font"><a href="https://blog.biomall.in/automating-dna-extraction-for-high-throughput-bacterial-plasmid-purification/">Automating DNA Extraction for High-Throughput Bacterial Plasmid Purification</a></h3>
                                            <div class="post-meta">
                                                <span class="post-author"><span class="author vcard"><a href="https://blog.biomall.in/author/admin/">admin</a></span></span><span class="posted-on"><a href="https://blog.biomall.in/automating-dna-extraction-for-high-throughput-bacterial-plasmid-purification/" rel="bookmark">May 25, 2022</a></span>                                  </div>
                                        </div>
          </figure>
        </div>
      </SwiperSlide>
      <SwiperSlide
        className="banner banner-fixed intro-slide intro-slide2"
        style={{
          backgroundColor: `#d0cfcb`,
        }}
      >
        <div className="container">
          <figure
            className="floating-item slide-animate"
            data-animation-options="{
                                    'name': 'fadeInRightShorter', 'duration': '1s'
                                }"
            data-options="{'relativeInput':true,'clipRelativeInput':true,'invertX':true,'invertY':true}"
            data-child-depth="0.2"
          >
            <img
              src={Fridge}
              alt="fridge"
              width="527"
              height="481"
            />
            <div class="slider-caption mb-6">
                                            <span class="cat-wrap"><span class="cat-links" style={{backgroundcolor:'#1e73be'}}><a href="https://blog.biomall.in/category/main-slider/" class="cat-19" rel="category tag">Featured</a></span><span class="cat-links" style={{backgroundcolor:'#d69848'}}><a href="https://blog.biomall.in/category/genomics/" class="cat-9" rel="category tag">Genomics</a></span><span class="cat-links" style={{backgroundcolor:'#7806e2'}}><a href="https://blog.biomall.in/category/lab-techniques/" class="cat-138" rel="category tag">Lab techniques</a></span></span>                                  <h3 class="featured-large-font"><a href="https://blog.biomall.in/automating-dna-extraction-for-high-throughput-bacterial-plasmid-purification/">Automating DNA Extraction for High-Throughput Bacterial Plasmid Purification</a></h3>
                                            <div class="post-meta">
                                                <span class="post-author"><span class="author vcard"><a href="https://blog.biomall.in/author/admin/">admin</a></span></span><span class="posted-on"><a href="https://blog.biomall.in/automating-dna-extraction-for-high-throughput-bacterial-plasmid-purification/" rel="bookmark">May 25, 2022</a></span>                                  </div>
                                        </div>
          </figure>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default IntroBanner2;
