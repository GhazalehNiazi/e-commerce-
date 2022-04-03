import "./components/styles/css/main.css";
import Register from "./components/register/Register";
import LandingPage from "./components/landingPage/LandingPage";
import MainShoppingPage from "./components/shopping/MainShoppingPage";

// sass --watch src/components/styles/sass:src/components/styles/css
function App() {
  return (
    <div className="">
      {/* <Register/>*/}
      {/*<LandingPage/> */}
      <MainShoppingPage/>
    </div>
  );
}

export default App;
