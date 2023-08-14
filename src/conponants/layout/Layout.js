import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
// import Hero from "../layout/Hero";
// import HomePage from "../../pages/HomePage";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />

      <main style={{ minHeight: "80vh" }}>
        <Toaster />
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
