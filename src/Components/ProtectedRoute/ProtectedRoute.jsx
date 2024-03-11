import React, { useContext } from "react";
// import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import protectedImg from "../../assets/images/protectedImg.svg";

export default function ProtectedRoute({ children }) {
  const { token } = useContext(AuthContext);

  if (!token) {
    // return <Navigate to="/login" />;
    <section className="min-vh-100 d-flex justify-content-center align-items-center">
      <div className="container-md text-center">
          <figure>
            <img src={protectedImg} className="img-fluid mb-3" alt="Error" />
          </figure>
          <h3 className="text-danger">Sorry, You Must Login First</h3>

          <Link to="login" id="btn-main" className="btn mt-3 py-2 w-25 rounded-3">
            Login
          </Link>
        </div>
    </section>
  }

  return children;
}
