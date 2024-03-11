import React, { useContext } from "react";
import styles from "./Login.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../context/AuthContext";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const { setToken } = useContext(AuthContext);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Please enter your email"),

    password: Yup.string()
      .matches(/^[A-Z][A-Za-z0-9]{8,16}/, "Invalid Password")
      .required("Please enter your password"),
  });

  async function handelLogin(values) {
    setLoading(true);

    await axios
      .post("https://ecommerce.routemisr.com/api/v1/auth/signin", values)
      .then((res) => {
        if (res.data.message === "success") {
          setLoading(false);
          setError(null);
          navigate("/");
          setToken(res.data.token);
          localStorage.setItem("token", res.data.token);
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
      handelLogin(values);
    },
  });

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login</title>
      </Helmet>

      <section id={styles.login} className="min-vh-100 overflow-x-hidden">
        <div className="row">
          <div className="col-md-6"></div>

          <div
            id={styles.background}
            className="col-md-6 min-vh-100 pt-5 pb-4 rounded-start-5 shadow"
          >
            <div className="container pt-4 px-4">
              <h2 className="display-6 fw-bolder main-color mt-4 mb-2">
                Hello, Welcome back!
              </h2>
              <h3 className="fw-bold mb-5">Login to your account.</h3>

              <form
                onSubmit={formik.handleSubmit}
                className="form-group d-flex flex-column justify-content-center pt-2"
              >
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
                <div className={`mb-1 ${styles.inputContainer}`}>
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

                <Link
                  to="/forget-password"
                  className="text-decoration-none main-color fw-semibold text-end mt-1"
                >
                  forget your password?
                </Link>

                <button
                  id="btn-main"
                  className="btn mt-4 w-50 align-self-center rounded-3 shadow-sm"
                  type="submit"
                  disabled={!(formik.isValid && formik.dirty)}
                >
                  {loading ? (
                    <i className="fa-solid fa-spinner fa-spin-pulse"></i>
                  ) : (
                    "Login"
                  )}
                </button>

                {error && (
                  <div className="text-danger text-center mt-2">
                    <i className="fa-solid fa-circle-exclamation"></i> {error}
                  </div>
                )}

                <p className="mt-2 text-center">
                  Don't have an account?{" "}
                  <Link
                    to="/register"
                    className="text-decoration-none main-color fw-semibold"
                  >
                    Sign Up
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
