import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
const LayoutHome = () => {
  return (
    <div className="leading-normal tracking-normal text-white">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default LayoutHome;

