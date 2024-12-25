import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";


function LeftSection() {
  return (
      <div
            style={{ width: "720px" }}
            className="relative h-screen flex items-center login-left-main-sec"
          >
            <div className="absolute bottom-0 ">
              <img src="src\assets\logo-shadow.svg" alt="shadow-logo" />
            </div>
            <div className=" w-3/5  mx-auto rounded-2xl shadow-2xl py-8 relative bottom-28">
              <div className="shadown-inner">
                <div className="flex gap-2 pl-8">
                  <img src="src\assets\logo.svg" alt="logo" />
                  <p style={{ fontSize: "18px" }} className=" font-bold">
                    AI to Detect & Autofix Bad Code
                  </p>
                </div>
                <hr />
                <div className="flex justify-evenly pt-3">
                  <div className="flex flex-col justify-center items-center">
                    <p style={{ fontSize: "14px" }} className="font-bold p-0 m-0">
                      30+
                    </p>
                    <p className="text-sm p-0 m-0">Language Support</p>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <p style={{ fontSize: "14px" }} className="font-bold p-0 m-0">
                      10K+
                    </p>
                    <p className="text-sm p-0 m-0">Developers</p>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <p style={{ fontSize: "14px" }} className="font-bold p-0 m-0">
                      100K+
                    </p>
                    <p className="text-sm p-0 m-0">Hours Saved</p>
                  </div>
                </div>
              </div>
              <div className="absolute -right-6 -bottom-36 w-2/3 shadow-2xl bg-white rounded-2xl">
                <div className="px-5 py-3 flex justify-between items-center">
                  <div className="bg-lavender rounded-full h-14 w-14 flex items-center justify-center">
                    <img src="src\assets\clock-icon.svg" alt="" />
                  </div>
                  <div className="flex items-center flex-col">
                    <p
                      style={{ color: "#0049C6", fontSize: "14px" }}
                      className="p-0 m-0 font-bold flex items-center gap-1"
                    >
                      
                      <FaArrowUpLong /> <span>14%</span>
                    </p>
                    <p style={{ color: "#171717" }} className=" text-xs p-1 m-0">
                      This Week
                    </p>
                  </div>
                </div>
                <div className="px-5 pb-5 m-0 flex flex-col gap-2">
                  <p
                    style={{ fontSize: "14px", color: "#171717" }}
                    className="p-0 m-0 font-bold"
                  >
                    Issue Fixed
                  </p>
                  <h1 className="p-0 m-0">500K+</h1>
                </div>
                <div></div>
              </div>
            </div>
          </div>
  )
}

export default LeftSection
