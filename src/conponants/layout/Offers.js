// import React from "react";
// import { toast } from "react-hot-toast";
// import { useCart } from "../../context/Cart";
// import { useNavigate } from "react-router-dom";
// import "./Offers.css";

// const Offers = () => {
//   const [cart, setCart] = useCart([]);
//   const nevigate = useNavigate();
//   return (
//     <>
//       <section id="collection" className="py-5">
//         <div className="container">
//           <div className="title text-center">
//             <h2 className="position-relative d-inline-block fs-1 text-success fw-bold ">
//               New Collection
//             </h2>
//           </div>

//           <div className="row g-0">
//             <div className="d-flex flex-wrap justify-content-center mt-5 filter-button-group">
//               <button
//                 type="button"
//                 className="btn m-2 text-dark active-filter-btn fs-4 text-info"
//                 data-filter="*"
//               >
//                 All
//               </button>
//               <button
//                 type="button"
//                 className="btn m-2 text-dark fs-4"
//                 data-filter=".best"
//               >
//                 Best Sellers
//               </button>
//               <button
//                 type="button"
//                 className="btn m-2 text-dark fs-4"
//                 data-filter=".feat"
//               >
//                 Featured
//               </button>
//               <button
//                 type="button"
//                 className="btn m-2 text-dark fs-4 "
//                 data-filter=".new"
//               >
//                 New Arrival
//               </button>
//             </div>

//             <div className="collection-list mt-4 row gx-0 gy-3">
//               <div className="container">
//                 <div className="row row-cols-1 row-cols-md-4 ">
//                   <div className="col rounded-end">
//                     <div className="card h-75">
//                       <img
//                         src="/images/new/womenshirt.jpg"
//                         className="card-img-top rounded-start h-50"
//                         alt="..."
//                       />
//                       <div className="card-body ">
//                         <h5 className="card-title fw-bolder text-primary">
//                           Selvia{" "}
//                         </h5>
//                         <p className="card-text fw-medium text-body">
//                           Women Regular Fit Solid Spread Collar Casual Shirt
//                         </p>
//                         <p className="card-text">
//                           <small className="text-muted">
//                             Last updated 3 mins ago
//                           </small>
//                         </p>
//                       </div>
//                       <div className="card-footer">
//                         <span className="text-muted fw-bold  ">
//                           Price: RS 399
//                         </span>
//                         <button
//                           className="btn btn-success btn-sm float-end mb-3"
//                           onClick={() => {
//                             setCart([...cart]);
//                             nevigate(`/`);

//                             toast.success("items added to the cart");
//                           }}
//                         >
//                           Add to Cart
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col rounded-end">
//                     <div className="card h-75">
//                       <img
//                         src="/images/new/shirt1.jpg"
//                         className="card-img-top rounded-start h-50"
//                         alt="..."
//                       />
//                       <div className="card-body ">
//                         <h5 className="card-title fw-bolder text-primary">
//                           Green SHirt
//                         </h5>
//                         <p className="card-text fw-medium text-body">
//                           This is green shirt good for men to wear office and
//                           daily wear
//                         </p>
//                         <p className="card-text">
//                           <small className="text-muted">
//                             Last updated 15 mins ago
//                           </small>
//                         </p>
//                       </div>
//                       <div className="card-footer">
//                         <span className="text-muted fw-bold  ">Price: 699</span>
//                         <button
//                           className="btn btn-success btn-sm float-end mb-3"
//                           onClick={() => {
//                             setCart([...cart]);
//                             nevigate(`/`);

//                             toast.success("items added to the cart");
//                           }}
//                         >
//                           Add to Cart
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col rounded-end">
//                     <div className="card h-75">
//                       <img
//                         src="/images/new/tshirt.jpg"
//                         className="card-img-top rounded-start h-50"
//                         alt="..."
//                       />
//                       <div className="card-body ">
//                         <h5 className="card-title fw-bolder text-primary">
//                           Obssed Tshirt
//                         </h5>
//                         <p className="card-text fw-medium">
//                           Home Wear and relexed tshirt with cotton and lycra
//                         </p>
//                         <p className="card-text">
//                           <small className="text-muted">
//                             Last updated 3 mins ago
//                           </small>
//                         </p>
//                       </div>
//                       <div className="card-footer">
//                         <span className="text-muted fw-bold  ">
//                           Price: RS 400
//                         </span>
//                         <button
//                           className="btn btn-success btn-sm float-end mb-3"
//                           onClick={() => {
//                             setCart([...cart]);
//                             nevigate(`/`);

