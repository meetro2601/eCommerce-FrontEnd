import React from "react";
import "../login/Login.scss";

const Login = () => {
    return(
        <>
        <div className="page-content">
    <div className="container">
        <div className="login-popup">
            <div className="tab tab-nav-boxed tab-nav-center tab-nav-underline">
                <ul className="nav nav-tabs text-uppercase" role="tablist">
                    <li className="nav-item">
                        <a href="/" className="nav-link active">Sign In</a>
                    </li>
                    
                </ul>
                <div className="tab-content">
                    <div className="tab-pane active" id="sign-in">
                        <div className="form-group">
                            <label>Username or email address *</label>
                            <input type="text" className="form-control" name="username" id="username" required/>
                        </div>
                        <div className="form-group mb-0">
                            <label>Password *</label>
                            <input type="text" className="form-control" name="password" id="password" required/>
                        </div>
                        <div className="form-checkbox d-flex align-items-center justify-content-between">
                            <input type="checkbox" className="custom-checkbox" id="remember1" name="remember1" required=""/>
                            <label htmlFor="remember1">Remember me</label>
                            <a href="/">Last your password?</a>
                        </div>
                        <a href="/" className="btn btn-primary">Sign In</a>
                    </div>
                    
                </div>
                <p className="text-center">Sign in with social account</p>
                <div className=" d-flex justify-content-center">
                    
                    <a href="/" className="social-icons social-google fab fa-google">Sign in</a>
                </div>
                <div className="form-note text-center">Don't Have an Account? <a href="signup.html">Sign up now</a></div>
            </div>
        </div>
    </div>
</div>
        </>
    );
}
export default Login;