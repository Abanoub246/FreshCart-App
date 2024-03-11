import React from "react";
import styles from "./Brands.module.scss";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";
import Loader from "../Loader/Loader";
import ErrorImg from "../../assets/images/NoData.svg";

export default function Brands() {
  const url = "https://ecommerce.routemisr.com/api/v1/";

  async function gitAllBrands() {
    return await axios.get(`${url}brands`);
  }

  let { data, isLoading, isError, error, refetch } = useQuery(
    "gitAllBrands",
    gitAllBrands,
    {
      refetchOnWindowFocus: false,
    }
  );

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Brands</title>
        <meta name="description" content="FreshCart App - Brands" />
        <meta name="keywords" content="Fresh-Cart-App-Brands" />
      </Helmet>

      <section className={`${styles.brands} min-vh-100 pt-5`}>
        {isLoading && <Loader />}

        {isError && (
          <div className="text-center">
            <figure>
              <img src={ErrorImg} className="w-50" alt="Error" />
            </figure>
            <h3 className="text-danger">{error}</h3>
            <div className="d-flex justify-content-center align-items-center gap-3">
              <button
                onClick={refetch}
                id="btn-main"
                className="btn mt-3 py-2 w-25 rounded-3"
              >
                Try Again
              </button>
              <Link
                to="/"
                id="btn-main"
                className="btn mt-3 py-2 w-25 rounded-3"
              >
                Back To Home
              </Link>
            </div>
          </div>
        )}

        {data?.data.data && (
          <div className="container-lg my-5">
            <div className="row g-4">
              {data.data.data.map((brand) => (
                <div className="col-md-4 col-sm-6" key={brand._id}>
                  <div
                    className={`${styles.hover} card overflow-hidden rounded-3`}
                  >
                    <figure className="mb-0 overflow-hidden">
                      <img
                        src={brand.image}
                        alt={brand.name}
                        className={`${styles.hoverImg} w-100`}
                      />
                    </figure>
                    <div className="card-body text-center">
                      <h4 className="main-color fw-bold">{brand.name}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
