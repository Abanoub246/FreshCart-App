import React from "react";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <>
      <footer className="bg-body-secondary py-5 rounded-top-4 shadow z-3">
        <div className="container">
          <h2>Get the FreshCart App</h2>
          <p className="text-muted">
            We will send you a link, open it on your phone to download the app
          </p>

          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-10 col-md-9">
              <input
                id="uEmail"
                type="email"
                name="email"
                autoComplete="off"
                placeholder="Enter your email"
                className="form-control py-2 rounded-3"
              />
            </div>

            <div className="col-lg-2 col-md-3">
              <button
                id="btn-main"
                className="btn mt-2 mt-md-0 w-100 rounded-3"
              >
                Share App link
              </button>
            </div>
          </div>

          <div className="d-flex justify-content-lg-between justify-content-center align-items-center flex-wrap mt-4 mb-3">
            <div className={`${styles.center} mb-3 mb-lg-0 flex-wrap`}>
              <h5 className="fw-normal">Payment Partners</h5>

              <div className={styles.center}>
                <figure>
                  <img
                    className={styles.payLogo}
                    src={require("../../assets/amazon-pay.png")}
                    alt="amazon-pay"
                  />
                </figure>

                <figure>
                  <img
                    className={styles.payLogo}
                    src={require("../../assets/american-express.png")}
                    alt="american-express"
                  />
                </figure>

                <figure>
                  <img
                    className={styles.payLogo}
                    src={require("../../assets/mastercard-new.png")}
                    alt="mastercard"
                  />
                </figure>

                <figure>
                  <img
                    className={styles.payLogo}
                    src={require("../../assets/paypal.png")}
                    alt="paypal"
                  />
                </figure>
              </div>
            </div>

            <div className={`${styles.center} flex-wrap`}>
              <h5 className="fw-normal">Get deliveries with FreshCart</h5>

              <div className={styles.center}>
                <figure>
                  <img
                    className={styles.downloadLogo}
                    src={require("../../assets/app-store.png")}
                    alt="app store"
                  />
                </figure>

                <figure>
                  <img
                    className={styles.downloadLogo}
                    src={require("../../assets/google-play.png")}
                    alt="google play"
                  />
                </figure>
              </div>
            </div>
          </div>

          <div className="social-icons d-flex justify-content-center align-items-center">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-x-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            {/* <i className="fa-brands fa-youtube"></i> */}
            <i className="fa-brands fa-pinterest-p"></i>
            <i className="fa-brands fa-tiktok"></i>
            <i className="fa-brands fa-whatsapp"></i>
            <i className="fa-brands fa-telegram"></i>
          </div>
        </div>
      </footer>
    </>
  );
}
