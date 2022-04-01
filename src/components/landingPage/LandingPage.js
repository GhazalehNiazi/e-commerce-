import React from "react";
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";
function LandingPage() {
  return (
    <div className="landingpage">
    <Sidebar className="landingpage-sidebar"/>
    <MainContent className="landingpage-main"/>
   { /*<div className="landingpage-cart">cart</div>*/}
    
    </div>
  );
}

export default LandingPage;
