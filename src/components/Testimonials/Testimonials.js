import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "./Testimonials.scss";

const Testimonials = () => {
  return (
    <div className="testimonials-slider pt-5 pb-5 mb-7">
      <h2 className="title title-center text-white  mb-2">Testimonials</h2>
      <Swiper
        modules={[Navigation]}
        // navigation
      >
        <SwiperSlide>
          <div className="testimonial testimonial-centered testimonial-bg">
            <blockquote>
              “ Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
              dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin
              laoreet viverra, tortor libero sodales leo, eget blandit nunc
              tortor eu nibh. Ut justo. Suspendisse potenti. ”
            </blockquote>
            <div className="testimonial-image">
              <div className="testimonial-info">
                <figure className="testimonial-author-thumbnail">
                  <img
                    src="https://portotheme.com/html/wolmart/assets/images/agents/3-100x100.png"
                    alt="Testimonial"
                    width="100"
                    height="100"
                  ></img>
                </figure>
              </div>
              <cite>
                Victoria Ventura<span>Customer</span>
              </cite>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial testimonial-centered testimonial-bg">
            <blockquote>
              “ Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
              dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin
              laoreet viverra, tortor libero sodales leo, eget blandit nunc
              tortor eu nibh. Ut justo. Suspendisse potenti. ”
            </blockquote>
            <div className="testimonial-image">
              <div className="testimonial-info">
                <figure className="testimonial-author-thumbnail">
                  <img
                    src="https://portotheme.com/html/wolmart/assets/images/agents/3-100x100.png"
                    alt="Testimonial"
                    width="100"
                    height="100"
                  ></img>
                </figure>
              </div>
              <cite>
                Henry Harry<span>Banker</span>
              </cite>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial testimonial-centered testimonial-bg">
            <blockquote>
              “ Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
              dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin
              laoreet viverra, tortor libero sodales leo, eget blandit nunc
              tortor eu nibh. Ut justo. Suspendisse potenti. ”
            </blockquote>
            <div className="testimonial-image">
              <div className="testimonial-info">
                <figure className="testimonial-author-thumbnail">
                  <img
                    src="https://portotheme.com/html/wolmart/assets/images/agents/3-100x100.png"
                    alt="Testimonial"
                    width="100"
                    height="100"
                  ></img>
                </figure>
              </div>
              <cite>
                Anna Miranda<span>Vendor</span>
              </cite>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonials;
