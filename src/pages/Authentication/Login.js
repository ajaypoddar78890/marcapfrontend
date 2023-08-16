// import React from "react";
// import Layout from "../../conponants/layout/Layout.js";
// import { useState } from "react";
// import toast from "react-hot-toast";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/Auth.js";
// import json from "json5";

// import { FaEnvelope, FaLock, FaGoogle, FaApple } from "react-icons/fa"; // Import the specific icons
// import "./LoginPage.css"; // Import the custom CSS file

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [auth, Setauth] = useAuth();

//   const navigate = useNavigate();

//   // creating async await function to handle the form request
//   const handleform = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post(
//         `${process.env.REACT_APP_API}/api/v1/auth/login`,
//         {
//           password,
//           email,
//         }
//       );

//       if (res && res.data.success) {
//         // toast.success(res.data && res.data.message);

//         // adding my funtional toast for temporary reasons will fix it lator
//         toast.success("welcome sir ");

//         Setauth({
//           ...auth,
//           user: res.data.user,
//           token: res.data.token,
//         });
//         localStorage.setItem("auth", json.stringify(res.data));

//         navigate("/");
//       } else {
//         toast.error(" Wrong Credentials");
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error("Something went wrong");
//     }
//   };
//   return (
//     <Layout>
//       <div className="form_container">
//         <div className="logo_container"></div>
//         <div className="title_container">
//           <p className="title">Login to your Account</p>
//           <span className="subtitle">
//             Get started with our app, just create an account and enjoy the
//             experience.
//           </span>
//         </div>
//         <div className="input_container">
//           <label className="input_label" htmlFor="email_field">
//             Email
//           </label>
//           <FaEnvelope className="icon" />
//           <input
//             placeholder="name@mail.com"
//             title="Input title"
//             name="input-name"
//             type="text"
//             className="input_field"
//             id="email_field"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="input_container">
//           <label className="input_label" htmlFor="password_field">
//             Password
//           </label>
//           <FaLock className="icon" />
//           <input
//             placeholder="Password"
//             title="Input title"
//             name="input-name"
//             type="password"
//             className="input_field"
//             id="password_field"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button
//           title="Sign In"
//           type="submit"
//           className="sign-in_btn"
//           onClick={handleform}
//         >
//           <span>Sign In</span>
//         </button>
//         <div className="separator">
//           <hr className="line" />
//           <span>Or</span>
//           <hr className="line" />
//         </div>
//         <button title="Sign In" type="button" className="sign-in_ggl">
//           <FaGoogle className="icon" />
//           <span>Sign In with Google</span>
//         </button>
//         <button title="Sign In" type="button" className="sign-in_apl">
//           <FaApple className="icon" />
//           <span>Sign In with Apple</span>
//         </button>
//         <p className="note">Terms of use &amp; Conditions</p>
//       </div>
//     </Layout>
//   );
// };

// export default Login;

import React from "react";
import Layout from "../../conponants/layout/Layout.js";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Auth.js";
import json from "json5";

import { FaEnvelope, FaLock, FaGoogle, FaApple } from "react-icons/fa"; // Import the specific icons
import "./LoginPage.css"; // Import the custom CSS file

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, Setauth] = useAuth();

  const navigate = useNavigate();

  // creating async await function to handle the form request
  const handleform = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/login`,
        {
          password,
          email,
        }
      );

      if (res && res.data.success) {
        // toast.success(res.data && res.data.message);

        // adding my funtional toast for temporary reasons will fix it lator
        toast.success("welcome sir ");

        Setauth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", json.stringify(res.data));

        navigate("/");
      } else {
        toast.error(" Wrong Credentials");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout>
      <div className="form_container">
        <div className="logo_container"></div>
        <div className="title_container">
          <p className="title">Login to your Account</p>
          <span className="subtitle">
            Get started with our app, just create an account and enjoy the
            experience.
          </span>
        </div>
        <div className="input_container">
          <label className="input_label" htmlFor="email_field">
            Email
          </label>
          <FaEnvelope className="icon" />
          <input
            placeholder="name@mail.com"
            title="Input title"
            name="input-name"
            type="text"
            className="input_field"
            id="email_field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input_container">
          <label className="input_label" htmlFor="password_field">
            Password
          </label>
          <FaLock className="icon" />
          <input
            placeholder="Password"
            title="Input title"
            name="input-name"
            type="password"
            className="input_field"
            id="password_field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          title="Sign In"
          type="submit"
          className="sign-in_btn"
          onClick={handleform}
        >
          <span>Sign In</span>
        </button>
        <div className="separator">
          <hr className="line" />
          <span>Or</span>
          <hr className="line" />
        </div>
        <button title="Sign In" type="button" className="sign-in_ggl">
          <FaGoogle className="icon" />
          <span>Sign In with Google</span>
        </button>
        <button title="Sign In" type="button" className="sign-in_apl">
          <FaApple className="icon" />
          <span>Sign In with Apple</span>
        </button>
        <p className="note">Terms of use &amp; Conditions</p>
      </div>
    </Layout>
  );
};

export default Login;
