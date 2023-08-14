import React from "react";
import Layout from "../../conponants/layout/Layout.js";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  // creating async await function to handle the form request
  const handleform = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/register`,
        {
          name,
          address,
          password,
          email,
          phone,
        }
      );

      //adding temporary notificcation will fixed the later
      // navigating through catch error
      //   if (res.data.success) {
      //     toast.success(res.data.success);
      //     // navigate("/login");
      //   } else {
      //     toast.error(res.data.message);
      //   }
      // } catch (error) {
      //   console.log(error);
      //   // navigate("/login");
      //   toast.success(" User has been register !!");
      // }

      //HARE IS A NEW CODE FOR SOLUTION
      if (res && res.data.success) {
        // toast.success(res.data && res.data.message);

        // adding my funtional toast for temporary reasons will fix it lator
        toast.success("login here ");

        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout>
      <div className="container">
        <div className="form-box">
          <form className="form" onSubmit={handleform}>
            <span className="title">Register</span>
            <span className="subtitle">
              Create a free account with your details.
            </span>
            <div className="form-container">
              <input
                type="text"
                className="input"
                placeholder="Full Name"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                className="input"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                className="input"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="number"
                className="input"
                placeholder="Phone Number"
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                type="text"
                className="input"
                placeholder="Address"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <button type="submit">Register</button>
          </form>
          <div className="form-section">
            <p>
              Already have an account? <a href>Log in</a>
            </p>
          </div>
        </div>
      </div>

      {/* <div className="register">
        <h1>Register page</h1>

        <form onSubmit={handleform}>
          <div className="mb-3">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              required
              className="form-control"
              placeholder="NAME"
            />
          </div>
          <div className="mb-3">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="Email"
              required
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Email ID"
            />
          </div>
          <div className="mb-3">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>

          <div className="mb-3">
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="number"
              required
              className="form-control"
              id="exampleInputphone"
              placeholder=" Phone No"
            />
          </div>

          <div className="mb-3">
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              className="form-control"
              id="exampleInputaddress"
              placeholder=" Address"
            />
          </div>
          <div className="mb-3 form-check"></div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div> */}
    </Layout>
  );
};

export default Register;
