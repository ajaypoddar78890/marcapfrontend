import React, { useState, useEffect } from "react";
import "./responsive.css";

import Layout from "../conponants/layout/Layout";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { Pricess } from "../conponants/Pricess";
import { Checkbox, Radio } from "antd";

import { useCart } from "../context/Cart";
import { toast } from "react-hot-toast";
// import Hero from "../conponants/layout/Hero";

const Product = () => {
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [radio, setRadio] = useState([]);
  const [cart, setCart] = useCart([]);

  // Getting all the categories
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/category/get-category/`
      );
      if (data.succes) {
        setCategories(data.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
    getTotal();
  }, []);

  // getting product count on the page

  const getTotal = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/product-count`
      );
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  // THIS IS FOR LOADING MORE PRODUCTS IN THE PAGE PASSING THROUGH PAGE DEPENDENCI

  //load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/product-list/${page}`
      );
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);

  //get products did again to find out properly
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/product-list/${page}`
      );
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  // filter by category
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };

  useEffect(() => {
    if (!checked.length || !radio.length) getAllProducts();
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);

  //get filterd product
  const filterProduct = async () => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/product/filter-product`,
        {
          checked,
          radio,
        }
      );
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Layout>
        <div className=" container-fluid row mt-3  pt-5">
          <div className="col-md-2">
            <h3 className="text-center fs-5 text-success ">SEARCH CATEGORY</h3>
            <div className="d-flex flex-column bg-light-subtle   ">
              {categories?.map((c) => (
                <Checkbox
                  className="text-warning-emphasis fs-5"
                  key={c._id}
                  onChange={(e) => handleFilter(e.target.checked, c._id)}
                >
                  {c.name}
                </Checkbox>
              ))}
            </div>

            {/* here m filltering by price through the price range in coming 
          //from different file */}

            <h4 className="text-center fs-4 text-success mt-4 bg-light-subtle">
              {" "}
              PRICE Filter
            </h4>
            <div className="d-flex flex-column  bg-light-subtle">
              <Radio.Group onChange={(e) => setRadio(e.target.value)}>
                {Pricess?.map((p) => (
                  <div key={p._id}>
                    <Radio
                      className="text-warning-emphasis fs-5"
                      value={p.array}
                    >
                      {p.name}
                    </Radio>
                  </div>
                ))}
              </Radio.Group>
            </div>
            <div className="d-flex flex-colum  pt-4 ps-4">
              <button
                className="btn btn-danger "
                onClick={() => {
                  window.location.reload();
                }}
              >
                RESET FIlter
              </button>
            </div>
          </div>
          <div className="col-md-10 col-lg-9 bg-body-tertiary ">
            <h1 className="text-center text-success"> ALL PRODUCTS</h1>
            <div className="d-flex flex-wrap">
              {products?.map((p) => (
                <div
                  class="card m-3 bg-light-subtle  custom-card"
                  style={{ width: "18rem", borderRadius: "15px" }}
                >
                  <img
                    class="card-img-top"
                    style={{
                      objectFit: "cover",
                      height: "300px",
                      width: "285px",
                    }}
                    src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                    alt={p.name}
                  />
                  <div class="card-body  bg-secondary  bg-opacity-25">
                    <h5 class="card-title fs-4 text-dark-emphasis ">
                      {" "}
                      {p.name}
                    </h5>
                    <h5 className="price fs-5 text-dark-emphasis">
                      RS {p.price}
                    </h5>
                    <p class="card-text">{p.description.substring(0, 30)}</p>
                    <button
                      className=" btn btn-primary m-2  "
                      onClick={() => navigate(`/product/${p.slug}`)}
                    >
                      More Detail
                    </button>
                    <button
                      className=" btn bg-success bg-opacity-100 text-white"
                      onClick={() => {
                        setCart([...cart, p]);
                        toast.success("items added to the cart");
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="m-2 p-3">
              {products && products.length < total && (
                <button
                  className="btn btn-warning"
                  onClick={(e) => {
                    e.preventDefault();
                    setPage(page + 1);
                  }}
                >
                  {loading ? "Loading ..." : "Loadmore"}
                </button>
              )}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Product;
