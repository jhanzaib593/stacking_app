import React from "react";
import Header from "../Header";
import { Outlet } from "react-router-dom";
import Home from "../../page/home";
import Footer from "../Footer";
import "./index.css";
const Layout = () => {
  return (
    <>
      <div className="wappers">
        <Header />
        <Home />
        {/* <Outlet /> */}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
