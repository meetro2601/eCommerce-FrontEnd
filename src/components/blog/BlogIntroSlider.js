import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import Contest from "../../assets/images/blog/sllideshow/contest.jpg";
import Fridge from "../../assets/images/blog/sllideshow/fridge.jpg";

const BlogIntroSlider = () => {
  return (
    <Swiper
      className="blog-homeslider"
      navigation
      modules={[Navigation, Autoplay]}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
    >
      <SwiperSlide>
        <a className="slider-img thumb-zoom" href="/blogs">
          <img
            src={Contest}
            alt="contest"
            title="Automating DNA Extraction for High-Throughput Bacterial Plasmid Purification"
          />
        </a>
        <div className="slider-caption">
          <span className="cat-wrap">
            <span className="cat-links" style={{ backgroundColor: "#1e73be" }}>
              <a
                href="https://blog.biomall.in/category/main-slider/"
                className="cat-19"
                rel="category tag"
              >
                Featured
              </a>
            </span>
            <span className="cat-links" style={{ backgroundColor: "#d69848" }}>
              <a
                href="https://blog.biomall.in/category/genomics/"
                className="cat-9"
                rel="category tag"
              >
                Genomics
              </a>
            </span>
            <span className="cat-links" style={{ backgroundColor: "#7806e2" }}>
              <a
                href="https://blog.biomall.in/category/lab-techniques/"
                className="cat-138"
                rel="category tag"
              >
                Lab techniques
              </a>
            </span>
          </span>{" "}
          <h3 className="featured-large-font">
            <a href="https://blog.biomall.in/automating-dna-extraction-for-high-throughput-bacterial-plasmid-purification/">
              Automating DNA Extraction for High-Throughput Bacterial Plasmid
              Purification
            </a>
          </h3>
          <div className="post-meta">
            <span className="post-author">
              <span className="author vcard">
                <a href="https://blog.biomall.in/author/admin/">admin</a>
              </span>
            </span>
            <span className="posted-on">
              <a
                href="https://blog.biomall.in/automating-dna-extraction-for-high-throughput-bacterial-plasmid-purification/"
                rel="bookmark"
              >
                May 25, 2022
              </a>
            </span>{" "}
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
          <a className="slider-img thumb-zoom" href="/blogs">
            <img
              src={Fridge}
              alt="fridge"
              title="Automating DNA Extraction for High-Throughput Bacterial Plasmid Purification"
            />
          </a>
          <div className="slider-caption">
            <span className="cat-wrap">
              <span
                className="cat-links"
                style={{ backgroundColor: "#1e73be" }}
              >
                <a
                  href="https://blog.biomall.in/category/main-slider/"
                  className="cat-19"
                  rel="category tag"
                >
                  Featured
                </a>
              </span>
              <span
                className="cat-links"
                style={{ backgroundColor: "#d69848" }}
              >
                <a
                  href="https://blog.biomall.in/category/genomics/"
                  className="cat-9"
                  rel="category tag"
                >
                  Genomics
                </a>
              </span>
              <span
                className="cat-links"
                style={{ backgroundColor: "#7806e2" }}
              >
                <a
                  href="https://blog.biomall.in/category/lab-techniques/"
                  className="cat-138"
                  rel="category tag"
                >
                  Lab techniques
                </a>
              </span>
            </span>{" "}
            <h3 className="featured-large-font">
              <a href="https://blog.biomall.in/automating-dna-extraction-for-high-throughput-bacterial-plasmid-purification/">
                Automating DNA Extraction for High-Throughput Bacterial Plasmid
                Purification
              </a>
            </h3>
            <div className="post-meta">
              <span className="post-author">
                <span className="author vcard">
                  <a href="https://blog.biomall.in/author/admin/">admin</a>
                </span>
              </span>
              <span className="posted-on">
                <a
                  href="https://blog.biomall.in/automating-dna-extraction-for-high-throughput-bacterial-plasmid-purification/"
                  rel="bookmark"
                >
                  May 25, 2022
                </a>
              </span>{" "}
            </div>
          </div>
      </SwiperSlide>
      <SwiperSlide>
          <a className="slider-img thumb-zoom" href="/blogs">
            <img
              src={Fridge}
              alt="fridge"
              title="Automating DNA Extraction for High-Throughput Bacterial Plasmid Purification"
            />
          </a>
          <div className="slider-caption">
            <span className="cat-wrap">
              <span
                className="cat-links"
                style={{ backgroundColor: "#1e73be" }}
              >
                <a
                  href="https://blog.biomall.in/category/main-slider/"
                  className="cat-19"
                  rel="category tag"
                >
                  Featured
                </a>
              </span>
              <span
                className="cat-links"
                style={{ backgroundColor: "#d69848" }}
              >
                <a
                  href="https://blog.biomall.in/category/genomics/"
                  className="cat-9"
                  rel="category tag"
                >
                  Genomics
                </a>
              </span>
              <span
                className="cat-links"
                style={{ backgroundColor: "#7806e2" }}
              >
                <a
                  href="https://blog.biomall.in/category/lab-techniques/"
                  className="cat-138"
                  rel="category tag"
                >
                  Lab techniques
                </a>
              </span>
            </span>{" "}
            <h3 className="featured-large-font">
              <a href="https://blog.biomall.in/automating-dna-extraction-for-high-throughput-bacterial-plasmid-purification/">
                Automating DNA Extraction for High-Throughput Bacterial Plasmid
                Purification
              </a>
            </h3>
            <div className="post-meta">
              <span className="post-author">
                <span className="author vcard">
                  <a href="https://blog.biomall.in/author/admin/">admin</a>
                </span>
              </span>
              <span className="posted-on">
                <a
                  href="https://blog.biomall.in/automating-dna-extraction-for-high-throughput-bacterial-plasmid-purification/"
                  rel="bookmark"
                >
                  May 25, 2022
                </a>
              </span>{" "}
            </div>
          </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default BlogIntroSlider;
