import React from "react";
import blogpost1 from '../../assets/images/demos/demo2/blog/1.jpg'

const BlogPostCard = () => {
  return (
    <>
      <figure className="post-media br-sm">
        <a href="post-single.html">
          <img
            src={blogpost1}
            alt="Post"
            width="620"
            height="398"
            style={{backgroundColor: "#898078"}}
          ></img>
        </a>
        <div className="post-calendar">
          <span className="post-day">05</span>
          <span className="post-month">Mar</span>
        </div>
      </figure>
      <div className="post-details">
        <h4 className="post-title">
          <a href="post-single.html">
            We want to be different, and Fashion gives me that outlet to do
          </a>
        </h4>
        <div className="post-content">
          <p>Lorem ipsum dolor sit amet conse ctetur adip.</p>
        </div>
        <a
          href="post-single.html"
          className="btn btn-link btn-dark btn-underline"
        >
          Read More<i className="w-icon-long-arrow-right"></i>
        </a>
      </div>
    </>
  );
};

export default BlogPostCard;
