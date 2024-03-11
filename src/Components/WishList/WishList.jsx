import React, { useContext, useEffect, useState } from "react";
import { WishListContext } from "../../context/WishListContext";
import { Helmet } from "react-helmet";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
import ErrorImg from "../../assets/images/NoData.svg";
import { toast } from "react-toastify";
// import styles from "./WishList.module.scss";

export default function WishList() {
  let { getWishList, removeFromWishList } = useContext(WishListContext);
  const [loading, setLoading] = useState(false);
  const [wishListData, setWishListData] = useState(null);

  async function getWishListData() {
    setLoading(true);

    const res = await getWishList();

    if (res?.status === "success") {
      setLoading(false);
      setWishListData(res);
    } else {
      setLoading(false);
      setWishListData(null);
    }
  }

  async function removeProductFromWishList(id) {
    const res = await removeFromWishList(id);
    if (res.status === "success") {
      getWishListData();
      toast.success("Product removed from wish list successfully");
    } else {
      toast.error("Sorry, Can't remove product from wish list");
    }
  }

  useEffect(() => {
    getWishListData();
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My WishList</title>
        <meta name="description" content="FreshWishList App - My WishList" />
        <meta name="keywords" content="Fresh-WishList-App-My-WishList" />
      </Helmet>

      <section className="min-vh-100 pt-5 sectionBg">
        {loading && <Loader />}

        {wishListData ? (
          <div className="container-md my-5 bg-light rounded-3 shadow px-4 px-lg-5 py-5 d-flex flex-column">
            <h2 className="main-color fw-bold">My WishList</h2>

            {wishListData.data.map((product) => (
              <div
                className="row border-bottom pb-3 mt-3 d-flex justify-content-center align-items-center"
                key={product._id}
              >
                <div className="col-lg-2 col-md-3 col-sm-4">
                  <figure className="mb-0">
                    <img
                      src={product.imageCover}
                      alt={product.title}
                      className="img-fluid rounded-3"
                    />
                  </figure>
                </div>

                <div className="col-lg-10 col-md-9 col-sm-8 ps-3 mt-3 mt-sm-0">
                  <h4 className="fw-bold text-truncate">{product.title}</h4>
                  <h5 className=" main-color fw-semibold fs-6 mb-1">
                    {product.category.name}
                  </h5>
                  <h5 className=" main-color fw-semibold fs-6 mb-1">
                    {product.brand.name}
                  </h5>
                  <h5 className="main-color fw-bold">{product.price} EGP</h5>
                  <button
                    className="btn p-0 fw-semibold text-danger"
                    onClick={() => removeProductFromWishList(product._id)}
                  >
                    <i className="fa fa-trash-can me-2"></i>remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center pt-5">
            <figure className="mt-4">
              <img src={ErrorImg} className="w-50" alt="Error" />
            </figure>
            <h3 className="main-color">
              Cart is Empty, Please Add Some Products
            </h3>

            <Link
              to="/products"
              id="btn-main"
              className="btn mt-3 py-2 w-25 rounded-3"
            >
              Shop Now
            </Link>
          </div>
        )}
      </section>
    </>
  );
}
