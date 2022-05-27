import React from 'react'
import Blog1 from "../../assets/images/blog/2cols/1.jpg";
import Blog2 from "../../assets/images/blog/2cols/2.jpg";
import Blog3 from "../../assets/images/blog/2cols/3.jpg";
import Blog4 from "../../assets/images/blog/2cols/4.jpg";
import Blog5 from "../../assets/images/blog/2cols/5.jpg";
import Blog6 from "../../assets/images/blog/2cols/6.jpg";

const Blog = () => {
  return (
<>
<div className="page-wrapper">



        <main className="main">


            <nav className="breadcrumb-nav mb-6">
                <div className="container">
                    <ul className="breadcrumb">
                        <li><a href="demo1.html">Home</a></li>
                        <li><a href="blog.html">Blog</a></li>
                        <li>Grid Sidebar</li>
                    </ul>
                </div>
            </nav>

            <div className="page-content mb-10 pb-2">
                <div className="container">
                    <div className="row gutter-lg">
                        <div className="main-content">
                            <div className="row cols-sm-2">
                                <article className="post post-grid-type overlay-zoom mb-6 fashion">
                                    <figure className="post-media br-sm">
                                        <a href="post-single.html">
                                            <img src={Blog1} width="600" height="420"
                                                alt="blog" />
                                        </a>
                                    </figure>
                                    <div className="post-details">
                                        <div className="post-cats text-primary">
                                            <a href="/">Fashion</a>
                                        </div>
                                        <h4 className="post-title">
                                            <a href="post-single.html">New found the men dress for summer</a>
                                        </h4>
                                        <div className="post-content">
                                            <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales
                                                leo,
                                                eget blandit nunc tortor eu nibh. Suspendisse potenti.Sed egstas, ant at
                                                vulputate volutpat, uctus metus libero eu augue, vitae luctus…</p> <a
                                                href="post-single.html" className="btn btn-link btn-primary">(read more)</a>
                                        </div>
                                        <div className="post-meta">
                                            by <a href="/" className="post-author">John Doe</a>
                                            - <a href="/" className="post-date">03.01.2021</a>
                                            <a href="/" className="post-comment"><i
                                                    className="w-icon-comments"></i><span>7</span>Comments</a>
                                        </div>
                                    </div>
                                </article>
                                <article className="post post-grid-type overlay-zoom mb-6 others technology">
                                    <figure className="post-media br-sm">
                                        <a href="post-single.html">
                                            <img src={Blog2} width="600" height="420"
                                                alt="blog" />
                                        </a>
                                    </figure>
                                    <div className="post-details">
                                        <div className="post-cats text-primary">
                                            <a href="/">Others</a>,
                                            <a href="/">Technology</a>
                                        </div>
                                        <h4 className="post-title">
                                            <a href="post-single.html">Recognitory the needs is primary condition for
                                                design</a>
                                        </h4>
                                        <div className="post-content">
                                            <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales
                                                leo,
                                                eget blandit nunc tortor eu nibh. Suspendisse potenti.Sed egstas, ant at
                                                vulputate volutpat, uctus metus libero eu augue, vitae luctus…</p>
                                            <a href="post-single.html" className="btn btn-link btn-primary">(read more)</a>
                                        </div>
                                        <div className="post-meta">
                                            by <a href="/" className="post-author">John Doe</a>
                                            - <a href="/" className="post-date">03.05.2021</a>
                                            <a href="/" className="post-comment"><i
                                                    className="w-icon-comments"></i><span>4</span>Comments</a>
                                        </div>
                                    </div>
                                </article>
                                <article className="post post-grid-type overlay-zoom mb-6 clothes">
                                    <figure className="post-media br-sm">
                                        <a href="post-single.html">
                                            <img src={Blog3} width="600" height="420"
                                                alt="blog" />
                                        </a>
                                    </figure>
                                    <div className="post-details">
                                        <div className="post-cats text-primary">
                                            <a href="/">Clothes</a>
                                        </div>
                                        <h4 className="post-title">
                                            <a href="post-single.html">New found the women’s shirt for summer season</a>
                                        </h4>
                                        <div className="post-content">
                                            <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales
                                                leo,
                                                eget blandit nunc tortor eu nibh. Suspendisse potenti.Sed egstas, ant at
                                                vulputate volutpat, uctus metus libero eu augue, vitae luctus…</p>
                                            <a href="post-single.html" className="btn btn-link btn-primary">(read more)</a>
                                        </div>
                                        <div className="post-meta">
                                            by <a href="/" className="post-author">John Doe</a>
                                            - <a href="/" className="post-date">03.01.2021</a>
                                            <a href="/" className="post-comment"><i
                                                    className="w-icon-comments"></i><span>2</span>Comments</a>
                                        </div>
                                    </div>
                                </article>
                                <article className="post post-grid-type overlay-zoom mb-6 lifestyle">
                                    <figure className="post-media br-sm">
                                        <a href="post-single.html">
                                            <img src={Blog4} width="600" height="420"
                                                alt="blog" />
                                        </a>
                                    </figure>
                                    <div className="post-details">
                                        <div className="post-cats text-primary">
                                            <a href="/">Lifestyle</a>
                                        </div>
                                        <h4 className="post-title">
                                            <a href="post-single.html">We want to be different and fashion gives to me
                                                that outlet</a>
                                        </h4>
                                        <div className="post-content">
                                            <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales
                                                leo,
                                                eget blandit nunc tortor eu nibh. Suspendisse potenti.Sed egstas, ant at
                                                vulputate volutpat, uctus metus libero eu augue, vitae luctus…</p>
                                            <a href="post-single.html" className="btn btn-link btn-primary">(read more)</a>
                                        </div>
                                        <div className="post-meta">
                                            by <a href="/" className="post-author">John Doe</a>
                                            - <a href="/" className="post-date">03.03.2021</a>
                                            <a href="/" className="post-comment"><i
                                                    className="w-icon-comments"></i><span>5</span>Comments</a>
                                        </div>
                                    </div>
                                </article>
                                <article
                                    className="post post-grid-type overlay-zoom mb-6 entertainment lifestyle shoes others">
                                    <figure className="post-media br-sm">
                                        <a href="post-single.html">
                                            <img src={Blog5} width="600" height="420"
                                                alt="blog" />
                                        </a>
                                    </figure>
                                    <div className="post-details">
                                        <div className="post-cats text-primary">
                                            <a href="/">Entertainment</a>,
                                            <a href="/">Lifestyle</a>,
                                            <a href="/">Others</a>
                                        </div>
                                        <h4 className="post-title">
                                            <a href="post-single.html">Comes a cool blog post with Images</a>
                                        </h4>
                                        <div className="post-content">
                                            <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales
                                                leo,
                                                eget blandit nunc tortor eu nibh. Suspendisse potenti.Sed egstas, ant at
                                                vulputate volutpat, uctus metus libero eu augue, vitae luctus…</p>
                                            <a href="post-single.html" className="btn btn-link btn-primary">(read more)</a>
                                        </div>
                                        <div className="post-meta">
                                            by <a href="/" className="post-author">John Doe</a>
                                            - <a href="/" className="post-date">03.01.2021</a>
                                            <a href="/" className="post-comment"><i
                                                    className="w-icon-comments"></i><span>2</span>Comments</a>
                                        </div>
                                    </div>
                                </article>
                                <article className="post post-grid-type overlay-zoom mb-6 fashion lifestyle">
                                    <figure className="post-media br-sm">
                                        <a href="post-single.html">
                                            <img src={Blog6} width="600" height="420"
                                                alt="blog"/>
                                        </a>
                                    </figure>
                                    <div className="post-details">
                                        <div className="post-cats text-primary">
                                            <a href="/">Fashion</a>,
                                            <a href="/">Technology</a>
                                        </div>
                                        <h4 className="post-title">
                                            <a href="post-single.html">Fusce lacinia arcuet nulla</a>
                                        </h4>
                                        <div className="post-content">
                                            <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales
                                                leo,
                                                eget blandit nunc tortor eu nibh. Suspendisse potenti.Sed egstas, ant at
                                                vulputate volutpat, uctus metus libero eu augue, vitae luctus…</p>
                                            <a href="post-single.html" className="btn btn-link btn-primary">(read more)</a>
                                        </div>
                                        <div className="post-meta">
                                            by <a href="/" className="post-author">John Doe</a>
                                            - <a href="/" className="post-date">03.06.2021</a>
                                            <a href="/" className="post-comment"><i
                                                    className="w-icon-comments"></i><span>3</span>Comments</a>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <ul className="pagination justify-content-center">
                                <li className="prev disabled">
                                    <a href="/" aria-label="Previous" tabindex="-1" aria-disabled="true">
                                        <i className="w-icon-long-arrow-left"></i>Prev
                                    </a>
                                </li>
                                <li className="page-item active">
                                    <a className="page-link" href="/">1</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="/">2</a>
                                </li>
                                <li className="next">
                                    <a href="/" aria-label="Next">
                                        Next<i className="w-icon-long-arrow-right"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <aside className="sidebar right-sidebar blog-sidebar sidebar-fixed sticky-sidebar-wrapper">
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
                                    <div id="media_gallery-4" className="widget widget_media_gallery">
                                        <h2 className="widget-title style2"><span className="title">Gallery</span></h2>
                                        <div>
                                            <figure>
                                                <div>
                                                    <a href='https://blog.biomall.in/drosophila-eye-rhabdomere/'>
                                                        <img width="150" height="150"
                                                            src="https://blog.biomall.in/wp-content/uploads/2018/11/Drosophila-eye-rhabdomere-150x150.jpg"
                                                            alt="" loading="lazy" aria-describedby="gallery-1-887"
                                                            srcset="https://blog.biomall.in/wp-content/uploads/2018/11/Drosophila-eye-rhabdomere-150x150.jpg 150w, https://blog.biomall.in/wp-content/uploads/2018/11/Drosophila-eye-rhabdomere-448x448.jpg 448w, https://blog.biomall.in/wp-content/uploads/2018/11/Drosophila-eye-rhabdomere-768x768.jpg 768w, https://blog.biomall.in/wp-content/uploads/2018/11/Drosophila-eye-rhabdomere.jpg 1000w"
                                                            sizes="(max-width: 150px) 100vw, 150px" />
                                                    </a>
                                                </div>
                                                <figcaption>
                                                    Contest first prize winner &#8211; Immunostained Drosophila eye
                                                    rhabdomere cells under confocal microscope
                                                </figcaption>
                                            </figure>
                                            <figure>
                                                <div>
                                                    <a href='https://blog.biomall.in/dav/'>
                                                        <img width="150" height="150"
                                                            src="https://blog.biomall.in/wp-content/uploads/2018/11/Sodium-fluorescein-crystals-150x150.jpg"
                                                            alt=""
                                                            loading="lazy" aria-describedby="gallery-1-888" /></a>
                                                </div>
                                                <figcaption>
                                                    Contest second prize winner- Crystals of sodium fluorescein under
                                                    polarized light.
                                                </figcaption>
                                            </figure>
                                            <figure >
                                                <div>
                                                    <a href='https://blog.biomall.in/modified-by-combinezp/'><img
                                                            width="150" height="150"
                                                            src="https://blog.biomall.in/wp-content/uploads/2018/11/Mummified-eudocema-larva-scaled-150x150.jpg"
                                                            alt=""
                                                            loading="lazy" aria-describedby="gallery-1-889" /></a>
                                                </div>
                                                <figcaption>
                                                    Contest third prize winner- Mummified Eudocima larva
                                                </figcaption>
                                            </figure>
                                        </div>

                                        <div id="nav_menu-3" className="widget widget_nav_menu">
                                            <h2 className="widget-title style2"><span className="title">Protocols</span></h2>
                                            <div className="menu-vertical-list-container">
                                                <ul>
                                                    <li><a
                                                            href="https://blog.biomall.in/reverse-transcription-quantitative-pcr-rt-qpcr/">Reverse-transcription
                                                            quantitative PCR (RT-qPCR)</a></li>
                                                    <li><a
                                                            href="https://blog.biomall.in/antimicrobial-susceptibility-testing-by-clsi-method/">Antimicrobial
                                                            Susceptibility Testing by CLSI method</a></li>
                                                    <li><a href="https://blog.biomall.in/agarose-gel-electrophoresis/">Agarose
                                                            Gel Electrophoresis</a></li>
                                                    <li><a href="https://blog.biomall.in/rna-extraction-from-tissue/">RNA
                                                            extraction from tissue</a></li>
                                                    <li><a href="https://blog.biomall.in/prepatation-of-buffers/">Prepatation
                                                            of Buffers</a></li>
                                                    <li><a href="https://blog.biomall.in/preparation-of-culture-media/">Preparation
                                                            of Culture Media</a></li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div id="custom_html-6" className="widget_text widget widget_custom_html">
                                            <h2 className="widget-title style2"><span className="title">Tweets by Biomall</span>
                                            </h2>
                                            <div className="textwidget custom-html-widget">
                                                <div style={{height:'300px'}}>
                                                    <a className="twitter-timeline"
                                                        href="https://twitter.com/BioMall_in?ref_src=twsrc%5Etfw">Tweets
                                                        by
                                                        Biomall</a>
                                                    <script async src="https://platform.twitter.com/widgets.js"
                                                        charset="utf-8"></script>
                                                </div>
                                            </div>
                                        </div>

                                        <div id="archives-2" className="widget widget_archive">
                                            <h2 className="widget-title style2"><span className="title">Archives</span></h2>
                                            <ul>
                                                <li><a href='https://blog.biomall.in/2022/05/'>May 2022</a></li>
                                                <li><a href='https://blog.biomall.in/2022/04/'>April 2022</a></li>
                                                <li><a href='https://blog.biomall.in/2022/03/'>March 2022</a></li>
                                                <li><a href='https://blog.biomall.in/2022/02/'>February 2022</a></li>
                                                <li><a href='https://blog.biomall.in/2022/01/'>January 2022</a></li>
                                                <li><a href='https://blog.biomall.in/2021/12/'>December 2021</a></li>
                                                <li><a href='https://blog.biomall.in/2021/10/'>October 2021</a></li>
                                                <li><a href='https://blog.biomall.in/2021/09/'>September 2021</a></li>
                                                <li><a href='https://blog.biomall.in/2021/06/'>June 2021</a></li>
                                                <li><a href='https://blog.biomall.in/2021/05/'>May 2021</a></li>
                                                <li><a href='https://blog.biomall.in/2020/11/'>November 2020</a></li>
                                                <li><a href='https://blog.biomall.in/2020/10/'>October 2020</a></li>
                                                <li><a href='https://blog.biomall.in/2020/09/'>September 2020</a></li>
                                                <li><a href='https://blog.biomall.in/2020/08/'>August 2020</a></li>
                                                <li><a href='https://blog.biomall.in/2020/07/'>July 2020</a></li>
                                                <li><a href='https://blog.biomall.in/2020/06/'>June 2020</a></li>
                                                <li><a href='https://blog.biomall.in/2020/05/'>May 2020</a></li>
                                                <li><a href='https://blog.biomall.in/2020/04/'>April 2020</a></li>
                                                <li><a href='https://blog.biomall.in/2020/03/'>March 2020</a></li>
                                                <li><a href='https://blog.biomall.in/2020/02/'>February 2020</a></li>
                                                <li><a href='https://blog.biomall.in/2020/01/'>January 2020</a></li>
                                                <li><a href='https://blog.biomall.in/2019/12/'>December 2019</a></li>
                                                <li><a href='https://blog.biomall.in/2019/11/'>November 2019</a></li>
                                                <li><a href='https://blog.biomall.in/2019/10/'>October 2019</a></li>
                                                <li><a href='https://blog.biomall.in/2019/09/'>September 2019</a></li>
                                                <li><a href='https://blog.biomall.in/2019/08/'>August 2019</a></li>
                                                <li><a href='https://blog.biomall.in/2019/07/'>July 2019</a></li>
                                                <li><a href='https://blog.biomall.in/2019/06/'>June 2019</a></li>
                                                <li><a href='https://blog.biomall.in/2019/05/'>May 2019</a></li>
                                                <li><a href='https://blog.biomall.in/2019/04/'>April 2019</a></li>
                                                <li><a href='https://blog.biomall.in/2019/03/'>March 2019</a></li>
                                                <li><a href='https://blog.biomall.in/2019/02/'>February 2019</a></li>
                                                <li><a href='https://blog.biomall.in/2019/01/'>January 2019</a></li>
                                                <li><a href='https://blog.biomall.in/2018/12/'>December 2018</a></li>
                                                <li><a href='https://blog.biomall.in/2018/11/'>November 2018</a></li>
                                                <li><a href='https://blog.biomall.in/2018/10/'>October 2018</a></li>
                                                <li><a href='https://blog.biomall.in/2018/09/'>September 2018</a></li>
                                                <li><a href='https://blog.biomall.in/2018/08/'>August 2018</a></li>
                                                <li><a href='https://blog.biomall.in/2018/07/'>July 2018</a></li>
                                                <li><a href='https://blog.biomall.in/2018/06/'>June 2018</a></li>
                                                <li><a href='https://blog.biomall.in/2018/05/'>May 2018</a></li>
                                                <li><a href='https://blog.biomall.in/2018/04/'>April 2018</a></li>
                                                <li><a href='https://blog.biomall.in/2018/03/'>March 2018</a></li>
                                                <li><a href='https://blog.biomall.in/2018/02/'>February 2018</a></li>
                                                <li><a href='https://blog.biomall.in/2018/01/'>January 2018</a></li>
                                                <li><a href='https://blog.biomall.in/2017/12/'>December 2017</a></li>
                                                <li><a href='https://blog.biomall.in/2017/11/'>November 2017</a></li>
                                                <li><a href='https://blog.biomall.in/2017/10/'>October 2017</a></li>
                                            </ul>

                                        </div>

                                        <div id="email-subscribers-form-4" className="widget widget_email-subscribers-form">
                                            <h2 className="widget-title style2"><span className="title"> Subscribe To Our
                                                    Newsletter
                                                </span></h2>
                                            <div className="emaillist" id="es_form_f1-n1">
                                                <form action="/category/life-science/#es_form_f1-n1" method="post"
                                                    className="es_subscription_form es_shortcode_form"
                                                    id="es_subscription_form_627f26ebba451" data-source="ig-es">
                                                    <div className="es-field-wrap">
                                                        <label>Name*<br />
                                                            <input type="text" name="esfpx_name"
                                                                className="ig_es_form_field_name" placeholder="" value=""
                                                                required="required" />
                                                        </label>
                                                    </div>
                                                    <div className="es-field-wrap">
                                                        <label>Email*<br />
                                                            <input
                                                                className="es_required_field es_txt_email ig_es_form_field_email"
                                                                type="email" name="esfpx_email" value="" placeholder=""
                                                                required="required" />
                                                        </label>
                                                    </div>
                                                    <input type="submit" name="es" value="subscribe" />
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                        </aside>

                    </div>
                </div>
            </div>
        </main>

        <a id="scroll-top" className="scroll-top" href="#top" title="Top" role="button"> <i className="w-icon-angle-up"></i> <svg
            version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70">
            <circle id="progress-indicator" fill="transparent" stroke="#000000" stroke-miterlimit="10" cx="35" cy="35"
                r="34" ></circle>
        </svg> </a>


    </div>
</>
  )
}

export default Blog