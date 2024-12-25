import React from "react";
import LeftSection from "../Components/RepositoryComponent/leftSectionComponent/LeftSection";
import RightSection from "../Components/RepositoryComponent/RightSectionComponents/RightSection";
const RepositoryScreen = () => {
 
  return (
    <>
      <div className="flex flex-row Repo-main-container">
        {/* left section */}
      <LeftSection/>

        {/* Right Section */}
       <RightSection className=" overflow-auto"/>
      </div>
    </>
  );
};
export default RepositoryScreen;
