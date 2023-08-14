import React from "react";
import { NavLink } from "react-router-dom";
// import Layout from "../../conponants/layout/Layout";

const Admin = () => {
  return (
    <>
      <div className="main   m-3 p-3 ">
        <h1>Admin panel</h1>
        <div className="list-group ">
          <NavLink
            to="/creat-products"
            className="list-group-item list-group-item-action a"
            aria-current="true"
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">CREAT PRODUCTS</h5>
            </div>
            <p className="mb-1">Creat anything products you want sell</p>
          </NavLink>
          <NavLink
            to="/creat-category"
            className="list-group-item list-group-item-action "
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">CREAT CATEGORY</h5>
            </div>
            <p className="mb-1">Creat Any Category releted to Products</p>
          </NavLink>
          <NavLink
            to="/users"
            className="list-group-item list-group-item-action"
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1"> USERS</h5>
            </div>
          </NavLink>
          <NavLink
            to="/products"
            className="list-group-item list-group-item-action"
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1"> Products</h5>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Admin;
