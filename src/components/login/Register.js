import React from "react";
import "../login/Login.css";

const Register = () => {
    return(
        <>
        <div className="page-content">
    <div className="container">
        <div className="login-popup">
            <div className="tab tab-nav-boxed tab-nav-center tab-nav-underline">
                <ul className="nav nav-tabs text-uppercase" role="tablist">
                    
                    <li className="nav-item">
                        <a href="/" className="nav-link active">Sign Up</a>
                    </li>
                </ul>
                <div className="tab-content">
                    
                    <div className="tab-pane active" id="sign-up">
                        <div className="form-group w-48">
                            <label>First Name *</label>
                            <input type="text" className="form-control" name="first-name" id="first-name" required/>
                        </div>
                        <div className="form-group w-48">
                            <label>Mobile Number *</label>
                            <input type="text" className="form-control" name="Mobile-Number" id="Mobile Number" required/>
                        </div>
                        <div className="form-group w-48">
                            <label>Your email address *</label>
                            <input type="text" className="form-control" name="email_1" id="email_1" required/>
                        </div>
                        <div className="form-group w-48">
                            <label>Password *</label>
                            <input type="text" className="form-control" name="password_1" id="password_1" required/>
                        </div>
                        <div className="form-group w-100">
                            <label>Company/Institute Name* </label>
                            <input type="text" className="form-control" name="Company" id="Company" required/>
                                
                        </div>
                        <div className="form-group w-48">
                            <label>Designation*</label>
                            <input type="text" className="form-control" name="Designation" id="Designation" required/>
                        </div>
                            
                        <div className="form-group w-48">
                            <label>Pincode/zipcode*</label>
                            <input type="text" className="form-control" name="Pincode" id="Pincode" required/>
                        </div>
                        <div className="form-group  w-48">
                            <label>Country </label>
                            <input type="text" className="form-control" name="Country" id="Country" required/>
                        </div>
                            
                        <div className="form-group  w-48">
                            <label>State</label>
                            <input type="text" className="form-control" name="State" id="State" required/>
                        </div>
                        <div className="form-group  w-48">
                            <label>City </label>
                            <input type="text" className="form-control" name="City" id="City" required/>
                        </div>
                            
                        <div className="form-group w-48">
                            <label>How did you hear about us?</label>
                            <input type="text" className="form-control" name="about-us" id="about-us" required/>
                        </div>
                        <div className="login-popup-foot">
                       
                            <p>Your personal data will be used to support your experience 
                                throughout this website, to manage access to your account, 
                                and for other purposes described in our <a href="/" className="text-primary">privacy policy</a>.</p>
                            
                            <div className="form-checkbox d-flex align-items-center justify-content-between mb-5">
                                <input type="checkbox" className="custom-checkbox" id="remember" name="remember" required=""/>
                                <label for="remember" className="font-size-md">I agree to the </label>
                                <a  href="/" className="text-primary font-size-md">privacy policy</a>
                            </div>
                            <a href="/" className="btn btn-primary">Sign Un</a>
                        </div>
                    </div>
                </div>
                <div className="different_login">
                    <span> or</span>
                </div>
                <div className="form-note text-center">Already have an account? <a href="login.html">Log in</a></div>
            </div>
        </div>
    </div>
</div>
        </>
    );
}
export default Register;