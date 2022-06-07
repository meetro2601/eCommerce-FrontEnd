import React from "react";
import { Link } from "react-router-dom";
import BlogSidebar from "../components/blog/BlogSidebar";
import BlogIntroSlider from "../components/blog/BlogIntroSlider";

const Bloghome = () => {
  return (
    <>
        <nav className="blog-nav">
          <div className="container">
            <input type="checkbox" id="toogle-menu" />
            <label htmlFor="toogle-menu" className="toogle-open">
              <span></span>
            </label>
            <h3>Biomall Blog</h3>
            <ul className="blog-nav-inner">
              <li>
                <Link to='/blogs/blogcategory'>Life Science</Link>
              </li>
              <li>
                <a href="/">Diagnostics</a>
              </li>
              <li>
                <a href="/">Neuroscience</a>
              </li>
              <li>
                <a href="/">Environment</a>
              </li>
              <li>
                <a href="/">Biotechnology</a>
              </li>
              <li>
                <a href="/">Medical</a>
              </li>
              <li>
                <a href="/">Genomics</a>
              </li>
              <li>
                <a href="/">Science Community</a>
              </li>
              <li>
                <a href="/">Events</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="page-content mb-10 pb-2">
          <div className="container">
            <div className="row">
              <div className="slider-section">
                      <BlogIntroSlider></BlogIntroSlider>
              </div>
              <div className="featured-section">
                <div className="feature-post-wrap">
                  <div className="feature-post feature-large">
                    <a
                      className="slider-img thumb-zoom"
                      href="https://blog.biomall.in/antibody-coated-nk-cells-a-new-hope-to-treat-blood-cancer/"
                    >
                      <img
                        src="https://blog.biomall.in/wp-content/uploads/2022/04/blood-cancer-1-470x225.jpg"
                        alt=""
                        title="Antibody-coated NK cells – A new hope to treat blood cancer"
                      />
                    </a>
                    <div className="slider-caption">
                      <span className="cat-wrap">
                        <span
                          className="cat-links"
                          style={{ backgroundColor: "#e56e72" }}
                        >
                          <a
                            href="https://blog.biomall.in/category/medical/"
                            className="cat-120"
                            rel="category tag"
                          >
                            Medical
                          </a>
                        </span>
                      </span>
                      <h3 className="featured-large-font">
                        <a href="https://blog.biomall.in/antibody-coated-nk-cells-a-new-hope-to-treat-blood-cancer/">
                          Antibody-coated NK cells – A new hope to treat blood
                          cancer
                        </a>
                      </h3>
                      <div className="post-meta"></div>
                    </div>
                  </div>
                  <div className="feature-post ">
                    <a
                      className="slider-img thumb-zoom"
                      href="https://blog.biomall.in/latest-research-cannabidiol-inhibits-sars-cov-2-replication/"
                    >
                      <img
                        src="https://blog.biomall.in/wp-content/uploads/2022/02/Blog-2-235x225.jpg"
                        alt=""
                        title="Latest research: Cannabidiol inhibits SARS-CoV-2 replication"
                      />
                    </a>
                    <div className="slider-caption">
                      <span className="cat-wrap">
                        <span
                          className="cat-links"
                          style={{ backgroundColor: "#e56e72" }}
                        >
                          <a
                            href="https://blog.biomall.in/category/medical/"
                            className="cat-120"
                            rel="category tag"
                          >
                            Medical
                          </a>
                        </span>
                      </span>
                      <h3 className="featured-large-font">
                        <a href="https://blog.biomall.in/latest-research-cannabidiol-inhibits-sars-cov-2-replication/">
                          Latest research: Cannabidiol inhibits SARS-CoV-2
                          replication
                        </a>
                      </h3>
                      <div className="post-meta"></div>
                    </div>
                  </div>
                  <div className="feature-post ">
                    <a
                      className="slider-img thumb-zoom"
                      href="https://blog.biomall.in/active-pharma-ingredients-apis-the-bioactive-component/"
                    >
                      <img
                        src="https://blog.biomall.in/wp-content/uploads/2022/02/Blog-1-235x225.jpg"
                        alt=""
                        title="Active Pharma Ingredients (APIs): The Bioactive Component"
                      />
                    </a>
                    <div className="slider-caption">
                      <span className="cat-wrap">
                        <span
                          className="cat-links"
                          style={{ backgroundColor: "#e56e72" }}
                        >
                          <a
                            href="https://blog.biomall.in/category/medical/"
                            className="cat-120"
                            rel="category tag"
                          >
                            Medical
                          </a>
                        </span>
                      </span>
                      <h3 className="featured-large-font">
                        <a href="https://blog.biomall.in/active-pharma-ingredients-apis-the-bioactive-component/">
                          Active Pharma Ingredients (APIs): The Bioactive
                          Component
                        </a>
                      </h3>
                      <div className="post-meta"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row gutter-lg">
              <div className="main-content ultra_list_block">
                <div className="row">
                  <div className="blog-life-science">
                    <div className="block-header">
                      <div className="header">Life Science </div>
                    </div>
                    <article className="post post-list post-listing  overlay-zoom ">
                      <figure className="post-media">
                        <a href="post-single.html">
                          <img
                            src="https://portotheme.com/html/wolmart/assets/images/blog/classic/1.jpg"
                            width="930"
                            height="500"
                            alt="blog"
                          />
                        </a>
                      </figure>
                      <div className="post-details">
                        <span className="cat-wrap">
                          <span
                            className="cat-links"
                            style={{ backgroundColor: "#1e73be" }}
                          >
                            {" "}
                            <a href="/" className="cat-4">
                              Life Science
                            </a>
                          </span>
                        </span>
                        <h4 className="post-title">
                          <a href="post-single.html">
                            Model Organisms – The Backbone of Biological
                            Research
                          </a>
                        </h4>
                        <div className="post-meta">
                          <span className="post-author">
                            <span className="author vcard">
                              <a href="post-single.html">Biomall</a>
                            </span>
                          </span>
                          <span className="posted-on">
                            <a href="post-single.html" rel="bookmark">
                              August 20, 2020
                            </a>
                          </span>
                          <span className="comments-count">
                            <a href="post-single.html">0</a>
                          </span>
                        </div>
                        <div className="post-content">
                          <p>
                            Sed pretium, ligula sollicitudin laoreet viverra,
                            tortor libero sodales leo, eget blandit nunc tortor
                            eu nibh. Suspendisse potenti.Sed egstas, ant at
                            vulputate volutpat, uctus metus libero eu augue,
                            vitae luctus…
                          </p>
                        </div>
                      </div>
                    </article>
                    <article className="post post-list post-listing  overlay-zoom ">
                      <figure className="post-media">
                        <a href="post-single.html">
                          <img
                            src="https://portotheme.com/html/wolmart/assets/images/blog/classic/2.jpg"
                            width="930"
                            height="500"
                            alt="blog"
                          />
                        </a>
                      </figure>
                      <div className="post-details">
                        <span className="cat-wrap">
                          <span
                            className="cat-links"
                            style={{ backgroundColor: "#1e73be" }}
                          >
                            {" "}
                            <a href="/" className="cat-4">
                              Life Science
                            </a>
                          </span>
                        </span>

                        <h4 className="post-title">
                          <a href="post-single.html">
                            Recognitory the needs is primary condition for
                            design
                          </a>
                        </h4>
                        <div className="post-meta">
                          <span className="post-author">
                            <span className="author vcard">
                              <a href="post-single.html">Biomall</a>
                            </span>
                          </span>
                          <span className="posted-on">
                            <a href="post-single.html" rel="bookmark">
                              August 20, 2020
                            </a>
                          </span>
                          <span className="comments-count">
                            <a href="post-single.html">0</a>
                          </span>
                        </div>
                        <div className="post-content">
                          <p>
                            Sed pretium, ligula sollicitudin laoreet viverra,
                            tortor libero sodales leo, eget blandit nunc tortor
                            eu nibh. Suspendisse potenti.Sed egstas, ant at
                            vulputate volutpat, uctus metus libero eu augue,
                            vitae luctus…
                          </p>
                        </div>
                      </div>
                    </article>
                    <article className="post post-list post-listing  overlay-zoom ">
                      <figure className="post-media ">
                        <a href="post-single.html">
                          <img
                            src="https://portotheme.com/html/wolmart/assets/images/blog/classic/3.jpg"
                            width="930"
                            height="500"
                            alt="blog"
                          />
                        </a>
                      </figure>
                      <div className="post-details">
                        <span className="cat-wrap">
                          <span
                            className="cat-links"
                            style={{ backgroundColor: "#1e73be" }}
                          >
                            {" "}
                            <a href="/" className="cat-4">
                              Life Science
                            </a>
                          </span>
                        </span>
                        <h4 className="post-title">
                          <a href="post-single.html">
                            New found the women’s shirt for summer season
                          </a>
                        </h4>
                        <div className="post-meta">
                          <span className="post-author">
                            <span className="author vcard">
                              <a href="post-single.html">Biomall</a>
                            </span>
                          </span>
                          <span className="posted-on">
                            <a href="post-single.html" rel="bookmark">
                              August 20, 2020
                            </a>
                          </span>
                          <span className="comments-count">
                            <a href="post-single.html">0</a>
                          </span>
                        </div>
                        <div className="post-content">
                          <p>
                            Sed pretium, ligula sollicitudin laoreet viverra,
                            tortor libero sodales leo, eget blandit nunc tortor
                            eu nibh. Suspendisse potenti.Sed egstas, ant at
                            vulputate volutpat, uctus metus libero eu augue,
                            vitae luctus…
                          </p>
                        </div>
                      </div>
                    </article>
                    <article className="post post-list post-listing overlay-zoom ">
                      <figure className="post-media">
                        <a href="post-single.html">
                          <img
                            src="https://portotheme.com/html/wolmart/assets/images/blog/classic/4.jpg"
                            width="930"
                            height="500"
                            alt="blog"
                          />
                        </a>
                      </figure>
                      <div className="post-details">
                        <span className="cat-wrap">
                          <span
                            className="cat-links"
                            style={{ backgroundColor: "#1e73be" }}
                          >
                            {" "}
                            <a href="/" className="cat-4">
                              Life Science
                            </a>
                          </span>
                        </span>
                        <h4 className="post-title">
                          <a href="post-single.html">
                            We want to be different and fashion gives to me that
                            outlet
                          </a>
                        </h4>
                        <div className="post-meta">
                          <span className="post-author">
                            <span className="author vcard">
                              <a href="post-single.html">Biomall</a>
                            </span>
                          </span>
                          <span className="posted-on">
                            <a href="post-single.html" rel="bookmark">
                              August 20, 2020
                            </a>
                          </span>
                          <span className="comments-count">
                            <a href="post-single.html">0</a>
                          </span>
                        </div>
                        <div className="post-content">
                          <p>
                            Sed pretium, ligula sollicitudin laoreet viverra,
                            tortor libero sodales leo, eget blandit nunc tortor
                            eu nibh. Suspendisse potenti.Sed egstas, ant at
                            vulputate volutpat, uctus metus libero eu augue,
                            vitae luctus…
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="row cols-sm-3">
                  <div className="blog-diagnostics">
                    <div className="block-header">
                      <div className="header">Diagnostics </div>
                    </div>
                  </div>
                  <article className="post post-grid-type overlay-zoom mb-6">
                    <figure className="post-media">
                      <a href="post-single.html">
                        <img
                          src="assets/images/blog/2cols/1.jpg"
                          width="600"
                          height="420"
                          alt="blog"
                        />
                        <div className="image-overlay"></div>
                      </a>
                      <span className="cat-wrap">
                        <span
                          className="cat-links"
                          style={{ backgroundColor: "#b71990" }}
                        >
                          <a href="/" className="cat-7" rel="category tag">
                            Biotechnology
                          </a>
                        </span>
                        <span
                          className="cat-links"
                          style={{ backgroundColor: "#0088cc" }}
                        >
                          <a href="/" className="cat-6" rel="category tag">
                            Diagnostics
                          </a>
                        </span>
                      </span>
                    </figure>
                    <div className="post-details">
                      <h4 className="post-title">
                        <a href="post-single.html">
                          New found the men dress for summer
                        </a>
                      </h4>
                      <div className="post-meta">
                        <span className="post-author">
                          <span className="author vcard">
                            <a href="post-single.html">Biomall</a>
                          </span>
                        </span>
                        <span className="posted-on">
                          <a href="post-single.html" rel="bookmark">
                            August 20, 2020
                          </a>
                        </span>
                        <span className="comments-count">
                          <a href="post-single.html">0</a>
                        </span>
                      </div>
                      <div className="post-content">
                        <p>
                          Sed pretium, ligula sollicitudin laoreet viverra,
                          tortor libero sodales leo, eget blandit nunc tortor eu
                          nibh. Suspendisse potenti.Sed egstas, ant at vulputate
                          volutpat, uctus metus libero eu augue, vitae luctus…
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="post post-grid-type overlay-zoom mb-6">
                    <figure className="post-media">
                      <a href="post-single.html">
                        <img
                          src="assets/images/blog/2cols/2.jpg"
                          width="600"
                          height="420"
                          alt="blog"
                        />
                        <div className="image-overlay"></div>
                      </a>
                      <span className="cat-wrap">
                        <span
                          className="cat-links"
                          style={{ backgroundColor: "#b71990" }}
                        >
                          <a href="/" className="cat-7" rel="category tag">
                            Biotechnology
                          </a>
                        </span>
                        <span
                          className="cat-links"
                          style={{ backgroundColor: "#0088cc" }}
                        >
                          <a href="/" className="cat-6" rel="category tag">
                            Diagnostics
                          </a>
                        </span>
                      </span>
                    </figure>
                    <div className="post-details">
                      <h4 className="post-title">
                        <a href="post-single.html">
                          Recognitory the needs is primary condition for design
                        </a>
                      </h4>
                      <div className="post-meta">
                        <span className="post-author">
                          <span className="author vcard">
                            <a href="post-single.html">Biomall</a>
                          </span>
                        </span>
                        <span className="posted-on">
                          <a href="post-single.html" rel="bookmark">
                            August 20, 2020
                          </a>
                        </span>
                        <span className="comments-count">
                          <a href="post-single.html">0</a>
                        </span>
                      </div>
                      <div className="post-content">
                        <p>
                          Sed pretium, ligula sollicitudin laoreet viverra,
                          tortor libero sodales leo, eget blandit nunc tortor eu
                          nibh. Suspendisse potenti.Sed egstas, ant at vulputate
                          volutpat, uctus metus libero eu augue, vitae luctus…
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="post post-grid-type overlay-zoom mb-6">
                    <figure className="post-media">
                      <a href="post-single.html">
                        <img
                          src="assets/images/blog/2cols/3.jpg"
                          width="600"
                          height="420"
                          alt="blog"
                        />
                        <div className="image-overlay"></div>
                      </a>
                      <span className="cat-wrap">
                        <span
                          className="cat-links"
                          style={{ backgroundColor: "#b71990" }}
                        >
                          <a href="/" className="cat-7" rel="category tag">
                            Biotechnology
                          </a>
                        </span>
                        <span
                          className="cat-links"
                          style={{ backgroundColor: "#0088cc" }}
                        >
                          <a href="/" className="cat-6" rel="category tag">
                            Diagnostics
                          </a>
                        </span>
                      </span>
                    </figure>
                    <div className="post-details">
                      <h4 className="post-title">
                        <a href="post-single.html">
                          New found the women’s shirt for summer season
                        </a>
                      </h4>
                      <div className="post-meta">
                        <span className="post-author">
                          <span className="author vcard">
                            <a href="post-single.html">Biomall</a>
                          </span>
                        </span>
                        <span className="posted-on">
                          <a href="post-single.html" rel="bookmark">
                            August 20, 2020
                          </a>
                        </span>
                        <span className="comments-count">
                          <a href="post-single.html">0</a>
                        </span>
                      </div>
                      <div className="post-content">
                        <p>
                          Sed pretium, ligula sollicitudin laoreet viverra,
                          tortor libero sodales leo, eget blandit nunc tortor eu
                          nibh. Suspendisse potenti.Sed egstas, ant at vulputate
                          volutpat, uctus metus libero eu augue, vitae luctus…
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="row">
                  <div className="blog-subscribe-scientific">
                    <div className="block-header">
                      <div className="header">
                        Subscribe To Scientific India Magazine{" "}
                      </div>
                    </div>
                    <div className="subscribe-scientific-img mb-6">
                      <a href="/">
                        <img
                          src="https://blog.biomall.in/wp-content/uploads/2019/08/Scientific-India-Logo.jpg"
                          alt="blog"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="blog-environment ">
                    <div className="block-header">
                      <div className="header">Environment </div>
                    </div>
                    <div className="Environment-inner">
                      <div className="Environment-inner-left">
                        <article className="post post-grid-type overlay-zoom">
                          <figure className="post-media">
                            <a href="post-single.html">
                              <img
                                src="assets/images/blog/2cols/5.jpg"
                                width="600"
                                height="420"
                                alt="blog"
                              />
                            </a>
                          </figure>
                          <div className="post-details">
                            <span className="cat-wrap">
                              <span
                                className="cat-links"
                                style={{ backgroundColor: "#1e73be" }}
                              >
                                {" "}
                                <a href="/" className="cat-4">
                                  Life Science
                                </a>
                              </span>
                            </span>
                            <h4 className="post-title">
                              <a href="post-single.html">
                                Research Confirms BPA-free is No Better for You
                              </a>
                            </h4>
                            <div className="post-meta">
                              <span className="post-author">
                                <span className="author vcard">
                                  <a href="post-single.html">Biomall</a>
                                </span>
                              </span>
                              <span className="posted-on">
                                <a href="post-single.html" rel="bookmark">
                                  August 20, 2020
                                </a>
                              </span>
                              <span className="comments-count">
                                <a href="post-single.html">0</a>
                              </span>
                            </div>
                            <div className="post-content">
                              <p>
                                Sed pretium, ligula sollicitudin laoreet
                                viverra, tortor libero sodales leo, eget blandit
                                nunc tortor eu nibh. Suspendisse potenti.Sed
                                egstas, ant at vulputate volutpat, uctus metus
                                libero eu augue, vitae luctus…
                              </p>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="Environment-inner-right">
                        <article className="post post-list post-listing overlay-zoom ">
                          <figure className="post-media">
                            <a href="post-single.html">
                              <img
                                src="https://portotheme.com/html/wolmart/assets/images/blog/classic/1.jpg"
                                alt="blog"
                              />
                            </a>
                          </figure>
                          <div className="post-details">
                            <span className="cat-wrap">
                              <span
                                className="cat-links"
                                style={{ backgroundColor: "#1e73be" }}
                              >
                                {" "}
                                <a href="/" className="cat-4">
                                  Life Science
                                </a>
                              </span>
                            </span>
                            <h4 className="post-title">
                              <a href="post-single.html">
                                Model Organisms – The Backbone of Biological
                                Research
                              </a>
                            </h4>
                            <div className="post-meta">
                              <span className="post-author">
                                <span className="author vcard">
                                  <a href="post-single.html">Biomall</a>
                                </span>
                              </span>
                              <span className="posted-on">
                                <a href="post-single.html" rel="bookmark">
                                  August 20, 2020
                                </a>
                              </span>
                            </div>
                          </div>
                        </article>
                        <article className="post post-list post-listing overlay-zoom ">
                          <figure className="post-media">
                            <a href="post-single.html">
                              <img
                                src="https://portotheme.com/html/wolmart/assets/images/blog/classic/2.jpg"
                                alt="blog"
                              />
                            </a>
                          </figure>
                          <div className="post-details">
                            <span className="cat-wrap">
                              <span
                                className="cat-links"
                                style={{ backgroundColor: "#1e73be" }}
                              >
                                {" "}
                                <a href="/" className="cat-4">
                                  Life Science
                                </a>
                              </span>
                            </span>
                            <h4 className="post-title">
                              <a href="post-single.html">
                                Model Organisms – The Backbone of Biological
                                Research
                              </a>
                            </h4>
                            <div className="post-meta">
                              <span className="post-author">
                                <span className="author vcard">
                                  <a href="post-single.html">Biomall</a>
                                </span>
                              </span>
                              <span className="posted-on">
                                <a href="post-single.html" rel="bookmark">
                                  August 20, 2020
                                </a>
                              </span>
                            </div>
                          </div>
                        </article>
                        <article className="post post-list post-listing overlay-zoom ">
                          <figure className="post-media">
                            <a href="post-single.html">
                              <img
                                src="https://portotheme.com/html/wolmart/assets/images/blog/classic/3.jpg"
                                alt="blog"
                              />
                            </a>
                          </figure>
                          <div className="post-details">
                            <span className="cat-wrap">
                              <span
                                className="cat-links"
                                style={{ backgroundColor: "#1e73be" }}
                              >
                                {" "}
                                <a href="/" className="cat-4">
                                  Life Science
                                </a>
                              </span>
                            </span>
                            <h4 className="post-title">
                              <a href="post-single.html">
                                Model Organisms – The Backbone of Biological
                                Research
                              </a>
                            </h4>
                            <div className="post-meta">
                              <span className="post-author">
                                <span className="author vcard">
                                  <a href="post-single.html">Biomall</a>
                                </span>
                              </span>
                              <span className="posted-on">
                                <a href="post-single.html" rel="bookmark">
                                  August 20, 2020
                                </a>
                              </span>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <BlogSidebar></BlogSidebar>
            </div>
          </div>
        </div>
   
    </>
  );
};

export default Bloghome;
