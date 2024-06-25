import React from "react";
import Header from "../Header";
import { Outlet } from "react-router-dom";
import Home from "../../page/home";

const Layout = () => {
  return (
    <>
      <Header />
      <Home />
      <Outlet />
    </>
  );
};

export default Layout;
