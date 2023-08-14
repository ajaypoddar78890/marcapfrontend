import { Routes, Route } from "react-router-dom";

import product from "./pages/Product";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PagenotFound from "./pages/PagenotFound";
import PrivacyP from "./pages/PrivacyP";
import Register from "./pages/Authentication/Register.js";
import Login from "./pages/Authentication/Login.js";
import Dashbord from "./pages/user/Dashbord";
// import Privaterout from "./Routes/Privaterout.js";
import Admin from "./pages/admin/AdminDashbord";
import CreatCategory from "./pages/admin/CreatCategory";
import CreatProducts from "./pages/admin/CreatProducts";
import Allusers from "./pages/admin/Allusers";
import Profile from "./pages/user/Profile";
import Orders from "./pages/user/Orders";
import Products from "./pages/admin/Products";
import UpdateProduct from "./pages/admin/UpdateProduct";
import Search from "./pages/Search";
import ProductDetails from "./pages/ProductDetails";
import Category from "./pages/Category";
import CategoryProduct from "./pages/CategoryProduct";
import UserCart from "./pages/UserCart";
import Home from "./pages/Home";
import Product from "./pages/Product";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />

        {/* <Route path="/dashbord" element={<Privaterout />}>
        </Route> */}
        <Route path="search" element={<Search />} />
        <Route path="/category" element={<Category />} />
        <Route path="/cart" element={<UserCart />} />
        <Route path="/category/:slug" element={<CategoryProduct />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="dashbord" element={<Dashbord />} />
        <Route path="user/profile" element={<Profile />} />
        <Route path="/user/orders" element={<Orders />} />
        <Route path="admin" element={<Admin />} />
        <Route path="creat-category" element={<CreatCategory />} />
        <Route path="products" element={<Products />} />
        <Route path="creat-products" element={<CreatProducts />} />
        <Route path="product/:slug" element={<UpdateProduct />} />
        <Route path="users" element={<Allusers />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contect" element={<Contact />} />
        <Route path="/Policy" element={<PrivacyP />} />
        <Route path="*" element={<PagenotFound />} />
      </Routes>
    </>
  );
}

export default App;
