import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="md:pt-4 px-0 max-w-[1400px] mx-auto bg-[#F7F7F7]">
      {/* Navbar */}
      <div className="md:px-5">
        <Navbar></Navbar>
      </div>

      {/* Dynamin Components */}
      <Outlet />

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
