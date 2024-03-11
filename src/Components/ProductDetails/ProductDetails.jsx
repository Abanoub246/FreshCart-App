import React, { useContext } from "react";
import styles from "./ProductDetails.module.scss";
import axios from "axios";
import { useQuery } from "react-query";
import Loader from "../Loader/Loader";
import { Link, useParams } from "react-router-dom";
import ErrorImg from "../../assets/images/NoData.svg";
import Slider from "react-slick";
import { Helmet } from "react-helmet";
import { CartContext } from "../../context/CartContext";
import { toast } from "react-toastify";
import { WishListContext } from "../../context/WishListContext";

export default function ProductDetails() {
  const { addToCart } = useContext(CartContext);
  const { addToWishList } = useContext(WishListContext);

  async function addToCartHandler(productId) {
    let res = await addToCart(productId);

    if (res.status === "success") {
      toast.success(res.message);
    } else {
      toast.error("Sorry, Failed to add product to cart");
    }
  }

  async function addToWishListHandler(productId) {
    let res = await addToWishList(productId);

    if (res.status === "success") {
      toast.success(res.message);
    } else {
      toast.error("Sorry, Failed to add product to wish list");
    }
  }

  const url = "https://ecommerce.routemisr.com/api/v1/";

  let { id } = useParams();

  async function gitProductDetails() {
    return await axios.get(`${url}products/${id}`);
  }

  let { data, isLoading, isError, error, refetch } = useQuery(
    "gitProductDetails",
    gitProductDetails,
    {
      refetchOnWindowFocus: false,
    }
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    adaptiveHeight: true,
  };

  return (
    <>
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
            <Link to="/" id="btn-main" className="btn mt-3 py-2 w-25 rounded-3">
              Back To Home
            </Link>
          </div>
        </div>
      )}

      <section
        className={`${styles.product} min-vh-100 pt-5 position-relative d-flex justify-content-center align-items-center px-3`}
      >
        {data?.data.data && (
          <div className="container-xxl bg-body my-5 rounded-4 p-4 py-md-5 border shadow position-relative">
            <Helmet>
              <meta charSet="utf-8" />
              <title>{data.data.data.title}</title>
              <meta name="keywords" content={data.data.data.slug} />
              <meta
                name="description"
                content="FreshCart App - Product Details"
              />
            </Helmet>

            <div className="row align-items-center">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <Slider {...settings} className="mb-4 mb-md-0">
                  {data.data.data.images.map((img) => (
                    <figure className="text-center mb-0" key={img}>
                      <img
                        src={img}
                        alt={data.data.data.title}
                        className="img-fluid w-100 rounded-3"
                      />
                    </figure>
                  ))}
                </Slider>
              </div>

              <div className="col-lg-8 col-md-6 col-sm-12 mt-sm-4 mt-md-0">
                <label className={styles.heart} htmlFor="heart">
                  <input
                    type="checkbox"
                    id="heart"
                    name="heart"
                    onChange={() => addToWishListHandler(data.data.data.id)}
                  />
                  <i className="fa fa-heart translate-middle-y mt-2"></i>
                </label>

                <h2 className="fw-bold main-color">{data.data.data.title}</h2>
                <h4 className="text-muted mb-3 fw-normal fs-4">
                  {data.data.data.description}
                </h4>
                <h5 className="fs-5">{data.data.data.category.name}</h5>
                <h5 className="fs-5">{data.data.data.brand.name}</h5>

                <div className="d-flex justify-content-between align-items-baseline mt-3">
                  <h5 className="card-text fw-bold main-color">
                    {data.data.data.price} EGP
                  </h5>
                  <div className="rating d-flex align-items-baseline">
                    <i className="fa fa-star text-warning"></i>
                    <p className="ms-1 fs-6 fw-semibold">
                      {data.data.data.ratingsAverage}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => addToCartHandler(id)}
                  id="btn-main"
                  className={`btn btn-main w-100 mt-3 py-2 fw-semibold ${styles.cart}`}
                >
                  <i className={`fa fa-shopping-cart me-2`}></i>Add to cart
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
