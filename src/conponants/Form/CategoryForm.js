import React from "react";
import "./SerchInput.css";

const CategoryForm = ({ handleSubmit, value, setValue }) => {
  return (
    <>
      <form className="pe-1" onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            value={value}
            type="text"
            className="form-control "
            placeholder="Enter the category"
            onChange={(e) => setValue(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary ">
          Submit
        </button>
      </form>
    </>
  );
};

export default CategoryForm;
