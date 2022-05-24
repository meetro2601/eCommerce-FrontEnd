import React from 'react'
import "../wishlist/Wishlist.scss";
import Shop1 from "../../assets/images/shop/7-1.jpg"
import Shop2 from "../../assets/images/shop/19-1.jpg"
import Shop3 from "../../assets/images/shop/20.jpg"


const Wishlist = () => {
  return (
<>
<div className="page-wrapper">
    <main className="main wishlist-page">
        
        <nav className="breadcrumb-nav mb-10">
            <div className="container">
                <ul className="breadcrumb">
                    <li><a href="index.html">Home</a></li>
                    <li>Wishlist</li>
                </ul>
            </div>
        </nav>

        <div className="page-content">
            <div className="container">
                <h3 className="wishlist-title">My wishlist</h3>
                <table className="shop-table wishlist-table">
                    <thead>
                        <tr>
                            <th className="product-name"><span>Product</span></th>
                            <th></th>
                            <th className="product-price"><span>Price</span></th>
                            <th className="product-stock-status"><span>Stock Status</span></th>
                            <th className="wishlist-action">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="product-thumbnail">
                                <div className="p-relative">
                                    <a href="product-default.html">
                                        <figure>
                                            <img src={Shop1} alt="product" width="300"
                                                height="338" />
                                        </figure>
                                    </a>
                                    <button type="submit" className="btn btn-close"><i
                                            className="fas fa-times"></i></button>
                                </div>
                            </td>
                            <td className="product-name">
                                <a href="product-default.html">
                                    Blue Sky Trunk
                                </a>
                            </td>
                            <td className="product-price">
                                <ins className="new-price">$85.00</ins>
                            </td>
                            <td className="product-stock-status">
                                <span className="wishlist-in-stock">In Stock</span>
                            </td>
                            <td className="wishlist-action">
                                <div className="d-lg-flex">
                                    
                                    <a href="/" className="btn btn-dark btn-rounded btn-sm ml-lg-2 btn-cart">Add to
                                        cart</a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="product-thumbnail">
                                <div className="p-relative">
                                    <a href="product-default.html">
                                        <figure>
                                            <img src={Shop2} alt="product" width="300" height="338" />
                                        </figure>
                                    </a>
                                    <button type="submit" className="btn btn-close"><i className="fas fa-times"></i></button>
                                </div>
                            </td>
                            <td className="product-name">
                                <a href="product-default.html">
                                    Handmade Ring
                                </a>
                            </td>
                            <td className="product-price"><ins className="new-price">$5.00</ins></td>
                            <td className="product-stock-status">
                                <span className="wishlist-in-stock">In Stock</span>
                            </td>
                            <td className="wishlist-action">
                                <div className="d-lg-flex">
                                    
                                    <a href="/" className="btn btn-dark btn-rounded btn-sm ml-lg-2 btn-cart">Add to
                                        cart</a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="product-thumbnail">
                                <div className="p-relative">
                                    <a href="product-default.html">
                                        <figure>
                                            <img src={Shop3} alt="product" width="300"
                                                height="338" />
                                        </figure>
                                    </a>
                                    <button type="submit" className="btn btn-close"><i
                                            className="fas fa-times"></i></button>
                                </div>
                            </td>
                            <td className="product-name">
                                <a href="product-default.html">
                                    Pencil Case
                                </a>
                            </td>
                            <td className="product-price"><ins className="new-price">$54.00</ins></td>
                            <td className="product-stock-status">
                                <span className="wishlist-in-stock">In Stock</span>
                            </td>
                            <td className="wishlist-action">
                                <div className="d-lg-flex">
                                    
                                    <a href="/" className="btn btn-dark btn-rounded btn-sm ml-lg-2 btn-cart">Add to
                                        cart</a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="social-links">
                    <label>Share On:</label>
                    <div className="social-icons social-no-color border-thin">
                        <a href="/" className="social-icon social-facebook w-icon-facebook"> </a>
                        <a href="/" className="social-icon social-twitter w-icon-twitter"> </a> 
                        <a href="/" className="social-icon social-email far fa-envelope"> </a>
                        <a href="/" className="social-icon social-whatsapp fab fa-whatsapp"> </a>
                    </div>
                </div>
            </div>
        </div>
    </main>
</div>
</>
  )
}

export default Wishlist;