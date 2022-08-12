import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const OTPModal = ({ closeModal, data, otpId, setotpId }) => {
  const [otps, setotps] = useState({
    otpEmail: new Array(6).fill(""),
    otpMobile: new Array(6).fill(""),
  });
  const [alertBar, setalertBar] = useState({ success: true, message: "" });
  const location = useLocation();
  const navigate = useNavigate();

  const resendOtp = (e) => {
    console.log(otpId);
    e.preventDefault();
    setalertBar({ success: true, message: "" });
    setotps({
      otpEmail: new Array(6).fill(""),
      otpMobile: new Array(6).fill(""),
    });
    axios
      .post("http://localhost:4000/api/auth/sendOtp", {
        email: data.email,
        mobile: "+" + data.mobCountry.code + data.mobile,
      })
      .then((res) => {
        setotpId(res.data.otpId);
      })
      .catch((err) => {
        alert(err.response.data.error);
      });
  };

  const handleChange = (target, index) => {
    if (isNaN(target.value)) return false;

    if (target.name === "otpEmail") {
      setotps({
        ...otps,
        otpEmail: otps.otpEmail.map((digit, indx) =>
          indx === index ? target.value : digit
        ),
      });
    } else {
      setotps({
        ...otps,
        otpMobile: otps.otpMobile.map((digit, indx) =>
          indx === index ? target.value : digit
        ),
      });
    }
  };

  const keyDown = (e) => {
    if(e.keyCode !== 8 && e.target.value && e.target.nextElementSibling){
      e.target.nextElementSibling.focus()
    }

    setTimeout(() => {
    if(e.keyCode === 8 && e.target.previousElementSibling){
      e.target.previousElementSibling.focus()
    }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:4000/api/auth${location.pathname}`, {
        ...data,
        mobile: "+" + data.mobCountry.code + data.mobile,
        otpObj: {
          otpId,
          emailOTP: otps.otpEmail.join(""),
          mobileOTP: otps.otpMobile.join(""),
        },
      })
      .then((res) => {
        setalertBar({ ...alertBar, message: res.data.message });
        setTimeout(() => {
          closeModal();
          navigate("/user/login");
        }, 3000);
      })
      .catch((err) => {
        setalertBar({ success: false, message: err.response.data.error });
      });
  };

  return (
    <>
      <div onClick={closeModal} className="modal-overlay"></div>
      <div className="otpModal">
        <button onClick={closeModal} className="modalCloseBtn">
          <i className="close-icon"></i>
        </button>
        <h3>OTP for Verification</h3>
        {alertBar.message && (
          <div
            className={`alertMsg ${alertBar.success ? "success" : "failure"}`}
          >
            <p className="mb-0">{alertBar.message}</p>
          </div>
        )}
        <form id="optPoupup">
          <div className="form-group mb-5" id="otpEmailDiv">
            <label className="d-block mb-1">Email OTP</label>
            {otps.otpEmail.map((digit, index) => {
              return (
     
                <input
                  key={index}
                  id="otpEmail"
                  name="otpEmail"
                  autoComplete="off"
                  className="otpInput"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleChange(e.currentTarget, index)}
                  onKeyDown={keyDown}
                />
              );
            })}
          </div>
          <div className="form-group mb-5" id="otpMobileDiv">
            <label className="d-block mb-1">Mobile OTP</label>
            {otps.otpMobile.map((digit, index) => {
              return (
                <input
                  key={index}
                  id="otpMobile"
                  name="otpMobile"
                  autoComplete="off"
                  className="otpInput"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleChange(e.currentTarget, index)}
                  onKeyDown={keyDown}
                />
              );
            })}
          </div>
          {alertBar.success ? (
            <br />
          ) : (
            <button onClick={resendOtp} className="mb-2 mt-2 resendOtp">
              Resend OTP
            </button>
          )}
          <button
            type="submit"
            id="signupSubmit"
            className="btn btn-block mt-5"
            name="login"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default OTPModal;
