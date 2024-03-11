import React from "react";
import styles from "./CategoriesSlider.module.scss";
import Slider from "react-slick";
import axios from "axios";
import { useQuery } from "react-query";
import ErrorImg from "../../assets/images/NoData.svg";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";

export default function CategoriesSlider() {
  const url = "https://ecommerce.routemisr.com/api/v1/";

  async function gitAllCategories() {
    return await axios.get(`${url}categories`);
  }

  let { data, isLoading, isError, error, refetch } = useQuery(
    "gitAllCategoriesSlider",
    gitAllCategories,
    {
      refetchOnWindowFocus: false,
    }
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 3,
    arrows: false,
  };

  return (
    <>
      <section className="mt-5">
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
          <div className="row mb-4">
            <Slider {...settings}>
              {data.data.data.map((category) => (
                <div className="col-3" key={category._id}>
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
                      <h6 className="main-color fw-bold text-truncate">{category.name}</h6>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        )}
      </section>
    </>
  );
}
