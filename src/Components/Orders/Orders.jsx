import React, { useContext, useEffect, useState } from "react";
import styles from "./Orders.module.scss";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { Helmet } from "react-helmet";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
import ErrorImg from "../../assets/images/NoData.svg";

export default function Orders() {
  let { userId } = useContext(AuthContext);
  const [orders, setOrders] = useState(null);
  const [loading, setLoading] = useState(false);

  const url = `https://ecommerce.routemisr.com/api/v1/orders/user/${userId}`;

  async function getOrders() {
    setLoading(true);
    try {
      const { data } = await axios.get(url);

      if (data?.length) {
        setOrders(data);
        setLoading(false);
      } else {
        setOrders(null);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Orders</title>
        <meta name="description" content="FreshCart App - My Orders" />
        <meta name="keywords" content="Fresh-Cart-App-My-Orders" />
      </Helmet>

      <section className="sectionBg min-vh-100 py-5">
        {loading && <Loader />}
        <div className="container my-5">
          {orders ? (
            orders.map((order) => (
              <div className="card p-3 rounded-3 p-4 mb-3" key={order._id}>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h3 className="main-color fw-bold">Shipping details:</h3>
                    <p className="fw-medium mb-1">
                      Phone number:{" "}
                      <span className="main-color fw-semibold">
                        {order.shippingAddress.phone}
                      </span>
                    </p>
                    <p className="fw-medium mb-1">
                      City:{" "}
                      <span className="main-color fw-semibold">
                        {order.shippingAddress.city}
                      </span>
                    </p>
                    <p className="fw-medium mb-1">
                      Address:{" "}
                      <span className="main-color fw-semibold">
                        {order.shippingAddress.details}
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="fw-medium mb-1">
                      Tax price:{" "}
                      <span className="main-color fw-semibold">
                        {order.taxPrice} EGP
                      </span>
                    </p>
                    <p className="fw-medium mb-1">
                      Shipping price:{" "}
                      <span className="main-color fw-semibold">
                        {order.shippingPrice} EGP
                      </span>
                    </p>
                    <p className="fw-medium mb-1">
                      Total order price:{" "}
                      <span className="main-color fw-semibold">
                        {order.totalOrderPrice} EGP
                      </span>
                    </p>
                    <p className="fw-medium mb-1">
                      Payment method:{" "}
                      <span className="main-color fw-semibold">
                        {order.paymentMethodType}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="row g-3 mt-3">
                  {order.cartItems.map((item) => (
                    <div
                      className="col-sm-6 col-md-4 col-xl-3"
                      key={item.product.id}
                    >
                      <div
                        className={`${styles.hover} card overflow-hidden rounded-3`}
                      >
                        <div
                          to={`/itemDetails/${item.product.id}`}
                          className="text-decoration-none"
                        >
                          <figure className="mb-0 overflow-hidden">
                            <img
                              src={item.product.imageCover}
                              className={`${styles.hoverImg} w-100`}
                              alt={item.product.title}
                            />
                          </figure>

                          <div className="card-body">
                            <h5 className=" main-color fs-6 mb-1">
                              {item.product.category.name}
                            </h5>
                            <h5 className=" main-color fs-6 mb-1">
                              {item.product.brand.name}
                            </h5>
                            <h5 className="card-title text-truncate fw-bold text-dark">
                              {item.product.title}
                            </h5>
                            <h5 className="card-text fw-semibold fs-6 main-color mb-1">
                              count: {item.count}
                            </h5>

                            <div className="d-flex justify-content-between align-items-center">
                              <h5 className="card-text fw-bold main-color mb-0">
                                {item.price} EGP
                              </h5>
                              <div className="rating d-flex align-items-baseline">
                                <i className="fa fa-star text-warning"></i>
                                <p className="ms-1 text-dark mb-0 fw-medium">
                                  {item.product.ratingsAverage}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center">
              <figure>
                <img src={ErrorImg} className="w-50" alt="Error" />
              </figure>
              <h3 className="text-danger">You Don't Have Any Orders</h3>
              <div className="d-flex justify-content-center align-items-center gap-3">
                <Link
                  to="products"
                  id="btn-main"
                  className="btn mt-3 py-2 w-25 rounded-3"
                >
                  Please Order Now
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
