//third code
import React, { useState, useEffect } from "react";
import Admin from "../../conponants/layout/AdminMenu";
import Layout from "../../conponants/layout/Layout";
import toast from "react-hot-toast";
import axios from "axios";
import CategoryForm from "../../conponants/Form/CategoryForm";
import { Modal } from "antd";

const CreatCategory = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [Visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [updatedName, setUpdatedName] = useState("");

  //handle Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/category/creat-category`,
        {
          name,
        }
      );
      if (data.succes) {
        toast.success(`${name} is created`);
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("somthing went wrong in input form");
    }
  };

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
      toast.error("Error getting all categories");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  //update category

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `${process.env.REACT_APP_API}/api/v1/category/update-category/${selected._id}`,
        { name: updatedName }
      );

      if (data.succes) {
        toast.success(`${updatedName} is updated`);
        setSelected(null);
        setUpdatedName("");
        setVisible(false);
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("something went wrong  in updating it ");
    }
  };

  //delete category
  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `${process.env.REACT_APP_API}/api/v1/category/delete-category/${id}`
      );
      if (data.succes) {
        toast.success(`${name} is deleted`);
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Somtihing went wrong");
    }
  };

  return (
    <Layout>
      <div className="container-fluid m-3 p-3 pt-5">
        <div className="row">
          <div className="col-md-3">
            <Admin />
          </div>
          <div className="col-md-9">
            <h1>All Category</h1>
            <div className="p-3 w-50">
              <CategoryForm
                handleSubmit={handleSubmit}
                value={name}
                setValue={setName}
              />
            </div>
            <div className="w-75">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">NAME</th>
                    <th scope="col">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((category) => (
                    <tr key={category._id}>
                      <td>{category.name}</td>
                      <td>
                        <button
                          className="btn btn-primary"
                          onClick={() => {
                            setVisible(true);
                            setUpdatedName(category.name);
                            setSelected(category);
                          }}
                        >
                          Edit
                        </button>

                        <button
                          className="btn btn-danger ms-2"
                          onClick={() => {
                            handleDelete(category._id);
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Modal
              onCancel={() => setVisible(false)}
              footer={null}
              open={Visible}
            >
              <CategoryForm
                value={updatedName}
                setValue={setUpdatedName}
                handleSubmit={handleUpdate}
              />
            </Modal>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreatCategory;
