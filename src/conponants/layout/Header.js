import React from "react";
import { Toaster } from "react-hot-toast";
import { Badge } from "antd";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/Auth";
import Toast from "react-hot-toast";
import SearchInput from "../Form/Searchinput";
import useCategory from "../Customehooks/useCategory";
import { useCart } from "../../context/Cart";

// import Dashbord from "../../pages/user/Dashbord";
const Header = () => {
  const [auth, Setauth] = useAuth();
  const categories = useCategory();
  const [cart] = useCart();
  const LogoutHandle = () => {
    Setauth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    Toast.success("logout Successfully", {});
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link
              to="/"
              className="navbar-brand fs-4 ps-5 fw-medium text-success"
            >
              MarCap
            </Link>
            <SearchInput />
            <ul className="navbar-nav ms-auto  fs-5 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link  " aria-current="page">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/product" className="nav-link ">
                  Product
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink to="/category" className="nav-link">
                  CateGory
                </NavLink>
              </li> */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to={"/categories"}
                  data-bs-toggle="dropdown"
                >
                  Categories
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={"/categories"}>
                      All Categories
                    </Link>
                  </li>
                  {categories?.map((c) => (
                    <li>
                      <Link
                        className="dropdown-item"
                        to={`/category/${c.slug}`}
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              {!auth.user ? (
                <>
                  <li className="nav-item">
                    <NavLink to="/register" className="nav-link">
                      Register
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link" href="#">
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      User
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink to="/dashbord" className="dropdown-item">
                          Dashbord
                        </NavLink>
                      </li>

                      <NavLink
                        onClick={LogoutHandle}
                        to="/login"
                        className="nav-link"
                        href="#"
                      >
                        Logout
                      </NavLink>
                    </ul>
                  </li>
                </>
              )}

              <li className="nav-item fs-1">
                <Badge count={cart?.length} showZero>
                  <NavLink to="/cart" className="nav-link fs-4">
                    Cart
                  </NavLink>
                </Badge>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Toaster />
    </>
  );
};

export default Header;
