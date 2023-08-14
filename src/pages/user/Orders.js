import React from "react";
import Layout from "../../conponants/layout/Layout";
import UserMenu from "../../conponants/layout/UserMenu";

const Orders = () => {
  return (
    <Layout>
      <div className="container-fluid p-3 m-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <h1>ALL orders</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
