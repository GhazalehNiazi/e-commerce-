import "./components/styles/css/main.css";
import { useEffect } from "react";
import Register from "./components/register/Register";
import LandingPage from "./components/landingPage/LandingPage";
import MainShoppingPage from "./components/shopping/MainShoppingPage";
import Order from "./components/order/Order";
import Cart from "./components/cart/Cart";
import { Routes, Route, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionTypes } from "./redux/contacts/actionType";
import { desk } from "./components/data/items";
import { useSelector } from "react-redux";
// sass --watch src/components/styles/sass:src/components/styles/css
function App() {
  const dispatch = useDispatch();
  let selector = useSelector((state) => state);
  useEffect(() => {
    dispatch({ type: actionTypes.SET_PRODUCT, desk });
  }, [desk]);
  console.log(selector);

  return (
    <div className="">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="register" element={<Register />} />
        <Route path="shopping" element={<MainShoppingPage />} />
        <Route path="order/:productId" element={<Order />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
