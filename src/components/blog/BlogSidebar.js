import React from "react";

const BlogSidebar = () => {
  return (
    <aside className="sidebar right-sidebar blog-sidebar sidebar-fixed sticky-sidebar-wrapper ultra_list_sidebar">
      <div className="sidebar-overlay">
        <a href="/" className="sidebar-close">
          <i className="close-icon"></i>
        </a>
      </div>
      <a href="/" className="sidebar-toggle">
        <i className="fas fa-chevron-left"></i>
      </a>
      <div className="sidebar-content">
        <div className="sticky-sidebar">
          <div className="widget widget-posts">
            <h3 className="widget-title">News & Updates</h3>
            <div className="widget-body">
              <div className="swiper">
                <div
                  className="swiper-container swiper-theme nav-top"
                  data-swiper-options="{
                                                    'spaceBetween': 20,
                                                    'slidesPerView': 1
                                                }"
                >
                  <div className="swiper-wrapper row cols-1">
                    <div className="swiper-slide widget-col">
                      <div className="post-widget mb-4">
                        <figure className="post-media ">
                          <img
                            src="assets/images/blog/sidebar/1.jpg"
                            alt="150"
                            height="150"
                          />
                        </figure>
                        <div className="post-details">
                          <div className="post-meta">
                            <a href="/" className="post-date">
                              March 1, 2021
                            </a>
                          </div>
                          <h4 className="post-title">
                            <a href="post-single.html">
                              Fashion tells about who you are from external
                              point
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div className="post-widget mb-4">
                        <figure className="post-media ">
                          <img
                            src="assets/images/blog/sidebar/2.jpg"
                            alt="150"
                            height="150"
                          />
                        </figure>
                        <div className="post-details">
                          <div className="post-meta">
                            <a href="/" className="post-date">
                              March 5, 2021
                            </a>
                          </div>
                          <h4 className="post-title">
                            <a href="post-single.html">
                              New found the men dress for summer
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div className="post-widget mb-2">
                        <figure className="post-media">
                          <img
                            src="assets/images/blog/sidebar/3.jpg"
                            alt="150"
                            height="150"
                          />
                        </figure>
                        <div className="post-details">
                          <div className="post-meta">
                            <a href="/" className="post-date">
                              March 1, 2021
                            </a>
                          </div>
                          <h4 className="post-title">
                            <a href="post-single.html">
                              Cras ornare tristique elit
                            </a>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide widget-col">
                      <div className="post-widget mb-4">
                        <figure className="post-media">
                          <img
                            src="assets/images/blog/sidebar/4.jpg"
                            alt="150"
                            height="150"
                          />
                        </figure>
                        <div className="post-details">
                          <div className="post-meta">
                            <a href="/" className="post-date">
                              March 1, 2021
                            </a>
                          </div>
                          <h4 className="post-title">
                            <a href="post-single.html">
                              Vivamus vestibulum ntulla nec ante
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div className="post-widget mb-4">
                        <figure className="post-media ">
                          <img
                            src="assets/images/blog/sidebar/5.jpg"
                            alt="150"
                            height="150"
                          />
                        </figure>
                        <div className="post-details">
                          <div className="post-meta">
                            <a href="/" className="post-date">
                              March 5, 2021
                            </a>
                          </div>
                          <h4 className="post-title">
                            <a href="post-single.html">
                              Fusce lacinia arcuet nulla
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div className="post-widget mb-2">
                        <figure className="post-media">
                          <img
                            src="assets/images/blog/sidebar/6.jpg"
                            alt="150"
                            height="150"
                          />
                        </figure>
                        <div className="post-details">
                          <div className="post-meta">
                            <a href="/" className="post-date">
                              March 1, 2021
                            </a>
                          </div>
                          <h4 className="post-title">
                            <a href="post-single.html">
                              Comes a cool blog post with Images
                            </a>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-button-next"></div>
                  <div className="swiper-button-prev"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="widget widget-custom-block">
            <h3 className="widget-title"> Subscribe To Our Newsletter </h3>
            <div className="widget-body">
              <div className="emaillist">
                <div className="form-group">
                  <label>Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="Name"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    className="form-control"
                    name="Email"
                    id="Email"
                    required=""
                  />
                </div>
                <div className="form-group subscribe-btn">
                  <a href="/" className="btn btn-primary">
                    Subscribe
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="widget widget-follow">
            <h3 className="widget-title">Follow Us</h3>
            <div className="widget-body ">
              <ul className="social-followers">
                <li className="Facebook">
                  <a href="/" target="_blank" title="Facebook">
                    <i className="w-icon-facebook"></i>
                    <span className="name">5500+ likes</span>
                    <span className="like">Like</span>
                  </a>
                </li>
                <li className="Twitter">
                  <a href="/" target="_blank" title="Twitter">
                    <i className="w-icon-twitter"></i>
                    <span className="name">130+ followers</span>
                    <span className="like">Follow</span>
                  </a>
                </li>
                <li className="instagram">
                  <a href="/" target="_blank" title="instagram">
                    <i className="w-icon-instagram"></i>
                    <span className="name">1000+ followers</span>
                    <span className="like">Follow</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="widget widget-protocols">
            <h3 className="widget-title ">Protocols</h3>
            <div className="widget-body">
              <ul className="protocols-links">
                <li>
                  <a href="/">
                    Reverse-transcription quantitative PCR (RT-qPCR)
                  </a>
                </li>
                <li>
                  <a href="/">
                    Antimicrobial Susceptibility Testing by CLSI method
                  </a>
                </li>
                <li>
                  <a href="/">Agarose Gel Electrophoresis</a>
                </li>
                <li>
                  <a href="/">RNA extraction from tissue</a>
                </li>
                <li>
                  <a href="/">Prepatation of Buffers</a>
                </li>
                <li>
                  <a href="/">Preparation of Culture Media</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="widget widget-Archives">
            <h3 className="widget-title ">Archives</h3>
            <div className="widget-body">
              <ul className="protocols-links">
                <li>
                  <a href="/">May 2022 </a> (6)
                </li>
                <li>
                  <a href="/">April 2022</a> (3)
                </li>
                <li>
                  <a href="/">March 2022</a> (6)
                </li>
                <li>
                  <a href="/">February 2022</a> (7)
                </li>
                <li>
                  <a href="/">January 2022</a> (2)
                </li>
                <li>
                  <a href="/">December 2021</a> (2)
                </li>
                <li>
                  <a href="/">November 2021</a> (3)
                </li>
                <li>
                  <a href="/">October 2021</a> (2)
                </li>
                <li>
                  <a href="/">September 2021</a> (1)
                </li>
                <li>
                  <a href="/">August 2021</a> (2)
                </li>
                <li>
                  <a href="/">July 2021</a> (5)
                </li>
                <li>
                  <a href="/">June 2021</a> (1)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default BlogSidebar;