//                             toast.success("items added to the cart");
//                           }}
//                         >
//                           Add to Cart
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col rounded-end">
//                     <div className="card h-75">
//                       <img
//                         src="/images/new/tshirt2.jpg"
//                         className="card-img-top rounded-start h-50"
//                         alt="..."
//                       />
//                       <div className="card-body ">
//                         <h5 className="card-title fw-bolder text-primary">
//                           COMBO Tshirt
//                         </h5>
//                         <p className="card-text fw-medium">
//                           Home Wear and relexed tshirt with cotton and lycra
//                         </p>
//                         <p className="card-text">
//                           <small className="text-muted">
//                             Last updated 3 mins ago
//                           </small>
//                         </p>
//                       </div>
//                       <div className="card-footer">
//                         <span className="text-muted fw-bold  ">
//                           Price: RS 900
//                         </span>
//                         <button
//                           className="btn btn-success btn-sm float-end mb-3"
//                           onClick={() => {
//                             setCart([...cart]);
//                             nevigate(`/`);

//                             toast.success("items added to the cart");
//                           }}
//                         >
//                           Add to Cart
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col rounded-end">
//                     <div className="card h-75">
//                       <img
//                         src="/images/new/mensTuxido.jpg"
//                         className="card-img-top rounded-start h-50"
//                         alt="..."
//                       />
//                       <div className="card-body ">
//                         <h5 className="card-title fw-bolder text-primary">
//                           MENS TUXIDO{" "}
//                         </h5>
//                         <p className="card-text fw-medium">
//                           Imported febric and metrieal and design for men to
//                           wear In parties
//                         </p>
//                         <p className="card-text">
//                           <small className="text-muted">
//                             Last updated 3 mins ago
//                           </small>
//                         </p>
//                       </div>
//                       <div className="card-footer">
//                         <span className="text-muted fw-bold  ">
//                           Price: RS 12000
//                         </span>
//                         <button
//                           className="btn btn-success btn-sm float-end mb-3"
//                           onClick={() => {
//                             setCart([...cart]);
//                             nevigate(`/`);

//                             toast.success("items added to the cart");
//                           }}
//                         >
//                           Add to Cart
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col rounded-end">
//                     <div className="card h-75">
//                       <img
//                         src="/images/new/hoodie.jpg"
//                         className="card-img-top rounded-start h-50"
//                         alt="..."
//                       />
//                       <div className="card-body ">
//                         <h5 className="card-title fw-bolder text-primary">
//                           mens jacket
//                         </h5>
//                         <p className="card-text fw-medium">
//                           Imported febric and metrieal and design for men to
//                           wear In parties
//                         </p>
//                         <p className="card-text">
//                           <small className="text-muted">
//                             Last updated 3 mins ago
//                           </small>
//                         </p>
//                       </div>
//                       <div className="card-footer">
//                         <span className="text-muted fw-bold  ">
//                           Price: RS 1400
//                         </span>
//                         <button
//                           className="btn btn-success btn-sm float-end mb-3"
//                           onClick={() => {
//                             setCart([...cart]);
//                             nevigate(`/`);

//                             toast.success("items added to the cart");
//                           }}
//                         >
//                           Add to Cart
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                   {/* Add three more cards here with similar structure */}
//                   {/* Example for the second product card */}

//                   {/* Add two more product cards similarly */}
//                 </div>
//               </div>

//               {/* Add more collection items similarly */}
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* <style>
//         {`

//         `}
//       </style> */}
//     </>
//   );
// };

// export default Offers;

import React from "react";
import { toast } from "react-hot-toast";
import { useCart } from "../../context/Cart";
import { useNavigate } from "react-router-dom";
import "./Offers.css";

