import { useFormik } from "formik";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import flagIndia from "../../assets/images/flags/Flag_of_India.png";
import "../login/Login.scss";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [mobileInp, setmobileInp] = useState(false);
  const [visible, setvisible] = useState(false)
  const [countries, setcountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all")
      .then((res) => {
        setcountries(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const validate = (values) => {
    const errors = {};
    if (!mobileInp && !values.email) {
      errors.email = "Required";
    } else if (
      !mobileInp &&
      !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(values.email)
    ) {
      errors.email = "Invalid Email";
    }

    if (mobileInp && !/^\d{10,15}$/.test(values.mobile)) {
      errors.mobile = "Invalid Mobile Number";
    }

    if (!values.password) {
      errors.password = "Required";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      mobile: "",
      password: "",
      mobCountry: { flag: flagIndia, code: "91" },
    },
    validate,
    onSubmit: (values) => {
      if(mobileInp){
        console.log({user:"+"+ values.mobCountry.code + values.mobile,
        password:values.password})
      }else{
        console.log({user:values.email,
        password:values.password});
      }
    },
  });

  return (
    <>
      <div className="page-content">
        <div className="container">
          <div className="login-popup">
            <h3 className="heading">Sign In</h3>
            <form onSubmit={formik.handleSubmit} id="sign-in">
              <div className="form-group">
                <label htmlFor="user">Email address or Mobile No.*</label>
                {mobileInp ? (
                  <>
                    <div className="d-flex p-relative">
                      <div
                        className={`p-static dropdown ${
                          visible ? "show" : ""
                        }`}
                      >
                        <button
                        type="button"
                          onChange={formik.handleChange}
                          name="mobCountry"
                          id="mobCountry"
                          onClick={()=>setvisible(!visible)}
                          className={`form-control d-flex h-100 pl-2 pr-6 ${
                            formik.touched.mobile && formik.errors.mobile
                              ? "field-error"
                              : ""
                          }`}
                        >
                          <img
                            src={formik.values.mobCountry.flag}
                            alt="IND Flag"
                            width="25"
                            className="mr-2"
                          ></img>
                          +{formik.values.mobCountry.code}
                        </button>
                        <ul className="dropdown-box">
                          {countries.map((country, index) => {
                            return (
                              <li
                                key={index}
                                onClick={() => {
                                  setvisible(false)
                                  formik.setFieldValue("mobCountry", {
                                    flag: country.flags.png,
                                    code: country.callingCodes[0],
                                  });
                                }}
                              >
                                <img
                                  src={country.flags.png}
                                  width={25}
                                  alt={country.alpha3Code}
                                  className="mr-2"
                                ></img>
                                <span className="mr-1">{country.name}</span>+
                                {country.callingCodes[0]}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                      <input
                        autoFocus
                        type="text"
                        className={`form-control ${
                          formik.touched.mobile && formik.errors.mobile
                            ? "field-error"
                            : ""
                        }`}
                        name="mobile"
                        id="mobile"
                        onBlur={formik.handleBlur}
                        onChange={(e) => {
                          formik.handleChange(e);
                          if (
                            !e.currentTarget.value ||
                            !/^\d*$/.test(e.currentTarget.value)
                          ) {
                            setmobileInp(false);
                            formik.values.email = e.currentTarget.value;
                            formik.setFieldValue("mobile", "");
                            // formik.setFieldValue("countryCode",formik.initialValues.countryCode)
                          }
                        }}
                        value={formik.values.mobile}
                      />
                    </div>
                    {formik.touched.mobile && formik.errors.mobile ? (
                      <p className="error">{formik.errors.mobile}</p>
                    ) : null}
                  </>
                ) : (
                  <>
                    <input
                      autoFocus
                      type="text"
                      className={`form-control ${
                        formik.touched.email && formik.errors.email
                          ? "field-error"
                          : ""
                      }`}
                      name="email"
                      id="email"
                      onBlur={formik.handleBlur}
                      onChange={(e) => {
                        formik.handleChange(e);
                        if (
                          e.currentTarget.value &&
                          /^\d*$/.test(e.currentTarget.value)
                        ) {
                          setmobileInp(true);
                          formik.values.mobile = e.currentTarget.value;
                          formik.setFieldValue("email", "");
                          // formik.setFieldValue("countryCode","+91")
                        }
                      }}
                      value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <p className="error">{formik.errors.email}</p>
                    ) : null}
                  </>
                )}
              </div>
              <div className="form-group mb-0">
                <label htmlFor="password">Password *</label>
                <input
                  type="text"
                  className={`form-control ${
                    formik.touched.password && formik.errors.password
                      ? "field-error"
                      : ""
                  }`}
                  name="password"
                  id="password"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                  <p className="error">{formik.errors.password}</p>
                ) : null}
              </div>
              <div className="form-checkbox d-flex align-items-center justify-content-between">
                <input
                  type="checkbox"
                  className="custom-checkbox"
                  id="remember1"
                  name="remember1"
                />
                <label htmlFor="remember1">Remember me</label>
                <a href="/">Forgot your password?</a>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Sign In
              </button>
            </form>
            <div className="different_login">
              <span> or</span>
            </div>
            <p className="text-center">Sign in with Social account</p>
            <div className=" d-flex justify-content-center">
              <a href="/" className="social-icons social-google fab fa-google">
                Sign In
              </a>
            </div>
            <div className="form-note text-center">
              Don't Have an Account?{" "}
              <Link to="/user/register">Sign Up Now</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;