// import React, { useState, useEffect } from "react";
// import Layout from "../conponants/layout/Layout";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import json from "json5";

// const ProductDetails = () => {
//   const params = useParams();
//   const [product, setProduct] = useState({});

//   //initalp details
//   useEffect(() => {
//     if (params?.slug) getProduct();
//   }, [params?.slug]);
//   //getProduct
//   const getProduct = async () => {
//     try {
//       const { data } = await axios.get(
//         `${process.env.REACT_APP_API}/api/v1/product/get-product/${params.slug}`
//       );
//       console.log(data);
//       setProduct(data?.product);
//       //   getSimilarProduct(data?.product._id, data?.product.category._id);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <Layout>
//       <div className="row container " style={{ marginTop: "60px" }}>
//         <div className="col-md-6">
//           <img
//             style={{ objectFit: "cover", height: "500px", width: "500px" }}
//             src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${product._id}`}
//             className="card-img-top"
//             alt={product.name}
//             height="300"
//             width={"350px"}
//           />
//         </div>
//         <div className="col-md-6 ">
//           <h1 className="text-center">Product Details</h1>
//           <h6 class="fs-3 mt-5">Name : {product.name}</h6>
//           <h6 class="fs-3 ">Description : {product.description}</h6>
//           <h6 class="fs-3 ">Price : {product.price}</h6>
//           <h6 class="fs-3 ">Category : {product?.category?.name}</h6>
//           <button class="btn btn-secondary ms-1">ADD TO CART</button>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default ProductDetails;

import React, { useState, useEffect } from "react";
import Layout from "../conponants/layout/Layout";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState({});

  // Initial details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);

  // Get product
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/get-product/${params.slug}`
      );
      console.log(data);
      setProduct(data?.product);
      //   getSimilarProduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div
        className="row container"
        style={{ marginTop: "60px", padding: "20px" }}
      >
        <div className="col-md-5">
          <img
            style={{
              objectFit: "cover",
              height: "550px",
              width: "100%",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
            src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${product._id}`}
            alt={product.name}
          />
        </div>
        <div className="col-md-7">
          <div style={{ marginLeft: "20px" }}>
            <h1 className="text-center text-success">Product Details</h1>
            <h4
              className="fs-3 mt-4"
              style={{ fontWeight: "bold", color: "#4a5162" }}
            >
              {product.name}
            </h4>
            <p className="fs-4" style={{ color: "#4a5162" }}>
              Category: {product?.category?.name}
            </p>
            <p className="fs-5" style={{ color: "#4a5162" }}>
              {product.description}
            </p>
            <p className="fs-6" style={{ color: "#666" }}>
              Estimated Delivery Time: 3-5 business days
            </p>
            <p className="fs-6" style={{ color: "#1f2002" }}>
              Size Chart:
            </p>
            <div style={{ marginTop: "10px" }}>
              <button
                className="btn btn-secondary"
                style={{
                  background: "#f57224",
                  border: "none",
                  borderRadius: "20px",
                  color: "#fff",
                  padding: "5px 15px",
                  marginRight: "10px",
                }}
              >
                S
              </button>
              <button
                className="btn btn-secondary"
                style={{
                  background: "#f57224",
                  border: "none",
                  borderRadius: "20px",
                  color: "#fff",
                  padding: "5px 15px",
                  marginRight: "10px",
                }}
              >
                M
              </button>
              <button
                className="btn btn-secondary"
                style={{
                  background: "#f57224",
                  border: "none",
                  borderRadius: "20px",
                  color: "#fff",
                  padding: "5px 15px",
                  marginRight: "10px",
                }}
              >
                L
              </button>
              <button
                className="btn btn-secondary"
                style={{
                  background: "#f57224",
                  border: "none",
                  borderRadius: "20px",
                  color: "#fff",
                  padding: "5px 15px",
                }}
              >
                XL
              </button>
            </div>
            <p
              className="fs-5 pt-4"
              style={{ fontWeight: "bold", color: "#f57224" }}
            >
              Price: ${product.price}
            </p>
            <button
              className="btn btn-secondary"
              style={{
                background: "#f57224",
                border: "none",
                borderRadius: "5px",
                marginTop: "10px",
              }}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
