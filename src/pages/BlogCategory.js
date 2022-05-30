import React from "react";
import { Link } from "react-router-dom";
import Blog1 from "../assets/images/blog/2cols/1.jpg";
import Blog2 from "../assets/images/blog/2cols/2.jpg";
import Blog3 from "../assets/images/blog/2cols/3.jpg";
import Blog4 from "../assets/images/blog/2cols/4.jpg";
import Blog5 from "../assets/images/blog/2cols/5.jpg";
import Blog6 from "../assets/images/blog/2cols/6.jpg";
import BlogSidebar from "../components/blog/BlogSidebar";

const BlogCategory = () => {
  return (
      <>
      <nav className="breadcrumb-nav">
        <div className="container">
          <ul className="breadcrumb bb-no">
            <li>
              <a href="demo1.html">Home</a>
            </li>
            <li>
              <a href="blog.html">Blog</a>
            </li>
            <li>Category</li>
          </ul>
        </div>
      </nav>

    <div className="row">
      <div className="col-md-9">
        <div className="page-content mb-10 pb-2">
          <div className="container">
            <div className="row gutter-lg">
              <div className="">
                <div className="row cols-sm-2">
                  <article className="post post-grid-type overlay-zoom mb-6 fashion">
                    <figure className="post-media br-sm">
                      <Link to='/blogs/singleblog'>
                        <img src={Blog1} width="600" height="420" alt="blog" />
                      </Link>
                    </figure>
                    <div className="post-details">
                      <div className="post-cats text-primary">
                        <a href="/">Fashion</a>
                      </div>
                      <h4 className="post-title">
                      <Link to='/blogs/singleblog'>
                          New found the men dress for summer
                        </Link>
                      </h4>
                      <div className="post-content">
                        <p>
                          Sed pretium, ligula sollicitudin laoreet viverra,
                          tortor libero sodales leo, eget blandit nunc tortor eu
                          nibh. Suspendisse potenti.Sed egstas, ant at vulputate
                          volutpat, uctus metus libero eu augue, vitae luctus…
                        </p>{" "}
                        <Link to='/blogs/singleblog'
                          className="btn btn-link btn-primary"
                        >
                          (read more)
                        </Link>
                      </div>
                      <div className="post-meta">
                        by{" "}
                        <a href="/" className="post-author">
                          John Doe
                        </a>
                        -{" "}
                        <a href="/" className="post-date">
                          03.01.2021
                        </a>
                        <a href="/" className="post-comment">
                          <i className="w-icon-comments"></i>
                          <span>7</span>Comments
                        </a>
                      </div>
                    </div>
                  </article>
                  <article className="post post-grid-type overlay-zoom mb-6 others technology">
                    <figure className="post-media br-sm">
                      <a href="post-single.html">
                        <img src={Blog2} width="600" height="420" alt="blog" />
                      </a>
                    </figure>
                    <div className="post-details">
                      <div className="post-cats text-primary">
                        <a href="/">Others</a>,<a href="/">Technology</a>
                      </div>
                      <h4 className="post-title">
                        <a href="post-single.html">
                          Recognitory the needs is primary condition for design
                        </a>
                      </h4>
                      <div className="post-content">
                        <p>
                          Sed pretium, ligula sollicitudin laoreet viverra,
                          tortor libero sodales leo, eget blandit nunc tortor eu
                          nibh. Suspendisse potenti.Sed egstas, ant at vulputate
                          volutpat, uctus metus libero eu augue, vitae luctus…
                        </p>
                        <a
                          href="post-single.html"
                          className="btn btn-link btn-primary"
                        >
                          (read more)
                        </a>
                      </div>
                      <div className="post-meta">
                        by{" "}
                        <a href="/" className="post-author">
                          John Doe
                        </a>
                        -{" "}
                        <a href="/" className="post-date">
                          03.05.2021
                        </a>
                        <a href="/" className="post-comment">
                          <i className="w-icon-comments"></i>
                          <span>4</span>Comments
                        </a>
                      </div>
                    </div>
                  </article>
                  <article className="post post-grid-type overlay-zoom mb-6 clothes">
                    <figure className="post-media br-sm">
                      <a href="post-single.html">
                        <img src={Blog3} width="600" height="420" alt="blog" />
                      </a>
                    </figure>
                    <div className="post-details">
                      <div className="post-cats text-primary">
                        <a href="/">Clothes</a>
                      </div>
                      <h4 className="post-title">
                        <a href="post-single.html">
                          New found the women’s shirt for summer season
                        </a>
                      </h4>
                      <div className="post-content">
                        <p>
                          Sed pretium, ligula sollicitudin laoreet viverra,
                          tortor libero sodales leo, eget blandit nunc tortor eu
                          nibh. Suspendisse potenti.Sed egstas, ant at vulputate
                          volutpat, uctus metus libero eu augue, vitae luctus…
                        </p>
                        <a
                          href="post-single.html"
                          className="btn btn-link btn-primary"
                        >
                          (read more)
                        </a>
                      </div>
                      <div className="post-meta">
                        by{" "}
                        <a href="/" className="post-author">
                          John Doe
                        </a>
                        -{" "}
                        <a href="/" className="post-date">
                          03.01.2021
                        </a>
                        <a href="/" className="post-comment">
                          <i className="w-icon-comments"></i>
                          <span>2</span>Comments
                        </a>
                      </div>
                    </div>
                  </article>
                  <article className="post post-grid-type overlay-zoom mb-6 lifestyle">
                    <figure className="post-media br-sm">
                      <a href="post-single.html">
                        <img src={Blog4} width="600" height="420" alt="blog" />
                      </a>
                    </figure>
                    <div className="post-details">
                      <div className="post-cats text-primary">
                        <a href="/">Lifestyle</a>
                      </div>
                      <h4 className="post-title">
                        <a href="post-single.html">
                          We want to be different and fashion gives to me that
                          outlet
                        </a>
                      </h4>
                      <div className="post-content">
                        <p>
                          Sed pretium, ligula sollicitudin laoreet viverra,
                          tortor libero sodales leo, eget blandit nunc tortor eu
                          nibh. Suspendisse potenti.Sed egstas, ant at vulputate
                          volutpat, uctus metus libero eu augue, vitae luctus…
                        </p>
                        <a
                          href="post-single.html"
                          className="btn btn-link btn-primary"
                        >
                          (read more)
                        </a>
                      </div>
                      <div className="post-meta">
                        by{" "}
                        <a href="/" className="post-author">
                          John Doe
                        </a>
                        -{" "}
                        <a href="/" className="post-date">
                          03.03.2021
                        </a>
                        <a href="/" className="post-comment">
                          <i className="w-icon-comments"></i>
                          <span>5</span>Comments
                        </a>
                      </div>
                    </div>
                  </article>
                  <article className="post post-grid-type overlay-zoom mb-6 entertainment lifestyle shoes others">
                    <figure className="post-media br-sm">
                      <a href="post-single.html">
                        <img src={Blog5} width="600" height="420" alt="blog" />
                      </a>
                    </figure>
                    <div className="post-details">
                      <div className="post-cats text-primary">
                        <a href="/">Entertainment</a>,<a href="/">Lifestyle</a>,
                        <a href="/">Others</a>
                      </div>
                      <h4 className="post-title">
                        <a href="post-single.html">
                          Comes a cool blog post with Images
                        </a>
                      </h4>
                      <div className="post-content">
                        <p>
                          Sed pretium, ligula sollicitudin laoreet viverra,
                          tortor libero sodales leo, eget blandit nunc tortor eu
                          nibh. Suspendisse potenti.Sed egstas, ant at vulputate
                          volutpat, uctus metus libero eu augue, vitae luctus…
                        </p>
                        <a
                          href="post-single.html"
                          className="btn btn-link btn-primary"
                        >
                          (read more)
                        </a>
                      </div>
                      <div className="post-meta">
                        by{" "}
                        <a href="/" className="post-author">
                          John Doe
                        </a>
                        -{" "}
                        <a href="/" className="post-date">
                          03.01.2021
                        </a>
                        <a href="/" className="post-comment">
                          <i className="w-icon-comments"></i>
                          <span>2</span>Comments
                        </a>
                      </div>
                    </div>
                  </article>
                  <article className="post post-grid-type overlay-zoom mb-6 fashion lifestyle">
                    <figure className="post-media br-sm">
                      <a href="post-single.html">
                        <img src={Blog6} width="600" height="420" alt="blog" />
                      </a>
                    </figure>
                    <div className="post-details">
                      <div className="post-cats text-primary">
                        <a href="/">Fashion</a>,<a href="/">Technology</a>
                      </div>
                      <h4 className="post-title">
                        <a href="post-single.html">
                          Fusce lacinia arcuet nulla
                        </a>
                      </h4>
                      <div className="post-content">
                        <p>
                          Sed pretium, ligula sollicitudin laoreet viverra,
                          tortor libero sodales leo, eget blandit nunc tortor eu
                          nibh. Suspendisse potenti.Sed egstas, ant at vulputate
                          volutpat, uctus metus libero eu augue, vitae luctus…
                        </p>
                        <a
                          href="post-single.html"
                          className="btn btn-link btn-primary"
                        >
                          (read more)
                        </a>
                      </div>
                      <div className="post-meta">
                        by{" "}
                        <a href="/" className="post-author">
                          John Doe
                        </a>
                        -{" "}
                        <a href="/" className="post-date">
                          03.06.2021
                        </a>
                        <a href="/" className="post-comment">
                          <i className="w-icon-comments"></i>
                          <span>3</span>Comments
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
                <ul className="pagination justify-content-center">
                  <li className="prev disabled">
                    <a
                      href="/"
                      aria-label="Previous"
                      tabIndex="-1"
                      aria-disabled="true"
                    >
                      <i className="w-icon-long-arrow-left"></i>Prev
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="/">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="/">
                      2
                    </a>
                  </li>
                  <li className="next">
                    <a href="/" aria-label="Next">
                      Next<i className="w-icon-long-arrow-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3">
          <BlogSidebar/>
      </div>
    </div>
    </>
  );
};

export default BlogCategory;
