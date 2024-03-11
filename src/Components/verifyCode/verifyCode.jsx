import React from "react";
import styles from "./verifyCode.module.scss";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";

export default function VerifyCode() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const initialValues = {
    resetCode: "",
  };

  const validationSchema = Yup.object({
    resetCode: Yup.string()
      .matches(/^[A-Z][A-Za-z0-9]{8,16}/, "Invalid Password")
      .required("Please enter your password"),
  });

  async function handelLogin(values) {
    setLoading(true);

    await axios
      .post(
        "https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",
        values
      )
      .then((res) => {
        if (res.data.statusMsg === "success") {
          setLoading(false);
          setError(null);
          navigate("/login");
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
        <title>Verify Code</title>
      </Helmet>

      <section id={styles.verify} className="min-vh-100 overflow-x-hidden">
        <div className="row">
          <div className="col-md-6"></div>

          <div
            id={styles.background}
            className="col-md-6 min-vh-100 pt-5 pb-4 rounded-start-5 shadow"
          >
            <div className="container pt-4 px-4">
              <h3 className="fw-bold mt-5 mb-4">Reset your account password</h3>

              <form
                onSubmit={formik.handleSubmit}
                className="form-group d-flex flex-column justify-content-center pt-2"
              >
                {/* Password */}
                <div className={styles.inputContainer}>
                  <input
                    id="resetCode"
                    name="resetCode"
                    type="password"
                    className="form-control border-0 shadow-sm py-2 rounded-3"
                    placeholder="Password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                  />

                  <label htmlFor="resetCode">Password</label>

                  {formik.touched.password && formik.errors.password && (
                    <span className="text-danger">
                      <i className="fa-solid fa-circle-exclamation"></i>{" "}
                      {formik.errors.password}
                    </span>
                  )}
                </div>

                <button
                  id="btn-main"
                  className="btn w-50 align-self-center rounded-3 shadow-sm"
                  type="submit"
                  disabled={!(formik.isValid && formik.dirty)}
                >
                  {loading ? (
                    <i className="fa-solid fa-spinner fa-spin-pulse"></i>
                  ) : (
                    "Verify"
                  )}
                </button>

                {error && (
                  <div className="text-danger text-center mt-2">
                    <i className="fa-solid fa-circle-exclamation"></i> {error}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
