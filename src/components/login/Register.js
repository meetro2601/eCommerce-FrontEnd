import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DropdownBtn from "../HOC/DropdownBtn";
import flagIndia from "../../assets/images/flags/Flag_of_India.png";
import "../login/Login.scss";
import OTPModal from "./OTPModal";

const Register = () => {
  const [countries, setcountries] = useState([]);
  const [otpId, setotpId] = useState("")
  const [showModal, setshowModal] = useState(false);

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
    if (!values.name) {
      errors.name = "Please enter your name";
    } else if (values.name.length < 3) {
      errors.name = "Name must be atleat 3 characters long";
    }

    if (!values.mobile) {
      errors.mobile = "Please enter your Mobile number";
    } else if (!/^\d{10,15}$/.test(values.mobile)) {
      errors.mobile = "Please enter Valid Mobile number";
    }

    if (!values.email) {
      errors.email = "Please enter your Email";
    } else if (
      !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(values.email)
    ) {
      errors.email = "Please enter Valid Email";
    }

    if (!values.password) {
      errors.password = "Please enter your Password";
    } else if (values.password.length < 8) {
      errors.password = "Password must be atleast 8 characters long";
    } else if (
      !/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[@$&_])[a-zA-Z0-9@$&_]+$/.test(
        values.password
      )
    ) {
      errors.password =
        "Password must be alphanumeric & include a special character (@$&_)";
    }

    if (!values.company) {
      errors.company = "Enter your Company / Institute";
    }

    if (!values.designation) {
      errors.designation = "Enter your Designation";
    }

    if (!values.zipcode) {
      errors.pincode = "Enter your Pincode / Zipcode";
    }

    if (!values.city) {
      errors.city = "Enter your City";
    }

    if (!values.state) {
      errors.state = "Enter your State";
    }

    if (!values.country) {
      errors.country = "Enter your Country";
    }

    if (!values.acceptPolicy) {
      errors.acceptPolicy = "Please accept our Privacy policy";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      mobile: "",
      mobCountry: { flag: flagIndia, code: "91" },
      email: "",
      password: "",
      company: "",
      designation: "",
      zipcode: "",
      city: "",
      state: "",
      country: "",
      discoveredThrough: "",
      acceptPolicy: false,
    },
    validate,
    onSubmit: (values, actions) => {
      axios
      .post("http://localhost:4000/api/auth/sendOtp", {
        email: values.email,
        mobile: "+" + values.mobCountry.code + values.mobile,
      })
      .then((res) => {
          setshowModal(true)
          setotpId(res.data.otpId)
          })
        .catch((err) => {
          if (err.response.data.emailError) {
            actions.setFieldError("email", err.response.data.emailError);
            window.scroll(0,0)
          } else if (err.response.data.mobileError) {
            actions.setFieldError("mobile", err.response.data.mobileError);
            window.scroll(0,0)
          } else {
            alert(err.response.data.error);
          }
        });
      // console.log(values);
    },
  });

  const countryDropdown = (props) => {
    return (
      <div className={`p-static dropdown ${props.visible ? "show" : ""}`}>
        <button
          type="button"
          onChange={formik.handleChange}
          name="mobCountry"
          id="mobCountry"
          onClick={props.toggleDropdown}
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
                  props.closeDropdown();
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
    );
  };

  return (
    <>
      <div className="page-content">
        <div className="container">
          <div className="login-popup sign-up">
            <h3 className="heading">Sign Up</h3>
            <form onSubmit={formik.handleSubmit} id="sign-up">
              <div className="form-group w-48">
                <label>Full Name *</label>
                <input
                  type="text"
                  className={`form-control ${
                    formik.touched.name && formik.errors.name
                      ? "field-error"
                      : ""
                  }`}
                  name="name"
                  id="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.name && formik.errors.name ? (
                  <p className="error">{formik.errors.name}</p>
                ) : null}
              </div>
              <div className="form-group w-48">
                <label>Mobile Number *</label>
                <div className="d-flex p-relative">
                  {DropdownBtn(countryDropdown)}
                  <input
                    type="number"
                    className={`form-control ${
                      formik.touched.mobile && formik.errors.mobile
                        ? "field-error"
                        : ""
                    }`}
                    name="mobile"
                    id="mobile"
                    value={formik.values.mobile}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    onKeyDown={(e) => {
                      ["e", "E", "+", "-", "."].includes(e.key) &&
                        e.preventDefault();
                    }}
                  />
                </div>
                {formik.touched.mobile && formik.errors.mobile ? (
                  <p className="error">{formik.errors.mobile}</p>
                ) : null}
              </div>
              <div className="form-group w-48">
                <label>Email Address *</label>
                <input
                  type="text"
                  className={`form-control ${
                    formik.touched.email && formik.errors.email
                      ? "field-error"
                      : ""
                  }`}
                  name="email"
                  id="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                  <p className="error">{formik.errors.email}</p>
                ) : null}
              </div>
              <div className="form-group w-48">
                <label>Password *</label>
                <input
                  type="text"
                  className={`form-control ${
                    formik.touched.password && formik.errors.password
                      ? "field-error"
                      : ""
                  }`}
                  name="password"
                  id="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password ? (
                  <p className="error">{formik.errors.password}</p>
                ) : null}
              </div>
              <div className="form-group w-100">
                <label>Company/Institute Name *</label>
                <input
                  type="text"
                  className={`form-control ${
                    formik.touched.company && formik.errors.company
                      ? "field-error"
                      : ""
                  }`}
                  name="company"
                  id="company"
                  value={formik.values.company}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.company && formik.errors.company ? (
                  <p className="error">{formik.errors.company}</p>
                ) : null}
              </div>
              <div className="form-group w-48">
                <label>Designation *</label>
                <input
                  type="text"
                  className={`form-control ${
                    formik.touched.designation && formik.errors.designation
                      ? "field-error"
                      : ""
                  }`}
                  name="designation"
                  id="designation"
                  value={formik.values.designation}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.designation && formik.errors.designation ? (
                  <p className="error">{formik.errors.designation}</p>
                ) : null}
              </div>
              <div className="form-group w-48">
                <label>Pincode/Zipcode *</label>
                <input
                  type="number"
                  className={`form-control ${
                    formik.touched.zipcode && formik.errors.zipcode
                      ? "field-error"
                      : ""
                  }`}
                  name="zipcode"
                  id="zipcode"
                  value={formik.values.zipcode}
                  onChange={formik.handleChange}
                  onKeyDown={(e) => {
                    ["e", "E", "+", "-", "."].includes(e.key) &&
                      e.preventDefault();
                  }}
                  onBlur={(e) => {
                    formik.handleBlur(e);
                    axios
                      .get(
                        `https://api.postalpincode.in/pincode/${formik.values.zipcode}`
                      )
                      .then((res) => {
                        let address = res.data[0].PostOffice[0];
                        if (address != null) {
                          formik.setFieldValue("city", address.District);
                          formik.setFieldValue("state", address.State);
                          formik.setFieldValue("country", address.Country);
                        }
                      })
                      .catch((err) => {
                        console.log(err.message);
                      });
                  }}
                />
                {formik.touched.zipcode && formik.errors.zipcode ? (
                  <p className="error">{formik.errors.zipcode}</p>
                ) : null}
              </div>
              <div className="form-group  w-48">
                <label>City </label>
                <input
                  type="text"
                  className={`form-control ${
                    formik.touched.city && formik.errors.city
                      ? "field-error"
                      : ""
                  }`}
                  name="city"
                  id="city"
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.city && formik.errors.city ? (
                  <p className="error">{formik.errors.city}</p>
                ) : null}
              </div>
              <div className="form-group  w-48">
                <label>State</label>
                <input
                  type="text"
                  className={`form-control ${
                    formik.touched.state && formik.errors.state
                      ? "field-error"
                      : ""
                  }`}
                  name="state"
                  id="state"
                  value={formik.values.state}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.state && formik.errors.state ? (
                  <p className="error">{formik.errors.state}</p>
                ) : null}
              </div>
              <div className="form-group  w-48">
                <label>Country</label>
                <input
                  type="text"
                  className={`form-control ${
                    formik.touched.country && formik.errors.country
                      ? "field-error"
                      : ""
                  }`}
                  name="country"
                  id="country"
                  value={formik.values.country}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.country && formik.errors.country ? (
                  <p className="error">{formik.errors.country}</p>
                ) : null}
              </div>
              <div className="form-group w-48">
                <label>How did you hear about us?</label>
                <select
                  name="discoveredThrough"
                  id="discoveredThrough"
                  className={`form-control ${
                    formik.touched.discoveredThrough && formik.errors.discoveredThrough
                      ? "field-error"
                      : ""
                  }`}
                  placeholder="How did you hear about us?"
                  value={formik.values.discoveredThrough}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="" disabled>
                    How did you hear about us?
                  </option>
                  <option>Facebook</option>
                  <option>Instagram</option>
                  <option>Linkedin</option>
                  <option>Google</option>
                  <option>Google Ads</option>
                  <option>Exhibition</option>
                  <option>Friends / Colleagues</option>
                </select>
                {formik.touched.discoveredThrough && formik.errors.discoveredThrough ? (
                  <p className="error">{formik.errors.discoveredThrough}</p>
                ) : null}
              </div>
              <div className="login-popup-foot">
                <p>
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our privacy policy.
                </p>

                <div className="form-checkbox mb-5">
                  <input
                    type="checkbox"
                    className="custom-checkbox"
                    id="acceptPolicy"
                    name="acceptPolicy"
                    value={formik.values.acceptPolicy}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label htmlFor="acceptPolicy">
                    I agree to the{" "}
                    <a href="/" className="text-primary">
                      Privacy Policy
                    </a>
                  </label>
                  {formik.touched.acceptPolicy && formik.errors.acceptPolicy ? (
                    <span className="error ml-2">
                      {formik.errors.acceptPolicy}
                    </span>
                  ) : null}
                </div>
              </div>
              <button type="submit" className="btn w-100 btn-primary">
                Sign Up
              </button>
            </form>
            <div className="different_login">
              <span> or</span>
            </div>
            <div className="form-note text-center">
              Already have an account? <Link to="/user/login">Log In</Link>
            </div>
          </div>
        </div>
      </div>
      {showModal ? (
        <OTPModal otpId={otpId} setotpId={setotpId} data={formik.values} closeModal={() => setshowModal(false)}></OTPModal>
      ) : null}
    </>
  );
};
export default Register;
