import React from "react";
import { NavLink } from "react-router-dom";

const UserMenu = () => {
  return (
    <>
      <div className="main   m-3 p-3 ">
        <h1>Dashbord</h1>
        <div className="list-group ">
          <NavLink
            to="/user/profile"
            className="list-group-item list-group-item-action a"
            aria-current="true"
          >
            profile
          </NavLink>
          <NavLink
            to="/user/orders"
            className="list-group-item list-group-item-action "
          >
            Orders
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default UserMenu;
