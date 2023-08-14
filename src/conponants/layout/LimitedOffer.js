// import React from "react";
// import { FaCheck } from "react-icons/fa";

// const LimitedOffer = () => {
//   return (
//     <div className="container my-5 bg-gray-200">
//       <div className="row">
//         <div className="col-lg-6">
//           <img
//             src="https://via.placeholder.com/400x300"
//             className="img-fluid rounded"
//             alt="Product Image"
//           />
//         </div>
//         <div className="col-lg-6 mt-4 mt-lg-0">
//           <h2 className="mb-3">Limited Time Offer!</h2>
//           <p className="lead">
//             Get ready for an amazing shopping experience with our exclusive
//             offer. Shop now and save big on your favorite products.
//           </p>
//           <ul className="list-group mb-4">
//             <li className="list-group-item">
//               <FaCheck className="text-success me-2" /> High-quality products
//             </li>
//             <li className="list-group-item">
//               <FaCheck className="text-success me-2" /> Fast and secure checkout
//             </li>
//             <li className="list-group-item">
//               <FaCheck className="text-success me-2" /> Free shipping on orders
//               over $50
//             </li>
//           </ul>
//           <a href="#" className="btn btn-primary btn-lg">
//             Shop Now
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LimitedOffer;

import React from "react";
import { FaCheck } from "react-icons/fa";

const LimitedOffer = () => {
  const containerStyle = {
    backgroundImage: "linear-gradient(to right, #9cd670, #ffcc33)",
    padding: "40px 0",
  };

  const rowStyle = {
    justifyContent: "center",
    alignItems: "center",
  };

  const colStyle = {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div className="container-fluid  pe-3" style={containerStyle}>
      <div className="row" style={rowStyle}>
        <div className="col-lg-6">
          <img
            style={{ height: "300px", width: "300px ", paddingLeft: "50px" }}
            src="/images/new/salebanner.jpg"
            className="img-fluid rounded"
            alt="Product Image"
          />
        </div>
        <div className="col-lg-6 mt-4 mt-lg-0" style={colStyle}>
          <h2 className="mb-3  text-success">Limited Time Offer!</h2>
          <p className="lead  fw-medium">
            Get ready for an amazing shopping experience with our exclusive
            offer. Shop now and save big on your favorite products.
          </p>
          <ul className="list-group mb-4">
            <li className="list-group-item">
              <FaCheck className="text-success me-2" /> High-quality products
            </li>
            <li className="list-group-item">
              <FaCheck className="text-success me-2" /> Fast and secure checkout
            </li>
            <li className="list-group-item">
              <FaCheck className="text-success me-2" /> Free shipping on orders
              over RS 15,00{" "}
            </li>
          </ul>
          <a href="#" className="btn btn-warning btn-lg">
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default LimitedOffer;
