import React from "react";
import Products from "../Products/Products";
import { Helmet } from "react-helmet";
import MainSlider from "../MainSlider/MainSlider";
import CategoriesSlider from "../CategoriesSlider/CategoriesSlider";
// import styles from "./Home.module.scss";

export default function Home() {
  return (
    <>
      <section className="min-vh-100 pt-5">
        <div className="container-lg mt-5">
          <MainSlider />
          <CategoriesSlider />
        </div>
        <Products />
      </section>

      <Helmet>
        <meta charSet="utf-8" />
        <title>FreshCart App - Home</title>
        <meta name="keywords" content="FreshCart App - Home" />
        <meta name="description" content="FreshCart App - Home" />
      </Helmet>
    </>
  );
}
