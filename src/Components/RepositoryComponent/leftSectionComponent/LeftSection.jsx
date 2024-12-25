
import React, { useState } from "react";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";
import { LuMenu, LuX } from "react-icons/lu";
import Navigation from "./Navigation";
import { useNavigate } from "react-router-dom";

function LeftSection() {
  const navigate = useNavigate();
  const [isNavVisible, setIsNavVisible] = useState(false);

  const handleLogOut = () => {
    navigate("/");
  };

  const handleNavigation = () => {
    setIsNavVisible(!isNavVisible); // Toggle the navigation visibility
  };

  return (
    <div className="flex flex-col lg:justify-between md:justify-between sm:justify-start px-4 h-screen sticky top-0 repo-left-main-sec">
      <div className="flex flex-col gap-2">
        {/* logo */}
        <div className="flex justify-between ">
          <div className="flex gap-3">
            <img
              src="src/assets/logo.svg"
              alt="logo"
              className="object-contain"
            />
            <p className="font-inter text-2xl">CodeAnt AI</p>
          </div>

          <button className="lg:hidden md:hidden sm:block hamburger border-none bg-white text-3xl" onClick={handleNavigation}>
            {isNavVisible ? <LuX /> : <LuMenu />}
          </button>
        </div>

        {/* Navigation Section */}
        <div className={`${isNavVisible ? "block" : "hidden"} lg:block md:block`}>
          <Navigation />
        </div>
      </div>
      {/* Footer */}
      <div className={`${isNavVisible ? "block" : "hidden"} lg:block md:block repo-left-footer`}>
        <ul className="list-none text-base mx-0 px-0 w-48 font-semibold text-custumBrown leading-6">
          <li className="py-2 rounded-lg items-center flex gap-4 px-3">
            <IoCallOutline className="text-2xl" /> <span>Support</span>
          </li>
          <button className="border-none bg-white text-base mx-0 px-0 w-48 font-semibold text-custumBrown">
            <li
              className="py-2 rounded-lg items-center flex gap-4 px-3"
              onClick={handleLogOut}
            >
              <MdOutlineLogout className="text-2xl" /> <span>Logout</span>
            </li>
          </button>
        </ul>
      </div>
    </div>
  );
}

export default LeftSection;
