import React from "react";

import Layout from "../conponants/layout/Layout";

import SaleCompo from "../conponants/layout/SaleCompo";
import LimitedOffer from "../conponants/layout/LimitedOffer";
import Offers from "../conponants/layout/Offers";

const Home = () => {
  return (
    <Layout>
      <div
        style={{ paddingTop: "55px" }}
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel" // Add this attribute to enable automatic sliding
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={3}
            aria-label="Slide 4"
          />
          {/* Add more buttons for additional carousel items if needed */}
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active  " data-bs-interval="10000">
            <img
              src="/images/carausel1.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="/images/carausel2.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="/images/carausel3.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* //next carousel */}
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide mt-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active " data-bs-interval="10000">
            <img
              src="/images/carausel4.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item " data-bs-interval="5000">
            <img
              src="/images/carausel5.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item " data-bs-interval="5000">
            <img
              src="/images/carausel6.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* card carasoule */}
      <SaleCompo />
      {/* limited offer */}
      <LimitedOffer />
      {/* //offers */}
      <Offers />
    </Layout>
  );
};

export default Home;
