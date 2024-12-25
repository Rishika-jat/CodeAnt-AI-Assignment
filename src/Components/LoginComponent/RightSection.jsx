import React, { useState } from "react";
import { PiKeyBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import RepositoryScreen from "../../Pages/RepositoryScreen";
function RightSection() {
  const [selectedOption, setSelectedOption] = useState("SAAS");
  const navigate = useNavigate();
  const handleButtonClick = (option) => {
    setSelectedOption(option);
  };
  const handleLogIn = () => {
    navigate("/repositories");
  };
  return (
    <div
      style={{ width: "720px" , height:"100vh" }}
      className="bg-cream border-whiteGray border-solid flex items-center justify-center flex-col login-right-main-sec "
    >
      {/* inner box */}

      <div className="bg-white border-solid border-whiteGray rounded-lg flex flex-col items-center w-11/12">
        <div className="flex gap-3 pt-4">
          <img
            src="src/assets/logo.svg"
            alt="logo"
            className="object-contain"
          />
          <p className="font-inter text-2xl">CodeAnt AI</p>
        </div>
        <div className="w-full items-center justify-center flex flex-col">
          <h1 style={{ fontSize: "32px" }} className="font-semibold">
            Welcome to CodeAnt AI
          </h1>
          <div className="flex border-solid border-gray2 border-x-0 border-t-0 w-full justify-center pb-5">
            <button
              onClick={() => handleButtonClick("SAAS")}
              className={`${
                selectedOption === "SAAS"
                  ? "bg-custumBlue text-white  border-none relative left-2"
                  : "bg-white text-custumBrown border-gray  border-solid"
              } px-28 p-3  flex justify-center items-center gap-2 rounded-lg text-xl font-semibold `}
            >
              SAAS
            </button>
            <button
              onClick={() => handleButtonClick("Self Hosted")}
              className={`${
                selectedOption === "Self Hosted"
                  ? "bg-custumBlue text-white border-none relative right-2"
                  : "bg-white text-custumBrown border-gray border-solid "
              } px-28 p-3 flex justify-center items-center gap-2  rounded-lg text-xl font-semibold`}
            >
              Self Hosted
            </button>
          </div>
          <hr />
          <div className="flex flex-col gap-4" style={{ minHeight: "320px" }}>
            {selectedOption === "Self Hosted" ? (
              <>
                <button
                  className=" px-24 py-4 bg-white text-base font-semibold border-gray2 border-solid p-3 flex justify-center items-center gap-2 rounded-lg"
                  onClick={handleLogIn}
                >
                  <img src="src/assets/gitlab.svg" alt="github" />
                  <span className="text-base">Sign in with GitLab</span>
                </button>
                <button className="px-24 py-4 bg-white text-base font-semibold border-gray2 border-solid p-3 flex justify-center items-center gap-2 rounded-lg" onClick={handleLogIn}>
                  <PiKeyBold className="text-2xl" />
                  <span className="text-base">Sign in with SSO</span>
                </button>
                <div className="flex-grow"></div>
                {/* Adds empty space to maintain height */}
              </>
            ) : (
              <>
                <button className="px-24 py-4 bg-white text-base font-semibold border-gray2 border-solid p-3 flex justify-center items-center gap-2 rounded-lg" onClick={handleLogIn}>
                  <img src="src/assets/github.svg" alt="github" />
                  <span className="text-base">Sign in with Github</span>
                </button>
                <button className="px-24 py-4 bg-white text-base font-semibold border-gray2 border-solid p-3 flex justify-center items-center gap-2 rounded-lg" onClick={handleLogIn}>
                  <img src="src/assets/bitbucket.svg" alt="bitbucket" />
                  <span className="text-base">Sign in with Bitbucket</span>
                </button>
                <button className="px-24 py-4 bg-white text-base font-semibold border-gray2 border-solid p-3 flex justify-center items-center gap-2 rounded-lg" onClick={handleLogIn}>
                  <img src="src/assets/azure.svg" alt="azure" />
                  <span className="text-base">Sign in with Azure Devops</span>
                </button>
                <button className="px-24 py-4 bg-white text-base font-semibold border-gray2 border-solid p-3 flex justify-center items-center gap-2 rounded-lg" onClick={handleLogIn}>
                  <img src="src/assets/gitlab.svg" alt="gitlab" />
                  <span className="text-base">Sign in with GitLab</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      <p style={{fontSize:"14px"}}>By signing up you agree to the <b>Privacy Policy.</b></p>
    </div>
  );
}

export default RightSection;
