import React from "react";
import Header from "../Header";
import { Outlet } from "react-router-dom";
import Home from "../../page/home";
import Footer from "../Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Home />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
