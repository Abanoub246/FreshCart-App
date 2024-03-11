import React from "react";
// import styles from "./NotFound.module.scss";
import notFoundImg from "../../assets/images/error.svg";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>404 - Page Not Found</title>
      </Helmet>

      <section className="min-vh-100 pt-5 d-flex justify-content-center align-items-center">
        <div className="container my-5 text-center">
          <figure>
            <img
              src={notFoundImg}
              alt="404 - Not Found"
              className="img-fluid mb-3"
            />
          </figure>
          <h3 className="text-danger">Sorry, This Page Not Found</h3>
          <Link to="/" id="btn-main" className="btn mt-3 py-2 w-25 rounded-3">
            Back To Home
          </Link>
        </div>
      </section>
    </>
  );
}
