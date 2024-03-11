import React from "react";
// import styles from "./Error.module.scss";
import { Link } from "react-router-dom";
import ErrorImg from "../../assets/images/NoData.svg";
import { Helmet } from "react-helmet";

export default function Error() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Error Page</title>
      </Helmet>

      <section className="min-vh-100 d-flex justify-content-center align-items-center">
        <div className="container-md text-center">
          <figure>
            <img src={ErrorImg} className="w-50 mb-3" alt="Error" />
          </figure>
          <h3 className="text-danger">Oops, Something went wrong</h3>

          <Link to="/" id="btn-main" className="btn mt-3 py-2 w-25 rounded-3">
            Back To Home
          </Link>
        </div>
      </section>
    </>
  );
}
