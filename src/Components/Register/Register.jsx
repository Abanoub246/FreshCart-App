import React from "react";
import styles from "./Register.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";

export default function Register() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    password: "",
    rePassword: "",
    phone: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(15, "Name must be at most 15 characters")
      .required("Please enter your name"),

    email: Yup.string()
      .email("Invalid email address")
      .required("Please enter your email"),

    password: Yup.string()
      .matches(/^[A-Z][A-Za-z0-9]{8,16}/, "Invalid Password")
      .required("Please enter your password"),

    rePassword: Yup.string()
      .oneOf([Yup.ref("password")], "Re-Passwords must match Password")
      .required("Re-Password is required"),

    phone: Yup.string()
      .matches(/^01[0125][0-9]{8}$/, "Invalid Phone number")
      .required("please enter your phone number"),
  });

  async function handelRegister(values) {
    setLoading(true);

    await axios
      .post("https://ecommerce.routemisr.com/api/v1/auth/signup", values)
      .then((res) => {
        if (res.data.message === "success") {
          setLoading(false);
          setError(null);
          setSuccess(true);
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        }
      })
      .catch((err) => {
        setLoading(false);
        setError(err.response.data.message);
      });
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      handelRegister(values);
    },
  });

  return (
    <>

<Helmet>
        <meta charSet="utf-8" />
        <title>Sign Up</title>
      </Helmet>

      <section id={styles.register} className="min-vh-100 overflow-x-hidden">
        <div className="row">
          <div className="col-md-6"></div>

          <div
            id={styles.background}
            className="col-md-6 min-vh-100 pt-5 pb-4 rounded-start-5 shadow"
          >
            <div className="container pt-4 px-4">
              <h2 className="display-6 fw-bolder main-color mt-2 mb-1">
                Welcome, Let's Get Started!
              </h2>
              <h3 className="fw-bold mb-2">Create your account.</h3>
              <p className="text-muted w-75 mb-4">
                "Welcome to FreshCart, Sign up now to explore a world of
                shopping convenience and endless possibilities."
              </p>

              <form
                onSubmit={formik.handleSubmit}
                className="form-group d-flex flex-column justify-content-center pt-2"
              >
                {/* Name */}
                <div className={styles.inputContainer}>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="off"
                    className="form-control border-0 shadow-sm py-2 rounded-3"
                    placeholder="User Name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    onBlur={formik.handleBlur}
                  />

                  <label htmlFor="name">User Name</label>

                  {formik.touched.name && formik.errors.name && (
                    <span className="text-danger">
                      <i className="fa-solid fa-circle-exclamation"></i>{" "}
                      {formik.errors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className={styles.inputContainer}>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="off"
                    className="form-control border-0 shadow-sm py-2 rounded-3"
                    placeholder="User Email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                  />

                  <label htmlFor="email">User Email</label>

                  {formik.touched.email && formik.errors.email && (
                    <span className="text-danger">
                      <i className="fa-solid fa-circle-exclamation"></i>{" "}
                      {formik.errors.email}
                    </span>
                  )}
                </div>

                {/* Password */}
                <div className={styles.inputContainer}>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className="form-control border-0 shadow-sm py-2 rounded-3"
                    placeholder="Password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                  />

                  <label htmlFor="password">Password</label>

                  {formik.touched.password && formik.errors.password && (
                    <span className="text-danger">
                      <i className="fa-solid fa-circle-exclamation"></i>{" "}
                      {formik.errors.password}
                    </span>
                  )}
                </div>

                {/* Re-Password */}
                <div className={styles.inputContainer}>
                  <input
                    id="rePassword"
                    name="rePassword"
                    type="password"
                    className="form-control border-0 shadow-sm py-2 rounded-3"
                    placeholder="Re-Password"
                    onChange={formik.handleChange}
                    value={formik.values.rePassword}
                    onBlur={formik.handleBlur}
                  />

                  <label htmlFor="rePassword">Re-Password</label>

                  {formik.touched.rePassword && formik.errors.rePassword && (
                    <span className="text-danger">
                      {" "}
                      <i className="fa-solid fa-circle-exclamation"></i>{" "}
                      {formik.errors.rePassword}
                    </span>
                  )}
                </div>

                {/* Phone Number */}
                <div className={`mb-3 ${styles.inputContainer}`}>
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

                <button
                  id="btn-main"
                  className="btn mt-4 w-50 align-self-center rounded-3 shadow-sm"
                  type="submit"
                  disabled={!(formik.isValid && formik.dirty)}
                >
                  {loading ? (
                    <i className="fa-solid fa-spinner fa-spin-pulse"></i>
                  ) : (
                    "Sign Up"
                  )}
                </button>

                {error && (
                  <div className="text-danger text-center mt-2">
                    <i className="fa-solid fa-circle-exclamation"></i> {error}
                  </div>
                )}

                {success && (
                  <div className="main-color text-center mt-2">
                    <i className="fa-solid fa-circle-check"></i> you have been
                    registered successfully
                  </div>
                )}

                <p className="mt-2 text-center">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-decoration-none main-color fw-semibold"
                  >
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
