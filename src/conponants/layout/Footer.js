import React from "react";

const Footer = () => {
  return (
    <footer className="footer section section-sm bg-dark text-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-7 offset-md-1 offset-lg-0 mb-4 mb-lg-0">
            <div className="block about">
              <h2>MARCAP</h2>
              <p className="alt-color">
                Discover a world of quality and style at MARCAP. We offer a
                curated selection of premium products that cater to your needs.
                Shop confidently with our diverse range, exceptional service,
                and secure checkout. Elevate your shopping experience with us
                today
              </p>
            </div>
          </div>
          <div className="col-lg-2 offset-lg-1 col-md-3 col-6 mb-4 mb-lg-0">
            <div className="block">
              <h4>Site Pages</h4>
              <ul>
                <li>
                  <a>HOME</a>
                </li>
                <li>
                  <a>ABOUT</a>
                </li>
                <li>
                  <a>OFFERS</a>
                </li>
                <li>
                  <a>ACCOUNT</a>
                </li>
                <li>
                  <a>TERMS & CONDITIONS</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 offset-md-1 offset-lg-0 col-6 mb-4 mb-md-0">
            <div className="block">
              <h4>Admin Pages</h4>
              <ul>
                <li>
                  <a>Category</a>
                </li>
                <li>
                  <a>Single Page</a>
                </li>
                <li>
                  <a>Store Single</a>
                </li>
                <li>
                  <a>Single Post</a>
                </li>
                <li>
                  <a>Blog</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-7">
            <div className="block-2 app-promotion">
              <div className="mobile d-flex align-items-center">
                <a href="index.html">
                  <img src="images/phoneicone.png" alt="mobile-icon" />
                </a>
                <p className="mb-0">Get the Deals Mobile App and Save more</p>
              </div>
              <div className="download-btn d-flex my-3">
                <a href="index.html">
                  <img
                    src="images/applestore.png"
                    className="img-fluid"
                    alt=""
                  />
                </a>
                <a href="index.html" className="ml-3">
                  <img
                    src="images/googleplaystorepng.png"
                    className="img-fluid"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <div className="border-top border-light pt-3">
          <p className="text-center">
            &copy; {new Date().getFullYear()} MARCAP . All Rights Reserved.
          </p>
        </div>
      </div>

      <div className="scroll-top-to" onClick={() => window.scrollTo(0, 0)}>
        <i className="fa fa-angle-up"></i>
      </div>
    </footer>
  );
};

export default Footer;
