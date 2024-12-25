import React from "react";

import { IoSearchOutline } from "react-icons/io5";

import { LuRefreshCcw } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import { GoDatabase } from "react-icons/go";
import MainSection from "./MainSection";
function RightSection() {
  return (
    <div className="bg-cream border-whiteGray border-solid w-full h-full pb-6 repo-right-main-sec  ">
      {/* innerbox area */}
      <div className="bg-white border-solid border-whiteGray mt-5 mx-6  rounded-lg  repo-right-inner-sec ">
        {/* header section */}
        <div className="flex items-start justify-between px-5 py-1 pb-3 repo-right-header-sec ">
          <div>
            <p className=" text-2xl font-semibold p-0 m-2 mt-5">Repositories</p>
            <p
              style={{ fontSize: "14px" }}
              className="p-0 m-2 text-custumBrown"
            >
              33 total repositories
            </p>
            <div className="border-solid border-gray text-custumBrown text-base rounded-lg py-2 px-4 pr-20 m-2 flex items-center justify-center gap-2">
              <IoSearchOutline className="text-xl" />
              <input

                type="text"
                placeholder="Search repositories"
                className="border-none active:outline-none focus:outline-none text-base repo-right-search"
              />
            </div>
          </div>
          <div className="flex p-0 m-2 mt-7 gap-3">
            <button className="bg-white p-3 flex justify-center items-center gap-2  border-solid border-gray rounded-lg text-custumBrown">
              {" "}
              <LuRefreshCcw className="text-xl" />
              <span style={{ fontSize: "14px" }}>Refresh All</span>
            </button>
            <button className=" bg-custumBlue text-white p-3 flex justify-center items-center gap-2 border-none rounded-lg">
              <FiPlus className="text-xl" />
              <span style={{ fontSize: "14px" }}>Add Repository</span>
            </button>
          </div>
        </div>
        {/* below section */}
     
        <MainSection/>
         
        
      </div>
    </div>
  );
}

export default RightSection;
