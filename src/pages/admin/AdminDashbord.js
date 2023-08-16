// import React from "react";
// import Layout from "../../conponants/layout/Layout";
// import Adminmenu from "../../conponants/layout/AdminMenu";
// import { useAuth } from "../../context/Auth";

// const AdminDashbord = () => {
//   const [auth] = useAuth();

//   return (
//     <Layout>
//       <div className="container-fluid m-3 p-3  pt-5">
//         <div className="row">
//           <div className="col-md-3">
//             <Adminmenu />
//           </div>
//           <div className="col-md-9" style={{ marginTop: "50px" }}>
//             <div className="card w-75 p-3 " style={{ marginTop: "20px" }}>
//               <h3> Admin Name : {auth?.user?.name}</h3>
//               <h3> Admin Email : {auth?.user?.email}</h3>
//               <h3> Admin Contact : {auth?.user?.phone}</h3>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default AdminDashbord;

import React from "react";
import Layout from "../../conponants/layout/Layout";
import Adminmenu from "../../conponants/layout/AdminMenu";
import { useAuth } from "../../context/Auth";

const AdminDashboard = () => {
  const [auth] = useAuth();

  return (
    <Layout>
      <div className="container-fluid m-3 p-3 pt-md-5">
        <div className="row">
          <div className="col-md-3">
            <Adminmenu />
          </div>
          <div className="col-md-9 mt-3 mt-md-0">
            <div className="card p-3 m-3">
              <h3 className="mb-4">Admin Information:</h3>
              <div className="mb-3 p-3 " style={{ paddingTop: "50px" }}>
                <strong>Admin Name:</strong> {auth?.user?.name}
              </div>
              <div className="mb-3">
                <strong>Admin Email:</strong> {auth?.user?.email}
              </div>
              <div className="mb-3">
                <strong>Admin Contact:</strong> {auth?.user?.phone}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
