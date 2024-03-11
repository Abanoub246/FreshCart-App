import React from "react";
import styles from "./Categories.module.scss";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";
import Loader from "../Loader/Loader";
import ErrorImg from "../../assets/images/NoData.svg";

export default function Categories() {
  const url = "https://ecommerce.routemisr.com/api/v1/";

  async function gitAllCategories() {
    return await axios.get(`${url}categories`);
  }

  let { data, isLoading, isError, error, refetch } = useQuery(
    "gitAllCategories",
    gitAllCategories,
    {
      refetchOnWindowFocus: false,
    }
  );

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Categories</title>
        <meta name="description" content="FreshCart App - Categories" />
        <meta name="keywords" content="Fresh-Cart-App-Categories" />
      </Helmet>

      <section className={`${styles.categories} min-vh-100 pt-5`}>
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
              {data.data.data.map((category) => (
                <div className="col-md-6 col-lg-4" key={category._id}>
                  <div
                    className={`${styles.hover} card overflow-hidden rounded-3`}
                  >
                    <figure className="mb-0 overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.name}
                        className={`${styles.hoverImg} w-100`}
                      />
                    </figure>
                    <div className="card-body text-center">
                      <h4 className="main-color fw-bold">{category.name}</h4>
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
