import { FaArrowUpLong } from "react-icons/fa6";
import React, { useState } from "react";
import { PiKeyBold } from "react-icons/pi";
import LeftSection from "../Components/LoginComponent/LeftSection";
import RightSection from "../Components/LoginComponent/RightSection";
const LoginScreen = () => {
 
  return (
    <>
      <div className="flex lg:flex-row sm:flex-col xl:flex-row md:flex-col login-main-container">
        {/* left section */}
        <LeftSection/>
        {/* right section */}
        <RightSection/>
      </div>
    </>
  );
};
export default LoginScreen;
