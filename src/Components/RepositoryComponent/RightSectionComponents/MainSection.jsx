import React from "react";
import { GoDatabase } from "react-icons/go";
import data from "../../../Data/repo";
function MainSection() {
  return (
    <div className="">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-col gap-0 border-solid border-whiteGray border-x-0 border-b-0 px-7 pb-2 hover:bg-HoverGray repo-right-main-container"
        >
          <div className="flex gap-2 items-center m-0 p-0">
            <p className="text-xl font-medium m-0 pb-4 pt-5">{item.name}</p>
            <button
              style={{
                fontSize: "14px",
                border: "1px solid #B2DDFF",
                background: "#EFF8FF",
              }}
              className="p-0 m-0 text-darkblue rounded-2xl px-3 py-1"
            >
              {item.visibility}
            </button>
          </div>
          <div className="flex gap-10 m-0 p-0">
            <p className="flex gap-2 m-0 p-0">
              {item.language}
              <span className="text-custumBlue relative bottom-3 text-3xl m-0 p-0">
                •
              </span>
            </p>
            <p className="flex gap-2 m-0 p-0">
              <GoDatabase /> <span>{item.size}</span>
            </p>
            <p className="flex m-0 p-0">{item.updated}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MainSection;
