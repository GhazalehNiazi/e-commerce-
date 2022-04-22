import { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useDispatch , useSelector} from "react-redux";

import Register from "./components/register/Register";
import LandingPage from "./components/landingPage/LandingPage";
import MainShoppingPage from "./components/shopping/MainShoppingPage";
import Order from "./components/order/Order";
import Cart from "./components/cart/Cart";

import { actionTypes } from "./redux/contacts/actionType";
import { desk } from "./components/data/items";
import { sofa } from "./components/data/items";

import "./components/styles/css/main.css";
// sass --watch src/components/styles/sass:src/components/styles/css

function App() {
  const dispatch = useDispatch();
  let selector = useSelector((state) => state);

  useEffect(() => {
    dispatch({ type: actionTypes.SET_PRODUCT, desk });
    dispatch({type:actionTypes.SET_PRODUCT , sofa}) //its overwriting the upper line 
  }, [desk]);

  useEffect(()=>{
    dispatch({type: actionTypes.ADD_PRODUCT, desk})
  },[])
  console.log(selector); // cart and products are being saved in the allProducts // should be allProducts and cart

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
