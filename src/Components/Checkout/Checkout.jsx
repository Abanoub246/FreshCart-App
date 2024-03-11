import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./Checkout.module.scss";
import { CartContext } from "../../context/CartContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Checkout() {
  const { cartId, setNumOfCartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const [onlinePayment, setOnlinePayment] = useState(false);
  
  const host = window.location.host;


  const url = onlinePayment
    ? `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://${host}`
    : `https://ecommerce.routemisr.com/api/v1/orders/${cartId}`;

  const initialValues = {
    phone: "",
    city: "",
    details: "",
  };

  const validationSchema = Yup.object({
    phone: Yup.string()
      .matches(/^01[0125][0-9]{8}$/, "Invalid Phone number")
      .required("please enter your phone number"),

    city: Yup.string().required("please enter your city"),

    details: Yup.string().required("please enter your address"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      handelPayment(values);
    },
  });

  async function handelPayment(values) {
    try {
      let { data } = await axios.post(
        `${url}`,
        { shippingAddress: values },
        { headers: { token: localStorage.getItem("token") } }
      );

      if (data.status === "success") {
        setNumOfCartItems(0);
        toast.success("Your order has been placed successfully");

        onlinePayment
          ? (window.location.href = data.session.url)
          : setTimeout(() => {
              navigate("/allorders");
            }, 3000);

      } else {
        toast.error("Sorry, Failed to place your order");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Checkout</title>
        <meta name="description" content="FreshCart App - Checkout" />
        <meta name="keywords" content="Fresh-Cart-App-Checkout" />
      </Helmet>

      <section className="sectionBg min-vh-100 py-5">
        <div className="container my-5">
          <h2 className="main-color mb-4 fw-bolder">Checkout</h2>

          <form onSubmit={formik.handleSubmit} className="form-group mb-3 pt-3">
            {/* Phone Number */}
            <div className={`${styles.inputContainer}`}>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="off"
                className="form-control border-0 shadow-sm py-2 rounded-3"
                placeholder="Phone Number"
                onChange={formik.handleChange}
                value={formik.values.phone}
                onBlur={formik.handleBlur}
              />

              <label htmlFor="phone">Phone Number</label>

              {formik.touched.phone && formik.errors.phone && (
                <span className="text-danger">
                  <i className="fa-solid fa-circle-exclamation"></i>{" "}
                  {formik.errors.phone}
                </span>
              )}
            </div>

            {/* City */}
            <div className={`${styles.inputContainer}`}>
              <input
                id="city"
                name="city"
                type="text"
                autoComplete="off"
                className="form-control border-0 shadow-sm py-2 rounded-3"
                placeholder="City"
                onChange={formik.handleChange}
                value={formik.values.city}
                onBlur={formik.handleBlur}
              />

              <label htmlFor="city">City</label>

              {formik.touched.city && formik.errors.city && (
                <span className="text-danger">
                  <i className="fa-solid fa-circle-exclamation"></i>{" "}
                  {formik.errors.city}
                </span>
              )}
            </div>

            {/* Address */}
            <div className={`${styles.inputContainer}`}>
              <textarea
                name="details"
                id="details"
                cols="30"
                rows="4"
                className="form-control border-0 shadow-sm py-2 rounded-3"
                placeholder="Address"
                onChange={formik.handleChange}
                value={formik.values.details}
                onBlur={formik.handleBlur}
              ></textarea>

              <label htmlFor="details">Address</label>

              {formik.touched.details && formik.errors.details && (
                <span className="text-danger">
                  <i className="fa-solid fa-circle-exclamation"></i>{" "}
                  {formik.errors.details}
                </span>
              )}
            </div>

            <div className="d-flex justify-content-evenly align-items-center">
              <div>
                <input
                  className="form-check-input bg-main"
                  type="checkbox"
                  id="online"
                  onChange={() => setOnlinePayment(!onlinePayment)}
                />{" "}
                <label className="main-color ms-2" htmlFor="online">
                  Online payment
                </label>
              </div>

              {onlinePayment ? (
                <button
                  type="submit"
                  id="btn-main"
                  className="btn rounded-3 mt-3 w-25"
                  disabled={!(formik.isValid && formik.dirty)}
                >
                  Pay Online
                </button>
              ) : (
                <button
                  type="submit"
                  id="btn-main"
                  className="btn rounded-3 mt-3 w-25"
                  disabled={!(formik.isValid && formik.dirty)}
                >
                  Cash On Delivery
                </button>
              )}
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
