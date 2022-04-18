import "./components/styles/css/main.css";
import Register from "./components/register/Register";
import LandingPage from "./components/landingPage/LandingPage";
import MainShoppingPage from "./components/shopping/MainShoppingPage";
import Order from "./components/order/Order";
import Cart from "./components/cart/Cart";
import { Routes, Route, Link } from "react-router-dom";

// sass --watch src/components/styles/sass:src/components/styles/css
function App() {
  return (
    <div className="">
    <Routes>
    <Route path='/' element={<LandingPage/>}/>
    <Route path='register' element={<Register/>}/>
    <Route path='shopping' element={<MainShoppingPage/>}/>
    <Route path='order' element={<Order/>}/>
    <Route path='cart' element={<Cart/>}/>
    </Routes>
    </div>
  );
}

export default App;
