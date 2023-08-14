import React from "react";
import Admin from "../../conponants/layout/AdminMenu";
import Layout from "../../conponants/layout/Layout";

const Allusers = () => {
  return (
    <Layout title={"Dashboard - All Users"}>
      <div className="container-fluid m-3 p-3 pt-5">
        <div className="row">
          <div className="col-md-3">
            <Admin />
          </div>
          <div className="col-md-9">
            <h1>All Users</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Allusers;
