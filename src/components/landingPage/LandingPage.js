import React from "react";
import RightSide from "../UI/RightSide";
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";
function LandingPage() {
  return (
    <div className="landingpage">
      <Sidebar className="landingpage-sidebar" />
      <RightSide>
        <MainContent />
      </RightSide>
    </div>
  );
}

export default LandingPage;
