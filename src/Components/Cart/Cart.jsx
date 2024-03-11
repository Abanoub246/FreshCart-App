import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";
import Loader from "../Loader/Loader";
import ErrorImg from "../../assets/images/NoData.svg";
import { Link } from "react-router-dom";
import styles from "./Cart.module.scss";

export default function Cart() {
  const {
    getCart,
    numOfCartItems,
    removeFromCart,
    clearCart,
    updateProductQuantity,
  } = useContext(CartContext);

  const [cartDetails, setCartDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  async function getCartDetails() {
    setLoading(true);

    const res = await getCart();

    if (res?.status === "success") {
      setCartDetails(res);
      setLoading(false);
    } else {
      setCartDetails(null);
      setLoading(false);
    }
  }

  useEffect(() => {
    getCartDetails();
  }, []);

  async function removeProductFromCart(id) {
    const res = await removeFromCart(id);
    if (res.status === "success") {
      toast.success("Product removed from cart successfully");
      setCartDetails(res);
    } else {
      toast.error("Sorry, Can't remove product from cart");
    }
  }

  async function updateProductQty(id, count) {
    const res = await updateProductQuantity(id, count);
    if (res.status === "success") {
      toast.success("Product quantity updated successfully");
      setCartDetails(res);
      // if (cartDetails.data.products.count === 0) {await removeFromCart(id)}
    } else {
      toast.error("Sorry, Can't update product quantity");
    }
  }

  async function removeAllProducts() {
    const res = await clearCart();
    setCartDetails(res);
    if (res.message === "success") {
      toast.success("All your products removed from cart successfully");
      setCartDetails(null);
    } else {
      toast.error("Sorry, Can't remove products from cart");
    }
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Cart</title>
        <meta name="description" content="FreshCart App - My Cart" />
        <meta name="keywords" content="Fresh-Cart-App-My-Cart" />
      </Helmet>

      <section className={`${styles.cart} min-vh-100 pt-5`}>
        {loading && <Loader />}

        {cartDetails ? (
          <div className="container-md my-5 bg-light rounded-3 shadow px-4 px-lg-5 py-5 d-flex flex-column">
            <div className="border-bottom mb-3 d-flex flex-column justify-content-center">
              <h2>Shopping Cart:</h2>
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="mt-3 mb-4">
                  Total Cart Price:{" "}
                  <span className="main-color fw-bold">
                    {cartDetails.data.totalCartPrice} EGP
                  </span>
                </h5>
                <h5 className="mt-3 mb-4">
                  Total Cart Items:{" "}
                  <span className="main-color fw-bold">{numOfCartItems}</span>
                </h5>
              </div>
              <button
                onClick={removeAllProducts}
                className="btn btn-outline-danger rounded-3 w-25 mb-4"
              >
                Clear Cart
              </button>
            </div>

            {cartDetails.data.products.map((product) => (
              <div
                className="row border-bottom pb-3 mt-3 d-flex justify-content-center align-items-center"
                key={product.product.id}
              >
                <div className="col-lg-2 col-md-3 col-sm-4">
                  <figure className="mb-0">
                    <img
                      src={product.product.imageCover}
                      alt={product.product.title}
                      className="img-fluid rounded-3"
                    />
                  </figure>
                </div>

                <div className="col-lg-8 col-md-7 col-sm-6 ps-3 mt-3 mt-sm-0">
                  <h4 className="fw-semibold text-truncate">
                    {product.product.title}
                  </h4>
                  <h5 className="main-color fw-semibold">
                    {product.price} EGP
                  </h5>
                  <button
                    className="btn p-0 fw-semibold text-danger"
                    onClick={() => removeProductFromCart(product.product.id)}
                  >
                    <i className="fa fa-trash-can me-2"></i>remove
                  </button>
                </div>

                <div className="col-2 d-flex justify-content-center align-items-center mt-3 mt-sm-0">
                  <button
                    onClick={() => {
                      updateProductQty(product.product.id, product.count - 1);
                      product.count === 1 &&
                        removeProductFromCart(product.product.id);
                    }}
                    className={`${styles.btnOutlineMain} btn px-3`}
                  >
                    <i className="fa fa-minus"></i>
                  </button>
                  <h5 className="mx-3 mb-0">{product.count}</h5>
                  <button
                    onClick={() =>
                      updateProductQty(product.product.id, product.count + 1)
                    }
                    className={`${styles.btnOutlineMain} btn px-3`}
                  >
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            ))}

            <Link
              to="/checkout"
              id="btn-main"
              className="btn btn-main rounded-3 mt-3 w-25 align-self-end"
            >
              Checkout
            </Link>
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
