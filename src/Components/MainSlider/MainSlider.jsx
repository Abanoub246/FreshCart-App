import React from "react";
import styles from "./MainSlider.module.scss";
import Slider from "react-slick";

export default function MainSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    adaptiveHeight: true,
    pauseOnHover: false,
    pauseOnFocus: false,
  };

  return (
    <>
      <section>
        <div className="row g-0">
          <div className="col-lg-8 col-md-7 col-sm-12">
            <Slider {...settings}>
              <figure className="text-center mb-0">
                <img
                  src={require("../../assets/images/slider-image-1.jpeg")}
                  alt="slider-img-1"
                  className={`${styles.sliderImg} w-100`}
                />
              </figure>

              <figure className="text-center mb-0">
                <img
                  src={require("../../assets/images/slider-image-2.jpeg")}
                  alt="slider-img-2"
                  className={`${styles.sliderImg} w-100`}
                />
              </figure>

              <figure className="text-center mb-0">
                <img
                  src={require("../../assets/images/slider-image-3.jpeg")}
                  alt="slider-img-3"
                  className={`${styles.sliderImg} w-100`}
                />
              </figure>
            </Slider>
          </div>

          <div className="col-lg-4 col-md-5 col-sm-12">
            <div className="row g-0">
              <div className="col-6 col-md-12">
                <figure className="mb-0">
                  <img
                    src={require("../../assets/images/blog-img-1.jpeg")}
                    alt="blog-img-1"
                    className={`${styles.blogImg} w-100`}
                  />
                </figure>
              </div>
              <div className="col-6 col-md-12">
                <figure className="mb-0">
                  <img
                    src={require("../../assets/images/blog-img-2.jpeg")}
                    alt="blog-img-2"
                    className={`${styles.blogImg} w-100`}
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
