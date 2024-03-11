import React from "react";
import "./Loader.scss";

export default function Loader() {
  return (
    <>
      <section className="min-vh-100 d-flex justify-content-center align-items-center bg-body position-fixed z-2 w-100">
        <div className="loader">
          <div className="cell d-0"></div>
          <div className="cell d-1"></div>
          <div className="cell d-2"></div>

          <div className="cell d-1"></div>
          <div className="cell d-2"></div>

          <div className="cell d-2"></div>
          <div className="cell d-3"></div>

          <div className="cell d-3"></div>
          <div className="cell d-4"></div>
        </div>
      </section>
    </>
  );
}
