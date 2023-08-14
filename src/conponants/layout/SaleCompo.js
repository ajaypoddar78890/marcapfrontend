import React from "react";
import "./SaleCompo.css";

const SaleCompo = () => {
  return (
    <div className="sale-component">
      <div className="sale-content">
        <h1 className="sale-heading text-success fs-1 fw-bold">SEASON SALE</h1>
        <button className="sale-button">Shop Now</button>
      </div>
      <div className="product-cards">
        {/* Second Product Card */}
        <div className="product-card">
          <img src="/images/new/aj1low.jpg" alt="Product 2" />
          <h2>Air-Jordon 1 low</h2>
          <p>
            Design details recall decades of legendary shoes while paying homage
            to MJs storied career.
          </p>
          <div
            className="product-details"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <span className="product-price">RS 12,999</span>
            <button className="product-card-button">Buy Now</button>
          </div>
        </div>

        {/* Third Product Card */}
        <div className="product-card">
          <img src="/images/new/sbdunk.jpg" alt="Product 3" />
          <h2> SB DUNK</h2>
          <p>
            Design details recall decades of legendary shoes while paying homage
            to MJs storied career.
          </p>
          <div
            className="product-details"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <span className="product-price">RS 8,999</span>
            <button className="product-card-button">Buy Now</button>
          </div>
        </div>

        {/* Fourth Product Card */}
        <div className="product-card">
          <img src="/images/new/airforce1.jpg" alt="Product 4" />
          <h2>AirForce 1</h2>
          <p>
            Design details recall decades of legendary shoes while paying homage
            to MJs storied career.
          </p>
          <div
            className="product-details"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <span className="product-price">RS 16,000</span>
            <button className="product-card-button">Buy Now</button>
          </div>
        </div>
        <div className="product-card">
          <img src="/images/new/aj1mid.jpg" alt="Product 4" />
          <h2>Air Jordon Mid</h2>
          <p>
            Design details recall decades of legendary shoes while paying homage
            to MJs storied career.
          </p>
          <div
            className="product-details"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <span className="product-price">RS 12,999</span>
            <button className="product-card-button">Buy Now</button>
          </div>
        </div>
        <div className="product-card">
          <img src="/images/new/airmax.jpg" alt="Product 4" />
          <h2>AIRMAX 9</h2>
          <p>
            Design details recall decades of legendary shoes while paying homage
            to MJs storied career.
          </p>
          <div
            className="product-details"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <span className="product-price">RS 22,599</span>
            <button className="product-card-button">Buy Now</button>
          </div>
        </div>
        <div className="product-card">
          <img src="/images/new/uptempolow.jpg" alt="Product 4" />
          <h2>NIKE Uptemp -Low</h2>
          <p>
            Design details recall decades of legendary shoes while paying homage
            to MJs storied career.
          </p>
          <div
            className="product-details"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <span className="product-price">RS 14,000</span>
            <button className="product-card-button">Buy Now</button>
          </div>
        </div>
        <div className="product-card">
          <img src="/images/new/jordonplay.jpg" alt="Product 4" />
          <h2>Jordon sleeper</h2>
          <p>
            Design details recall decades of legendary shoes while paying homage
            to MJs storied career.
          </p>
          <div
            className="product-details"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <span className="product-price">RS 5,000</span>
            <button className="product-card-button">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleCompo;
