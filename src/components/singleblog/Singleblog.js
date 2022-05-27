import React from 'react'
import Single1 from "../../assets/images/blog/single/1.jpg"
import Single2 from "../../assets/images/blog/single/2.jpg"
import Single3 from "../../assets/images/blog/single/3.jpg"
import Single4 from "../../assets/images/blog/single/4.jpg"
import Single5 from "../../assets/images/blog/single/5.jpg"

const Singleblog = () => {
  return (
<>
<main className="main">
            <nav className="breadcrumb-nav">
                <div className="container">
                    <ul className="breadcrumb bb-no">
                        <li><a href="demo1.html">Home</a></li>
                        <li><a href="blog.html">Blog</a></li>
                        <li>Blog Single</li>
                    </ul>
                </div>
            </nav>

            <div className="page-content mb-8">
                <div className="container">
                    <div className="row gutter-lg">
                        <div className=" post-single-content">
                            <div className="post post-grid post-single">
                                <figure className="post-media br-sm">
                                    <img src={Single1} alt="Blog" width="930" height="500" />
                                </figure>
                                <div className="post-details">
                                    <div className="post-meta">
                                        by <a href="/" className="post-author">John Doe</a>
                                        - <a href="/" className="post-date">03.01.2021</a>
                                        <a href="/" className="post-comment"><i className="w-icon-comments"></i><span>0</span>Comments</a>
                                    </div>
                                    <h2 className="post-title"><a href="/">Fashion tells about who you are from external point</a></h2>
                                    <div className="post-content">
                                        <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Suspendisse potenti. 
                                                Sed egstas, ant at vulputate volutpat, uctus metus libero eu augue, vitae luctus metus libero eu augue. </p>
                                        <p>Morbi purus libero, faucibus adi piscing, com modo quis, gravida iest. 
                                            Sed lectus. Praesent elementum hendrerit tortor. 
                                            Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, 
                                            mi neque euismod dui, eu pulvinar nunc sapien ornare nisl.  pede arcu, 
                                            dapibus eu, fermen tum et, dapibus sed, urna. <a href="/">Morbi interdum mollis sapien.</a>
                                            Sed ac risus. Pha sellus lacinia, magna a  laoreet, lect us arcu pulvinar risus, 
                                            vitae fac ilisis libero dolor a purus. 
                                        </p>
                                    </div>
                                </div>
                            </div>
 
                           
                            <p className="mb-10">Morbi interdum mollis sapien. Sed ac risus. Pha sellus lacinia, magna a  laoreet, lect us arcu pulvinar risus, vitae fac ilisis libeo dolor. 
                                Sed vel lacus. Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna.</p>
                            <h4 className="title title-md font-weight-bold">Defaulting to Mindfulness: The Third Person Effect</h4>
                            <p className="mb-2">Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, 
                                da pibus id, mattis vel, nisi. Sed pretium, ligula soll itudin laoreet viverra. Sed lectus. 
                                Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, 
                                lacus a ultric sagittis, mi neque euismod duin.</p>
                            <ul className="list-style-none list-type-check">
                                <li>Nunc nec porttitor turpis. In eu risus enim  neque, aliquet ve In vitae mollis elit.</li>
                                <li>Vivamus finibus vel mauris  eu risus enut vehicula.</li>
                                <li>Nullam a magna porttitor, dictum risus nec, fauci eu risus enbus sapien.</li>
                                <li>Ultrices eros in  eu risus encursus turpis massa tincidunt ante.</li>
                            </ul>
                            <p>Nibh ipsum consequat nisl vel. Non arcu risus quis varius quam quisque id diam vel. Eu turpis egestas pharetra.</p>
                           
                            <div className="post-navigation">
                                <div className="nav nav-prev">
                                    <a href="/" className="align-items-start text-left">
                                        <span><i className="w-icon-long-arrow-left"></i>previous post</span>
                                        <span className="nav-content mb-0 text-normal">Vivamus vestibulum ntulla nec ante</span>
                                    </a>
                                </div>
                                <div className="nav nav-next"> 
                                    <a href="/" className="align-items-end text-right">
                                        <span>next post<i className="w-icon-long-arrow-right"></i></span>
                                        <span className="nav-content mb-0 text-normal">Fusce lacinia arcuet nulla</span>
                                    </a>
                                </div>
                            </div>

                            <h4 className="title title-lg font-weight-bold mt-10 pt-1 mb-5">Related Posts</h4>
                            <div className="swiper">
                                <div className="post-slider swiper-container swiper-theme nav-top pb-2" data-swiper-options="{
                                    'spaceBetween': 20,
                                    'slidesPerView': 1,
                                    'breakpoints': {
                                        '576': {
                                            'slidesPerView': 2
                                        },
                                        '768': {
                                            'slidesPerView': 3
                                        },
                                        '992': {
                                            'slidesPerView': 2
                                        },
                                        '1200': {
                                            'slidesPerView': 3
                                        }
                                    }
                                }">
                                    <div className="swiper-wrapper row cols-lg-3 cols-md-4 cols-sm-3 cols-xs-2 cols-1">
                                        <div className="swiper-slide post post-grid">
                                            <figure className="post-media br-sm">
                                                <a href="post-single.html">
                                                    <img src={Single2} alt="Post" width="296"
                                                        height="190" style={{backgroundcolor: '#bcbcb4'}} />
                                                </a>
                                            </figure>
                                            <div className="post-details text-center">
                                                <div className="post-meta">
                                                    by <a href="/" className="post-author">Logan Cee</a>
                                                    - <a href="/" className="post-date">03.05.2021</a>
                                                </div>
                                                <h4 className="post-title mb-3"><a href="post-single.html">Fashion tell about who you are from...</a></h4>
                                                <a href="post-single.html" className="btn btn-link btn-dark btn-underline font-weight-normal">Read More<i className="w-icon-long-arrow-right"></i></a>
                                            </div>
                                        </div>
                                        <div className="swiper-slide post post-grid">
                                            <figure className="post-media br-sm">
                                                <a href="post-single.html">
                                                    <img src={Single3} alt="Post" width="296"
                                                        height="190" style={{backgroundcolor: '#cad2d1'}} />
                                                </a>
                                            </figure>
                                            <div className="post-details text-center">
                                                <div className="post-meta">
                                                    by <a href="/" className="post-author">Hilary Kreton</a>
                                                    - <a href="/" className="post-date">03.05.2021</a>
                                                </div>
                                                <h4 className="post-title mb-3"><a href="post-single.html">Comes a cool blog post with Images</a></h4>
                                                <a href="post-single.html" className="btn btn-link btn-dark btn-underline font-weight-normal">Read More<i className="w-icon-long-arrow-right"></i></a>
                                            </div>
                                        </div>
                                        <div className="swiper-slide post post-grid">
                                            <figure className="post-media br-sm">
                                                <a href="post-single.html">
                                                    <img src={Single4} alt="Post" width="296"
                                                        height="190" style={{backgroundcolor: '#ececec'}} />
                                                </a>
                                            </figure>
                                            <div className="post-details text-center">
                                                <div className="post-meta">
                                                    by <a href="/" className="post-author">Casper Dailn</a>
                                                    - <a href="/" className="post-date">03.05.2021</a>
                                                </div>
                                                <h4 className="post-title mb-3"><a href="post-single.html">Comes a cool blog post with Images</a></h4>
                                                <a href="post-single.html" className="btn btn-link btn-dark btn-underline font-weight-normal">Read More<i className="w-icon-long-arrow-right"></i></a>
                                            </div>
                                        </div>
                                        <div className="swiper-slide post post-grid">
                                            <figure className="post-media br-sm">
                                                <a href="post-single.html">
                                                    <img src={Single5} alt="Post" width="296"
                                                        height="190" style={{backgroundcolor: '#AFAFAF'}} />
                                                </a>
                                            </figure>
                                            <div className="post-details text-center">
                                                <div className="post-meta">
                                                    by <a href="/" className="post-author">John Doe</a>
                                                    - <a href="/" className="post-date">03.05.2021</a>
                                                </div>
                                                <h4 className="post-title mb-3"><a href="post-single.html">We want to be different and fashion gives to me that outlet</a></h4>
                                                <a href="post-single.html" className="btn btn-link btn-dark btn-underline font-weight-normal">Read More<i className="w-icon-long-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="swiper-button-next"></button>
                                    <button className="swiper-button-prev"></button>
                                </div>
                            </div>

                            
                            <h4 className="title title-lg font-weight-bold pt-1 mt-10">Comments</h4>
                            <ul className="comments list-style-none pl-0">
                                <li className="comment">
                                    <div className="comment-body">
                                        <div className="comment-content">
                                            <h4 className="comment-author font-weight-bold">
                                                <a href="/">John Doe</a>
                                                <span className="comment-date">Aug 23, 2021 at 10:46 am</span>
                                            </h4>
                                            <p>Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl.arcu fer
                                                ment umet, dapibus sed, urna.</p>
                                            <a href="/" className="btn btn-dark btn-link btn-underline btn-icon-right btn-reply">Reply<i className="w-icon-long-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </li>
                            </ul>

                            <form className="reply-section pb-4">
                                <h4 className="title title-md font-weight-bold pt-1 mt-10 mb-0">Leave a Reply</h4>
                                <p>Your email address will not be published. Required fields are marked</p>
                                <div className="row">
                                    <div className="col-sm-6 mb-4">
                                        <input type="text" className="form-control" placeholder="Enter Your Name" id="name"/>
                                    </div>
                                    <div className="col-sm-6 mb-4">
                                        <input type="text" className="form-control" placeholder="Enter Your Email" id="email_1"/>
                                    </div>
                                </div>
                                <textarea cols="30" rows="6" placeholder="Write a Comment" className="form-control mb-4" id="comment"></textarea>
                                <button className="btn btn-dark btn-rounded btn-icon-right btn-comment">Post Comment<i className="w-icon-long-arrow-right"></i></button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

        </main>

</>
  )
}

export default Singleblog