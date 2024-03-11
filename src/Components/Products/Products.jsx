import React, { useContext } from "react";
import styles from "./Products.module.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";
import Loader from "../Loader/Loader";
import ErrorImg from "../../assets/images/NoData.svg";
import { Helmet } from "react-helmet";
import { CartContext } from "../../context/CartContext";
import { toast } from "react-toastify";
import { WishListContext } from "../../context/WishListContext";

export default function Products() {
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

  async function gitAllProducts() {
    return await axios.get(`${url}products`);
  }

  let { data, isLoading, isError, error, refetch } = useQuery(
    "gitAllProducts",
    gitAllProducts,
    {
      refetchOnWindowFocus: false,
    }
  );

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Featured Products</title>
        <meta name="description" content="FreshCart App - Products" />
        <meta name="keywords" content="Fresh-Cart-App-Products" />
      </Helmet>

      <section
        className={`${styles.products} min-vh-100 pt-5 position-relative`}
      >
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
            <h2 className="main-color fw-bold">Featured Products</h2>

            <div className="row g-3 mt-3">
              {data.data.data.map((product) => (
                <div className="col-sm-6 col-md-4 col-xl-3" key={product.id}>
                  <div
                    className={`${styles.hover} card overflow-hidden rounded-3`}
                  >
                    {/* <span className="badge bg-danger position-absolute">Sale</span> */}

                    <label className={styles.heart}>
                      <input
                        type="checkbox"
                        onChange={() => addToWishListHandler(product.id)}
                      />
                      <i className="fa fa-heart translate-middle-y mt-2"></i>
                    </label>

                    <Link
                      to={`/productDetails/${product.id}`}
                      className="text-decoration-none"
                    >
                      <figure className="mb-0 overflow-hidden">
                        <img
                          src={product.imageCover}
                          className={`${styles.hoverImg} w-100`}
                          alt={product.title}
                        />
                      </figure>

                      <div className="card-body">
                        <h5 className=" main-color fs-6 mb-1">
                          {product.category.name}
                        </h5>
                        <h5 className=" main-color fs-6 mb-1">
                          {product.brand.name}
                        </h5>
                        <h5 className="card-title text-truncate fw-bold text-dark">
                          {product.title}
                        </h5>

                        <div className="d-flex justify-content-between align-items-center">
                          <h5 className="card-text fw-bold main-color mb-0">
                            {product.price} EGP
                          </h5>
                          <div className="rating d-flex align-items-baseline">
                            <i className="fa fa-star text-warning"></i>
                            <p className="ms-1 text-dark mb-0 fw-medium">
                              {product.ratingsAverage}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>

                    <div className="px-3 pb-3">
                      <button
                        onClick={() => addToCartHandler(product.id)}
                        id="btn-main"
                        className={`btn btn-main rounded-3 w-100 ${styles.cart}`}
                      >
                        <i className={`fa fa-shopping-cart me-2`}></i>Add to
                        cart
                      </button>
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
