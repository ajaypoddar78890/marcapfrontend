// import React from "react";
// import { useSearch } from "../../context/Search";

// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// const SearchInput = () => {
//   const [values, setValues] = useSearch();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.get(
//         `${process.env.REACT_APP_API}/api/v1/product/search/${values.keyword}`
//       );
//       setValues({ ...values, results: data });
//       navigate("/search");
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <div>
//       <form
//         className="d-flex "
//         style={{ marginLeft: "35rem" }}
//         role="search"
//         onSubmit={handleSubmit}
//       >
//         <input
//           className="form-control me-1  "
//           type="search"
//           placeholder="Search"
//           aria-label="Search"
//           value={values.keyword}
//           onChange={(e) => setValues({ ...values, keyword: e.target.value })}
//         />
//         <button className="btn btn-outline-success" type="submit">
//           Search
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SearchInput;

import React from "react";
import { useSearch } from "../../context/Search";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./SerchInput.css";

const SearchInput = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/search/${values.keyword}`
      );
      setValues({ ...values, results: data });
      navigate("/search");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="search-input-container">
      <form className="search-form" role="search" onSubmit={handleSubmit}>
        <input
          className="form-control search-input"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={values.keyword}
          onChange={(e) => setValues({ ...values, keyword: e.target.value })}
        />
        <button className="btn btn-outline-success search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
