import React from "react";
import Logo from "../components/Logo/Logo";
import { Outlet } from "react-router";
import authImg from "../assets/authImage.png";
const AuthLayouts = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Logo></Logo>
      <div className="flex flex-col lg:flex-row items-center mt-10 gap-10">
        {/* Left: Forms */}
        <div className="flex-1 w-full lg:w-1/2">
          <Outlet />
        </div>

        {/* Right: Image */}
        <div className="flex-1 w-full lg:w-1/2">
          <img
            src={authImg}
            alt="Authentication Illustration"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthLayouts;
