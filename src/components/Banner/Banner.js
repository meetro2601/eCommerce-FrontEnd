import React from "react";
import banner1 from "../../assets/images/demos/demo2/banners/1.jpg"

const Banner = () => {
  return (
    <div
      className="banner br-sm mb-7"
      style={{backgroundImage: `url(${banner1})`,
                            backgroundColor: '#EEF0EF'}}
    >
      <div className="banner-content d-block d-lg-flex align-items-center">
        <div className="content-left mr-auto">
          <h5 className="banner-subtitle font-weight-normal text-capitalize texyt-dark ls-25 mb-0">
            Flash Sale{" "}
            <strong className="text-uppercase text-secondary">50% Off</strong>
          </h5>
          <h3 className="banner-title text-capitalize ls-25">
            Fashion Figure Skate Sale
          </h3>
          <p className="text-dark">Only until the end of this week.</p>
        </div>
        <a
          href="shop-banner-sidebar.html"
          className="content-left btn btn-dark btn btn-outline 
                                    btn-rounded btn-icon-right mt-4 mt-lg-0"
        >
          Shop Now<i className="w-icon-long-arrow-right"></i>
        </a>
      </div>
    </div>
  );
};

export default Banner;