const Offers = () => {
  const [cart, setCart] = useCart([]);
  const navigate = useNavigate();

  return (
    <section id="collection" className="py-5">
      <div className="container">
        <div className="title text-center">
          <h2 className="position-relative d-inline-block fs-1 text-success fw-bold">
            New Collection
          </h2>
        </div>

        <div className="row g-0">
          <div className="d-flex flex-wrap justify-content-center mt-5 filter-button-group">
            <button
              type="button"
              className="btn m-2 text-dark active-filter-btn fs-4 text-info"
              data-filter="*"
            >
              All
            </button>
            <button
              type="button"
              className="btn m-2 text-dark fs-4"
              data-filter=".best"
            >
              Best Sellers
            </button>
            <button
              type="button"
              className="btn m-2 text-dark fs-4"
              data-filter=".feat"
            >
              Featured
            </button>
            <button
              type="button"
              className="btn m-2 text-dark fs-4"
              data-filter=".new"
            >
              New Arrival
            </button>
          </div>

          <div className="collection-list mt-4 row gx-0 gy-3">
            <div className="container">
              <div className="row row-cols-1 row-cols-md-4">
                {/* First Product Card */}
                <div className="col-lg-3 col-md-4 col-sm-6 rounded-end">
                  <div className="card h-75">
                    <img
                      src="/images/new/womenshirt.jpg"
                      className="card-img-top rounded-start h-50"
                      alt="..."
                    />
                    <div className="card-body ">
                      <h5 className="card-title fw-bolder text-primary">
                        Selvia{" "}
                      </h5>
                      <p className="card-text fw-medium text-body">
                        Women Regular Fit Solid Spread Collar Casual Shirt
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                    <div className="card-footer">
                      <span className="text-muted fw-bold  ">
                        Price: RS 399
                      </span>
                      <button
                        className="btn btn-success btn-sm float-end mb-3"
                        onClick={() => {
                          setCart([...cart]);
                          navigate(`/product`);
                          toast.success("items added to the cart");
                        }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>

                {/* Second Product Card */}
                <div className="col-lg-3 col-md-4 col-sm-6 rounded-end">
                  <div className="card h-75">
                    <img
                      src="/images/new/shirt1.jpg"
                      className="card-img-top rounded-start h-50"
                      alt="..."
                    />
                    <div className="card-body ">
                      <h5 className="card-title fw-bolder text-primary">
                        Green SHirt
                      </h5>
                      <p className="card-text fw-medium text-body">
                        This is green shirt good for men to wear office and
                        daily wear
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 15 mins ago
                        </small>
                      </p>
                    </div>
                    <div className="card-footer">
                      <span className="text-muted fw-bold  ">Price: 699</span>
                      <button
                        className="btn btn-success btn-sm float-end mb-3"
                        onClick={() => {
                          setCart([...cart]);
                          navigate(`/product`);
                          toast.success("items added to the cart");
                        }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>

                {/* Third Product Card */}
                <div className="col-lg-3 col-md-4 col-sm-6 rounded-end">
                  <div className="card h-75">
                    <img
                      src="/images/new/tshirt.jpg"
                      className="card-img-top rounded-start h-50"
                      alt="..."
                    />
                    <div className="card-body ">
                      <h5 className="card-title fw-bolder text-primary">
                        Obssed Tshirt
                      </h5>
                      <p className="card-text fw-medium">
                        Home Wear and relaxed tshirt with cotton and lycra
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                    <div className="card-footer">
                      <span className="text-muted fw-bold  ">
                        Price: RS 400
                      </span>
                      <button
                        className="btn btn-success btn-sm float-end mb-3"
                        onClick={() => {
                          setCart([...cart]);
                          navigate(`/product`);
                          toast.success("items added to the cart");
                        }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>

                {/* Fourth Product Card */}
                <div className="col-lg-3 col-md-4 col-sm-6 rounded-end">
                  <div className="card h-75">
                    <img
                      src="/images/new/tshirt2.jpg"
                      className="card-img-top rounded-start h-50"
                      alt="..."
                    />
                    <div className="card-body ">
                      <h5 className="card-title fw-bolder text-primary">
                        COMBO Tshirt
                      </h5>
                      <p className="card-text fw-medium">
                        Home Wear and relaxed tshirt with cotton and lycra
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                    <div className="card-footer">
                      <span className="text-muted fw-bold  ">
                        Price: RS 900
                      </span>
                      <button
                        className="btn btn-success btn-sm float-end mb-3"
                        onClick={() => {
                          setCart([...cart]);
                          navigate(`/product`);
                          toast.success("items added to the cart");
                        }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col rounded-end">
                  <div className="card h-75">
                    <img
                      src="/images/new/mensTuxido.jpg"
                      className="card-img-top rounded-start h-50"
                      alt="..."
                    />
                    <div className="card-body ">
                      <h5 className="card-title fw-bolder text-primary">
                        MENS TUXIDO
                      </h5>
                      <p className="card-text fw-medium">
                        Imported febric and metrieal and design for men to wear
                        In parties
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                    <div className="card-footer">
                      <span className="text-muted fw-bold  ">
                        Price: RS 12000
                      </span>
                      <button
                        className="btn btn-success btn-sm float-end mb-3"
                        onClick={() => {
                          setCart([...cart]);
                          navigate(`/product`);

                          toast.success("items added to the cart");
                        }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col rounded-end">
                  <div className="card h-75">
                    <img
                      src="/images/new/hoodie.jpg"
                      className="card-img-top rounded-start h-50"
                      alt="..."
                    />
                    <div className="card-body ">
                      <h5 className="card-title fw-bolder text-primary">
                        mens jacket
                      </h5>
                      <p className="card-text fw-medium">
                        Imported febric and metrieal and design for men to wear
                        In parties
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                    <div className="card-footer">
                      <span className="text-muted fw-bold  ">
                        Price: RS 1400
                      </span>
                      <button
                        className="btn btn-success btn-sm float-end mb-3"
                        onClick={() => {
                          setCart([...cart]);
                          navigate(`/product`);

                          toast.success("items added to the cart");
                        }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>

                {/* Add more product cards here with similar structure */}
              </div>
            </div>
            {/* Add more collection items similarly */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
